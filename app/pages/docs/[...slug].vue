<script setup lang="ts">
import { kebabCase } from 'scule'
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageBreadcrumb, mapContentNavigation } from '#ui-pro/utils'

// 设置页面元信息
definePageMeta({
  heroBackground: 'opacity-30',
  key: 'docs'
})

// 注入全局导航数据，若未提供则默认为空数组
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))

// 获取当前路由对象和 Nuxt 应用实例
const route = useRoute()
const nuxtApp = useNuxtApp()

// 计算属性 path 去除末尾斜杠
const path = computed(() => route.path.replace(/\/$/, ''))

// 根据当前路径构造子路径，调用 navPageFromPath 查找对应的侧边栏导航项
const asideNavigation = computed(() => {
  const path = ['/docs', route.params.slug?.[0]].filter(Boolean).join('/')

  return navPageFromPath(path, navigation.value)?.children || []
})

// console.dir(route.params.slug)
// 获取头部链接，并提取 /docs 下的子链接作为左侧锚点
const { headerLinks } = useHeaderLinks()
const links = computed(() => headerLinks.value.find(link => link.to === ('/docs/' + route.params.slug[0]))?.children ?? [])

// console.dir(headerLinks.value)
// console.dir(links.value)

// 模拟页面渲染完成后的异步操作（如动画或 DOM 更新）
function paintResponse() {
  if (import.meta.server) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    setTimeout(resolve, 100)
    requestAnimationFrame(() => setTimeout(resolve, 0))
  })
}

// console.log('缓存是否存在:', nuxtApp.static[kebabCase(path.value)] !== undefined)
// const testDoc1 = await queryCollection('docs').path('/docs/content/getting-started').first()
// console.log('测试查询结果:', testDoc1)
// const testDoc2 = await queryCollection('docs').all()
// console.log('测试查询结果:', testDoc2)
const [{ data: page, status, error }, { data: surround }] = await Promise.all([
  // 第一个请求：获取主页面内容，首先尝试从 nuxtApp.static 获取缓存，如果缓存不存在（??），执行后备查询
  useAsyncData(kebabCase(path.value), () => paintResponse().then(() => nuxtApp.static[kebabCase(path.value)] ?? queryCollection('docs').path(path.value).first()), {
    watch: [path]
  }),
  // 第二个请求：获取相关内容
  useAsyncData(`${kebabCase(path.value)}-surround`, () => paintResponse().then(() => nuxtApp.static[`${kebabCase(path.value)}-surround`] ?? queryCollectionItemSurroundings('docs', path.value, {
    fields: ['description']
  })), { watch: [path] })
])

// console.log(path.value)
// console.dir(page.value)
// console.log(status.value)

if (status.value === 'error') {
  console.error('加载失败:', error.value)
} else if (status.value === 'pending') {
  console.log('加载中...')
}

// 监听状态变化，触发页面加载开始/结束事件钩子
watch(status, (status) => {
  if (status === 'pending') {
    nuxtApp.hooks.callHook('page:loading:start')
  } else if (status === 'success' || status === 'error') {
    nuxtApp.hooks.callHook('page:loading:end')
  }
})

// 页面数据为空时抛出 404 错误
watch(page, (page) => {
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
}, { immediate: true })

// 构建面包屑导航
const breadcrumb = computed(() => {
  const links = mapContentNavigation(findPageBreadcrumb(navigation.value, page.value)).map(link => ({
    label: link.label,
    to: link.to
  }))

  // console.dir(links)

  if (path.value.startsWith('/docs/nuxt/bridge') || path.value.startsWith('/docs/nuxt/migration')) {
    links.splice(1, 0, {
      label: 'Upgrade Guide',
      to: '/docs/nuxt/getting-started/upgrade'
    })
  }

  return links
})

// 动态计算标题模板和 GitHub 编辑链接
const titleTemplate = computed(() => findTitleTemplate(page, navigation))

const editLink = computed(() => `https://github.com/nuxt/nuxt/edit/main/docs/${page?.value?.stem?.split('/').slice(1).join('/')}.${page?.value?.extension}`)

// 社区支持链接列表，包含赞助、学习和认证链接
const communityLinks = [{
  icon: 'i-lucide-heart',
  label: 'Become a Sponsor',
  to: 'https://go.nuxt.com/sponsor',
  target: '_blank'
}, {
  icon: 'i-lucide-chef-hat',
  label: 'Master Nuxt',
  to: 'https://masteringnuxt.com/nuxt3',
  target: '_blank'
}, {
  icon: 'i-lucide-award',
  label: 'Nuxt Certification',
  to: 'https://certification.nuxt.com',
  target: '_blank'
}]

// 设置 SEO 元标签和 Open Graph 图像
const title = page.value.seo?.title || page.value.title

useSeoMeta({
  titleTemplate,
  title
})

if (import.meta.server) {
  const description = page.value.seo?.description || page.value.description
  useSeoMeta({
    description,
    ogDescription: description,
    ogTitle: titleTemplate.value?.includes('%s') ? titleTemplate.value.replace('%s', title) : title
  })

  defineOgImageComponent('Docs', {
    headline: breadcrumb.value.length ? breadcrumb.value.map(link => link.label).join(' > ') : '',
    title,
    description
  })
}
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <template #left>
        <UPageAside>
          <!--          <UPageAnchors :links="links" /> -->
          <!--          <USeparator type="dashed" class="my-6" /> -->
          <UContentNavigation
            :navigation="asideNavigation"
            default-open
            trailing-icon="i-lucide-chevron-right"
            :ui="{ linkTrailingIcon: 'group-data-[state=open]:rotate-90' }"
            highlight
          />
        </UPageAside>
      </template>
      <UPage>
        <UPageHeader v-bind="page" :links="page.links?.map(link => ({ ...link, size: 'md' }))">
          <template #headline>
            <UBreadcrumb :items="breadcrumb" />
          </template>
        </UPageHeader>

        <UPageBody>
          <ContentRenderer v-if="page.body" :value="page" />
          <div>
            <USeparator class="my-10">
              <div class="flex items-center gap-2 text-sm dark:text-gray-400">
                <!--                <UButton size="sm" variant="link" color="neutral" to="https://github.com/nuxt/nuxt/issues/new/choose" target="_blank"> -->
                <!--                  Report an issue -->
                <!--                </UButton> -->
                <!--                or -->
                <!--                <UButton size="sm" variant="link" color="neutral" :to="editLink" target="_blank"> -->
                <!--                  Edit this page on GitHub -->
                <!--                </UButton> -->
                老母鸡
              </div>
            </USeparator>
            <UContentSurround :surround="surround" />
          </div>
        </UPageBody>

        <template v-if="page?.body?.toc?.links?.length" #right>
          <UContentToc title="目录" :links="page.body?.toc?.links" highlight class="lg:backdrop-blur-none">
            <!--            <template #bottom> -->
            <!--              <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }"> -->
            <!--                <USeparator v-if="page.body?.toc?.links?.length" type="dashed" /> -->
            <!--                <UPageLinks title="Community" :links="communityLinks" /> -->
            <!--                <USeparator type="dashed" /> -->
            <!--                <SocialLinks /> -->
            <!--                <Ads /> -->
            <!--              </div> -->
            <!--            </template> -->
          </UContentToc>
        </template>
      </UPage>
    </UPage>
  </UContainer>
</template>

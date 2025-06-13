<script setup lang="ts">
import { kebabCase } from 'scule'
import type { PageLink } from '@nuxt/ui-pro'
import { findPageBreadcrumb, mapContentNavigation } from '@nuxt/ui-pro/utils/content'
import type { ContentNavigationItem } from '@nuxt/content'

// 获取当前路由对象
const route = useRoute()
// 从共享数据中获取 framework 和 module
const { framework, module } = useSharedData()

// 定义页面元信息，设置 heroBackground 的透明度
definePageMeta({
  heroBackground: 'opacity-30',
  key: 'ui'
})

// 计算属性 path 去除末尾斜杠
const path = computed(() => route.path.replace(/\/$/, ''))

// 使用异步数据加载当前页面的内容
const { data: page } = await useAsyncData(kebabCase(route.path), () => queryCollection('ui').path(route.path).first(), { watch: [path] })

if (!page.value) {
  // 如果页面内容不存在，则抛出 404 错误
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// 监听 page 数据的变化，更新 framework 和 module
watch(page, () => {
  if (page.value?.framework && page.value?.framework !== framework.value) {
    framework.value = page.value?.framework as string
  }
  if (page.value?.module && page.value?.module !== module.value) {
    module.value = page.value?.module as string
  }
}, { immediate: true })

// Nuxt Content 提供的内容导航查询工具，用于获取指定内容项的前后相邻项（如上一篇/下一篇文档）
const { data: surround } = await useAsyncData(`${kebabCase(route.path)}-surround`, () => {
  return queryCollectionItemSurroundings('ui', route.path, {
    fields: ['description']
  }).orWhere(group => group.where('framework', '=', framework.value).where('framework', 'IS NULL'))
    .orWhere(group => group.where('module', '=', module.value).where('module', 'IS NULL'))
}, {
  watch: [framework, module]
})

// 查询 UI 导航数据
// const { data: uinavigation } = await useAsyncData('uinavigation', () => {
//   return queryCollectionNavigation('ui', ['framework', 'module'])
//     .orWhere(group => group.where('framework', '=', framework.value).where('framework', 'IS NULL'))
//     .orWhere(group => group.where('module', '=', module.value).where('module', 'IS NULL'))
// }, {
//   watch: [framework, module]
// })

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation-ui')

// 计算面包屑导航
const breadcrumb = computed(() => mapContentNavigation(findPageBreadcrumb(navigation?.value, page.value)).map(({ icon, ...link }) => link))

if (!import.meta.prerender) {
  // Redirect to the correct framework version if the page is not the current framework
  // 当 framework 发生变化时，重定向到正确的框架版本
  watch(framework, () => {
    if (page.value?.framework && page.value?.framework !== framework.value) {
      if (route.path.endsWith(`/${page.value?.framework}`)) {
        // 检查当前 URL 是否以页面指定的框架结尾（如 /ui/components/vue => /ui/components/nuxt）
        navigateTo(`${route.path.split('/').slice(0, -1).join('/')}/${framework.value}`)
      } else {
        navigateTo(`/ui/getting-started`)
      }
    }
  })

  // Redirect to the correct module version if the page is not the current module
  // 当 module 发生变化时，重定向到正确的模块版本
  watch(module, () => {
    // 如果页面有 module 配置，并且当前模块与页面指定的模块不一致
    if (page.value?.module && page.value?.module !== module.value) {
      // 页面模块是 'ui-pro' 且路径包含 '/pro'
      if (page.value?.module === 'ui-pro' && route.path.includes('/pro')) {
        // 移除路径中的 '/pro' 并跳转
        navigateTo(`${route.path.replace('/pro', '')}`)
        // 页面模块是 'ui' 且路径不包含 '/pro'
      } else if (page.value?.module === 'ui' && !route.path.includes('/pro')) {
        // 在路径中插入 '/pro' 并保留框架信息，然后跳转
        navigateTo(`${route.path.replace(`/${framework.value}`, '')}/pro/${framework.value}`)
      } else {
        navigateTo(`/ui/getting-started`)
      }
    }
  })
}

// 设置 SEO 元信息
const title = page.value?.navigation?.title ? page.value.navigation.title : page.value?.title
const prefix = page.value?.path.includes('components') || page.value?.path.includes('composables') ? 'Vue ' : ''
const suffix = page.value?.path.includes('components') ? 'Component ' : page.value?.path.includes('composables') ? 'Composable ' : ''
const description = page.value?.description

useSeoMeta({
  titleTemplate: `${prefix}%s ${suffix}- Nuxt UI ${page.value?.module === 'ui-pro' ? 'Pro' : ''} ${page.value?.framework === 'vue' ? ' for Vue' : ''}`,
  title,
  ogTitle: `${prefix}${title} ${suffix}- Nuxt UI ${page.value?.module === 'ui-pro' ? 'Pro' : ''} ${page.value?.framework === 'vue' ? ' for Vue' : ''}`,
  description,
  ogDescription: description
})

// 定义 Open Graph 图像组件
if (route.path.startsWith('/ui/components')) {
  defineOgImageComponent('OgImageComponent', {
    title: page.value.title,
    description: page.value.description,
    component: (route.params.slug as string[]).pop() as string,
    module: page.value.module
  })
} else {
  defineOgImageComponent('Docs', {
    title: page.value.title,
    description: page.value.description,
    headline: breadcrumb.value?.[breadcrumb.value.length - 1]?.label || 'Nuxt UI',
    framework: page.value?.framework,
    module: page.value.module
  })
}

// 社区链接
const communityLinks = computed(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/${page.value?.module === 'ui-pro' ? 'ui-pro' : 'ui'}/edit/v3/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: `https://github.com/nuxt/${page.value?.module === 'ui-pro' ? 'ui-pro' : 'ui'}`,
  target: '_blank'
}, module.value === 'ui-pro' && {
  icon: 'i-lucide-credit-card',
  label: 'Purchase a license',
  to: 'https://nuxt.lemonsqueezy.com/checkout/buy/057dacb2-87ba-4dc1-9256-59ee5b3bd394',
  target: '_blank'
}, module.value === 'ui-pro' && {
  icon: 'i-lucide-ticket-percent',
  label: 'Become an affiliate',
  to: 'https://nuxt.lemonsqueezy.com/affiliates',
  target: '_blank'
}, {
  icon: 'i-lucide-git-pull-request-arrow',
  label: 'Contribution',
  to: '/getting-started/contribution'
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}].filter(Boolean) as PageLink[])
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <template #left>
        <UPageAside>
          <template #top>
            <div class="flex flex-col gap-2 w-[calc(100%+1.25rem)] -mx-2.5">
              <FrameworkSelect />
              <ModuleSelect />
            </div>
          </template>

          <UContentNavigation :navigation="navigation" highlight :ui="{ linkTrailingBadge: 'font-semibold uppercase' }">
            <template #link-title="{ link }">
              <span class="inline-flex items-center gap-0.5">
                {{ link.title }}

                <sup v-if="link.module === 'ui-pro'" class="text-[8px] font-medium text-primary">PRO</sup>
              </span>
            </template>
          </UContentNavigation>
        </UPageAside>
      </template>

      <UPage>
        <UPageHeader>
          <template #headline>
            <UBreadcrumb :items="breadcrumb" />
          </template>

          <template #title>
            {{ page.title }}<sup v-if="page.module === 'ui-pro'" class="ml-1 text-xs align-super font-medium text-primary">PRO</sup>
          </template>

          <template #description>
            <MDC v-if="page.description" :value="page.description" unwrap="p" :cache-key="`${kebabCase(route.path)}-description`" />
          </template>

          <template v-if="page.links?.length" #links>
            <UButton
              v-for="link in page.links"
              :key="link.label"
              color="neutral"
              variant="outline"
              :target="link.to.startsWith('http') ? '_blank' : undefined"
              v-bind="link"
            >
              <template v-if="link.avatar" #leading>
                <UAvatar v-bind="link.avatar" size="2xs" :alt="`${link.label} avatar`" />
              </template>
            </UButton>
          </template>
        </UPageHeader>

        <UPageBody>
          <ContentRenderer v-if="page.body" :value="page" />

          <USeparator v-if="surround?.filter(Boolean).length" />

          <UContentSurround :surround="(surround as any)" />
        </UPageBody>

        <template v-if="page?.body?.toc?.links?.length" #right>
          <UContentToc :links="page.body.toc.links" class="z-[2]">
            <!--              <template #bottom> -->
            <!--                <USeparator v-if="page.body?.toc?.links?.length" type="dashed" /> -->

            <!--                <UPageLinks title="Community" :links="communityLinks" /> -->

            <!--                <USeparator type="dashed" /> -->

            <!--                          <AdsCarbon /> -->
            <!--              </template> -->
          </UContentToc>
        </template>
      </UPage>
    </UPage>
  </UContainer>
</template>

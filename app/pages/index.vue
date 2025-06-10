<script setup lang="ts">
import { joinURL } from 'ufo'
import type { Module, Sponsor } from '~/types'

// 设置页面元信息
definePageMeta({
  heroBackground: '-z-10' // 控制 Hero 区域背景层级
})

// 并行加载三组数据：
const [{ data: page }] = await Promise.all([
  // key: 'index' 实现请求去重，同一页面多次调用仅执行一次查询
  // queryCollection 是 Nuxt Content V3 引入的 数据查询构建器，专为高效检索内容集合（Collections）设计，这里查询 index 集合的首条数据
  useAsyncData('index', () => queryCollection('index').first()) // 首页内容数
])

// 控制视频模态框显示状态
const videoModalOpen = ref(false)

// 获取站点配置
const site = useSiteConfig()
const title = 'LaoMuJi: 老母鸡官网'

// 设置 SEO 元信息
useSeoMeta({
  title,
  titleTemplate: '%s'
})

// 如果是服务端渲染，则设置更多 SEO 描述和图片信息
if (import.meta.server) {
  const description = 'Create high-quality web applications with Nuxt, the open source framework that makes full-stack development with Vue.js intuitive.'
  useSeoMeta({
    ogTitle: title,
    description: description,
    ogDescription: description,
    ogImage: joinURL(site.url, '/new-social.jpg'),
    twitterImage: joinURL(site.url, '/new-social.jpg')
  })
}

// 将页面 tabs 数据转换为 UTabs 所需格式
const tabs = computed(() => page.value?.hero.tabs.map(tab => ({
  label: tab.title,
  icon: tab.icon,
  content: tab.content
})))

// 判断是否为移动端
const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth < 768
})
</script>

<template>
  <div v-if="page">
    <UPageHero
      class="relative"
      orientation="horizontal"
      :ui="{
        container: '!pb-20 py-24 sm:py-32 lg:py-40',
        title: 'text-5xl sm:text-7xl',
        wrapper: 'lg:min-h-[540px]'
      }"
    >
      <template #headline>
        <NuxtLink :to="page.hero.cta.to">
          <UBadge variant="subtle" size="lg" class="px-3 relative rounded-full font-semibold dark:hover:bg-primary-400/15 dark:hover:ring-primary-700">
            {{ page?.hero.cta.label }}
            <UIcon
              v-if="page?.hero.cta.icon"
              :name="page?.hero.cta.icon"
              class="size-4 pointer-events-none"
            />
          </UBadge>
        </NuxtLink>
      </template>

      <template #title>
        脚手架<br><span class="text-primary">Admin 系统</span>
      </template>

      <template #description>
        <LazyMDC :value="page?.hero.description" unwrap="p" cache-key="index-hero-description" hydrate-never />
      </template>

      <template #links>
        <div class="flex flex-col gap-4">
          <div class="flex items-center flex-wrap gap-2">
            <UButton to="/docs/nuxt/getting-started/installation" size="xl">
              入 门
            </UButton>
            <UButton size="xl" color="neutral" variant="subtle" trailing-icon="i-lucide-play-circle" @click="videoModalOpen = true">
              Nuxt 100 秒速览
            </UButton>
          </div>
          <UInputCopy value="npm create nuxt@latest" label="npm create nuxt@latest" size="xl" />
        </div>

        <UModal v-model:open="videoModalOpen" :ui="{ content: 'sm:max-w-4xl lg:max-w-5xl aspect-[16/9]' }">
          <template #content>
            <div class="p-3 h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/dCxSsr5xuL8"
                title="Nuxt in 100 Seconds by Fireship"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
          </template>
        </UModal>
      </template>

      <UPageCard
        class="overflow-auto lg:absolute [@media(min-width:2400px)]:relative lg:-mt-16 [@media(min-width:2400px)]:mt-8 right-0 [@media(min-width:2400px)]:right-auto w-screen lg:w-[calc(50%-2rem)] [@media(min-width:2400px)]:w-full max-w-[800px] [@media(min-width:2400px)]:mx-auto rounded-none lg:rounded-l-[calc(var(--ui-radius)*4)] [@media(min-width:2400px)]:rounded-2xl -mx-4 sm:-mx-6 lg:mx-0"
        variant="subtle"
        :ui="{ container: 'sm:pt-4.5 lg:pr-0 [@media(min-width:2400px)]:px-6 w-full' }"
      >
        <UTabs
          :items="tabs"
          :unmount-on-hide="false"
          :ui="{
            list: 'px-0 bg-transparent lg:pr-4 overflow-x-auto',
            trigger: 'group data-[state=active]:text-highlighted',
            indicator: 'bg-default',
            leadingIcon: 'group-data-[state=active]:text-primary size-4 hidden sm:inline-flex',
            content: 'lg:h-[450px] bg-default [@media(min-width:2400px)]:border-e [@media(min-width:2400px)]:border-default [@media(min-width:2400px)]:rounded-l-[calc(var(--ui-radius)*1.5)] transition-opacity duration-500 data-[state=inactive]:opacity-0 opacity-100'
          }"
        >
          <template #content="{ item, index }">
            <LazyMDC :value="item.content" :cache-key="`index-hero-tab-${index}`" hydrate-on-idle />
          </template>
        </UTabs>
      </UPageCard>
    </UPageHero>
    <UPageSection :ui="{ container: '!pt-0' }">
      <UPageLogos :marquee="isMobile" :title="page?.logos.title" :ui="{ title: 'text-left text-muted font-medium text-lg', logos: 'mt-4' }">
        <Motion
          v-for="(company, index) in page?.logos.companies"
          :key="company.alt"
          as-child
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <div class="opacity-0">
            <UColorModeImage
              :key="company.alt"
              :light="company.light"
              :dark="company.dark"
              :alt="`${company.alt} logo`"
              loading="lazy"
              :height="company.height"
              :width="company.width"
              class="h-6 shrink-0 max-w-[140px]"
            />
          </div>
        </Motion>
      </UPageLogos>
    </UPageSection>
  </div>
</template>

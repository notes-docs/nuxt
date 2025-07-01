<script setup lang="ts">
import { useHead } from '#imports'

//  @nuxtjs/color-mode
const colorMode = useColorMode()
const appConfig = useAppConfig()
const { searchGroups, searchLinks, searchTerm } = useNavigation()

// 主题颜色切换
const color = computed(() => colorMode.value === 'dark' ? '#020420' : 'white')

const { data: navigation_ui } = await useAsyncData('navigation-ui', () => queryCollectionNavigation('ui', ['framework', 'module']))

const { mappedNavigation, filteredNavigation } = useContentNavigation(navigation_ui)

// 使用 Promise.all 并行执行两个异步数据请求
const [{ data: navigation }, { data: files }] = await Promise.all([
  // 第一个请求：获取导航数据
  useAsyncData('navigation', () => {
    return Promise.all([
      // 查询 'docs' 集合的导航信息，指定字段为 ['titleTemplate']
      queryCollectionNavigation('docs', ['titleTemplate']),
      // 查询 'blog' 集合的导航信息
      queryCollectionNavigation('blog')
    ])
  }, {
    // 数据转换：将二维数组展平为一维数组
    transform: data => data.flat()
  }),
  // 第二个请求：获取搜索相关的数据（仅在客户端执行）
  useLazyAsyncData('search', () => {
    return Promise.all([
      // 查询 'docs' 集合的搜索段落信息
      queryCollectionSearchSections('docs'),
      // 查询 'blog' 集合的搜索段落信息
      queryCollectionSearchSections('blog'),
      queryCollectionSearchSections('ui')
    ])
  }, {
    server: false, // 禁止在服务器端执行
    // 数据转换：将二维数组展平为一维数组
    transform: data => data.flat()
  })
])

// TODO 需要合并 navigation 和 filteredNavigation

provide('navigation', navigation!)
provide('navigation-ui', mappedNavigation!)

useHead({
  // 动态设置页面标题
  titleTemplate: title => title ? `${title} · laomuji` : 'Blog: laomuji',
  // 设置主题颜色 meta 标签
  meta: [
    { name: 'theme-color', content: color }
  ]
})

const route = useRoute()
const heroBackgroundClass = computed(() => route.meta?.heroBackground || '')

const { isLoading } = useLoadingIndicator()
const appear = ref(false) // 控制是否开始显示动画
const appeared = ref(false) // 控制是否完成动画

// 在组件挂载后执行动画逻辑
onMounted(() => {
  setTimeout(() => {
    // 第一帧：触发 appear 动画
    appear.value = true
    // 第二帧：1秒后触发 appeared 动画，表示动画完成
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})
</script>

<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtLoadingIndicator color="var(--ui-primary)" />
<!--    <UBanner-->
<!--      id="nuxt-tips-michael"-->
<!--      title="Learn Nuxt with a Collection of 100+ Tips!"-->
<!--      icon="i-lucide-wand"-->
<!--      to="https://michaelnthiessen.com/nuxt-tips-collection?aff=J0Emk"-->
<!--      close-->
<!--      :actions="[-->
<!--        {-->
<!--          label: 'View Tips',-->
<!--          color: 'neutral',-->
<!--          variant: 'outline',-->
<!--          trailingIcon: 'i-lucide-arrow-right',-->
<!--          to: 'https://michaelnthiessen.com/nuxt-tips-collection?aff=J0Emk'-->
<!--        }-->
<!--      ]"-->
<!--    />-->
    <template v-if="!route.path.startsWith('/examples')">
      <AppHeader />
    </template>

    <UMain class="relative">
      <HeroBackground
        class="absolute w-full -top-px transition-all text-primary shrink-0 -z-10"
        :class="[
          isLoading ? 'animate-pulse' : (appear ? heroBackgroundClass : 'opacity-0'),
          appeared ? 'duration-[400ms]' : 'duration-1000'
        ]"
      />

      <NuxtPage />
    </UMain>
    <template v-if="!route.path.startsWith('/examples')">
      <AppFooter />
    </template>
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :files="files"
        :navigation="navigation"
        :groups="searchGroups"
        :links="searchLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>

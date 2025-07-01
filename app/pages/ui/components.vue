<script setup lang="ts">
import { joinURL } from 'ufo'
import { useWindowScroll } from '@vueuse/core'

const { url } = useSiteConfig()

const title = 'Vue Components'
const description = '探索 101+ 个使用 Tailwind CSS 和 Reka UI 构建的 Vue 和 Nuxt 可定制 UI 组件。'

useSeoMeta({
  titleTemplate: '%s - Nuxt UI',
  title,
  description,
  ogTitle: `${title} - Nuxt UI`,
  ogDescription: description,
  ogImage: joinURL(url, '/og-image.png')
})

const { data: components } = await useAsyncData('all-components', () => {
  return queryCollection('ui')
    .where('path', 'LIKE', '/ui/components/%')
    .where('extension', '=', 'md')
    .select('path', 'title', 'description', 'category', 'module')
    .all()
})

const componentsPerCategory = computed(() => {
  return components.value!.reduce((acc, component) => {
    acc[component.category!] = [...(acc[component.category!] || []), component]
    return acc
  }, {} as Record<string, any[]>)
})

const categories = [{
  id: 'element',
  title: 'Element',
  description: '核心 UI 构建块，如按钮、徽章、图标、头像以及其他基本界面元素。'
}, {
  id: 'form',
  title: 'Form',
  description: '交互式表单元素，包括输入框、选择框、复选框、单选按钮和高级表单验证组件。'
}, {
  id: 'data',
  title: 'Data',
  description: '用于显示和管理数据的组件，包括表格、列表、卡片、数据网格和可视化元素。'
}, {
  id: 'navigation',
  title: 'Navigation',
  description: '用于用户导航和路径指引的组件，包括菜单、面包屑、分页和导航栏。'
}, {
  id: 'overlay',
  title: 'Overlay',
  description: '浮动 UI 元素，如模态框、对话框、工具提示、气泡框以及其他覆盖主要内容的组件。'
}, {
  id: 'layout',
  title: 'Layout',
  description: '用于组织内容的结构化组件，包括容器、网格、分割线和响应式布局系统。'
}]

const { y } = useWindowScroll()
onMounted(() => {
  const stickyElements = document.querySelectorAll('[data-track-sticky]') as NodeListOf<HTMLElement>
  watch(y, () => {
    stickyElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const topComputed = Number.parseInt(window.getComputedStyle(el).top || '0', 10)
      if (rect.top <= topComputed) {
        el.dataset.stuck = ''
      } else {
        delete el.dataset.stuck
      }
    })
  }, { immediate: true })
})
</script>

<template>
  <div>
    <UPageHero
      description="使用 Nuxt UI 和 Nuxt UI Pro 组件更快地构建您的 Vue 或 Nuxt 应用。由 Tailwind CSS 和 Reka UI 提供支持，交付响应式和可定制的组件。"
      class="relative"
      orientation="vertical"
      :ui="{ title: 'text-balance', container: 'relative' }"
    >
      <template #top>
        <div class="absolute z-[-1] rounded-full bg-primary blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      </template>

      <template #headline>
        <UButton
          to="/docs/tailwindcss/getting-started/installation"
          label="Made with Tailwind CSS v4"
          size="md"
          variant="subtle"
          color="neutral"
          icon="i-logos-tailwindcss-icon"
          class="rounded-full"
        />
      </template>
      <template #title>
        使用 <span class="text-primary">{{ components!.length }}+</span> 强大的组件构建漂亮的 UI。
      </template>

      <template #links>
        <UButton
          to="/ui/getting-started/installation/vue"
          label="Start with Vue"
          icon="i-logos-vue"
          color="neutral"
          variant="outline"
          size="xl"
        />
        <UButton
          to="/ui/getting-started/installation/nuxt"
          label="Start with Nuxt"
          icon="i-logos-nuxt-icon"
          color="neutral"
          variant="outline"
          size="xl"
        />
      </template>

      <StarsBg />

      <div aria-hidden="true" class="hidden lg:block absolute z-[-1] border-x border-default inset-0 mx-4 sm:mx-6 lg:mx-8" />
    </UPageHero>

    <div v-for="category in categories" :key="category.id">
      <div data-track-sticky class="group mb-4 sm:mb-6 lg:mb-8 sticky top-[calc(var(--ui-header-height)-1px)] bg-default/75 backdrop-blur z-[1]">
        <div class="relative border-y border-default py-4 sm:not-group-[[data-stuck]]:py-6 lg:not-group-[[data-stuck]]:py-8 transition-all duration-300">
          <UContainer>
            <h2 class="relative text-pretty font-bold text-highlighted text-base sm:not-group-[[data-stuck]]:text-xl lg:not-group-[[data-stuck]]:text-2xl transition-all duration-300 ">
              <a :href="`#${category.id}`" class="group lg:not-group-[[data-stuck]]:ps-2 lg:not-group-[[data-stuck]]:-ms-2">
                <span class="absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:not-group-[[data-stuck]]:flex text-muted transition">
                  <UIcon name="i-lucide-hash" class="size-4 shrink-0" />
                </span>
                {{ category.title }}
              </a>
            </h2>
            <p class="text-pretty text-muted text-sm sm:not-group-[[data-stuck]]:text-base lg:not-group-[[data-stuck]]:text-lg mt-1 sm:not-group-[[data-stuck]]:mt-2 line-clamp-1 transition-all duration-300">
              {{ category.description }}
            </p>
          </UContainer>
        </div>
      </div>
      <UContainer>
        <UPageGrid :id="category.id" class="xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pb-24 scroll-mt-[calc(97px+var(--ui-header-height))] sm:scroll-mt-[calc(133px+var(--ui-header-height))] lg:scroll-mt-[calc(165px+var(--ui-header-height))]">
          <UPageCard
            v-for="(component, index) in componentsPerCategory[category.id]"
            :key="component.path"
            variant="naked"
            :title="component.title"
            :description="component.description"
            :to="component.path"
            :ui="{ wrapper: 'order-last', container: 'lg:flex' }"
            class="group"
          >
            <template #title>
              <div class="flex items-center gap-0.5">
                <span>{{ component.title }}</span>
                <sup v-if="component.module === 'ui-pro'" class="text-[8px] font-medium text-primary">PRO</sup>
              </div>
            </template>

            <div class="rounded-md border border-muted overflow-hidden aspect-[16/9]">
              <UColorModeImage
                :light="`${component.path.replace('/ui/components/', '/components/light/')}.png`"
                :dark="`${component.path.replace('/ui/components/', '/components/dark/')}.png`"
                class="group-hover:scale-105 transition-transform size-full"
                :loading="index >= 4 ? 'lazy' : 'eager'"
                width="640"
                height="360"
                :alt="`${component.name} preview`"
              />
            </div>
          </UPageCard>
        </UPageGrid>
      </UContainer>
    </div>
  </div>
</template>

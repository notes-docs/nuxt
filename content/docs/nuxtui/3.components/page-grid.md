---
title: PageGrid
description: 一个响应式网格系统，用于以灵活的布局显示内容。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageGrid.vue
---

## 用法

`PageGrid` 组件提供了一个响应式网格布局，用于显示 **PageCard** 组件或任何其他元素，根据屏幕尺寸自动调整为 1 到 3 列。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const cards = ref([
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons'
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts'
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode'
  }
])
</script>

<template>
  <UPageGrid>
    <UPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    />
  </UPageGrid>
</template>
```
::

你也可以使用 `col-span-*` 和 `row-span-*` 工具类，以 Bento 风格的布局显示卡片列表。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const cards = ref([
  {
    title: 'Theme',
    description: 'Learn how to customize Nuxt UI components using Tailwind CSS v4.',
    icon: 'i-lucide-swatch-book',
    to: '/getting-started/theme',
    class: 'lg:col-span-2',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/color-palette',
      width: 363,
      height: 152
    },
    orientation: 'horizontal' as const
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts',
    variant: 'soft' as const
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode',
    variant: 'soft' as const
  },
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/icon-library',
      width: 362,
      height: 184
    },
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const,
    reverse: true
  }
])
</script>

<template>
  <UPageGrid>
    <UPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    >
      <UColorModeImage
        v-if="card.image"
        :light="`${card.image.path}-light.svg`"
        :dark="`${card.image.path}-dark.svg`"
        :width="card.image.width"
        :height="card.image.height"
        :alt="card.title"
        loading="lazy"
        class="w-full"
      />
    </UPageCard>
  </UPageGrid>
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

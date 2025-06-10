---
title: PageSection
description: 页面响应式区块。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageSection.vue
---

## 用法

`PageSection` 组件将您的内容包裹在 **Container** 中，同时保持全宽的灵活性，便于添加背景颜色、图片或图案。它提供了一种灵活的方式来展示内容，并在默认插槽中包含一个插图。

TODO

在 `PageHero` 组件之后使用：

```vue{4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### 标题

使用 `title` prop 设置区块的标题。

::code-preview

TODO

#code
```vue
<template>
  <UPageSection title="精美的 Vue UI 组件" />
</template>
```
::

### 描述

使用 `description` prop 设置区块的描述。

::code-preview

TODO

#code
```vue
<template>
  <UPageSection
    title="精美的 Vue UI 组件"
    description="Nuxt UI 提供了一套全面的组件和工具，帮助您使用 Vue 和 Nuxt 构建精美且易于访问的 Web 应用程序。"
  />
</template>
```
::


### 标题

使用 `headline` prop 设置区块的标题。

::code-preview

TODO

#code
```vue
<template>
  <UPageSection
    title="精美的 Vue UI 组件"
    description="Nuxt UI 提供了一套全面的组件和工具，帮助您构建精美且易于访问的 Web 应用程序。"
    headline="特性"
  />
</template>
```
::

### 图标

使用 `icon` prop 设置区块的图标。

::code-preview

TODO

#code
```vue
<template>
  <UPageSection
    title="精美的 Vue UI 组件"
    description="Nuxt UI 提供了一套全面的组件和工具，帮助您构建精美且易于访问的 Web 应用程序。"
    icon="i-lucide-rocket"
  />
</template>
```
::

### 特性

使用 `features` prop 以对象数组的形式在描述下方显示 **PageFeature** 列表，对象包含以下属性：

* `title?`: `string`
* `description?`: `string`
* `icon?`: `string`
* `orientation?`: `'horizontal' | 'vertical'`

您可以传递 **Link** 组件的任何属性，例如 `to`、`target` 等。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const features = ref([
  {
    title: '图标',
    description: 'Nuxt UI 集成 Nuxt Icon，可访问来自 Iconify 的 200,000 多个图标。',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons'
  },
  {
    title: '字体',
    description: 'Nuxt UI 集成 Nuxt Fonts，提供即插即用的字体优化。',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts'
  },
  {
    title: '颜色模式',
    description: 'Nuxt UI 集成 Nuxt Color Mode，可在亮色和暗色模式之间切换。',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode'
  }
])
</script>

<template>
  <UPageSection
    title="精美的 Vue UI 组件"
    description="Nuxt UI 提供了一套全面的组件和工具，帮助您构建精美且易于访问的 Web 应用程序。"
    :features="features"
  />
</template>
```
::

### 链接

使用 `links` prop 在描述下方显示 **Button** 列表。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: '开始使用',
    to: '/getting-started',
    icon: 'i-lucide-square-play',
    color: 'neutral'
  },
  {
    label: '探索组件',
    to: '/components/app',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="精美的 Vue UI 组件"
    description="Nuxt UI 提供了一套全面的组件和工具，帮助您构建精美且易于访问的 Web 应用程序。"
    :links="links"
  />
</template>
```
::

### 方向

使用 `orientation` prop 更改默认插槽的方向。默认为 `vertical`。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const features = ref([
  {
    title: '图标',
    description: 'Nuxt UI 集成 Nuxt Icon，可访问来自 Iconify 的 200,000 多个图标。',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons'
  },
  {
    title: '字体',
    description: 'Nuxt UI 集成 Nuxt Fonts，提供即插即用的字体优化。',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts'
  },
  {
    title: '颜色模式',
    description: 'Nuxt UI 集成 Nuxt Color Mode，可在亮色和暗色模式之间切换。',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode'
  }
])
const links = ref([
  {
    label: '探索组件',
    to: '/components/app',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="精美的 Vue UI 组件"
    description="Nuxt UI 提供了一套全面的组件和工具，帮助您构建精美且易于访问的 Web 应用程序。"
    icon="i-lucide-rocket"
    orientation="horizontal"
    :features="features"
    :links="links"
  >
    <img
      src="https://picsum.photos/704/1294"
      width="352"
      height="647"
      alt="插图"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>
```
::

### 反向

使用 `reverse` prop 反转默认插槽的方向。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const features = ref([
  {
    title: '图标',
    description: 'Nuxt UI 集成 Nuxt Icon，可访问来自 Iconify 的 200,000 多个图标。',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons'
  },
  {
    title: '字体',
    description: 'Nuxt UI 集成 Nuxt Fonts，提供即插即用的字体优化。',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts'
  },
  {
    title: '颜色模式',
    description: 'Nuxt UI 集成 Nuxt Color Mode，可在亮色和暗色模式之间切换。',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode'
  }
])
const links = ref([
  {
    label: '探索组件',
    to: '/components/app',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="精美的 Vue UI 组件"
    description="Nuxt UI 提供了一套全面的组件和工具，帮助您构建精美且易于访问的 Web 应用程序。"
    icon="i-lucide-rocket"
    orientation="horizontal"
    reverse
    :features="features"
    :links="links"
  >
    <img
      src="https://picsum.photos/704/1294"
      width="352"
      height="647"
      alt="插图"
      class="w-full rounded-lg"
    />
  </UPageSection>
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


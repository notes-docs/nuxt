---
title: PageHero
description: 一个响应式页面英雄组件。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageHero.vue
---

## 用法

`PageHero` 组件将你的内容包裹在一个 **Container** 中，同时保持全宽灵活性，方便添加背景颜色、图像或图案。它提供了一种灵活的方式，可以在默认插槽中包含插图来显示内容。

TODO

### **标题**

使用 `title` 属性设置英雄组件的标题。

::code-preview

TODO

#code
```vue
<template>
  <UPageHero title="Ultimate Vue UI library" />
</template>
```
::

### **描述**

使用 `description` 属性设置英雄组件的描述。

::code-preview

TODO

#code
```vue
<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
  />
</template>
```
::

### **主标题**

使用 `headline` 属性设置英雄组件的主标题。

::code-preview

TODO

#code
```vue
<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
    headline="New release"
  />
</template>
```
::

### **链接**

使用 `links` 属性在描述下方显示 **Button** 列表。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    to: '/getting-started',
    icon: 'i-lucide-square-play'
  },
  {
    label: 'Learn more',
    to: '/getting-started/theme',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
    :links="links"
  />
</template>
```
::

### **方向**

使用 `orientation` 属性更改默认插槽的方向。默认为 `vertical`。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    to: '/getting-started',
    icon: 'i-lucide-square-play'
  },
  {
    label: 'Learn more',
    to: '/getting-started/theme',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
    headline="New release"
    orientation="horizontal"
    :links="links"
  >
    <img
      src="https://ui.nuxt.com/templates/dashboard1.png"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>
</template>
```
::

### **反转**

使用 `reverse` 属性反转默认插槽的方向。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    to: '/getting-started',
    icon: 'i-lucide-square-play'
  },
  {
    label: 'Learn more',
    to: '/getting-started/theme',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
    headline="New release"
    orientation="horizontal"
    reverse
    :links="links"
  >
    <img
      src="https://ui.nuxt.com/templates/dashboard1.png"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>
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


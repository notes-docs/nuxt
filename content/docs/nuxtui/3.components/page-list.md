---
title: PageList
description: 一个用于以堆叠格式显示内容的垂直列表布局。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageList.vue
---

## 用法

`PageList` 组件提供了一种灵活的方式来以垂直列表布局显示内容。它非常适合创建 **PageCard** 组件或任何其他元素的堆叠列表，并可选择在项目之间添加分隔线。

::code-preview

TODO

#code
```html
<script setup lang="ts">
const users = ref([
  {
    name: 'Benjamin Canac',
    description: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'benjamincanac'
    }
  },
  {
    name: 'Sylvain Marroufin',
    description: 'smarroufin',
    to: 'https://github.com/smarroufin',
    target: '_blank',
    avatar: {
      src: 'https://github.com/smarroufin.png',
      alt: 'smarroufin'
    }
  },
  {
    name: 'Sébastien Chopin',
    description: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'atinux'
    }
  },
  {
    name: 'Romain Hamel',
    description: 'romhml',
    to: 'https://github.com/romhml',
    target: '_blank',
    avatar: {
      src: 'https://github.com/romhml.png',
      alt: 'romhml'
    }
  }
])
</script>

<template>
  <UPageList>
    <UPageCard
      v-for="(user, index) in users"
      :key="index"
      variant="ghost"
      :to="user.to"
      :target="user.target"
    >
      <template #body>
        <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
      </template>
    </UPageCard>
  </UPageList>
</template>
```
::

### **分隔线**

使用 `divide` 属性在每个子元素之间添加分隔线。

::code-preview

TODO

#code
```html
<script setup lang="ts">
const users = ref([
  {
    name: 'Benjamin Canac',
    description: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'benjamincanac'
    }
  },
  {
    name: 'Sylvain Marroufin',
    description: 'smarroufin',
    to: 'https://github.com/smarroufin',
    target: '_blank',
    avatar: {
      src: 'https://github.com/smarroufin.png',
      alt: 'smarroufin'
    }
  },
  {
    name: 'Sébastien Chopin',
    description: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'atinux'
    }
  },
  {
    name: 'Romain Hamel',
    description: 'romhml',
    to: 'https://github.com/romhml',
    target: '_blank',
    avatar: {
      src: 'https://github.com/romhml.png',
      alt: 'romhml'
    }
  }
])
</script>

<template>
  <UPageList divide>
    <UPageCard
      v-for="(user, index) in users"
      :key="index"
      variant="ghost"
      :to="user.to"
      :target="user.target"
    >
      <template #body>
        <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" />
      </template>
    </UPageCard>
  </UPageList>
</template>
```
::

### API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

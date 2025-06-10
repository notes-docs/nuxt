---
title: PageHeader
description: 一个响应式页面头部组件。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageHeader.vue
---

## 用法

**PageHeader** 组件用于显示你页面的头部。

将其用在 **Page** 组件的默认插槽中，在 **PageBody** 组件之前：

```vue{3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### **标题**

使用 `title` 属性在头部显示标题。

::code-preview

TODO

#code
```vue
<template>
  <UPageHeader title="PageHeader" />
</template>
```
::

### **描述**

使用 `description` 属性在头部显示描述。

::code-preview

TODO

#code
```vue
<template>
  <UPageHeader
    title="PageHeader"
    description="A responsive page header with title, description and actions."
  />
</template>
```
::

### **主标题**

使用 `headline` 属性在头部显示主标题。

::code-preview

TODO

#code
```vue
<template>
  <UPageHeader
    title="PageHeader"
    description="A responsive page header with title, description and actions."
    headline="Components"
  />
</template>
```
::

### **链接**

使用 `links` 属性在头部显示 **Button** 列表。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageHeader.vue',
    target: '_blank'
  }
])
</script>

<template>
  <UPageHeader
    title="PageHeader"
    description="A responsive page header with title, description and actions."
    headline="Components"
    :links="links"
  />
</template>
```
::

## 示例

::note
尽管这些示例使用 Nuxt Content，但这些组件可以与任何内容管理系统集成。
::

### **在页面中**

在页面中使用 **PageHeader** 组件显示页面头部：

```vue [pages/[...slug].vue]
<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="page.headline"
      :links="page.links"
    />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

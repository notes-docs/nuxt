---
title: PageBody
description: 您页面的主要内容。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageBody.vue
---

## 用法

`PageBody` 组件包裹你的主要内容并添加一些填充，以保持一致的间距。

将其用在 `Page` 组件的默认插槽中，在 `PageHeader` 组件之后：

```vue{5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

## 示例

::note
虽然这些示例使用了 Nuxt Content，但这些组件可以与任何内容管理系统集成。
::

### **在页面中**

在页面中使用 `PageBody` 组件来显示页面内容：

```vue{21-27} [pages/[...slug].vue]
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
    <UPageHeader :title="page.title" :description="page.description" />

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

::note
在此示例中，我们使用 `@nuxt/content` 中的 `ContentRenderer` 组件来渲染页面内容。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

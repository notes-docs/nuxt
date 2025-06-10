---
title: ContentSurround
description: 一对用于在页面之间导航的上一个和下一个链接。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/content/ContentSurround.vue
---

::warning{to="https://ui.nuxt.com/getting-started/content"}
此组件仅在安装了 `@nuxt/content` 模块时可用。
::

## 用法 (Usage)

使用 `surround` prop，其值为你获取页面环绕内容时得到的值。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const route = useRoute()

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path, {
    fields: ['description']
  })
})
</script>

<template>
  <UContentSurround :surround="(surround as any)" />
</template>
```
::

### 上一个 / 下一个 (Prev / Next)

使用 `prev-icon` 和 `next-icon` props 来自定义按钮的 `Icon`。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const surround = ref([
  {
    title: 'ContentSearchButton',
    path: '/components/content-search-button',
    stem: '3.components/content-search-button',
    description: 'A pre-styled Button to open the ContentSearch modal.'
  },
  {
    title: 'ContentToc',
    path: '/components/content-toc',
    stem: '3.components/content-toc',
    description: 'A sticky Table of Contents with customizable slots.'
  }
])
</script>

<template>
  <UContentSurround
    prev-icon="i-lucide-chevron-left"
    next-icon="i-lucide-chevron-right"
    :surround="surround"
  />
</template>
```
::

## 示例 (Examples)

### 在页面内 (Within a page)

在页面中使用 `ContentSurround` 组件来显示 “上一页” 和 “下一页” 链接：

```vue [pages/[...slug].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
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

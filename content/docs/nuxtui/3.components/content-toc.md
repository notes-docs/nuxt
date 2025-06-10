---
title: ContentToc
description: 一个带有自动高亮活动锚点链接的固定目录。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/content/ContentToc.vue
---

::warning{to="https://ui.nuxt.com/getting-started/content"}
此组件仅在安装了 `@nuxt/content` 模块时可用。
::

## 用法 (Usage)

使用 `links` prop，其值为你获取页面时获得的 `page?.body?.toc?.links` 值。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UContentToc :links="page?.body?.toc?.links" />
</template>
```
::

### 标题 (Title)

使用 `title` prop 更改目录的标题。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    id: 'usage',
    depth: 2,
    text: '用法',
    children: [
      {
        id: 'title',
        depth: 3,
        text: '标题'
      },
      {
        id: 'color',
        depth: 3,
        text: '颜色'
      },
      {
        id: 'highlight',
        depth: 3,
        text: '高亮'
      }
    ]
  },
  {
    id: 'api',
    depth: 2,
    text: 'API',
    children: [
      {
        id: 'props',
        depth: 3,
        text: '属性'
      },
      {
        id: 'slots',
        depth: 3,
        text: '插槽'
      }
    ]
  },
  {
    id: 'theme',
    depth: 2,
    text: '主题'
  }
])
</script>

<template>
  <UContentToc title="On this page" :links="links" />
</template>
```
::

### 颜色 (Color)

使用 `color` prop 更改链接的颜色。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    id: 'usage',
    depth: 2,
    text: '用法',
    children: [
      {
        id: 'title',
        depth: 3,
        text: '标题'
      },
      {
        id: 'color',
        depth: 3,
        text: '颜色'
      },
      {
        id: 'highlight',
        depth: 3,
        text: '高亮'
      }
    ]
  }
])
</script>

<template>
  <UContentToc color="neutral" :links="links" />
</template>
```
::

### 高亮 (Highlight)

使用 `highlight` prop 为活动项目显示高亮边框。

使用 `highlight-color` prop 更改边框的颜色。它默认为 `color` prop 的值。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    id: 'usage',
    depth: 2,
    text: '用法',
    children: [
      {
        id: 'title',
        depth: 3,
        text: '标题'
      },
      {
        id: 'color',
        depth: 3,
        text: '颜色'
      },
      {
        id: 'highlight',
        depth: 3,
        text: '高亮'
      }
    ]
  }
])
</script>

<template>
  <UContentToc highlight highlight-color="neutral" color="neutral" :links="links" />
</template>
```
::

## 示例 (Examples)

### 在页面内 (Within a page)

在页面中使用 `ContentToc` 组件来显示目录：

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

### Emits

:component-emits

## 主题 (Theme)

:component-theme{pro=true}


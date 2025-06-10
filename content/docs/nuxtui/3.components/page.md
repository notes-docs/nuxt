---
description: 一个用于页面布局的网格布局，带有左侧和右侧列。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/Page.vue
---

## 用法

`Page` 组件可帮助你创建带有可选左右列的布局。它非常适合构建文档站点和其他以内容为中心的页面。

```vue{2,6}
<template>
  <UPage>
    <template #left />

    <template #right />
  </UPage>
</template>
```

::tip
如果未指定任何插槽，页面将显示为居中的单列布局。
::

## 示例

::note
虽然这些示例使用了 Nuxt Content，但这些组件可以与任何内容管理系统集成。
::

### **在布局中**

在布局中使用 `Page` 组件，并使用 `left` 插槽显示导航：

```vue [layouts/docs.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
在此示例中，我们使用 `ContentNavigation` 组件来显示注入到 `app.vue` 中的导航。
::

### **在页面中**

在页面中使用 `Page` 组件，并使用 `right` 插槽显示目录：

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
在此示例中，我们使用 `ContentToc` 组件来显示目录。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

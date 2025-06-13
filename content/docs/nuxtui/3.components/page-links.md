---
title: PageLinks
description: 一个在页面中显示的链接列表。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageLinks.vue
---

## 用法

### **链接**

使用 `links` 属性，它是一个对象数组，包含以下属性：

- `label`: `string`
- `icon?`: `string`
- `class?`: `any`
- `ui?`: `{ item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`

你可以传递 `Link` 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - links
hide:
  - class
external:
  - links
externalTypes:
  - PageLink[]
props:
  class: 'w-ful'
  links:
    - label: 'Edit this page'
      icon: 'i-lucide-file-pen'
      to: 'https://github.com/nuxt/ui-pro/tree/v3/docs/content/3.components/page-links.md'
    - label: 'Star on GitHub'
      icon: 'i-lucide-star'
      to: 'https://github.com/nuxt/ui'
    - label: 'Roadmap'
      icon: 'i-lucide-map'
      to: '/roadmap'
---
::

### **标题**

使用 `title` 属性在链接上方显示标题。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - links
hide:
  - class
external:
  - links
externalTypes:
  - PageLink[]
props:
  class: 'w-ful'
  title: 'Community'
  links:
    - label: 'Edit this page'
      icon: 'i-lucide-file-pen'
      to: 'https://github.com/nuxt/ui-pro/tree/v3/docs/content/3.components/page-links.md'
    - label: 'Star on GitHub'
      icon: 'i-lucide-star'
      to: 'https://github.com/nuxt/ui'
    - label: 'Roadmap'
      icon: 'i-lucide-map'
      to: '/roadmap'
---
::

## 示例

::note
尽管这些示例使用 Nuxt Content，但这些组件可以与任何内容管理系统集成。
::

### **在页面中**

在 `ContentToc` 组件的 `bottom` 插槽中使用 `PageLinks` 组件，以在目录下方显示链接列表。

```vue{48-52} [pages/[...slug].vue]
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui-pro'

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

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v3/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}])
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
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
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

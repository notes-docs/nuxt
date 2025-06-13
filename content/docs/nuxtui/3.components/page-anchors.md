---
title: PageAnchors
description: 一个在页面中显示的锚点列表。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageAnchors.vue
---

## 用法

### **链接**

使用 `links` 属性，它是一个对象数组，包含以下属性：

- `label`: `string`
- `icon?`: `string`
- `class?`: `any`
- `ui?`: `{ item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`

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
  - PageAnchor[]
props:
  class: 'px-4'
  links:
    - label: 'Documentation'
      icon:  'i-lucide-book-open'
      to: '/getting-started'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/components/app'
    - label: 'Roadmap'
      icon: 'i-lucide-map'
      to: '/roadmap'
    - label: 'Figma Kit'
      icon: 'i-simple-icons-figma'
      to: 'https://www.figma.com/community/file/1288455405058138934'
      target: '_blank'
    - label: 'Releases'
      icon: 'i-simple-icons-github'
      to:  'https://github.com/nuxt/ui/releases'
      target: '_blank'
---
::

## 示例

::note
虽然这些示例使用了 Nuxt Content，但这些组件可以与任何内容管理系统集成。
::

### **在布局中**

在 `PageAside` 组件内部使用 `PageAnchors` 组件，以在导航上方显示链接列表。

```vue{35} [layouts/docs.vue]
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui-pro'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/components/app'
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
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

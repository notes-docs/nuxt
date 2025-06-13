---
title: ContentNavigation
description: 一个手风琴式导航组件，用于组织页面链接。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="https://ui.nuxt.com/getting-started/content"}
此组件仅在安装了 `@nuxt/content` 模块时可用。
::

## 用法 (Usage)

使用 `navigation` prop，其值为你在获取应用程序导航时获得的值。

::component-example
---
name: 'content-navigation-example'
class: 'flex justify-start h-64 overflow-y-auto'
---
::

### 类型 (Type)

将 `type` prop 设置为 `single`，只允许同时打开一个项目。默认为 `multiple`。

::component-code
---
pro: true
prefix: 'content'
prettier: true
collapse: true
ignore:
  - class
  - navigation
hide:
  - class
external:
  - navigation
externalTypes:
  - ContentNavigationItem
props:
  class: 'flex justify-start'
  type: 'single'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path:  '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### 颜色 (Color)

使用 `color` prop 更改导航链接的颜色。

::component-code
---
pro: true
prefix: 'content'
prettier: true
collapse: true
ignore:
  - class
  - navigation
hide:
  - class
external:
  - navigation
externalTypes:
  - ContentNavigationItem
props:
  class: 'flex justify-start'
  color: 'neutral'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path:  '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### 变体 (Variant)

使用 `variant` prop 更改导航链接的变体。

::component-code
---
pro: true
prefix: 'content'
prettier: true
collapse: true
ignore:
  - class
  - navigation
hide:
  - class
external:
  - navigation
externalTypes:
  - ContentNavigationItem
props:
  class: 'flex justify-start'
  variant: 'link'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path:  '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### 高亮 (Highlight)

使用 `highlight` prop 为活动链接显示高亮边框。

使用 `highlight-color` prop 更改边框的颜色。它默认为 `color` prop 的值。

::component-code
---
pro: true
prefix: 'content'
prettier: true
collapse: true
ignore:
  - class
  - navigation
hide:
  - class
external:
  - navigation
externalTypes:
  - ContentNavigationItem
items:
  highlight-color:
    - 'primary'
    - 'secondary'
    - 'success'
    - 'info'
    - 'warning'
    - 'danger'
    - 'error'
    - 'neutral'
props:
  class: 'flex justify-start'
  highlight: true
  highlight-color: 'primary'
  color: 'primary'
  variant: 'pill'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path:  '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### 尾随图标 (Trailing Icon)

::component-code
---
pro: true
prefix: 'content'
prettier: true
collapse: true
ignore:
  - class
  - navigation
hide:
  - class
external:
  - navigation
externalTypes:
  - ContentNavigationItem
props:
  class: 'flex justify-start'
  trailing-icon: 'i-lucide-arrow-up'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path:  '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

## 示例 (Examples)

### 在布局中 (Within a layout)

在布局中的 `PageAside` 组件内部使用 `ContentNavigation` 组件来显示页面导航：

```vue [layouts/docs.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### 在页眉中 (Within a header)

在 `Header` 组件的 `content` 插槽中使用 `ContentNavigation` 组件，以在移动设备上显示页面导航：

```vue [components/Header.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
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


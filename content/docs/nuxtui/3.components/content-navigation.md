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

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UContentNavigation :navigation="navigation" highlight />
</template>
```
::

### 类型 (Type)

将 `type` prop 设置为 `single`，只允许同时打开一个项目。默认为 `multiple`。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const navigation = ref([
  {
    title: '指南',
    icon: 'i-lucide-book-open',
    path: '#getting-started',
    children: [
      {
        title: '介绍',
        path: '#introduction',
        active: true
      },
      {
        title: '安装',
        path: '#installation'
      }
    ]
  },
  {
    title: '可组合函数',
    icon: 'i-lucide-database',
    path: '#composables',
    children: [
      {
        title: 'defineShortcuts',
        path: '#defineshortcuts'
      },
      {
        title: 'useModal',
        path: '#usemodal'
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation type="single" />
</template>
```
::

### 颜色 (Color)

使用 `color` prop 更改导航链接的颜色。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const navigation = ref([
  {
    title: '指南',
    icon: 'i-lucide-book-open',
    path: '#getting-started',
    children: [
      {
        title: '介绍',
        path: '#introduction',
        active: true
      },
      {
        title: '安装',
        path: '#installation'
      }
    ]
  },
  {
    title: '可组合函数',
    icon: 'i-lucide-database',
    path: '#composables',
    children: [
      {
        title: 'defineShortcuts',
        path: '#defineshortcuts'
      },
      {
        title: 'useModal',
        path: '#usemodal'
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation color="neutral" />
</template>
```
::

### 变体 (Variant)

使用 `variant` prop 更改导航链接的变体。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const navigation = ref([
  {
    title: '指南',
    icon: 'i-lucide-book-open',
    path: '#getting-started',
    children: [
      {
        title: '介绍',
        path: '#introduction',
        active: true
      },
      {
        title: '安装',
        path: '#installation'
      }
    ]
  },
  {
    title: '可组合函数',
    icon: 'i-lucide-database',
    path: '#composables',
    children: [
      {
        title: 'defineShortcuts',
        path: '#defineshortcuts'
      },
      {
        title: 'useModal',
        path: '#usemodal'
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation variant="link" />
</template>
```
::

### 高亮 (Highlight)

使用 `highlight` prop 为活动链接显示高亮边框。

使用 `highlight-color` prop 更改边框的颜色。它默认为 `color` prop 的值。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const navigation = ref([
  {
    title: '指南',
    icon: 'i-lucide-book-open',
    path: '#getting-started',
    children: [
      {
        title: '介绍',
        path: '#introduction',
        active: true
      },
      {
        title: '安装',
        path: '#installation'
      }
    ]
  },
  {
    title: '可组合函数',
    icon: 'i-lucide-database',
    path: '#composables',
    children: [
      {
        title: 'defineShortcuts',
        path: '#defineshortcuts'
      },
      {
        title: 'useModal',
        path: '#usemodal'
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation highlight highlight-color="primary" color="primary" variant="pill" />
</template>
```
::

### 尾随图标 (Trailing Icon)

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const navigation = ref([
  {
    title: '指南',
    icon: 'i-lucide-book-open',
    path: '#getting-started',
    children: [
      {
        title: '介绍',
        path: '#introduction',
        active: true
      },
      {
        title: '安装',
        path: '#installation'
      }
    ]
  },
  {
    title: '可组合函数',
    icon: 'i-lucide-database',
    path: '#composables',
    children: [
      {
        title: 'defineShortcuts',
        path: '#defineshortcuts'
      },
      {
        title: 'useModal',
        path: '#usemodal'
      }
    ]
  }
])
</script>

<template>
  <UContentNavigation trailing-icon="i-lucide-arrow-up" />
</template>
```
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

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-pro/content"}
为便于阅读，`compoundVariants` 中的某些颜色已省略。请查看 GitHub 上的源代码。
::

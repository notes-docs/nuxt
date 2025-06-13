---
title: ContentSearch
description: 一个即用型命令面板，可添加到你的文档中。
category: overlay
module: ui-pro
links:
  - label: CommandPalette
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/command-palette
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/content/ContentSearch.vue
---

::warning{to="https://ui.nuxt.com/getting-started/content"}
此组件仅在安装了 `@nuxt/content` 模块时可用。
::

## 用法 (Usage)

`ContentSearch` 组件扩展了 `CommandPalette` 组件，因此你可以传递任何属性，例如 `icon`、`placeholder` 等。

使用 `files` 和 `navigation` props，它们的值是你使用 `@nuxt/content` 中的 `queryCollectionSearchSections` 和 `queryCollectionNavigation` 可组合函数获取到的 `files` 和 `navigation` 值。

TODO 点击右上角搜索按钮查看效果。

::tip
你可以通过按下 **`Ctrl K`**、使用 `ContentSearchButton` 组件或使用 `useContentSearch` 可组合函数来打开命令面板：`const { open } = useContentSearch()`。
::

### 快捷键 (Shortcut)

使用 `shortcut` prop 更改在 `defineShortcuts` 中用于打开 `ContentSearch` 组件的快捷键。默认为 `meta_k` (Ctrl K)。

```vue{6} [app.vue]
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        shortcut="meta_k"
        :files="files"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
```

### 颜色模式 (Color Mode)

默认情况下，一组命令将被添加到命令面板中，以便你可以在浅色和深色模式之间切换。这只有在特定页面中未强制设置 `colorMode` 时才会生效，这可以通过 `definePageMeta` 实现：

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

你可以通过将 `color-mode` prop 设置为 `false` 来禁用此行为：

```vue{6} [app.vue]
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :color-mode="false"
        :files="files"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
```

## 示例 (Examples)

### 在 app.vue 中 (Within app.vue)

在你的 `app.vue` 或布局中使用 `ContentSearch` 组件：

```vue [app.vue]
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('content'), {
  server: false
})

const links = [{
  label: '文档',
  icon: 'i-lucide-book',
  to: '/getting-started'
}, {
  label: '组件',
  icon: 'i-lucide-box',
  to: '/components'
}, {
  label: '路线图',
  icon: 'i-lucide-chart-no-axes-gantt',
  to: '/roadmap'
}]

const searchTerm = ref('')
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
建议将 `ContentSearch` 组件包裹在 `ClientOnly` 组件中，以便它不在服务器端渲染。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## 主题 (Theme)

:component-theme{pro=true}

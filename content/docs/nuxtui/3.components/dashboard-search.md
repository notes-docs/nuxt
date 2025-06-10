---
title: DashboardSearch
description: 一个即用型命令面板，可添加到你的仪表盘。
category: overlay
module: ui-pro
links:
  - label: CommandPalette
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/command-palette
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardSearch.vue
---

## 用法 (Usage)

`DashboardSearch` 组件扩展了 `CommandPalette` 组件，因此你可以传递任何属性，例如 `icon`、`placeholder` 等。

在 `DashboardGroup` 组件的默认插槽中使用它：

```vue{3} [layouts/dashboard.vue]
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <UDashboardSearchButton />
    </UDashboardSidebar>

    <UDashboardSearch />

    <slot />
  </UDashboardGroup>
</template>
```

::tip
你可以通过按下 **`Ctrl K`**、使用 `DashboardSearchButton` 组件或使用 `v-model:open` 指令来打开命令面板。
::

### 快捷键 (Shortcut)

使用 `shortcut` prop 更改在 `defineShortcuts` 中用于打开 `ContentSearch` 组件的快捷键。默认为 `meta_k` (`Ctrl` `K`)。

```vue [app.vue]
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    shortcut="meta_k"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
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

```vue [app.vue]
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    :color-mode="false"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
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

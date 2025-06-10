---
title: DashboardPanel
description: 一个可在仪表盘中显示的可调整大小面板。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardPanel.vue
---

## 用法 (Usage)

`DashboardPanel` 组件用于显示一个面板。它的状态（大小、是否折叠等）将根据你提供给 `DashboardGroup` 组件的 `storage` 和 `storage-key` props 进行保存。

在 `DashboardGroup` 组件的默认插槽中使用它，你可以将多个面板并排放置：

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
**建议**在使用多个面板的不同页面中设置 `id`，以避免冲突。
::

使用 `header`、`body` 和 `footer` 插槽来自定义面板，如果你不希望有可滚动的带内边距的主体，也可以使用默认插槽。

::code-preview

TODO

#code
```vue
<template>
  <UDashboardPanel resizable>
    <template #header>
      <UDashboardNavbar title="Inbox">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <Placeholder class="h-full" />
    </template>
  </UDashboardPanel>
</template>
```
::

::note
大多数情况下，你会在 `header` 插槽中使用 `DashboardNavbar` 组件。
::


### 可调整大小 (Resizable)

使用 `resizable` prop 使面板可调整大小。

::code-preview

TODO

#code
```vue
<template>
  <UDashboardPanel resizable>
    <template #body>
      <Placeholder class="h-96" />
    </template>
  </UDashboardPanel>
</template>
```
::

### 大小 (Size)

使用 `min-size`、`max-size` 和 `default-size` props 来自定义面板的大小。

::code-preview

TODO

#code
```vue
<template>
  <UDashboardPanel resizable>
    <template #body>
      <Placeholder class="h-96" />
    </template>
  </UDashboardPanel>
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}



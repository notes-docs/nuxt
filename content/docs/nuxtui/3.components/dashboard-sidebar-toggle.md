---
title: DashboardSidebarToggle
description: 自定义切换按钮以打开侧边栏。
category: element
module: ui-pro
links:
  - label: Button
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/button
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardSidebarToggle.vue
---

自定义用于打开侧边栏的切换按钮。`{ color: 'neutral', variant: 'ghost' }`

## 用法 (Usage)

`DashboardSidebarToggle` 组件由 `DashboardNavbar` 和 `DashboardSidebar` 组件使用。

它会自动在移动设备上显示以切换侧边栏，**你无需手动添加它**。

::component-code
---
pro: true
prettier: true
---
::

它扩展了 `Button` 组件，因此你可以传递任何属性，例如 `color`、`variant`、`size` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - variant
hide:
  - class
external:
externalTypes:
props:
  variant: 'subtle'
---
::

::note
该按钮默认 `color="neutral"` 和 `variant="ghost"`。
::

## 示例 (Examples)

### 在 `toggle` 插槽中 (Within `toggle` slot)

尽管此组件会自动在移动设备上显示，但你可以使用 `DashboardNavbar` 和 `DashboardSidebar` 组件的 `toggle` 插槽来**自定义按钮**。

::code-group
```vue{4-6} [layouts/dashboard.vue]
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

```vue{11-13} [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Home">
        <template #toggle>
          <UDashboardSidebarToggle variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```
::

::tip
当使用 `DashboardSidebar` 和 `DashboardNavbar` 组件的 `toggle-side` prop 时，按钮将显示在指定的一侧。
::

## API

### 属性 (Props)

:component-props

## 主题 (Theme)

:component-theme{pro=true}


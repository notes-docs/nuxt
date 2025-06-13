---
title: DashboardSidebarCollapse
description: 一个用于在桌面端折叠侧边栏的按钮。
category: element
module: ui-pro
links:
  - label: Button
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/button
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardSidebarCollapse.vue
---

## 用法 (Usage)

`DashboardSidebarCollapse` 组件用于 **折叠/展开** `DashboardSidebar` 组件，前提是该组件的 `collapsible` 属性已设置。

::component-code
---
pro: true
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
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

### 在 `header` 插槽中 (Within `header` slot)

你可以将此组件放置在 `DashboardSidebar` 组件的 `header` 插槽中，并使用 `collapsed` 属性来隐藏标题的左侧部分，例如：

```vue{4-8} [layouts/dashboard.vue]
<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <Logo v-if="!collapsed" />

        <UDashboardSidebarCollapse variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

### 在 `leading` 插槽中 (Within `leading` slot)

你可以将此组件放置在 `DashboardNavbar` 组件的 `leading` 插槽中，例如将其显示在标题之前：

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
        <template #leading>
          <UDashboardSidebarCollapse variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

## API

### 属性 (Props)

:component-props

## 主题 (Theme)

:component-theme{pro=true}

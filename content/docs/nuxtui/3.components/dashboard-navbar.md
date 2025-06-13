---
title: DashboardNavbar
description: 一个用于在仪表盘中显示的响应式导航栏。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardNavbar.vue
---

## 用法 (Usage)

`DashboardNavbar` 组件是一个响应式导航栏，它与 `DashboardSidebar` 组件集成。它包含一个移动端切换按钮，可在仪表盘布局中启用响应式导航。

在 `DashboardPanel` 组件的 `header` 插槽中使用它：

```vue{9-11} [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />
    </template>
  </UDashboardPanel>
</template>
```

使用 `left`、`default` 和 `right` 插槽来自定义导航栏。

::component-example
---
name: 'dashboard-navbar-example'
---
::

::note
在此示例中，我们在右侧插槽中使用 `Tabs` 组件来显示一些选项卡。
::

### 标题 (Title)

使用 `title` prop 设置导航栏的标题。

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
props:
  class: 'px-4'
  title: 'Dashboard'
---
::

### 图标 (Icon)

使用 `icon` prop 设置导航栏的图标。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  title: 'Dashboard'
  icon:  'i-lucide-house'
---
::

### 切换按钮 (Toggle)

使用 `toggle` prop 自定义在移动设备上显示的切换按钮，该按钮用于打开 `DashboardSidebar` 组件。

你可以传递 `Button` 组件的任何属性来自定义它。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - toggle.color
  - toggle.variant
  - toggle.class
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  title: 'Dashboard'
  toggle:
    color: 'primary'
    variant: 'subtle'
    class: 'rounded-full'
---
::

### 切换侧边 (Toggle Side)

使用 `toggle-side` prop 更改切换按钮的侧边位置。默认为 `right`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - toggle-side
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  title: 'Dashboard'
  toggle-side: 'right'
---
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

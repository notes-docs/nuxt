---
title: DashboardSidebar
description: 一个可调整大小且可折叠的侧边栏，用于在仪表盘中显示。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardSidebar.vue
---

## 用法 (Usage)

`DashboardSidebar` 组件用于显示一个侧边栏。它的状态（大小、是否折叠等）将根据你提供给 `DashboardGroup` 组件的 `storage` 和 `storage-key` props 进行保存。

在 `DashboardGroup` 组件的默认插槽中使用它：

```vue{3} [layouts/dashboard.vue]
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

使用 `left`、`default` 和 `right` 插槽来自定义侧边栏，并使用 `body` 或 `content` 插槽来自定义侧边栏菜单。

::component-example
---
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
collapse: true
props:
  class: '!min-h-96 h-136'
  minSize: 20
  defaultSize: 35
  maxSize: 50
---
::

::note
将侧边栏拖拽到屏幕左边缘附近即可将其折叠。
::

### 可调整大小 (Resizable)

使用 `resizable` prop 使侧边栏可调整大小。

::component-code
---
pro: true
prettier: true
class: '!p-0 !justify-start'
ignore:
  - class
  - defaultSize
  - minSize
  - maxSize
hide:
  - class
external:
externalTypes:
slots:
  default: <Placeholder class="h-96" />
props:
  class: '!min-h-96 h-136'
  resizable: true
  minSize: 20
  defaultSize: 35
  maxSize: 50
---
<Placeholder class="h-136" />
::

### 可折叠 (Collapsible)

使用 `collapsible` prop 使侧边栏在拖拽到屏幕边缘附近时可折叠。

::warning
如果侧边栏不可折叠，`DashboardSidebarCollapse` 组件将不起作用。
::

::component-code
---
pro: true
prettier: true
class: '!p-0 !justify-start'
ignore:
  - class
  - side
  - resizable
  - defaultSize
hide:
  - class
  - defaultSize
  - side
external:
externalTypes:
slots:
  default: <Placeholder class="h-96" />
props:
  class: '!min-h-96 h-136'
  side: 'right'
  resizable: true
  collapsible: true
  defaultSize: 35
---
<Placeholder class="h-136" />
::

::tip
你可以在插槽 props 中访问 `collapsed` 状态，以便在侧边栏折叠时自定义其内容。
::

### 大小 (Size)

使用 `min-size`、`max-size`、`default-size` 和 `collapsed-size` props 自定义侧边栏的大小。

::component-code
---
pro: true
prettier: true
class: '!p-0 !justify-start'
ignore:
  - class
  - side
  - resizable
  - collapsible
hide:
  - class
  - side
external:
externalTypes:
slots:
  default: <Placeholder class="h-96" />
props:
  class: '!min-h-96 h-136'
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 20
  defaultSize: 35
  maxSize: 50
  collapsedSize: 0
---
<Placeholder class="h-136" />
::

::note
`collapsed-size` prop 默认为 `0`，但侧边栏有一个 `min-w-16`，以确保其可见。
::

### 侧边 (Side)

使用 `side` prop 更改侧边栏的侧边位置。默认为 `left`。

::component-code
---
pro: true
prettier: true
class: '!p-0 !justify-start'
ignore:
  - class
hide:
  - class
  - defaultSize
  - minSize
  - maxSize
external:
externalTypes:
slots:
  default: <Placeholder class="h-96" />
props:
  class: '!min-h-96 h-136'
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 20
  defaultSize: 35
  maxSize: 50
---
<Placeholder class="h-136" />
::

### 模式 (Mode)

使用 `mode` prop 更改侧边栏菜单的模式。默认为 `slideover`。

使用 `body` 插槽填充菜单主体（在标题下方），或使用 `content` 插槽填充整个菜单。

::tip
你可以使用 `menu` prop 自定义侧边栏菜单，它会根据你选择的模式进行调整。
::

::component-example
---
name: 'dashboard-sidebar-mode-example'
collapse: true
iframe:
  height: 500px
iframeMobile: true
options:
  - name: 'mode'
    label: 'mode'
    items:
      - 'modal'
      - 'slideover'
      - 'drawer'
    default: 'drawer'
    multi: false
---
::

::note
这些示例包含 `DashboardGroup`、`DashboardPanel` 和 `DashboardNavbar` 组件，因为它们是演示移动端侧边栏所必需的。
::

### 切换按钮 (Toggle)

使用 `toggle` prop 自定义在移动设备上显示的 `DashboardSidebarToggle` 组件。

你可以传递 `Button` 组件的任何属性来自定义它。

::component-example
---
name: 'dashboard-sidebar-toggle-example'
collapse: true
iframe:
  height: 500px
iframeMobile: true
props:
  class: 'w-full'
---
::

### 切换侧边 (Toggle Side)

使用 `toggle-side` prop 更改切换按钮的侧边位置。默认为 `left`。

::component-example
---
name: 'dashboard-sidebar-toggle-side-example'
collapse: true
iframe:
  height: 500px
iframeMobile: true
props:
  class: 'w-full'
---
::

## 示例 (Examples)

### 控制打开状态 (Control open state)

你可以使用 `open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'dashboard-sidebar-open-state-example'
collapse: true
class: '!p-0 !justify-start'
iframe:
  height: 500px
iframeMobile: true
---
::

::note
在此示例中，利用 `defineShortcuts`，你可以通过按下 **`O`** 键来切换 `DashboardSidebar` 的打开状态。
::

### 控制折叠状态 (Control collapsed state)

你可以使用 `collapsed` prop 或 `v-model:collapsed` 指令来控制折叠状态。

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
collapse: true
class: '!p-0 !justify-start'
props:
  class: 'min-h-svh min-w-16 w-(--width) shrink-0 border-r border-default !min-h-96 h-136'
  defaultSize: 35
---
::

::note
在此示例中，利用 `defineShortcuts`，你可以通过按下 **`C`** 键来切换 `DashboardSidebar` 的折叠状态。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


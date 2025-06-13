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

```vue{8,10} [pages/index.vue]
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

::component-example
---
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
collapse: true
---
::

::note
大多数情况下，你会在 `header` 插槽中使用 `DashboardNavbar` 组件。
::


### 可调整大小 (Resizable)

使用 `resizable` prop 使面板可调整大小。

::component-code
---
pro: true
prettier: true
class: '!p-0 !justify-start'
ignore:
  - class
  - defaultSize
  - maxSize
  - minSize
hide:
  - class
external:
externalTypes:
slots:
  body: <Placeholder class="h-96" />

props:
  defaultSize: 35
  minSize: 20
  maxSize: 50
  class: 'shrink-0 w-full lg:w-(--width) !min-h-96 h-136'
  resizable: true
---
#body
<Placeholder class="h-96" />
::

### 大小 (Size)

使用 `min-size`、`max-size` 和 `default-size` props 来自定义面板的大小。

::component-code
---
pro: true
prettier: true
class: '!p-0 !justify-start'
ignore:
  - class
  - resizable
hide:
  - class
external:
externalTypes:
slots:
  body: <Placeholder class="h-96" />
props:
  class: 'shrink-0 w-full lg:w-(--width) !min-h-96 h-136'
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
---
#body
<Placeholder class="h-96" />
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}



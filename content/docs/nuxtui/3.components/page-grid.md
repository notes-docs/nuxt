---
title: PageGrid
description: 一个响应式网格系统，用于以灵活的布局显示内容。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageGrid.vue
---

## 用法

`PageGrid` 组件提供了一个响应式网格布局，用于显示 **PageCard** 组件或任何其他元素，根据屏幕尺寸自动调整为 1 到 3 列。

::component-example
---
name: 'page-grid-example'
---
::

你也可以使用 `col-span-*` 和 `row-span-*` 工具类，以 Bento 风格的布局显示卡片列表。

::component-example
---
name: 'page-grid-second-example'
---
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

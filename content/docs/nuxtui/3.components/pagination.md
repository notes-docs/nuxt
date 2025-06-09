---
description: 一个用于在页面之间导航的按钮或链接列表。
category: navigation
links:
  - label: Pagination
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Pagination.vue
---

## 用法

使用 `default-page` prop 或 `v-model:page` 指令控制当前页面。

::note
Pagination 组件使用一些 [`Button`](/components/button) 来显示页面，使用 [`color`](#color)、[`variant`](#variant) 和 [`size`](#size) props 来设置它们的样式。
::

### 总数 (Total)

使用 `total` prop 设置列表中项目的总数。

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### 每页项目数 (Items Per Page)

使用 `items-per-page` prop 设置每页显示的项目数。默认为 `10`。

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### 兄弟数量 (Sibling Count)

使用 `sibling-count` prop 设置要显示的兄弟页码数量。默认为 `2`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### 显示边缘 (Show Edges)

使用 `show-edges` prop 始终显示省略号、第一页和最后一页。默认为 `false`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### 显示控制 (Show Controls)

使用 `show-controls` prop 显示第一页、上一页、下一页和最后一页按钮。默认为 `true`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

### 颜色 (Color)

使用 `color` prop 设置非活动控件的颜色。默认为 `neutral`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  color: primary
  total: 100
---
::

### 变体 (Variant)

使用 `variant` prop 设置非活动控件的变体。默认为 `outline`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

### 活动颜色 (Active Color)

使用 `active-color` prop 设置活动控件的颜色。默认为 `primary`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### 活动变体 (Active Variant)

使用 `active-variant` prop 设置活动控件的变体。默认为 `solid`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### 尺寸 (Size)

使用 `size` prop 设置控件的尺寸。默认为 `md`。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### 禁用 (Disabled)

使用 `disabled` prop 禁用分页控件。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## 示例

### 带链接

使用 `to` prop 将按钮转换为链接。传入一个接收页码并返回路由目标的函数。

::component-example
---
name: 'pagination-links-example'
---
::

::note
在此示例中，我们添加 `#with-links` hash 以避免跳转到页面顶部。
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

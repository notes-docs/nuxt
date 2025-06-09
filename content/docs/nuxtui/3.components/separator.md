---
description: 水平或垂直分隔内容的元素。
category: layout
links:
  - label: Separator
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Separator.vue
---

## 用法

直接使用 Separator 组件即可分隔内容。

::component-code
---
class: 'p-8'
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改 Separator 的方向。默认为 `horizontal`。

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### 标签

使用 `label` prop 在 Separator 中间显示一个标签。

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

### 图标 (Icon)

使用 `icon` prop 在 Separator 中间显示一个图标。

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### 头像 (Avatar)

使用 `avatar` prop 在 Separator 中间显示一个头像。

::component-code
---
prettier: true
class: 'p-8'
props:
  avatar:
    src: 'https://github.com/nuxt.png'
---
::

### 颜色 (Color)

使用 `color` prop 更改 Separator 的颜色。默认为 `neutral`。

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### 类型 (Type)

使用 `type` prop 更改 Separator 的类型。默认为 `solid`。

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Separator 的尺寸。默认为 `xs`。

::component-code
---
class: 'p-8'
props:
  size: lg
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

---
description: 用于选择范围内的数值的输入框。
category: form
links:
  - label: Slider
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Slider.vue
---

## 用法

使用 `v-model` 指令控制 Slider 的值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

使用 `default-value` prop 设置初始值，当你不需要控制其状态时。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

### Min / Max

使用 `min` 和 `max` props 设置 Slider 的最小值和最大值。默认为 `0` 和 `100`。

::component-code
---
ignore:
  - defaultValue
props:
  min: 0
  max: 50
  defaultValue: 50
---
::

### 步长 (Step)

使用 `step` prop 设置 Slider 的增量值。默认为 `1`。

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### 多值 (Multiple)

使用 `v-model` 指令或 `default-value` prop 和一个值数组来创建范围 Slider。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 75]
---
::

使用 `min-steps-between-thumbs` prop 限制滑块之间的最小距离。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 50, 75]
  minStepsBetweenThumbs: 10
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改 Slider 的方向。默认为 `horizontal`。

::component-code
---
ignore:
  - defaultValue
  - class
props:
  orientation: vertical
  defaultValue: 50
  class: 'h-48'
---
::

### 颜色 (Color)

使用 `color` prop 更改 Slider 的颜色。

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Slider 的尺寸。

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### 工具提示 (Tooltip)  :badge{label="New" class="align-text-top"}

使用 `tooltip` prop 在 Slider 滑块周围显示带有当前值的 [Tooltip](/components/tooltip)。你可以将其设置为 true 以使用默认行为，或者传递一个对象以使用 [Tooltip](/components/tooltip#props) 组件的任何属性来自定义它。

::component-code
---
ignore:
  - defaultValue
  - tooltip
props:
  defaultValue: 50
  tooltip: true
---
::

### 禁用 (Disabled)

使用 `disabled` prop 禁用 Slider。

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### 反转 (Inverted)

使用 `inverted` prop 视觉上反转 Slider。

::component-code
---
ignore:
  - defaultValue
props:
  inverted: true
  defaultValue: 25
---
::

## API

### Props

:component-props

### Emits

:component-emits

## Theme

:component-theme

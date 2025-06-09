---
description: 显示任务进度的指示器。
category: element
links:
  - label: Progress
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Progress.vue
---

## 用法

使用 `v-model` 指令控制 Progress 的值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

### 最大值 (Max)

使用 `max` prop 设置 Progress 的最大值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

使用带有字符串数组的 `max` prop 在进度条下方显示活动步骤，Progress 的最大值是数组的长度。

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### 状态 (Status)

使用 `status` prop 在进度条上方显示当前 Progress 值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

### 不确定状态 (Indeterminate)

当未设置 `v-model` 或值为 `null` 时，Progress 变为 _不确定状态_。进度条以跑马灯动画显示，但你可以使用 [`animation`](#animation) prop 更改它。

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### 动画 (Animation)

使用 `animation` prop 将 Progress 的动画更改为反向跑马灯、摆动条或弹性条。默认为 `carousel`。

::component-code
---
props:
  animation: swing
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改 Progress 的方向。默认为 `horizontal`。

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### 颜色 (Color)

使用 `color` prop 更改 Slider 的颜色。

::component-code
---
props:
  color: neutral
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Slider 的尺寸。

::component-code
---
props:
  size: xl
---
::

### 反转 (Inverted)

使用 `inverted` prop 视觉上反转 Progress。

::component-code
---
props:
  inverted: true
  modelValue: 25
---
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

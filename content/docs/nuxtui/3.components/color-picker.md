---
title: ColorPicker
description: 一个用于选择颜色的组件。
category: form
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/ColorPicker.vue
---

## 用法

使用 `v-model` 指令来控制 ColorPicker 的值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: '#00C16A'
---
::

当你不需要控制其状态时，使用 `default-value` prop 来设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

### RGB Format

使用 `format` prop 来设置 ColorPicker 的 `rgb` 值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: rgb
  modelValue: 'rgb(0, 193, 106)'
---
::

### HSL 格式

使用 `format` prop 来设置 ColorPicker 的 `hsl` 值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: hsl
  modelValue: 'hsl(153, 100%, 37.8%)'
---
::

### CMYK 格式

使用 `format` prop 来设置 ColorPicker 的 `cmyk` 值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: cmyk
  modelValue: 'cmyk(100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab 格式

使用 `format` prop 来设置 ColorPicker 的 `lab` 值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: lab
  modelValue: 'lab(68.88% -60.41% 32.55%)'
---
::

### 节流 (Throttle)

使用 `throttle` prop 来设置 ColorPicker 的节流值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  throttle: 100
  modelValue: '#00C16A'
---
::

### 尺寸 (Size)

使用 `size` prop 来设置 ColorPicker 的尺寸。

::component-code
---
props:
  size: xl
---
::

### 禁用 (Disabled)

使用 `disabled` prop 来禁用 ColorPicker。

::component-code
---
props:
  disabled: true
---
::

## 示例

### 作为颜色选择器

使用 [Button](/components/button) 和 [Popover](/components/popover) 组件来创建一个颜色选择器。

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API

### Props

:component-props

### Emits

:component-emits

## Theme

:component-theme

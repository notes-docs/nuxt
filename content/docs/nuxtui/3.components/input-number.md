---
title: InputNumber
description: 输入可自定义范围的数值。
category: form
links:
  - label: NumberField
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/InputNumber.vue
---

::note
此组件依赖于 [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) 包，该包提供了跨区域设置和数字系统格式化和解析数字的实用程序。
::

## 用法

使用 `v-model` 指令控制 InputNumber 的值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
---
::

当你不需要控制其状态时，使用 `default-value` prop 设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

### Min / Max

使用 `min` 和 `max` prop 来设置 InputNumber 的最小值和最大值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  min: 0
  max: 10
---
::

### 步长 (Step)

使用 `step` prop 来设置 InputNumber 的步长值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  step: 2
---
::

### 方向 (Orientation)

使用 `orientation` prop 来改变 InputNumber 的方向。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  orientation: vertical
---
::

### 占位符 (Placeholder)

使用 `placeholder` prop 来设置占位符文本。

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### 颜色 (Color)

使用 `color` prop 来改变 InputNumber 聚焦时的环形颜色。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  color: neutral
  highlight: true
---
::

### 变体 (Variant)

使用 `variant` prop 来改变 InputNumber 的变体。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  variant: subtle
  color: neutral
  highlight: false
---
::

### 尺寸 (Size)

使用 `size` prop 来改变 InputNumber 的尺寸。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  size: xl
---
::

### 禁用 (Disabled)

使用 `disabled` prop 来禁用 InputNumber。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  disabled: true
---
::

### 递增 / 递减 (Increment / Decrement)

使用 `increment` 和 `decrement` prop 自定义递增和递减按钮，可传递任何 [Button](/components/button) props。默认为 `{ variant: 'link' }`{lang="ts-type"}。

::component-code
---
prettier: true
ignore:
  - modelValue
  - increment.size
  - increment.color
  - increment.variant
  - decrement.size
  - decrement.color
  - decrement.variant
external:
  - modelValue
props:
  modelValue: 5
  increment:
    color: neutral
    variant: solid
    size: xs
  decrement:
    color: neutral
    variant: solid
    size: xs
---
::

### 递增 / 递减图标 (Increment / Decrement Icons)

使用 `increment-icon` 和 `decrement-icon` prop 来自定义按钮 [Icon](/components/icon)。默认为 `i-lucide-plus` / `i-lucide-minus`。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  incrementIcon: 'i-lucide-arrow-right'
  decrementIcon: 'i-lucide-arrow-left'
---
::

## 示例

### 带小数格式

使用 `format-options` prop 来自定义值的格式。

::component-example
---
name: 'input-number-decimal-example'
---
::

### 带百分比格式

使用 `format-options` prop 和 `style: 'percent'` 来自定义值的格式。

::component-example
---
name: 'input-number-percentage-example'
---
::

### 带货币格式

使用 `format-options` prop 和 `style: 'currency'` 来自定义值的格式。

::component-example
---
name: 'input-number-currency-example'
---
::

### 在 FormField 内

你可以在 [FormField](/components/form-field) 组件内使用 InputNumber 来显示标签、帮助文本、必填指示符等。

::component-example
---
name: 'input-number-form-field-example'
---
::

### 带插槽

使用 `#increment` 和 `#decrement` 插槽来自定义按钮。

::component-example
---
name: 'input-number-slots-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

通过模板引用访问组件时，你可以使用以下内容：

| Name                       | Type                                            |
|----------------------------|-------------------------------------------------|
| `inputRef`{lang="ts-type"} | `Ref<HTMLInputElement \| null>`{lang="ts-type"} |

## Theme

:component-theme

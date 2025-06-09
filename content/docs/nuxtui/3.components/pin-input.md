---
title: PinInput
description: 一个用于输入 PIN 码的输入元素。
category: form
links:
  - label: PinInput
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/PinInput.vue
---

## 用法

使用 `v-model` 指令控制 PinInput 的值。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: []
---
::

当你不需要控制其状态时，使用 `default-value` prop 设置初始值。

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### 类型 (Type)

使用 `type` prop 更改输入类型。默认为 `text`。

::component-code
---
items:
  type:
    - text
    - number
props:
  type: 'number'
---
::

::note
当 `type` 设置为 `number` 时，它将只接受数字字符。
::

### 遮罩 (Mask)

使用 `mask` prop 将输入视为密码。

::component-code
---
prettier: true
ignore:
  - placeholder
  - defaultValue
props:
  mask: true
  defaultValue: ['1','2','3','4','5']
---
::

### OTP

使用 `otp` prop 启用一次性密码功能。启用后，移动设备可以自动检测并填充来自短信或剪贴板内容的 OTP 代码，并支持自动完成。

::component-code
---
props:
  otp: true
---
::

### 长度 (Length)

使用 `length` prop 更改输入框的数量。

::component-code
---
props:
  length: 6
---
::

### 占位符 (Placeholder)

使用 `placeholder` prop 设置占位符文本。

::component-code
---
props:
  placeholder: '○'
---
::

### 颜色 (Color)

使用 `color` prop 更改 PinInput 聚焦时的环形颜色。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: '○'
---
::

::note
此处使用 `highlight` prop 来显示焦点状态。它在发生验证错误时内部使用。
::

### 变体 (Variant)

使用 `variant` prop 更改 PinInput 的变体。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: '○'
---
::

### 尺寸 (Size)

使用 `size` prop 更改 PinInput 的尺寸。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### 禁用 (Disabled)

使用 `disabled` prop 禁用 PinInput。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## API

### Props

:component-props

### Emits

:component-emits

通过模板引用访问组件时，你可以使用以下内容：

| Name | Type |
| ---- | ---- |
| `inputsRef`{lang="ts-type"} | `Ref<ComponentPublicInstance[]>`{lang="ts-type"} |

## Theme

:component-theme

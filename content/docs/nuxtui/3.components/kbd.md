---
title: Kbd
description: 一个显示键盘按键的 kbd 元素。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Kbd.vue
---

## 用法

### 值 (Value)

使用默认插槽设置 Kbd 的值。

::component-code
---
slots:
  default: K
---
::

你可以通过使用 `value` prop 达到同样的效果。

::component-code
---
props:
  value: K
---
::

你可以将特殊按键传递给 `value` prop，这些按键会通过 [`useKbd`](https://github.com/nuxt/ui/blob/v3/src/runtime/composables/useKbd.ts) 可组合项处理。例如，`meta` 键在 macOS 上显示为 `⌘`，在其他平台上显示为 `Ctrl`。

::component-code
---
props:
  value: meta
items:
  value:
    - meta
    - win
    - command
    - shift
    - ctrl
    - option
    - alt
    - enter
    - delete
    - backspace
    - escape
    - tab
    - capslock
    - arrowup
    - arrowright
    - arrowdown
    - arrowleft
    - pageup
    - pagedown
    - home
    - end
---
::

### 变体 (Variant)

使用 `variant` prop 更改 Kbd 的变体。

::component-code
---
props:
  variant: solid
slots:
  default: K
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Kbd 的尺寸。

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## 示例

### `class` prop

使用 `class` prop 覆盖 Badge 的基本样式。

::component-code
---
props:
  class: 'font-bold rounded-full'
  variant: subtle
slots:
  default: K
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

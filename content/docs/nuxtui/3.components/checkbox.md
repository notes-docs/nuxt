---
description: 一个用于在选中和未选中状态之间切换的输入元素。
category: form
links:
  - label: Checkbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Checkbox.vue
---

## 用法

使用 `v-model` 指令来控制 Checkbox 的选中状态。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: true
---
::

当你不需要控制其状态时，使用 `default-value` prop 来设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### 不确定状态 (Indeterminate)

在 `v-model` 指令或 `default-value` prop 中使用 `indeterminate` 值，将 Checkbox 设置为 [不确定状态](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### 不确定状态图标 (Indeterminate Icon)

使用 `indeterminate-icon` prop 来自定义不确定状态图标。默认为 `i-lucide-minus`。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
  indeterminateIcon: 'i-lucide-plus'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.minus` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.minus` 键全局自定义此图标。
:::
::

### 标签

使用 `label` prop 来设置 Checkbox 的标签。

::component-code
---
props:
  label: Check me
---
::

当使用 `required` prop 时，标签旁边会添加一个星号。

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### 描述

使用 `description` prop 来设置 Checkbox 的描述。

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### 图标 (Icon)

使用 `icon` prop 来设置 Checkbox 被选中时的图标。默认为 `i-lucide-check`。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.check` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.check` 键全局自定义此图标。
:::
::

### 颜色 (Color)

使用 `color` prop 来改变 Checkbox 的颜色。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: neutral
  defaultValue: true
  label: Check me
---
::

### Variant :badge{label="New" class="align-text-top"}

使用 `variant` prop 来改变 Checkbox 的变体（样式）。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: 'primary'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

### 尺寸 (Size)

使用 `size` prop 来改变 Checkbox 的尺寸。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  variant: list
  defaultValue: true
  label: Check me
---
::

### 指示器 :badge{label="New" class="align-text-top"}

使用 `indicator` prop 来改变指示器的位置或隐藏指示器。默认为 `start`。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  indicator: 'end'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

### 禁用 (Disabled)

使用 `disabled` prop 来禁用 Checkbox。

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
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

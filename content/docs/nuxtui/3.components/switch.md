---
description: 一个在两种状态之间切换的控件。
category: form
links:
  - label: Switch
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Switch.vue
---

## 用法

使用 `v-model` 指令控制 Switch 的选中状态。

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

当你不需要控制其状态时，使用 `default-value` prop 设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### 标签

使用 `label` prop 设置 Switch 的标签。

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

使用 `description` prop 设置 Switch 的描述。

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

使用 `checked-icon` 和 `unchecked-icon` props 设置 Switch 选中和未选中时的图标。

::component-code
---
prettier: true
ignore:
  - label
  - defaultValue
props:
  uncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  defaultValue: true
  label: Check me
---
::

### 加载中 (Loading)

使用 `loading` prop 在 Switch 上显示一个加载图标。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  defaultValue: true
  label: Check me
---
::

### 加载图标 (Loading Icon)

使用 `loading-icon` prop 自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.loading` 键下全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.loading` 键下全局自定义此图标。
:::
::

### 颜色 (Color)

使用 `color` prop 更改 Switch 的颜色。

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

### 尺寸 (Size)

使用 `size` prop 更改 Switch 的尺寸。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  defaultValue: true
  label: Check me
---
::

### 禁用 (Disabled)

使用 `disabled` prop 禁用 Switch。

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

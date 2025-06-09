---
title: CheckboxGroup
description: 一组复选框按钮，用于从列表中选择多个选项。
category: form
links:
  - label: CheckboxGroup
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/CheckboxGroup.vue
navigation.badge: New
---


## 用法

使用 `v-model` 指令来控制 CheckboxGroup 的值，或者使用 `default-value` prop 来设置初始值，当你不需要控制其状态时。

### Items

使用 `items` prop，它是一个字符串或数字数组：

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
  - CheckboxGroupValue[]
props:
  modelValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

你也可以传递一个包含以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- `disabled?: boolean`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
  - CheckboxGroupValue[]
props:
  modelValue:
    - 'system'
  items:
    - label: 'System'
      description: 'This is the first option.'
      value: 'system'
    - label: 'Light'
      description: 'This is the second option.'
      value: 'light'
    - label: 'Dark'
      description: 'This is the third option.'
      value: 'dark'
---
::

::caution
当使用对象时，你需要引用 `v-model` 指令或 `default-value` prop 中对象的 `value` 属性。
::

### Value Key

你可以使用 `value-key` prop 来更改用于设置值的属性。默认为 `value`。

::component-code
---
ignore:
  - modelValue
  - items
  - valueKey
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
  - CheckboxGroupValue[]
props:
  modelValue:
    - 'light'
  valueKey: 'id'
  items:
    - label: 'System'
      description: 'This is the first option.'
      id: 'system'
    - label: 'Light'
      description: 'This is the second option.'
      id: 'light'
    - label: 'Dark'
      description: 'This is the third option.'
      id: 'dark'
---
::

### 图例 (Legend)

使用 `legend` prop 来设置 CheckboxGroup 的图例。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
props:
  legend: 'Theme'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 颜色 (Color)

使用 `color` prop 来改变 CheckboxGroup 的颜色。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
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
  color: neutral
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 变体 (Variant)

使用 `variant` prop 来改变 CheckboxGroup 的变体（样式）。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
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
    - list
    - card
    - table
props:
  color: 'primary'
  variant: 'card'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 尺寸 (Size)

使用 `size` prop 来改变 CheckboxGroup 的尺寸。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  variant:
    - list
    - card
    - table
props:
  size: 'xl'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 方向 (Orientation)

使用 `orientation` prop 来改变 CheckboxGroup 的方向。默认为 `vertical`（垂直）。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  variant:
    - list
    - card
    - table
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 指示器 (Indicator)

使用 `indicator` prop 来改变指示器的位置或隐藏指示器。默认为 `start`。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  indicator:
    - start
    - end
    - hidden
  variant:
    - list
    - card
    - table
props:
  indicator: 'end'
  variant: 'card'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 禁用 (Disabled)

使用 `disabled` prop 来禁用 CheckboxGroup。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
props:
  disabled: true
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
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

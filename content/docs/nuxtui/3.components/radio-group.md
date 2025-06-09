---
title: RadioGroup
description: 一组单选按钮，用于从列表中选择一个选项。
category: form
links:
  - label: RadioGroup
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/RadioGroup.vue
---

## 用法

使用 `v-model` 指令控制 RadioGroup 的值，或者使用 `default-value` prop 设置初始值，当你不需要控制其状态时。

### Items

使用 `items` prop 作为字符串或数字数组：

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
  - RadioGroupItem[]
  - RadioGroupValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

你也可以传递一个对象数组，其中包含以下属性：

- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- `disabled?: boolean`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
  - RadioGroupValue
props:
  modelValue: 'system'
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
当使用对象时，你需要在 `v-model` 指令或 `default-value` prop 中引用对象的 `value` 属性。
::

### 值键 (Value Key)

你可以使用 `value-key` prop 更改用于设置值的属性。默认为 `value`。

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
  - RadioGroupItem[]
  - RadioGroupValue
props:
  modelValue: 'light'
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

使用 `legend` prop 设置 RadioGroup 的图例。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  legend: 'Theme'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 颜色 (Color)

使用 `color` prop 更改 RadioGroup 的颜色。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: neutral
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 变体 (Variant) :badge{label="New" class="align-text-top"}

使用 `variant` prop 更改 RadioGroup 的变体。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: 'primary'
  variant: 'table'
  defaultValue: 'pro'
  items:
    - label: 'Pro'
      value: 'pro'
      description: 'Tailored for indie hackers, freelancers and solo founders.'
    - label: 'Startup'
      value: 'startup'
      description: 'Best suited for small teams, startups and agencies.'
    - label: 'Enterprise'
      value: 'enterprise'
      description: 'Ideal for larger teams and organizations.'
---
::

### 尺寸 (Size)

使用 `size` prop 更改 RadioGroup 的尺寸。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  size: 'xl'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改 RadioGroup 的方向。默认为 `vertical`。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 指示器 (Indicator) :badge{label="New" class="align-text-top"}

使用 `indicator` prop 更改指示器的位置或隐藏指示器。默认为 `start`。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  indicator: 'end'
  variant: 'card'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 禁用 (Disabled)

使用 `disabled` prop 禁用 RadioGroup。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  disabled: true
  defaultValue: 'System'
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

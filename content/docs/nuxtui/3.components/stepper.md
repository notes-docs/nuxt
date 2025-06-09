---
description: 一组用于指示多步骤流程进度的步骤。
category: navigation
links:
  - label: Stepper
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Stepper.vue
---

## 用法

### Items

使用 `items` prop 作为对象数组，对象包含以下属性：

- `title?: string`{lang="ts-type"}
- `description?: AvatarProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

::note
点击项目以在步骤之间导航。
::

### 颜色 (Color)

使用 `color` prop 更改 Stepper 的颜色。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  color: neutral
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Stepper 的尺寸。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  size: xl
  items:
  - title: 'Address'
    description: 'Add your address here'
    icon: 'i-lucide-house'
  - title: 'Shipping'
    description: 'Set your preferred shipping method'
    icon: 'i-lucide-truck'
  - title: 'Checkout'
    description: 'Confirm your order'
  class: 'w-full'
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改 Stepper 的方向。默认为 `horizontal`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  orientation: vertical
  items:
  - title: 'Address'
    description: 'Add your address here'
    icon: 'i-lucide-house'
  - title: 'Shipping'
    description: 'Set your preferred shipping method'
    icon: 'i-lucide-truck'
  - title: 'Checkout'
    description: 'Confirm your order'
  class: 'w-full'
---
::

### 禁用 (Disabled)

使用 `disabled` prop 禁用通过步骤导航。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  disabled: true
  items:
  - title: 'Address'
    description: 'Add your address here'
    icon: 'i-lucide-house'
  - title: 'Shipping'
    description: 'Set your preferred shipping method'
    icon: 'i-lucide-truck'
  - title: 'Checkout'
    description: 'Confirm your order'
---
::

::note{to="#with-controls"}
这在你想强制使用控件导航时很有用。
::

## 示例

### 带控件

你可以使用按钮为步进器添加额外的控件。

:component-example{name="stepper-with-controls-example"}

### 控制活动项目

你可以通过使用 `default-value` prop 或 `v-model` 指令以及项目的索引来控制活动项目。

:component-example{name="stepper-model-value-example"}

::tip
如果提供了 `value`，你也可以传递其中一个项目的 value。
::

### 带内容插槽

使用 `#content` 插槽自定义每个项目的内容。

:component-example{name="stepper-content-slot-example"}

### 带自定义插槽

使用 `slot` 属性自定义特定项目。

你将可以使用以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}

:component-example{name="stepper-custom-slot-example"}

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

你可以使用 [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) 访问类型化的组件实例。

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

这将让你访问以下内容：

| Name | Type |
| ---- | ---- |
| `next`{lang="ts-type"} | `() => void`{lang="ts-type"} |
| `prev`{lang="ts-type"} | `() => void`{lang="ts-type"} |
| `hasNext`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} |
| `hasPrev`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} |

## Theme

:component-theme

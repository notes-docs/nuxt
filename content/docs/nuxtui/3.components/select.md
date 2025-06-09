---
description: 一个用于从选项列表中进行选择的下拉选择框。
category: form
links:
  - label: Select
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Select.vue
---

## 用法

使用 `v-model` 指令控制 Select 的值，或者使用 `default-value` prop 设置初始值，当你不需要控制其状态时。

### Items

使用 `items` prop 作为字符串、数字或布尔值的数组：

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

你也可以传递一个对象数组，其中包含以下属性：

- `label?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'backlog'
  items:
    - label: 'Backlog'
      value: 'backlog'
    - label: 'Todo'
      value: 'todo'
    - label: 'In Progress'
      value: 'in_progress'
    - label: 'Done'
      value: 'done'
  class: 'w-48'
---
::

::caution
当使用对象时，你需要引用 `v-model` 指令或 `default-value` prop 中对象的 `value` 属性。
::

你也可以向 `items` prop 传递一个数组的数组，以显示分隔的项目组。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

### 值键 (Value Key)

你可以使用 `value-key` prop 更改用于设置值的属性。默认为 `value`。

::component-code
---
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'backlog'
  valueKey: 'id'
  items:
    - label: 'Backlog'
      id: 'backlog'
    - label: 'Todo'
      id: 'todo'
    - label: 'In Progress'
      id: 'in_progress'
    - label: 'Done'
      id: 'done'
  class: 'w-48'
---
::

### 多选 (Multiple)

使用 `multiple` prop 允许多选，选定的项目将在触发器中用逗号分隔。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::caution
确保将一个数组传递给 `default-value` prop 或 `v-model` 指令。
::

### 占位符 (Placeholder)

使用 `placeholder` prop 设置占位符文本。

::component-code
---
prettier: true
ignore:
  - items
  - class
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 内容 (Content)

使用 `content` prop 控制 Select 内容的渲染方式，例如其 `align` 或 `side`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  modelValue: 'Backlog'
  content:
    align: center
    side: bottom
    sideOffset: 8
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 箭头 (Arrow)

使用 `arrow` prop 在 Select 上显示一个箭头。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - arrow
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  arrow: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 颜色 (Color)

使用 `color` prop 更改 Select 聚焦时的环形颜色。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  highlight: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
此处使用 `highlight` prop 来显示焦点状态。它在发生验证错误时内部使用。
::

### 变体 (Variant)

使用 `variant` prop 更改 Select 的变体。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  variant: subtle
  highlight: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Select 的尺寸。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  size: xl
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 图标 (Icon)

使用 `icon` prop 在 Select 内部显示一个 [Icon](/components/icon)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  icon: 'i-lucide-search'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 尾随图标 (Trailing Icon)

使用 `trailing-icon` prop 自定义尾随 [Icon](/components/icon)。默认为 `i-lucide-chevron-down`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.chevronDown` 键下全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.chevronDown` 键下全局自定义此图标。
:::
::

### 选中图标 (Selected Icon)

使用 `selected-icon` prop 自定义选中项目时的图标。默认为 `i-lucide-check`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.check` 键下全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.check` 键下全局自定义此图标。
:::
::

### 头像 (Avatar)

使用 `avatar` prop 在 Select 内部显示一个 [Avatar](/components/avatar)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Nuxt'
  avatar:
    src: 'https://github.com/nuxt.png'
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Community
  class: 'w-48'
---
::

### 加载中 (Loading)

使用 `loading` prop 在 Select 上显示一个加载图标。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  trailing: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 加载图标 (Loading Icon)

使用 `loading-icon` prop 自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
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

### 禁用 (Disabled)

使用 `disabled` prop 禁用 Select。

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
  - class
external:
  - items
props:
  disabled: true
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

## 示例

### 带项目类型

你可以使用 `type` 属性，将其设置为 `separator` 以在项目之间显示分隔符，或设置为 `label` 以显示标签。

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - type: 'label'
      label: 'Fruits'
    - Apple
    - Banana
    - Blueberry
    - Grapes
    - Pineapple
    - type: 'separator'
    - type: 'label'
      label: 'Vegetables'
    - Aubergine
    - Broccoli
    - Carrot
    - Courgette
    - Leek
  class: 'w-48'
---
::

### 项目中带图标

你可以使用 `icon` 属性在项目内部显示一个 [Icon](/components/icon)。

::component-example
---
collapse: true
name: 'select-items-icon-example'
---
::

::note
在此示例中，图标是根据所选项目的 `value` 属性计算得出的。
::

::tip
你也可以使用 `#leading` 插槽来显示选定的图标。
::

### 项目中带头像

你可以使用 `avatar` 属性在项目内部显示一个 [Avatar](/components/avatar)。

::component-example
---
collapse: true
name: 'select-items-avatar-example'
---
::

::note
在此示例中，头像是根据所选项目的 `value` 属性计算得出的。
::

::tip
你也可以使用 `#leading` 插槽来显示选定的头像。
::

### 项目中带标记 (Chip)

你可以使用 `chip` 属性在项目内部显示一个 [Chip](/components/chip)。

::component-example
---
collapse: true
name: 'select-items-chip-example'
---
::

::note
在此示例中，`#leading` 插槽用于显示选定的标记。
::

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'select-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 Select。
::

### 带旋转图标

这是一个带旋转图标的示例，它指示 Select 的打开状态。

::component-example
---
name: 'select-icon-example'
---
::

### 带获取的项目

你可以从 API 获取项目并在 Select 中使用它们。

::component-example
---
name: 'select-fetch-example'
collapse: true
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

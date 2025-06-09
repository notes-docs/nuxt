---
title: SelectMenu
description: 一个高级的可搜索选择元素。
category: form
links:
  - label: Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/SelectMenu.vue
---

## 用法

使用 `v-model` 指令控制 SelectMenu 的值，或者使用 `default-value` prop 设置初始值，当你不需要控制其状态时。

::tip
使用此组件而不是 [`Select`](/components/select)，以利用 Reka UI 的 [`Combobox`](https://reka-ui.com/docs/components/combobox) 组件，它提供搜索功能和多选功能。
::

::note
此组件类似于 [`InputMenu`](/components/input-menu)，但它使用 Select 而不是 Input，并且搜索功能在菜单内部。
::

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
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `onSelect?(e: Event): void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
  class: 'w-48'
---
::

::caution
与 [`Select`](/components/select) 组件不同，SelectMenu 默认期望将整个对象传递给 `v-model` 指令或 `default-value` prop。
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

你可以选择通过使用 `value-key` prop 绑定对象的单个属性而不是整个对象。默认为 `undefined`。

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'todo'
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

### 搜索输入 (Search Input)

使用 `search-input` prop 自定义或隐藏搜索输入（值为 `false` 时）。

你可以从 [Input](/components/input) 组件传递任何属性来自定义它。

::component-code
---
prettier: true
ignore:
  - modelValue.label
  - modelValue.icon
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    label: 'Backlog'
    icon: 'i-lucide-circle-help'
  searchInput:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Backlog
      icon: 'i-lucide-circle-help'
    - label: Todo
      icon: 'i-lucide-circle-plus'
    - label: In Progress
      icon: 'i-lucide-circle-arrow-up'
    - label: Done
      icon: 'i-lucide-circle-check'
  class: 'w-48'
---
::

::tip
你可以将 `search-input` prop 设置为 `false` 以隐藏搜索输入。
::

### 内容 (Content)

使用 `content` prop 控制 SelectMenu 内容的渲染方式，例如其 `align` 或 `side`。

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

使用 `arrow` prop 在 SelectMenu 上显示一个箭头。

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

使用 `color` prop 更改 SelectMenu 聚焦时的环形颜色。

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

使用 `variant` prop 更改 SelectMenu 的变体。

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

使用 `size` prop 更改 SelectMenu 的尺寸。

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

使用 `icon` prop 在 SelectMenu 内部显示一个 [Icon](/components/icon)。

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

使用 `avatar` prop 在 SelectMenu 内部显示一个 [Avatar](/components/avatar)。

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

使用 `loading` prop 在 SelectMenu 上显示一个加载图标。

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

使用 `disabled` prop 禁用 SelectMenu。

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
name: 'select-menu-items-icon-example'
---
::

::tip
你也可以使用 `#leading` 插槽来显示选定的图标。
::

### 项目中带头像

你可以使用 `avatar` 属性在项目内部显示一个 [Avatar](/components/avatar)。

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
你也可以使用 `#leading` 插槽来显示选定的头像。
::

### 项目中带标记 (Chip)

你可以使用 `chip` 属性在项目内部显示一个 [Chip](/components/chip)。

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
在此示例中，`#leading` 插槽用于显示选定的标记。
::

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'select-menu-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 SelectMenu。
::

### 控制搜索词

使用 `v-model:search-term` 指令控制搜索词。

::component-example
---
name: 'select-menu-search-term-example'
---
::

### 带旋转图标

这是一个带旋转图标的示例，它指示 SelectMenu 的打开状态。

::component-example
---
name: 'select-menu-icon-example'
---
::

### 带创建项

使用 `create-item` prop 允许用户添加不在预定义选项中的自定义值。

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
---
::

::note
默认情况下，当未找到匹配项时会显示创建选项。将其设置为 `always` 即使存在类似值也显示。
::

::tip{to="#emits"}
使用 `@create` 事件处理项目的创建。你将收到事件和项目作为参数。
::

### 带获取的项目

你可以从 API 获取项目并在 SelectMenu 中使用它们。

::component-example
---
collapse: true
name: 'select-menu-fetch-example'
---
::

### 带忽略过滤器

将 `ignore-filter` prop 设置为 `true` 以禁用内部搜索并使用你自己的搜索逻辑。

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
此示例使用 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) 来去抖 API 调用。
::

### 带过滤字段

使用带有字段数组的 `filter-fields` prop 进行过滤。默认为 `[labelKey]`。

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

### 作为 CountryPicker

此示例演示了将 SelectMenu 用作带延迟加载的国家选择器 - 只有当菜单打开时才获取国家。

::component-example
---
collapse: true
name: 'select-menu-countries-example'
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

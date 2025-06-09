---
title: InputMenu
description: 一个带实时建议的自动完成输入框。
category: form
links:
  - label: Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/InputMenu.vue
---

## 用法

使用 `v-model` 指令控制 InputMenu 的值，或者在不需要控制其状态时使用 `default-value` prop 设置初始值。

::tip
使用此组件而非 [`Input`](/components/input) 可以利用 Reka UI 的 [`Combobox`](https://reka-ui.com/docs/components/combobox) 组件提供的自动完成功能。
::

::note
此组件类似于 [`SelectMenu`](/components/select-menu)，但它使用 Input 而不是 Select。
::

### Items

使用 `items` prop，它是一个字符串、数字或布尔值数组：

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

你也可以传递一个包含以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `onSelect?(e: Event): void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
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
---
::

你也可以将一个数组的数组传递给 `items` prop，以显示分隔的项目组。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

### 值键 (Value Key)

你可以通过使用 `value-key` prop 来绑定对象的单个属性，而不是整个对象。默认为 `undefined`。

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
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
---
::

### 多选 (Multiple)

使用 `multiple` prop 允许进行多选，选定的项目将显示为徽章。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
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
---
::

::caution
请确保向 `default-value` prop 或 `v-model` 指令传递一个数组。
::

### 删除图标 (Delete Icon)

在 `multiple` 模式下，使用 `delete-icon` prop 来自定义徽章中的删除 [Icon](/components/icon)。默认为 `i-lucide-x`。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  deleteIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.close` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.close` 键全局自定义此图标。
:::
::

### 占位符 (Placeholder)

使用 `placeholder` prop 来设置占位符文本。

::component-code
---
prettier: true
ignore:
  - items
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

### 内容 (Content)

使用 `content` prop 来控制 InputMenu 内容的渲染方式，例如它的 `align` 或 `side`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 箭头 (Arrow)

使用 `arrow` prop 来显示 InputMenu 上的箭头。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 颜色 (Color)

使用 `color` prop 来改变 InputMenu 聚焦时的环形颜色。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::note
`highlight` prop 在这里用于显示焦点状态。它在发生验证错误时在内部使用。
::

### 变体 (Variant)

使用 `variant` prop 来改变 InputMenu 的变体。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 尺寸 (Size)

使用 `size` prop 来改变 InputMenu 的尺寸。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 图标 (Icon)

使用 `icon` prop 在 InputMenu 内部显示一个 [Icon](/components/icon)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 尾部图标 (Trailing Icon)

使用 `trailing-icon` prop 来自定义尾部 [Icon](/components/icon)。默认为 `i-lucide-chevron-down`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.chevronDown` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.chevronDown` 键全局自定义此图标。
:::
::

### 选中图标 (Selected Icon)

使用 `selected-icon` prop 来自定义项目选中时的图标。默认为 `i-lucide-check`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

### 头像 (Avatar)

使用 `avatar` prop 在 InputMenu 内部显示一个 [Avatar](/components/avatar)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 加载中 (Loading)

使用 `loading` prop 在 InputMenu 上显示加载图标。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 加载图标 (Loading Icon)

使用 `loading-icon` prop 来自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.loading` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.loading` 键全局自定义此图标。
:::
::

### 禁用 (Disabled)

使用 `disabled` prop 来禁用 InputMenu。

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
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
---
::

## 示例

### 使用项目类型

你可以使用 `type` 属性，将其设置为 `separator` 以在项目之间显示分隔符，或设置为 `label` 以显示标签。

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
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
---
::

### 项中带图标

你可以使用 `icon` 属性在项目中显示 [Icon](/components/icon)。

::component-example
---
collapse: true
name: 'input-menu-items-icon-example'
---
::

::tip
你也可以使用 `#leading` 插槽来显示选定的图标。
::

### 项中带头像

你可以使用 `avatar` 属性在项目中显示 [Avatar](/components/avatar)。

::component-example
---
collapse: true
name: 'input-menu-items-avatar-example'
---
::

::tip
你也可以使用 `#leading` 插槽来显示选定的头像。
::

### 项中带标签

你可以使用 `chip` 属性在项目中显示 [Chip](/components/chip)。

::component-example
---
collapse: true
name: 'input-menu-items-chip-example'
---
::

::note
在此示例中，`#leading` 插槽用于显示选定的标签。
::

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'input-menu-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 InputMenu。
::

### 聚焦时控制打开状态

你也可以使用 `@focus` 指令来控制打开状态。

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### 控制搜索词

使用 `v-model:search-term` 指令来控制搜索词。

::component-example
---
name: 'input-menu-search-term-example'
---
::

### 带旋转图标

这是一个带旋转图标的示例，它指示 InputMenu 的打开状态。

::component-example
---
name: 'input-menu-icon-example'
---
::

### 带创建项

使用 `create-item` prop 允许用户添加不在预定义选项中的自定义值。

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
默认情况下，当未找到匹配项时，会显示创建选项。将其设置为 `always` 即使存在相似值也显示。
::

::tip{to="#emits"}
使用 `@create` 事件处理项目的创建。你将收到事件和项目作为参数。
::

### 带获取的项

你可以从 API 获取项目并在 InputMenu 中使用它们。

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
---
::

### 带忽略过滤器

将 `ignore-filter` prop 设置为 `true` 以禁用内部搜索并使用你自己的搜索逻辑。

::component-example
---
collapse: true
name: 'input-menu-ignore-filter-example'
---
::

::note
此示例使用 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) 来防抖 API 调用。
::

### 带过滤字段

使用 `filter-fields` prop 和一个字段数组进行过滤。默认为 `[labelKey]`。

::component-example
---
collapse: true
name: 'input-menu-filter-fields-example'
---
::

### 作为 CountryPicker

此示例演示了将 InputMenu 用作具有延迟加载功能的国家选择器 - 国家仅在菜单打开时才获取。

::component-example
---
collapse: true
name: 'input-menu-countries-example'
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

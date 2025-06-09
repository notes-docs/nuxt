---
title: CommandPalette
description: 一个由 Fuse.js 提供支持的命令面板，用于高效的模糊匹配。
category: navigation
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/CommandPalette.vue
---

## 用法

使用 `v-model` 指令控制 CommandPalette 的值，或者使用 `default-value` prop 在不需要控制其状态时设置初始值。

::tip{to="#control-selected-items"}
你也可以使用 `@update:model-value` 事件来监听选定的项目。
::

### 组 (Groups)

CommandPalette 组件根据用户输入筛选组并按相关性对匹配的命令进行排序。它提供动态、即时的搜索结果，以便高效地发现命令。使用 `groups` prop，它是一个包含以下属性的对象数组：

- `id: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `items?: CommandPaletteItem[]`{lang="ts-type"}
- [`ignoreFilter?: boolean`{lang="ts-type"}](#with-ignore-filter)
- [`postFilter?: (searchTerm: string, items: T[]) => T[]`{lang="ts-type"}](#with-post-filtered-items)
- `highlightedIcon?: string`{lang="ts-type"}

::caution
每个组必须提供一个 `id`，否则该组将被忽略。
::

每个组都包含一个 `items` 对象数组，用于定义命令。每个项目可以具有以下属性：

- `prefix?: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `suffix?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `chip?: ChipProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- `active?: boolean`{lang="ts-type"}
- `loading?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?(e?: Event): void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue,}`{lang="ts-type"}

你可以传递 [Link](/components/link#props) 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
        - label: 'Sylvain Marroufin'
          suffix: 'smarroufin'
          avatar:
            src: 'https://github.com/smarroufin.png'
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
        - label: 'Haytham A. Salama'
          suffix: 'Haythamasalama'
          avatar:
            src: 'https://github.com/Haythamasalama.png'
        - label: 'Daniel Roe'
          suffix: 'danielroe'
          avatar:
            src: 'https://github.com/danielroe.png'
        - label: 'Neil Richter'
          suffix: 'noook'
          avatar:
            src: 'https://github.com/noook.png'
  class: 'flex-1'
---
::

### 多选 (Multiple)

使用 `multiple` prop 允许选择多个项目。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue: []
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
        - label: 'Sylvain Marroufin'
          suffix: 'smarroufin'
          avatar:
            src: 'https://github.com/smarroufin.png'
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
        - label: 'Haytham A. Salama'
          suffix: 'Haythamasalama'
          avatar:
            src: 'https://github.com/Haythamasalama.png'
        - label: 'Daniel Roe'
          suffix: 'danielroe'
          avatar:
            src: 'https://github.com/danielroe.png'
        - label: 'Neil Richter'
          suffix: 'noook'
          avatar:
            src: 'https://github.com/noook.png'
  class: 'flex-1'
---
::

::caution
确保将数组传递给 `default-value` prop 或 `v-model` 指令。
::

### Placeholder

使用 `placeholder` prop 来更改占位符文本。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  placeholder: 'Search an app...'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Icon

使用 `icon` prop 来自定义输入框的 [Icon](/components/icon)。默认为 `i-lucide-search`。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  icon: 'i-lucide-box'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.search` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.search` 键全局自定义此图标。
:::
::

### Loading

使用 `loading` prop 在 CommandPalette 上显示加载图标。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  loading: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Loading Icon

使用 `loading-icon` prop 来自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  loading: true
  loadingIcon: 'i-lucide-loader'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
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

### Disabled

使用 `disabled` prop 来禁用 CommandPalette。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  disabled: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### 关闭 (Close)

使用 `close` prop 来显示一个 [Button](/components/button) 来关闭 CommandPalette。

::tip
当点击关闭按钮时，会发出 `update:open` 事件。
::

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  close: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

你可以传递 [Button](/components/button) 组件的任何属性来自定义它。

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - close.color
  - close.variant
  - groups
  - class
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### 关闭图标 (Close Icon)

使用 `close-icon` prop 来自定义关闭按钮的 [Icon](/components/icon)。默认为 `i-lucide-x`。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
class: '!p-0'
props:
  autofocus: false
  close: true
  closeIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
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

## 示例

### 控制选定的项目

你可以通过使用 `default-value` prop 或 `v-model` 指令，通过在每个项目上使用 `onSelect` 字段，或者通过使用 `@update:model-value` 事件来控制选定的项目。

::component-example
---
collapse: true
name: 'command-palette-select-example'
class: '!p-0'
props:
  autofocus: false
---
::

### 控制搜索词

使用 `v-model:search-term` 指令来控制搜索词。

::component-example
---
collapse: true
name: 'command-palette-search-term-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
此示例使用 `@update:model-value` 事件在选择项目时重置搜索词。
::

### 使用获取的项

你可以从 API 获取项目并在 CommandPalette 中使用它们。

::component-example
---
collapse: true
name: 'command-palette-fetch-example'
class: '!p-0'
props:
  autofocus: false
---
::

### 使用忽略过滤器

你可以在组上将 `ignoreFilter` 字段设置为 `true`，以禁用内部搜索并使用你自己的搜索逻辑。

::component-example
---
collapse: true
name: 'command-palette-ignore-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
此示例使用 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) 来防抖 API 调用。
::

### 使用过滤的项

你可以在组上使用 `postFilter` 字段在搜索发生后过滤项目。

::component-example
---
collapse: true
name: 'command-palette-post-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Start typing to see items with higher level appear.
::

### 使用自定义 Fuse 搜索

你可以使用 `fuse` prop 来覆盖 [useFuse](https://vueuse.org/integrations/useFuse) 的选项，其默认值为：

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
`fuseOptions` 是 [Fuse.js](https://www.fusejs.io/api/options.html) 的选项，`resultLimit` 是返回的最大结果数量，`matchAllWhenSearchEmpty` 是一个布尔值，表示当搜索词为空时是否匹配所有项目。
::

例如，你可以设置 `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"} 来突出显示项目中的搜索词。

::component-example
---
collapse: true
name: 'command-palette-fuse-example'
class: '!p-0'
props:
  autofocus: false
---
::

### 使用弹出框

你可以在 [Popover](/components/popover) 的内容中使用 CommandPalette 组件。

::component-example
---
collapse: true
name: 'popover-command-palette-example'
props:
  autofocus: false
---
::

### 使用模态框

你可以在 [Modal](/components/modal) 的内容中使用 CommandPalette 组件。

::component-example
---
collapse: true
name: 'modal-command-palette-example'
props:
  autofocus: false
---
::

### 使用抽屉

你可以在 [Drawer](/components/drawer) 的内容中使用 CommandPalette 组件。

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
props:
  autofocus: false
---
::

### 监听打开状态

当使用 `close` prop 时，你可以监听按钮点击时发出的 `update:open` 事件。

::component-example
---
collapse: true
name: 'command-palette-open-example'
props:
  autofocus: false
---
::

::note
例如，当在 [`Modal`](/components/modal) 内部使用 CommandPalette 时，这会很有用。
::

### 使用自定义插槽

使用 `slot` 属性来自定义特定项目或组。

你将可以使用以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

- `#{{ group.slot }}`{lang="ts-type"}
- `#{{ group.slot }}-leading`{lang="ts-type"}
- `#{{ group.slot }}-label`{lang="ts-type"}
- `#{{ group.slot }}-trailing`{lang="ts-type"}

::component-example
---
name: 'command-palette-custom-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip{to="#slots"}
你也可以使用 `#item`, `#item-leading`, `#item-label` 和 `#item-trailing` 插槽来自定义所有项目。
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

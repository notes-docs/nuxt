---
description: 一个用于显示和交互分层数据结构的树状视图组件。
category: data
links:
  - label: Tree
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Tree.vue
---

## 用法

### Items

使用 `items` prop 作为对象数组，对象包含以下属性：

- `icon?: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `defaultExpanded?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `children?: TreeItem[]`{lang="ts-type"}
- `onToggle?(e: Event): void`{lang="ts-type"}
- `onSelect?(e?: Event): void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{lang="ts-type"}

::note
每个项目都需要一个唯一标识符。组件将使用 `value` prop 作为标识符，如果未提供 `value`，则会回退到 `label`。必须提供其中之一才能使组件正常工作。
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 多选 (Multiple)

使用 `multiple` prop 允许选择多个项目。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
props:
  multiple: true
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 颜色 (Color)

使用 `color` prop 更改 Tree 的颜色。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
props:
  color: neutral
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Tree 的尺寸。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
props:
  size: xl
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 尾随图标 (Trailing Icon)

使用 `trailing-icon` prop 自定义父节点的尾随 [Icon](/components/icon)。默认为 `i-lucide-chevron-down`。

::note
如果为某个项目指定了图标，它将始终优先于这些 prop。
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
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

### 展开/折叠图标 (Expanded Icon)

使用 `expanded-icon` 和 `collapsed-icon` prop 自定义父节点展开或折叠时的图标。默认为 `i-lucide-folder-open` 和 `i-lucide-folder`。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
props:
  expandedIcon: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.folder` 和 `ui.icons.folderOpen` 键下全局自定义这些图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.folder` 和 `ui.icons.folderOpen` 键下全局自定义这些图标。
:::
::

### 禁用 (Disabled)

使用 `disabled` prop 防止用户与 Tree 进行任何交互。

::note
你也可以使用 `item.disabled` 禁用单个项目。
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultExpanded: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

## 示例

### 控制选定项目

你可以通过使用 `default-value` prop 或 `v-model` 指令来控制选定的项目。

::component-example
---
name: 'tree-model-value-example'
collapse: true
props:
  class: 'w-60'
---
::

如果你想阻止某个项目被选中，可以使用 `item.onSelect()`{lang="ts-type"} 属性：

::component-example
---
name: 'tree-on-select-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
这允许你在不选择父项目的情况下展开或折叠它。
::

### 控制展开项目

你可以通过使用 `default-expanded` prop 或 `v-model` 指令来控制展开的项目。

::component-example
---
name: 'tree-expanded-example'
collapse: true
props:
  class: 'w-60'
---
::

如果你想阻止某个项目被展开，可以使用 `item.onToggle()`{lang="ts-type"} 属性：

::component-example
---
name: 'tree-on-toggle-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
这允许你在不展开或折叠其子项的情况下选择父项目。
::

### 带自定义插槽

使用 `slot` 属性自定义特定项目。

你将可以使用以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
name: 'tree-custom-slot-example'
collapse: true
props:
  class: 'w-60'
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

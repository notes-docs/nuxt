---
description: 一个用于输入多行文本的 textarea 元素。
category: form
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Textarea.vue
---

## 用法

使用 `v-model` 指令控制 Textarea 的值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### 行数 (Rows)

使用 `rows` prop 设置行数。默认为 `3`。

::component-code
---
props:
  rows: 12
---
::

### 占位符 (Placeholder)

使用 `placeholder` prop 设置占位符文本。

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### 自动调整大小 (Autoresize)

使用 `autoresize` prop 启用 Textarea 高度的自动调整。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea.'
  autoresize: true
---
::

使用 `maxrows` prop 设置自动调整大小时的最大行数。如果设置为 `0`，Textarea 将无限增长。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.'
  maxrows: 4
  autoresize: true
---
::

### 颜色 (Color)

使用 `color` prop 更改 Textarea 获得焦点时的环形颜色。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Type something...'
---
::

::note
此处使用 `highlight` prop 来显示焦点状态。在发生验证错误时，它在内部使用。
::

### 变体 (Variant)

使用 `variant` prop 更改 Textarea 的变体。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Type something...'
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Textarea 的尺寸。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### 图标 (Icon) :badge{label="New" class="align-text-top"}

使用 `icon` prop 在 Textarea 内部显示一个 [Icon](/components/icon)。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

使用 `leading` 和 `trailing` prop 设置图标位置，或者使用 `leading-icon` 和 `trailing-icon` prop 为每个位置设置不同的图标。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
  rows: 1
---
::

### 头像 (Avatar) :badge{label="New" class="align-text-top"}

使用 `avatar` prop 在 Textarea 内部显示一个 [Avatar](/components/avatar)。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  avatar:
    src: 'https://github.com/nuxt.png'
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

### 加载中 (Loading) :badge{label="New" class="align-text-top"}

使用 `loading` prop 在 Textarea 上显示一个加载图标。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
  rows: 1
---
::

### 加载图标 (Loading Icon) :badge{label="New" class="align-text-top"}

使用 `loading-icon` prop 自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
  rows: 1
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

使用 `disabled` prop 禁用 Textarea。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

通过模板引用访问组件时，可以使用以下内容：

| Name | Type |
| ---- | ---- |
| `textareaRef`{lang="ts-type"} | `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"} |

## Theme

:component-theme

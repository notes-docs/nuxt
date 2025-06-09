---
description: 一个用于输入文本的输入元素。
category: form
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Input.vue
---

## 用法

使用 `v-model` 指令来控制 Input 的值。

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

### 类型 (Type)

使用 `type` prop 来改变输入类型。默认为 `text`。

一些类型已在它们自己的组件中实现，例如 [Checkbox](/components/checkbox), [Radio](/components/radio-group), [InputNumber](/components/input-number) 等，其他类型则已进行了样式化，例如 `file`。

::component-code
---
items:
  type:
    - text
    - number
    - password
    - search
    - file
props:
  type: 'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
你可以在 MDN Web Docs 上查看所有可用类型。
::

### 占位符 (Placeholder)

使用 `placeholder` prop 来设置占位符文本。

::component-code
---
props:
  placeholder: 'Search...'
---
::

### 颜色 (Color)

使用 `color` prop 来改变 Input 聚焦时的环形颜色。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Search...'
---
::

::note
`highlight` prop 在这里用于显示焦点状态。它在发生验证错误时在内部使用。
::

### 变体 (Variant)

使用 `variant` prop 来改变 Input 的变体。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Search...'
---
::

### 尺寸 (Size)

使用 `size` prop 来改变 Input 的尺寸。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### 图标 (Icon)

使用 `icon` prop 在 Input 内部显示一个 [Icon](/components/icon)。

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
---
::

使用 `leading` 和 `trailing` props 来设置图标位置，或者使用 `leading-icon` 和 `trailing-icon` props 来为每个位置设置不同的图标。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
---
::

### 头像 (Avatar)

使用 `avatar` prop 在 Input 内部显示一个 [Avatar](/components/avatar)。

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
---
::

### 加载中 (Loading)

使用 `loading` prop 在 Input 上显示加载图标。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
---
::

### 加载图标 (Loading Icon)

使用 `loading-icon` prop 来自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
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

使用 `disabled` prop 来禁用 Input。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## 示例

### 使用清除按钮

你可以在 `#trailing` 插槽内放置一个 [Button](/components/button) 来清除 Input。

::component-example
---
name: 'input-clear-button-example'
---
::

### 使用复制按钮

你可以在 `#trailing` 插槽内放置一个 [Button](/components/button) 来将值复制到剪贴板。

::component-example
---
name: 'input-copy-button-example'
---
::

### 使用密码切换

你可以在 `#trailing` 插槽内放置一个 [Button](/components/button) 来切换密码可见性。

::component-example
---
name: 'input-password-toggle-example'
---
::

### 使用密码强度指示器

你可以使用 [Progress](/components/progress) 组件来显示密码强度指示器。

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

### 使用字符限制

你可以使用 `#trailing` 插槽来为 Input 添加字符限制。

::component-example
---
name: 'input-character-limit-example'
---
::

### 使用键盘快捷键

你可以在 `#trailing` 插槽内使用 [Kbd](/components/kbd) 组件来为 Input 添加键盘快捷键。

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/composables/define-shortcuts"}
此示例使用 `defineShortcuts` 可组合项在按下 :kbd{value="/"} 键时聚焦 Input。
::

### 使用浮动标签

你可以使用 `#default` 插槽来为 Input 添加浮动标签。

::component-example
---
name: 'input-floating-label-example'
---
::

### 使用 FormField

你可以在 [FormField](/components/form-field) 组件内使用 Input 来显示标签、帮助文本、必填指示符等。

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/components/form"}
当在 **Form** 组件中使用时，它还提供验证和错误处理。
::

### 在 ButtonGroup 内

你可以在 [ButtonGroup](/components/button-group) 组件内使用 Input 来将多个元素组合在一起。

::component-example
---
name: 'input-button-group-example'
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

通过模板引用访问组件时，你可以使用以下内容：

| Name | Type |
| ---- | ---- |
| `inputRef`{lang="ts-type"} | `Ref<HTMLInputElement \| null>`{lang="ts-type"} |

## Theme

:component-theme

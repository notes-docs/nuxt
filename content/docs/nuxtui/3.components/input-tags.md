---
title: InputTags
description: 一个显示交互式标签的输入元素。
category: form
links:
  - label: InputTags
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/InputTags.vue
navigation.badge: Soon
---

## 用法

使用 `v-model` 指令来控制 InputTags 的值。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
---
::

当您不需要控制其状态时，使用 `default-value` prop 来设置初始值。

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['Vue']
---
::

### 占位符

使用 `placeholder` prop 来设置占位符文本。

::component-code
---
props: 
  placeholder: 'Enter tags...'
---
::

### 颜色

使用 `color` prop 来改变 InputTags 聚焦时的环形颜色。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  color: neutral
  highlight: true
---
::

::note
这里的 `highlight` prop 用于显示聚焦状态。它在发生验证错误时内部使用。
::

### 变体

使用 `variant` prop 来改变 InputTags 的外观。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  variant: subtle
  color: neutral
  highlight: false
---
::

### 尺寸

使用 `size` prop 来调整 InputTags 的尺寸。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  size: xl
---
::

### 图标

使用 `icon` prop 来在 InputTags 内部显示一个 [Icon](https://www.google.com/search?q=/components/icon)。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  icon: 'i-lucide-search'
  size: md
  variant: outline
---
::

::note
使用 `leading` 和 `trailing` prop 来设置图标位置，或者使用 `leading-icon` 和 `trailing-icon` prop 来为每个位置设置不同的图标。
::

### 头像

使用 `avatar` prop 来在 InputTags 内部显示一个 [Avatar](https://www.google.com/search?q=/components/avatar)。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  avatar:
    src: '[https://github.com/vuejs.png](https://github.com/vuejs.png)'
  size: md
  variant: outline
---
::

### 删除图标

使用 `delete-icon` prop 来定制标签中的删除 [Icon](https://www.google.com/search?q=/components/icon)。默认为 `i-lucide-x`。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  deleteIcon: 'i-lucide-trash'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
您可以在 `app.config.ts` 中通过 `ui.icons.close` 键全局定制此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
您可以在 `vite.config.ts` 中通过 `ui.icons.close` 键全局定制此图标。
:::
::

### 加载中

使用 `loading` prop 来在 InputTags 上显示一个加载图标。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  trailing: false
---
::

### 加载图标

使用 `loading-icon` prop 来定制加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  loadingIcon: 'i-lucide-loader'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
您可以在 `app.config.ts` 中通过 `ui.icons.loading` 键全局定制此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
您可以在 `vite.config.ts` 中通过 `ui.icons.loading` 键全局定制此图标。
:::
::

### 禁用

使用 `disabled` prop 来禁用 InputTags。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  disabled: true
---
::

## 示例

### 在表单字段中

您可以在 [FormField](/ui/components/form-field) 组件中使用 InputTags 来显示标签、帮助文本、必填指示器等。

::component-example
---
name: 'input-tags-form-field-example'
---
::

## API

### 属性

:component-props

### 插槽

:component-slots

### 事件

:component-emits

### 暴露

通过模板引用访问组件时，您可以使用以下内容：

| 名称                       | 类型                                            |
| -------------------------- | ----------------------------------------------- |
| `inputRef`{lang="ts-type"} | `Ref<InstanceType<typeof TagsInputInput> \| null>`{lang="ts-type"} |

## 主题

:component-theme

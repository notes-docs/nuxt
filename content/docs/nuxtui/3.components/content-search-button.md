---
title: ContentSearchButton
description: 一个预设样式的按钮，用于打开内容搜索模态框。
category: element
module: ui-pro
links:
  - label: Button
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/button
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="https://ui.nuxt.com/getting-started/content"}
此组件仅在安装了 `@nuxt/content` 模块时可用。
::

## 用法 (Usage)

`ContentSearchButton` 组件用于打开 **`ContentSearch`** 模态框。

::code-preview

TODO

#code
```vue
<template>
  <UContentSearchButton />
</template>
```
::

它扩展了 `Button` 组件，因此你可以传递任何属性，例如 `color`、`variant`、`size` 等。

::code-preview

TODO

#code
```vue
<template>
  <UContentSearchButton variant="subtle" />
</template>
```
::

::note{to="/doc/components/content-search-button#collapsed"}
当未折叠时，按钮默认 `color="neutral"` 和 `variant="outline"`；当折叠时，默认 `variant="ghost"`。
::

### 折叠 (Collapsed)

使用 `collapsed` prop 显示按钮的标签和键盘快捷键。默认为 `true`。

::code-preview

TODO

#code
```vue
<template>
  <UContentSearchButton :collapsed="false" />
</template>
```
::


### 键盘快捷键 (Kbds)

使用 `kbds` prop 在按钮中显示键盘按键。默认为 `['meta', 'K']`，以匹配 `ContentSearch` 组件的默认快捷键。

::code-preview

TODO

#code
```vue
<template>
  <UContentSearchButton :collapsed="false" :kbds="['alt', 'O']" />
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

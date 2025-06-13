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

::component-code
---
pro: true
prefix: 'content'
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
---
::

它扩展了 `Button` 组件，因此你可以传递任何属性，例如 `color`、`variant`、`size` 等。

::component-code
---
pro: true
prefix: 'content'
prettier: true
ignore:
  - class
  - subtle
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  variant: 'subtle'
---
::

::note{to="/doc/components/content-search-button#collapsed"}
当未折叠时，按钮默认 `color="neutral"` 和 `variant="outline"`；当折叠时，默认 `variant="ghost"`。
::

### 折叠 (Collapsed)

使用 `collapsed` prop 显示按钮的标签和键盘快捷键。默认为 `true`。

::component-code
---
pro: true
prefix: 'content'
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  collapsed: false
---
::

### 键盘快捷键 (Kbds)

使用 `kbds` prop 在按钮中显示键盘按键。默认为 `['meta', 'K']`，以匹配 `ContentSearch` 组件的默认快捷键。

::component-code
---
pro: true
prefix: 'content'
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  collapsed: false
  kbds:
    - alt
    - o
---
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

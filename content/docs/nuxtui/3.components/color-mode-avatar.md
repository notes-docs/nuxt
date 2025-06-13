---
title: ColorModeAvatar
description: 一个在浅色和深色模式下具有不同源的头像。
category: element
module: ui-pro
links:
  - label: Avatar
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/avatar
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/color-mode/ColorModeAvatar.vue
---

## 用法 (Usage)

`ColorModeAvatar` 组件扩展了 `Avatar` 组件，因此你可以传递任何属性，例如 `size`、`icon` 等。

使用 `light` 和 `dark` prop 来定义浅色和深色模式下的源。

::component-code
---
pro: true
prefix: 'color-mode'
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: 'max-w-md'
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
---
::

::note
在浅色和深色模式之间切换以查看不同的图片：**系统** TODO
::

## API

### 属性 (Props)

:component-props

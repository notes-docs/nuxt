---
title: ColorModeImage
description: 一个在浅色和深色模式下具有不同源的图片元素。
category: element
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/color-mode/ColorModeImage.vue
---

## 用法 (Usage)

`ColorModeImage` 组件在安装 `@nuxt/image` 时使用 `<NuxtImg>` 组件，否则回退到 `img` 标签。

::code-preview

TODO

#code
```vue
<template>
  <UColorModeImage
    light="https://picsum.photos/id/29/400"
    dark="https://picsum.photos/id/46/400"
    :width="200"
    :height="200"
  />
</template>
```
::

::note
在浅色和深色模式之间切换以查看不同的图片：**系统** TODO
::

## API


### 属性 (Props)

:component-props

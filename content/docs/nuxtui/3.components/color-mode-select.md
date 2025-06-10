---
title: ColorModeSelect
description: 一个用于在系统、深色和浅色模式之间切换的选择器。
category: element
module: ui-pro
links:
  - label: SelectMenu  选择菜单
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/select-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/color-mode/ColorModeSelect.vue
---


## 用法 (Usage)

`ColorModeSelect` 组件扩展了 `SelectMenu` 组件，因此你可以传递任何属性，例如 `color`、`variant`、`size` 等。

::code-preview

TODO

#code
```vue
<template>
  <UColorModeSelect />
</template>
```
::

## 示例 (Examples)

### 自定义图标 (With custom icons)

使用 `app.config.ts` 中的 `ui.icons` 属性自定义图标：

```typescript [app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
      system: 'i-ph-desktop',
      light: 'i-ph-sun',
      dark: 'i-ph-moon'
    }
  }
})
```

## API

### 属性 (Props)

:component-props

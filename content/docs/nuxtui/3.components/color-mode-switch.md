---
title: ColorModeSwitch
description: 一个用于在浅色和深色模式之间切换的开关。
category: element
module: ui-pro
links:
  - label: Switch
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/switch
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/color-mode/ColorModeSwitch.vue
---

## 用法 (Usage)

`ColorModeSwitch` 组件扩展了 `Switch` 组件，因此你可以传递任何属性，例如 `color`、`size` 等。

::code-preview

TODO

#code
```vue
<template>
  <UColorModeSwitch />
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
      light: 'i-ph-sun',
      dark: 'i-ph-moon'
    }
  }
})
```

## API

### 属性 (Props)

:component-props

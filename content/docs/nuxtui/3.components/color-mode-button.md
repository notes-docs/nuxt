---
title: ColorModeButton
description: 一个用于在浅色和深色模式之间切换的按钮。
category: element
module: ui-pro
links:
  - label: Button  按钮
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/button
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/color-mode/ColorModeButton.vue
---

## 用法 (Usage)

`ColorModeButton` 组件扩展了 `Button` 组件，因此你可以传递任何属性，例如 `color`、`variant`、`size` 等。

::code-preview

TODO

#code
```vue
<template>
  <UColorModeButton />
</template>
```
::

::note
该按钮默认 `color="neutral"` 和 `variant="ghost"`。
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

### 带有回退插槽 (With fallback slot)

由于该按钮被包裹在 `ClientOnly` 组件中，你可以传递一个 `fallback` 插槽来在组件加载时显示一个占位符。

::code-preview

TODO

#code
```vue
<template>
  <UColorModeButton>
    <template #fallback>
      <UButton loading variant="ghost" color="neutral" />
    </template>
  </UColorModeButton>
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

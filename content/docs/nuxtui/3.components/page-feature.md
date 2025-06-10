---
title: PageFeature
description: 一个用于展示你应用程序关键特性的组件。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageFeature.vue
---

## 用法

`PageFeature` 组件被 `PageSection` 组件用于显示**特性**。

### **标题**

使用 `title` 属性设置特性的标题。

::code-preview

TODO

#code
```html
<template>
  <UPageFeature title="Theme" />
</template>
```
::

### **描述**

使用 `description` 属性设置特性的描述。

::code-preview

TODO

#code
```vue
<template>
  <UPageFeature
    title="Theme"
    description="Customize Nuxt UI with your own colors, fonts, and more."
  />
</template>
```
::

### **图标**

使用 `icon` 属性设置特性的图标。

::code-preview

TODO

#code
```vue
<template>
  <UPageFeature
    title="Theme"
    description="Customize Nuxt UI with your own colors, fonts, and more."
    icon="i-lucide-swatch-book"
  />
</template>
```
::

### **链接**

你可以传递 `<NuxtLink>` 组件的任何属性，例如 `to`、`target`、`rel` 等。

::code-preview

TODO

#code
```vue
<template>
  <UPageFeature
    title="Theme"
    description="Customize Nuxt UI with your own colors, fonts, and more."
    icon="i-lucide-swatch-book"
    to="/getting-started/theme"
  />
</template>
```
::

### **方向**

使用 `orientation` 属性更改特性的方向。默认为 `horizontal`。

::code-preview

TODO

#code
```vue
<template>
  <UPageFeature
    orientation="vertical"
    title="Theme"
    description="Customize Nuxt UI with your own colors, fonts, and more."
    icon="i-lucide-swatch-book"
  />
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

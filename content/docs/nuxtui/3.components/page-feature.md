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

`PageFeature` 组件被 `PageSection` 组件用于显示 **特性**。

### **标题**

使用 `title` 属性设置特性的标题。

::component-code
---
pro: true
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  title: 'Theme'
---
::

### **描述**

使用 `description` 属性设置特性的描述。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  title: 'Theme'
  description: "Customize Nuxt UI with your own colors, fonts, and more."
---
::

### **图标**

使用 `icon` 属性设置特性的图标。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  title: 'Theme'
  description: "Customize Nuxt UI with your own colors, fonts, and more."
  icon: 'i-lucide-swatch-book'
---
::

### **链接**

你可以传递 `<NuxtLink>` 组件的任何属性，例如 `to`、`target`、`rel` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - to
  - icon
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  title: 'Theme'
  description: "Customize Nuxt UI with your own colors, fonts, and more."
  icon: 'i-lucide-swatch-book'
  to: '/getting-started/theme'
---
::

### **方向**

使用 `orientation` 属性更改特性的方向。默认为 `horizontal`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - icon
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  orientation: "vertical"
  title: 'Theme'
  description: "Customize Nuxt UI with your own colors, fonts, and more."
  icon: 'i-lucide-swatch-book'
---
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

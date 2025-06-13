---
title: PageSection
description: 页面响应式区块。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageSection.vue
---

## 用法

`PageSection` 组件将您的内容包裹在 **Container** 中，同时保持全宽的灵活性，便于添加背景颜色、图片或图案。它提供了一种灵活的方式来展示内容，并在默认插槽中包含一个插图。

TODO

在 `PageHero` 组件之后使用：

```vue{4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### 标题

使用 `title` prop 设置区块的标题。

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
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
---
::

### 描述

使用 `description` prop 设置区块的描述。

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
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
---
::

### 标题

使用 `headline` prop 设置区块的标题。

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
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  headline: 'Features'
---
::

### 图标

使用 `icon` prop 设置区块的图标。

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
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
---
::

### 特性

使用 `features` prop 以对象数组的形式在描述下方显示 **PageFeature** 列表，对象包含以下属性：

* `title?`: `string`
* `description?`: `string`
* `icon?`: `string`
* `orientation?`: `'horizontal' | 'vertical'`

您可以传递 **Link** 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - features
hide:
  - class
external:
  - features
externalTypes:
props:
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/getting-started/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/getting-started/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/getting-started/color-mode'
---
::

### 链接

使用 `links` prop 在描述下方显示 **Button** 列表。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - links
hide:
  - class
external:
  - links
externalTypes:
props:
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  links:
    - label: 'Get started'
      to: '/getting-started'
      icon: 'i-lucide-square-play'
      color: 'neutral'
    - label: 'Explore components'
      to: '/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### 方向

使用 `orientation` prop 更改默认插槽的方向。默认为 `vertical`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - icon
  - features
  - links
hide:
  - class
external:
  - features
  - links
externalTypes:
slots:
  default: |

    <img
    src="https://picsum.photos/704/1294"
    width="352"
    height="647"
    alt="Illustration"
    class="w-full rounded-lg"
    />

props:
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: "horizontal"
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/getting-started/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/getting-started/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/getting-started/color-mode'
  links:
    - label: 'Get started'
      to: '/getting-started'
      icon: 'i-lucide-square-play'
      color: 'neutral'
    - label: 'Explore components'
      to: '/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
<img
  src="https://picsum.photos/704/1294"
  width="352"
  height="647"
  alt="Illustration"
  class="w-full rounded-lg"
/>
::

### 反向

使用 `reverse` prop 反转默认插槽的方向。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - icon
  - features
  - links
hide:
  - class
external:
  - features
  - links
externalTypes:
slots:
  default: |

    <img
    src="https://picsum.photos/704/1294"
    width="352"
    height="647"
    alt="Illustration"
    class="w-full rounded-lg"
    />

props:
  class: 'w-ful'
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: "horizontal"
  reverse: true
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/getting-started/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/getting-started/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/getting-started/color-mode'
  links:
    - label: 'Get started'
      to: '/getting-started'
      icon: 'i-lucide-square-play'
      color: 'neutral'
    - label: 'Explore components'
      to: '/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
<img
  src="https://picsum.photos/704/1294"
  width="352"
  height="647"
  alt="Illustration"
  class="w-full rounded-lg"
/>
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


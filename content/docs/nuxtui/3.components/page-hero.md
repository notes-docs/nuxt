---
title: PageHero
description: 一个响应式页面英雄组件。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageHero.vue
---

## 用法

`PageHero` 组件将你的内容包裹在一个 **Container** 中，同时保持全宽灵活性，方便添加背景颜色、图像或图案。它提供了一种灵活的方式，可以在默认插槽中包含插图来显示内容。

::component-example
---
name: 'page-hero-example'
source: false
---
::

### **标题**

使用 `title` 属性设置英雄组件的标题。

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
  title: 'Ultimate Vue UI library'
---
::

### **描述**

使用 `description` 属性设置英雄组件的描述。

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
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---
::

### **主标题**

使用 `headline` 属性设置英雄组件的主标题。

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
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
---
::

### **链接**

使用 `links` 属性在描述下方显示 **Button** 列表。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - links
hide:
  - class
external:
externalTypes:
props:
  class: 'w-ful'
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  links:
    - label: 'Get started'
      to: '/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/getting-started/theme'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### **方向**

使用 `orientation` 属性更改默认插槽的方向。默认为 `vertical`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - links
  - headline
hide:
  - class
external:
externalTypes:
slots:
  default: |

    <img
    src="https://ui.nuxt.com/templates/dashboard1.png"
    alt="App screenshot"
    class="rounded-lg shadow-2xl ring ring-default"
    />

props:
  class: 'w-ful'
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New Release'
  orientation: "horizontal"
  links:
    - label: 'Get started'
      to: '/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/getting-started/theme'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
<img
  src="https://ui.nuxt.com/templates/dashboard1.png"
  alt="App screenshot"
  class="rounded-lg shadow-2xl ring ring-default"
/>
::

### **反转**

使用 `reverse` 属性反转默认插槽的方向。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - links
  - headline
hide:
  - class
external:
externalTypes:
slots:
  default: |

    <img
    src="https://ui.nuxt.com/templates/dashboard1.png"
    alt="App screenshot"
    class="rounded-lg shadow-2xl ring ring-default"
    />

props:
  class: 'w-ful'
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New Release'
  orientation: "horizontal"
  reverse: true
  links:
    - label: 'Get started'
      to: '/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/getting-started/theme'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
<img
src="https://ui.nuxt.com/templates/dashboard1.png"
alt="App screenshot"
class="rounded-lg shadow-2xl ring ring-default"
/>
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

---
title: PageCard
description: 一个预设样式的卡片组件，用于显示标题、描述和可选链接。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageCard.vue
---

## 用法

`PageCard` 组件提供了一种灵活的方式，可以在卡片中显示内容，并在默认插槽中包含插图。

::component-example
---
name: 'page-card-example'
source: false
class: 'border border-muted relative p-4 rounded-md'
props:
  class: 'w-96'
---
::

::tip
你可以使用 `PageGrid`、`PageColumns` 或 `PageList` 组件来显示多个 `PageCard`。
::

### **标题**

使用 `title` 属性设置卡片的标题。

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
  class: 'w-96'
  title: 'Tailwind CSS'
---
::

### **描述**

使用 `description` 属性设置卡片的描述。

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
  class: 'w-96'
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
---
::

### **图标**

使用 `icon` 属性设置卡片的图标。

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
  class: 'w-96'
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
  icon: 'i-simple-icons-tailwindcss'
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
  - icon
  - target
  - to
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/docs/v4-beta'
  target: '_blank'
---
::

### **变体**

使用 `variant` 属性更改卡片的样式。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - icon
  - target
  - to
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/docs/v4-beta'
  target: '_blank'
  variant: 'soft'
---
::

::tip
在使用 `solid` 变体时，你可以将 `light` 或 `dark` 类应用于 `links` 插槽以反转颜色。
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
  - icon
hide:
  - class
external:
externalTypes:
slots:
  default: <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
props:
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
  icon: 'i-simple-icons-tailwindcss'
  orientation: "horizontal"
---
<img src="/nuxtui/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
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
  - icon
hide:
  - class
external:
externalTypes:
slots:
  default: <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
props:
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
  icon: 'i-simple-icons-tailwindcss'
  orientation: "horizontal"
  reverse: true
---
<img src="/nuxtui/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
::

### **高亮**

使用 `highlight` 和 `highlight-color` 属性在卡片周围显示高亮边框。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - icon
  - orientation
hide:
  - class
external:
externalTypes:
slots:
  default: <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
props:
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
  icon: 'i-simple-icons-tailwindcss'
  orientation: "horizontal"
  highlight: true
  highlightColor: 'primary'
---
<img src="/nuxtui/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
::

### **聚光灯**

使用 `spotlight` 和 `spotlight-color` 属性显示一个跟随鼠标光标并悬停时高亮边框的聚光灯效果。

::note
当使用 `to` 属性时，聚光灯效果将取代悬停效果。最好与 `outline` 变体一起使用。
::

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - icon
  - orientation
hide:
  - class
external:
externalTypes:
slots:
  default: <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
props:
  title: 'Tailwind CSS'
  description: "Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
  icon: 'i-simple-icons-tailwindcss'
  orientation: "horizontal"
  spotlight: true
  spotlightColor: 'primary'
---
<img src="/nuxtui/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
::

::tip
你也可以通过使用 `--spotlight-color` 和 `--spotlight-size` CSS 变量来定制颜色和大小：

```html
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## 示例

### **作为推荐信**

在 `header` 或 `footer` 插槽中使用 `User` 组件，使卡片看起来像一个推荐信。

::component-example
---
name: 'page-card-testimonial-example'
---
::

::tip
你可以使用 `PageColumns` 组件在多列布局中显示多个 `PageCard`。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}



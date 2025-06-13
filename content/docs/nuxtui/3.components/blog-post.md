---
title: BlogPost
description: 一个可自定义的文章，用于在博客页面中显示。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/BlogPost.vue
---

## 用法 (Usage)

`BlogPost` 组件提供了一种灵活的方式来显示一个 `<article>` 元素，其内容可自定义，包括标题、描述、图片等。

::component-example
---
name: 'blog-post-example'
class: 'max-w-md mx-auto'
source: false
---
::

::tip
使用 `BlogPosts` 组件以响应式网格布局显示多篇博客文章。
::

### 标题 (Title)

使用 `title` prop 显示 `BlogPost` 的标题。

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
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
---
::

### 描述 (Description)

使用 `description` prop 显示 `BlogPost` 的描述。

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
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
---
::

### 日期 (Date)

使用 `date` prop 显示 `BlogPost` 的日期。

::tip
日期会自动格式化为 **当前语言环境**。你可以传递 `Date` 对象或字符串。
::

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
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  date: '2024-11-25'
---
::

### 徽章 (Badge)

使用 `badge` prop 在 `BlogPost` 中显示一个 [Badge](/ui/components/badge)。

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
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  badge: 'Release'
---
::

你可以传递 [Badge](/ui/components/badge#props) 组件的任何属性来自定义它。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - badge.label
  - badge.color
  - badge.variant
hide:
  - class
external:
externalTypes:
props:
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  badge: 
    label: 'Release'
    color: 'primary'
    variant: 'solid'
---
::

### 图片 (Image)

使用 `image` prop 在 `BlogPost` 中显示图片。

::note
如果安装了 `@nuxt/image`，将使用 `<NuxtImg>` 组件而不是原生 `img` 标签。
::

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - date
hide:
- class
external:
externalTypes:
props:
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png"
  date: '2024-11-25'
---
::

### 作者 (Authors)

使用 `authors` prop 在 `BlogPost` 中显示 [User](/ui/components/user) 列表，作为一个包含以下属性的对象数组：

- `name?`: `string`
- `description?`: `string`
- `avatar?`: `Omit<AvatarProps, 'size'>`
- `chip?`: `boolean | Omit<ChipProps, 'size' | 'inset'>`
- `size?`: `UserProps['size']`
- `orientation?`: `UserProps['orientation']`

你可以传递 [Link](/ui/components/link#props) 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - date
  - authors
  - image
hide:
  - class
external:
  - authors
externalTypes:
props:
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png"
  date: '2024-11-25'
  authors:
    - name: 'Anthony Fu'
      description: 'antfu7'
      avatar: 
        src: 'https://github.com/antfu.png'
      to: 'https://github.com/antfu'
      target: '_blank'
---
::

当 `authors` prop 包含多于一项时，将使用 [AvatarGroup](/ui/components/avatar-group) 组件。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - date
  - authors
  - image
hide:
  - class
external:
  - authors
externalTypes:
props:
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png"
  date: '2024-11-25'
  authors:
    - name: 'Anthony Fu'
      description: 'antfu7'
      avatar:
        src: 'https://github.com/antfu.png'
      to: 'https://github.com/antfu'
      target: '_blank'
    - name: 'Benjamin Canac'
      description: 'benjamincanac'
      avatar: 
        src: 'https://github.com/benjamincanac.png'
      to: 'https://github.com/benjamincanac'
      target: '_blank'
---
::

### 链接 (Link)

你可以传递 `NuxtLink` 组件的任何属性，例如 `to`、`target`、`rel` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - date
  - image
hide:
  - class
external:
externalTypes:
props:
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png"
  date: '2024-11-25'
  to: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: '_blank'
---
::

### 变体 (Variant)

使用 `variant` prop 更改 `BlogPost` 的样式。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - date
  - image
  - to
  - target
hide:
  - class
external:
externalTypes:
props:
  class: 'max-w-md'
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png"
  date: '2024-11-25'
  to: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: '_blank'
  variant: 'naked'
---
::

::note
如果你提供了 `to` prop 或 `image`，样式会有所不同。
::

### 方向 (Orientation)

使用 `orientation` prop 更改 `BlogPost` 的方向。默认为 `vertical`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - date
  - image
  - to
  - target
hide:
  - class
external:
externalTypes:
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png"
  date: '2024-11-25'
  to: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: '_blank'
  orientation: 'horizontal'
  variant: 'outline'
---
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## 主题 (Theme)

:component-theme{pro=true}



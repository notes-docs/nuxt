---
description: 一个带回退功能和 Nuxt Image 支持的 img 元素。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Avatar.vue
---

## 用法

Avatar.vue 是 Nuxt UI 中的一个多功能头像组件，它旨在提供一个统一、美观且具有回退机制的头像显示方案。它智能地利用 `@nuxt/image` 进行图片优化，并在图片加载失败或未提供图片时，能优雅地回退到图标或文本显示。

当安装了 [`@nuxt/image`](https://github.com/nuxt/image) 时，Avatar 使用 `<NuxtImg>` 组件，否则回退到 `img`。

::note
你可以传递 HTML `<img>` 元素的任何属性，例如 `alt`、`loading` 等。
::

### Src

使用 `src` prop 来设置图片 URL。

::component-code
---
props:
  src: 'https://github.com/benjamincanac.png'
---
::

### 尺寸(Size)

使用 `size` prop 来设置 Avatar 的尺寸。

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
  size: xl
---
::

::note
`<img>` 元素的 `width` 和 `height` 会根据 `size` prop 自动设置。
::

### 图标(Icon)

使用 `icon` prop 来显示一个回退 [Icon](/components/icon)。

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

### 文本(Text)

使用 `text` prop 来显示一个回退文本。

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt

当没有提供图标或文本时，`alt` prop 的 **首字母缩** 写将用作回退。

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
`alt` prop 会作为 `alt` 属性传递给 `img` 元素。
::

## 示例

### 使用 tooltip

你可以使用 [Tooltip](/components/tooltip) 组件在鼠标悬停 Avatar 时显示工具提示。

:component-example{name="avatar-tooltip-example"}

### 使用徽章

你可以使用 [Chip](/components/chip) 组件在 Avatar 周围显示一个徽章。

:component-example{name="avatar-chip-example"}

可以使用 `chip` prop 实现徽章。

`chip` prop 值类型：

- `boolean`：如果为 `true`，头像会被包裹在一个默认的 UChip 组件中。
- `ChipProps`：可以传入一个对象，来完全配置 UChip 组件的属性（如 color, position, text 等）。

```vue
<UAvatar src="..." chip /> 
<UAvatar src="..." :chip="{ text: 'New', color: 'red', position: 'top-right' }" />
```

## API

### Props

:component-props

## Theme

:component-theme

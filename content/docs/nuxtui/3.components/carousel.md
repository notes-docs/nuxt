---
description: 使用 Embla 构建的带运动和滑动手势的轮播组件。
category: data
links:
  - label: Embla
    to: https://www.embla-carousel.com/api/
    icon: i-custom-embla-carousel
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Carousel.vue
---

## 用法

### Items

使用 `items` prop 作为数组，并通过默认插槽渲染每个项目：

::note
在桌面端，用鼠标拖动轮播图可水平滑动。
::

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

你也可以传递一个包含以下属性的对象数组：

- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{lang="ts-type"}

你可以通过在 `item` 上使用 [`basis`](https://tailwindcss.com/docs/flex-basis) / [`width`](https://tailwindcss.com/docs/width) 工具类来控制可见的项目数量：

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### 方向 (Orientation)

使用 `orientation` prop 来改变进度条的方向。默认为 `horizontal`（水平）。

::note
在桌面端，用鼠标拖动轮播图可垂直滑动。
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
在垂直方向上，你需要为容器指定一个 `height`。
::

### 箭头 (Arrows)

使用 `arrows` prop 来显示上一个和下一个按钮。

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### Prev / Next

使用 `prev` 和 `next` props 来自定义上一个和下一个按钮，可使用任何 [Button](/components/button) 的 props。

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### Prev / Next Icons

使用 `prev-icon` 和 `next-icon` props 来自定义按钮的 [Icon](/components/icon)。默认为 `i-lucide-arrow-left` / `i-lucide-arrow-right`。

::component-example
---
name: 'carousel-prev-next-icon-example'
class: 'p-8'
options:
  - name: 'prevIcon'
    label: 'prevIcon'
    default: 'i-lucide-chevron-left'
  - name: 'nextIcon'
    label: 'nextIcon'
    default: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
You can customize these icons globally in your `app.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
You can customize these icons globally in your `vite.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.
:::
::

### 圆点 (Dots)

使用 `dots` prop 来显示一个圆点列表，用于滚动到特定幻灯片。

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

圆点的数量基于视图中显示的幻灯片数量：

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## 插件 (Plugins)

Carousel 组件实现了官方的 [Embla Carousel plugins](https://www.embla-carousel.com/plugins/)。

### 自动播放 (Autoplay)

此插件用于扩展 Embla Carousel 的 **自动播放** 功能。

使用 `autoplay` prop 作为布尔值或对象来配置 [Autoplay plugin](https://www.embla-carousel.com/plugins/autoplay/)。

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
在此示例中，我们使用 `loop` prop 实现无限轮播。
::

### 自动滚动 (Auto Scroll)

此插件用于扩展 Embla Carousel 的 **自动滚动** 功能。

使用 `auto-scroll` prop 作为布尔值或对象来配置 [Auto Scroll plugin](https://www.embla-carousel.com/plugins/auto-scroll/)。

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
在此示例中，我们使用 `loop` prop 实现无限轮播。
::

### 自动高度 (Auto Height)

此插件用于扩展 Embla Carousel 的 **自动高度** 功能。它会改变轮播容器的高度以适应视图中最高幻灯片的高度。

使用 `auto-height` prop 作为布尔值或对象来配置 [Auto Height plugin](https://www.embla-carousel.com/plugins/auto-height/)。

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
在此示例中，我们在容器上添加了 `transition-[height]` 类来动画化高度变化。
::

### 类名 (Class Names)

Class Names 是 Embla Carousel 的 **类名切换** 实用插件，它使你能够自动化切换轮播图上的类名。

使用 `class-names` prop 作为布尔值或对象来配置 [Class Names plugin](https://www.embla-carousel.com/plugins/class-names/)。

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
在此示例中，我们在 `item` 上添加了 `transition-opacity [&:not(.is-snapped)]:opacity-10` 类来动画化不透明度变化。
::

### 淡入淡出 (Fade)

此插件用于将 Embla Carousel 的滚动功能替换为 **淡入淡出过渡**。

使用 `fade` prop 作为布尔值或对象来配置 [Fade plugin](https://www.embla-carousel.com/plugins/fade/)。

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### 滚轮手势 (Wheel Gestures)

此插件用于扩展 Embla Carousel，使其能够 **使用鼠标/触控板滚轮** 导航轮播图。

使用 `wheel-gestures` prop 作为布尔值或对象来配置 [Wheel Gestures plugin](https://www.embla-carousel.com/plugins/wheel-gestures/)。

::note
使用鼠标滚轮滚动轮播图。
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## 示例

### 带缩略图

你可以使用 [`emblaApi`](#expose) 函数 [scrollTo](https://www.embla-carousel.com/api/methods/#scrollto) 在轮播图下方显示缩略图，允许你导航到特定幻灯片。

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

你可以使用 [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) 访问类型化的组件实例。

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

这将使你能够访问以下内容：

| Name | Type |
| ---- | ---- |
| `emblaRef`{lang="ts-type"} | `Ref<HTMLElement \| null>`{lang="ts-type"} |
| `emblaApi`{lang="ts-type"} | [`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/api/methods/#typescript) |

## Theme

:component-theme

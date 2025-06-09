---
description: 用于表示状态或类别的短文本。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Badge.vue
---

## 用法

### 标签

使用默认插槽来设置徽章的标签。

::component-code
---
slots:
  default: Badge
---
::

你也可以使用 `label` prop 来达到同样的效果。

::component-code
---
props:
  label: Badge
---
::

### 颜色

使用 `color` prop 来改变徽章的颜色。

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### 变体

使用 `variant` prop 来改变徽章的变体（样式）。

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### 尺寸(Size)

使用 `size` prop 来改变徽章的尺寸。

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### 图标(Icon)

使用 `icon` prop 在徽章内部显示一个 [Icon](/components/icon)。

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Badge
---
::

使用 `leading` 和 `trailing` props 来设置图标的位置，或者使用 `leading-icon` 和 `trailing-icon` props 为每个位置设置不同的图标。

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### 头像

使用 `avatar` prop 在徽章内部显示一个 [Avatar](/components/avatar)。

::component-code
---
prettier: true
props:
  avatar:
    src: 'https://github.com/nuxt.png'
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Badge
---
::

## 示例

### `class` prop

使用 `class` prop 来覆盖徽章的基本样式。

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Badge
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

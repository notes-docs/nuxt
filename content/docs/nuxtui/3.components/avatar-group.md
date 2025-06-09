---
title: AvatarGroup
description: 堆叠多个头像在一个组中。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/AvatarGroup.vue
---

## 用法

将多个 [Avatar](/components/avatar) 包裹在 AvatarGroup 内以堆叠它们。

::component-code
---
prettier: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
:u-avatar{src="https://github.com/romhml.png" alt="Romain Hamel"}
:u-avatar{src="https://github.com/noook.png" alt="Neil Richter"}
::

### 尺寸(Size)

使用 `size` prop 来改变所有头像的尺寸。

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
:u-avatar{src="https://github.com/romhml.png" alt="Romain Hamel"}
:u-avatar{src="https://github.com/noook.png" alt="Neil Richter"}
::

### 最大数量(Max)

使用 `max` prop 来限制显示的头像数量。其余的头像将以 `+X` 的形式显示。

::component-code
---
prettier: true
props:
  max: 2
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
:u-avatar{src="https://github.com/romhml.png" alt="Romain Hamel"}
:u-avatar{src="https://github.com/noook.png" alt="Neil Richter"}
::

## 示例

### 使用 tooltip

用 [Tooltip](/components/tooltip) 组件包裹每个头像，以在悬停时显示工具提示。

:component-example{name="avatar-group-tooltip-example"}

### 使用 chip

用 [Chip](/components/chip) 组件包裹每个头像，以在头像周围显示一个徽章。

:component-example{name="avatar-group-chip-example"}

### 带链接

用 [Link](/components/link) 组件包裹每个头像，使它们可点击。

:component-example{name="avatar-group-link-example"}

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

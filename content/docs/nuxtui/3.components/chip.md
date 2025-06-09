---
description: 表示数值或状态的指示器。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Chip.vue
---

## 用法

用 Chip 包裹任何组件，以显示一个指示器。

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 颜色 (Color)

使用 `color` prop 来改变 Chip 的颜色。

::component-code
---
prettier: true
props:
  color: neutral
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 尺寸 (Size)

使用 `size` prop 来改变 Chip 的尺寸。

::component-code
---
prettier: true
props:
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 文本 (Text)

使用 `text` prop 来设置 Chip 的文本。

::component-code
---
prettier: true
props:
  text: 5
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 位置 (Position)

使用 `position` prop 来改变 Chip 的位置。

::component-code
---
prettier: true
props:
  position: 'bottom-left'
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 内嵌 (Inset)

使用 `inset` prop 来将 Chip 显示在组件内部。这在处理圆角组件时非常有用。

::component-code
---
prettier: true
props:
  inset: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" />
---
:u-avatar{src="https://github.com/benjamincanac.png"}
::

### 独立 (Standalone)

将 `standalone` prop 与 `inset` prop 一起使用，以行内显示 Chip。

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
例如，在 [`CommandPalette`](/components/command-palette), [`InputMenu`](/components/input-menu), [`Select`](/components/select) 或 [`SelectMenu`](/components/select-menu) 组件中就是这样使用的。
::

## 示例

### 控制可见性

你可以使用 `show` prop 来控制 Chip 的可见性。

:component-example{name="chip-show-example"}

::note
在此示例中，Chip 根据不同的状态拥有不同的颜色，并在状态不是 `offline` 时显示。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

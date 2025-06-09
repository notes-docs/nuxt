---
title: ButtonGroup
description: 将多个类似按钮的元素组合在一起。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/ButtonGroup.vue
---

## 用法

将多个 [Button](/components/button) 包裹在 ButtonGroup 内以将它们组合在一起。

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="Button"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### 尺寸(Size)

使用 `size` prop 来改变所有按钮的尺寸。

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="Button"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### 方向

使用 `orientation` prop 来改变按钮的方向。默认为 `horizontal`（水平）。

::component-code
---
prettier: true
props:
  orientation: vertical
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
---
:u-button{color="neutral" variant="subtle" label="Submit"}
:u-button{color="neutral" variant="outline" label="Cancel"}
::

## 示例

### 使用 input

你可以在按钮组内使用 [Input](/components/input), [InputMenu](/components/input-menu), [Select](/components/select) [SelectMenu](/components/select-menu) 等组件。

::component-code
---
prettier: true
slots:
  default: |

    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
:u-input{color="neutral" variant="outline" placeholder="Enter token"}
:u-button{color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### 使用 tooltip

你可以在按钮组内使用 [Tooltip](/components/tooltip)。

:component-example{name="button-group-tooltip-example"}

### 使用 dropdown

你可以在按钮组内使用 [DropdownMenu](/components/dropdown-menu)。

:component-example{name="button-group-dropdown-example"}

### 使用 badge

你可以在按钮组内使用 [Badge](/components/badge)。

:component-example{name="button-group-badge-example"}

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

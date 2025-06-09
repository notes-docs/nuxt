---
description: 在卡片中显示内容，包含页眉、主体和页脚。
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Card.vue
---

## 用法

::component-example
---
name: 'card-example'
props:
  class: 'w-full'
---
::

### 变体 (Variant)

使用 `variant` prop 来改变卡片的变体（样式）。

::component-code
---
prettier: true
hide:
  - class
props:
  variant: subtle
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

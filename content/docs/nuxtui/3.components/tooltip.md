---
description: 一个当鼠标悬停在元素上时显示信息的弹出框。
category: overlay
links:
  - label: Tooltip
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Tooltip.vue
---

## 用法

在 Tooltip 的默认插槽中使用 [Button](/components/button) 或任何其他组件。

::warning
请确保用 [`App`](/components/app) 组件包裹你的应用，它使用了 Reka UI 的 [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) 组件。
::

::tip{to="/components/app#props"}
你可以查看 `App` 组件的 `tooltip` prop，了解如何全局配置 Tooltip。
::

### 文本 (Text)

使用 `text` prop 设置 Tooltip 的内容。

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

### 键盘快捷键 (Kbds)

使用 `kbds` prop 在 Tooltip 中渲染 [Kbd](/components/kbd) 组件。

::component-code
---
prettier: true
ignore:
  - text
  - kbds
props:
  text: 'Open on GitHub'
  kbds:
    - meta
    - G
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

::tip
你可以使用特殊键，例如 `meta`，在 macOS 上显示为 `⌘`，在其他平台显示为 `Ctrl`。
::

### 延迟 (Delay)

使用 `delay-duration` prop 更改 Tooltip 出现前的延迟。例如，通过将其设置为 `0` 可以使其立即出现。

::component-code
---
prettier: true
ignore:
  - text
props:
  delayDuration: 0
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

::tip
这可以通过 [`App`](/components/app) 组件中的 `tooltip.delayDuration` 选项进行全局配置。
::

### 内容 (Content)

使用 `content` prop 控制 Tooltip 内容的渲染方式，例如其 `align` 或 `side`。

::component-code
---
prettier: true
ignore:
  - text
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  content:
    align: center
    side: bottom
    sideOffset: 8
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

### 箭头 (Arrow)

使用 `arrow` prop 在 Tooltip 上显示一个箭头。

::component-code
---
prettier: true
ignore:
  - text
  - arrow
props:
  arrow: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

### 禁用 (Disabled)

使用 `disabled` prop 禁用 Tooltip。

::component-code
---
prettier: true
ignore:
  - text
props:
  disabled: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

## 示例

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'tooltip-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按 :kbd{value="O"} 来切换 Tooltip。
:: 

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

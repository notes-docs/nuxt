---
description: 一个非模态对话框，围绕触发元素浮动。
category: overlay
links:
  - label: HoverCard
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: Popover
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Popover.vue
---

## 用法

在 Popover 的默认插槽中使用 [Button](/components/button) 或任何其他组件。

然后，使用 `#content` 插槽添加 Popover 打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### 模式 (Mode)

使用 `mode` prop 更改 Popover 的模式。默认为 `click`。

::component-code
---
prettier: true
items:
  mode:
    - click
    - hover
props:
  mode: 'hover'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
当使用 `hover` 模式时，将使用 Reka UI 的 [`HoverCard`](https://reka-ui.com/docs/components/hover-card) 组件而不是 [`Popover`](https://reka-ui.com/docs/components/popover) 组件。
::

### 延迟 (Delay)

当使用 `hover` 模式时，你可以使用 `open-delay` 和 `close-delay` props 控制 Popover 打开或关闭前的延迟。

::component-code
---
prettier: true
ignore:
  - mode
props:
  mode: 'hover'
  openDelay: 500
  closeDelay: 300
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### 内容 (Content)

使用 `content` prop 控制 Popover 内容的渲染方式，例如其 `align` 或 `side`。

::component-code
---
prettier: true
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
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### 箭头 (Arrow)

使用 `arrow` prop 在 Popover 上显示一个箭头。

::component-code
---
prettier: true
ignore:
  - arrow
props:
  arrow: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

## 示例

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'popover-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 Popover。
::

### 禁用 dismissal

将 `dismissible` prop 设置为 `false`，以防止通过点击 Popover 外部或按 escape 键关闭 Popover。当用户尝试关闭时，将发出 `close:prevent` 事件。

::component-example
---
name: 'popover-dismissible-example'
---
::

### 带命令面板

你可以在 Popover 的内容中使用 [CommandPalette](/components/command-palette) 组件。

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

### 带锚点插槽 :badge{label="New" class="align-text-top"}

你可以使用 `#anchor` 插槽将 Popover 定位到自定义元素。

::warning
此插槽仅在 `mode` 为 `click` 时有效。
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
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

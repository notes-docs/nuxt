---
description: 一个对话框，可用于显示消息或请求用户输入。
category: overlay
links:
  - label: Dialog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Modal.vue
---

## 用法

在 Modal 的默认插槽中使用 [Button](/components/button) 或任何其他组件。

然后，使用 `#content` 插槽添加 Modal 打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

你还可以使用 `#header`{lang="ts-type"}、`#body`{lang="ts-type"} 和 `#footer`{lang="ts-type"} 插槽自定义 Modal 的内容。

### 标题 (Title)

使用 `title` prop 设置 Modal 头部的标题。

::component-code
---
prettier: true
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 描述

使用 `description` prop 设置 Modal 头部的描述。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 关闭

使用 `close` prop 自定义或隐藏 Modal 头部显示的关闭按钮（使用 `false` 值）。

你可以传递 [Button](/components/button) 组件的任何属性来自定义它。

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
如果使用 `#content` 插槽，关闭按钮不会显示，因为它是头部的一部分。
::

### 关闭图标 (Close Icon)

使用 `close-icon` prop 自定义关闭按钮 [Icon](/components/icon)。默认为 `i-lucide-x`。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.close` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.close` 键全局自定义此图标。
:::
::

### 叠加层 (Overlay)

使用 `overlay` prop 控制 Modal 是否有叠加层。默认为 `true`。

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 过渡 (Transition)

使用 `transition` prop 控制 Modal 是否有动画。默认为 `true`。

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 全屏 (Fullscreen)

使用 `fullscreen` prop 使 Modal 全屏显示。

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
props:
  fullscreen: true
  title: 'Modal fullscreen'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

## 示例

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'modal-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 Modal。
::

::tip
这允许你将触发器移到 Modal 之外或完全移除它。
::

### 禁用 dismissal

将 `dismissible` prop 设置为 `false`，以防止通过点击 Modal 外部或按 escape 键关闭 Modal。当用户尝试关闭时，将发出 `close:prevent` 事件。

::component-code
---
prettier: true
ignore:
  - title
  - dismissible
props:
  dismissible: false
  title: 'Modal non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 程序化使用

你可以使用 [`useOverlay`](/composables/use-overlay) 可组合项以程序化方式打开 Modal。

::warning
请确保用 [`App`](/components/app) 组件包裹你的应用程序，它使用 [`OverlayProvider`](https://github.com/nuxt/ui/blob/v3/src/runtime/components/OverlayProvider.vue) 组件。
::

首先，创建一个将以程序化方式打开的模态组件：

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
当模态框关闭或取消时，我们在这里发出一个 `close` 事件。你可以通过 `close` 事件发出任何数据，但是必须发出该事件才能捕获返回值。
::

然后，在你的应用程序中使用它：

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
你可以在模态组件内部通过发出 `emit('close')` 来关闭模态框。
::

### 嵌套模态框

你可以将模态框相互嵌套。

::component-example
---
name: 'modal-nested-example'
---
::

### 带页脚插槽

使用 `#footer` 插槽在 Modal 主体后添加内容。

::component-example
---
name: 'modal-footer-slot-example'
---
::

### 带命令面板

你可以在 Modal 的内容中使用 [CommandPalette](/components/command-palette) 组件。

::component-example
---
collapse: true
name: 'modal-command-palette-example'
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

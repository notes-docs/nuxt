---
description: 一个从屏幕任意一侧滑入的对话框。
category: overlay
links:
  - label: Dialog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Slideover.vue
---

## 用法

在 Slideover 的默认插槽中使用 [Button](/components/button) 或任何其他组件。

然后，使用 `#content` 插槽添加 Slideover 打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

你还可以使用 `#header`{lang="ts-type"}、`#body`{lang="ts-type"} 和 `#footer`{lang="ts-type"} 插槽来自定义 Slideover 的内容。

### 标题 (Title)

使用 `title` prop 设置 Slideover 头部的标题。

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
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

### 描述 (Description)

使用 `description` prop 设置 Slideover 头部的描述。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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

### 关闭 (Close)

使用 `close` prop 自定义或隐藏显示在 Slideover 头部中的关闭按钮（设置为 `false` 值时）。

你可以传递 [Button](/components/button) 组件的任何属性来自定义它。

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
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

::note
如果使用了 `#content` 插槽，则不显示关闭按钮，因为它是头部的一部分。
::

### 关闭图标 (Close Icon)

使用 `close-icon` prop 自定义关闭按钮的 [Icon](/components/icon)。默认为 `i-lucide-x`。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
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

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.close` 键下全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.close` 键下全局自定义此图标。
:::
::

### 侧边 (Side)

使用 `side` prop 设置 Slideover 将从屏幕哪一侧滑入。默认为 `right`。

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### 覆盖层 (Overlay)

使用 `overlay` prop 控制 Slideover 是否有覆盖层。默认为 `true`。

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
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

### 过渡 (Transition)

使用 `transition` prop 控制 Slideover 是否有动画。默认为 `true`。

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
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
name: 'slideover-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 Slideover。
::

::tip
这允许你将触发器移到 Slideover 外部或完全移除它。
::

### 禁用 dismissal

将 `dismissible` prop 设置为 `false` 以防止通过点击 Slideover 外部或按 escape 键关闭 Slideover。当用户尝试关闭时，将发出 `close:prevent` 事件。

::component-code
---
prettier: true
ignore:
  - title
  - dismissible
props:
  dismissible: false
  title: 'Slideover non-dismissible'
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

### 编程式用法

你可以使用 [`useOverlay`](/composables/use-overlay) 可组合项来编程式地打开 Slideover。

::warning
请确保用 [`App`](/components/app) 组件包裹你的应用程序，该组件使用了 [`OverlayProvider`](https://github.com/nuxt/ui/blob/v3/src/runtime/components/OverlayProvider.vue) 组件。
::

首先，创建一个将以编程方式打开的侧滑组件：

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
我们在这里在侧滑框关闭或解除时发出一个 `close` 事件。你可以通过 `close` 事件发出任何数据，但必须发出该事件才能捕获返回值。
::

然后，在你的应用程序中使用它：

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
你可以在侧滑组件内部通过发出 `emit('close')` 来关闭侧滑框。
::

### 嵌套侧滑框

你可以将侧滑框相互嵌套。

::component-example
---
name: 'slideover-nested-example'
---
::

### 带页脚插槽

使用 `#footer` 插槽在 Slideover 正文后添加内容。

::component-example
---
name: 'slideover-footer-slot-example'
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

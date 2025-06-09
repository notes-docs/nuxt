---
description: 一个可折叠元素，用于切换其内容的可见性。
category: element
links:
  - label: Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Collapsible.vue
---

## 用法

在 Collapsible 的默认插槽中，使用一个 [Button](/components/button) 或任何其他组件。

然后，使用 `#content` 插槽添加当 Collapsible 打开时显示的内容。

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### 卸载 (Unmount)

使用 `unmount-on-hide` prop，以防止内容在 Collapsible 折叠时被卸载。默认为 `true`。

::component-code
---
prettier: true
ignore:
  - class
props:
  unmountOnHide: false
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
你可以检查 DOM 以查看内容的渲染情况。
::

### 禁用 (Disabled)

使用 `disabled` prop 来禁用 Collapsible。

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
  disabled: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## 示例

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'collapsible-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 Collapsible。
::

::tip
这允许你将触发器移到 Collapsible 之外，或者完全移除它。
::

### 带旋转图标

这是一个带旋转图标的按钮示例，该图标指示 Collapsible 的打开状态。

::component-example
---
name: 'collapsible-icon-example'
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

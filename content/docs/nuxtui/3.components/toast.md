---
description: 提供信息或反馈给用户的简洁消息。
category: overlay
links:
  - label: Toast
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Toast.vue
---

## 用法

使用 [useToast](/composables/use-toast) 可组合函数在你的应用程序中显示 Toast。

::warning
请确保用 [`App`](/components/app) 组件包裹你的应用，它使用我们的 [`Toaster`](https://github.com/nuxt/ui/blob/v3/src/runtime/components/Toaster.vue) 组件，而 Toaster 组件又使用了 Reka UI 的 [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) 组件。
::

::tip{to="/components/app#props"}
你可以查看 `App` 组件的 `toaster` prop，了解如何全局配置 Toaster。
::

### 标题

向 `toast.add` 方法传递 `title` 字段以显示标题。

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### 描述

向 `toast.add` 方法传递 `description` 字段以显示描述。

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-description-example'
---
::

### 图标 (Icon)

向 `toast.add` 方法传递 `icon` 字段以显示 [Icon](/components/icon)。

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### 头像 (Avatar)

向 `toast.add` 方法传递 `avatar` 字段以显示 [Avatar](/components/avatar)。

::component-example
---
options:
  - name: 'avatar.src'
    alias: 'avatar'
    label: 'avatar.src'
    default:
      src: 'https://github.com/benjamincanac.png'
name: 'toast-avatar-example'
---
::

### 颜色 (Color)

向 `toast.add` 方法传递 `color` 字段以更改 Toast 的颜色。

::component-example
---
options:
  - name: 'color'
    label: 'color'
    default: neutral
    items:
      - primary
      - secondary
      - success
      - info
      - warning
      - error
      - neutral
name: 'toast-color-example'
---
::

### 关闭 (Close)

传递 `close` 字段来自定义或隐藏关闭按钮（使用 `false` 值）。

::component-example
---
name: 'toast-close-example'
---
::

### 关闭图标 (Close Icon)

传递 `closeIcon` 字段以自定义关闭按钮的 [Icon](/components/icon)。默认为 `i-lucide-x`。

::component-example
---
options:
  - name: 'closeIcon'
    label: 'closeIcon'
    default: 'i-lucide-arrow-right'
name: 'toast-close-icon-example'
---
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

### 动作 (Actions)

传递 `actions` 字段以向 Alert 添加一些 [Button](/components/button) 动作。

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改 Toast 的方向。

::component-example
---
options:
  - name: 'orientation'
    label: 'orientation'
    default: 'horizontal'
    items:
      - horizontal
      - vertical
name: 'toast-orientation-example'
---
::

## 示例

### 更改全局位置

更改 [App](/components/app#props) 组件上的 `toaster.position` prop 以更改 Toast 的位置。

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-position-example
::

::note{to="https://github.com/nuxt/ui/blob/v3/docs/app/app.config.ts#L3"}
在此示例中，我们使用 `AppConfig` 全局配置 `Toaster` 组件的 `position` prop。
::

### 更改全局持续时间

更改 [App](/components/app#props) 组件上的 `toaster.duration` prop 以更改 Toast 的持续时间。

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-duration-example
::

::note{to="https://github.com/nuxt/ui/blob/v3/docs/app/app.config.ts#L5"}
在此示例中，我们使用 `AppConfig` 全局配置 `Toaster` 组件的 `duration` prop。
::

### 堆叠 Toast

将 [App](/components/app#props) 组件上的 `toaster.expand` prop 设置为 `false` 以显示堆叠 Toast。

::tip
你可以将鼠标悬停在 Toast 上以展开它们。这也会暂停 Toast 的计时器。
::

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::

::note{to="https://github.com/nuxt/ui/blob/v3/docs/app/app.config.ts#L4"}
在此示例中，我们使用 `AppConfig` 全局配置 `Toaster` 组件的 `expand` prop。
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

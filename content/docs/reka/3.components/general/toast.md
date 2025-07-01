---
title: Toast
description: 临时显示的简洁消息。
---

::component-example
---
name: 'reka-toast-example'
collapse: true
---
::

## 功能特点

## 功能特点

* 自动关闭。
* 在悬停、聚焦和窗口失焦时暂停关闭。
* 支持热键跳转到 Toast 视口。
* 支持通过滑动关闭手势。
* 暴露 CSS 变量用于滑动关闭手势动画。
* 可控或不可控。

## 安装

从命令行安装组件。

::code-group
```bash [npm]
$ npm add reka-ui
```
```bash [pnpm]
$ pnpm add reka-ui
```
```bash [yarn]
$ yarn add reka-ui
```
```bash [bun]
$ bun add reka-ui
```
::

## 结构

导入组件。

```html
<script setup lang="ts">
  import { ToastAction, ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from 'reka-ui'
</script>

<template>
  <ToastProvider>
    <ToastRoot>
      <ToastTitle />
      <ToastDescription />
      <ToastAction />
      <ToastClose />
    </ToastRoot>
    <ToastViewport />
  </ToastProvider>
</template>
```

## API 参考

### Provider

包裹 Toast 和 Toast 视口的提供者。它通常包裹整个应用程序。

| 属性            | 默认值    | 类型                                   | 描述                                                                                              |
| --------------- | --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `duration`      | `5000`    | `number`                               | 每个 Toast 保持可见的时间（毫秒）。                                                                 |
| `label`         | `'Notification'` | `string`                               | 每个 Toast 的作者本地化标签。用于帮助屏幕阅读器用户将中断与 Toast 相关联。                      |
| `swipeDirection` | `'right'` | `'right' \| 'left' \| 'up' \| 'down'` | 关闭 Toast 的指针滑动方向。                                                                      |
| `swipeThreshold` | `50`      | `number`                               | 滑动必须经过的像素距离才能触发关闭。                                                              |

### Viewport

Toast 出现的固定区域。用户可以通过按下热键跳转到视口。您需要确保键盘用户可以发现热键。

| 属性      | 默认值   | 类型                                   | 描述                                                                                              |
| --------- | -------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'ol'`   | `AsTag \| Component`                   | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`                              | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `hotkey`  | `['F8']` | `string[]`                             | 用作键盘快捷键的按键，将焦点移动到 Toast 视口。                                                     |
| `label`   | `'Notifications ({hotkey})'` | `string \| ((hotkey: string) => string)` | Toast 视口的作者本地化标签，用于在导航页面地标时为屏幕阅读器用户提供上下文。可用的 `{hotkey}` 占位符将替换为您。或者，您可以传入一个自定义函数来生成标签。 |

### Root

自动关闭的 Toast。不应保持打开以获取用户响应。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性         | 默认值   | 类型                 | 描述                                                                                              |
| ------------ | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'li'`   | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `defaultOpen` | `true`   | `boolean`            | 对话框首次渲染时的打开状态。当您不需要控制其打开状态时使用。                                    |
| `duration`   |          | `number`             | Toast 保持可见的时间（毫秒）。覆盖传递给 `ToastProvider` 的值。                                     |
| `forceMount` | `false`    | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `open`       | `true`   | `boolean`            | 对话框的受控打开状态。可以绑定为 `v-model:open`。                                                  |
| `type`       | `'foreground'` | `'foreground' \| 'background'` | 控制 Toast 的辅助功能敏感度。对于用户操作产生的 Toast，选择 `foreground`。后台任务产生的 Toast 应使用 `background`。 |

**触发事件 (Emit)**

| Payload                                     | 描述                                                                |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `[event: KeyboardEvent]`                    | Escape 键按下时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |
| `[]`                                        | 销毁计时器暂停时调用的事件处理程序。当指针移到视口上、视口聚焦或窗口失焦时发生。 |
| `[]`                                        | 销毁计时器恢复时调用的事件处理程序。当指针移出视口、视口失焦或窗口聚焦时发生。 |
| `[event: SwipeEvent]`                       | 滑动交互取消时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |
| `[event: SwipeEvent]`                       | 滑动交互结束时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |
| `[event: SwipeEvent]`                       | 滑动交互期间调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |
| `[event: SwipeEvent]`                       | 滑动交互开始时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |
| `[value: boolean]`                          | 打开状态更改时调用的事件处理程序。                                  |

**插槽 (默认)**

| Payload  | 描述                 |
| -------- | -------------------- |
| `open`   | `boolean` 当前打开状态 |
| `remaining` | `number` 剩余时间（毫秒） |
| `duration` | `number` Toast 将保持可见的总时间（毫秒） |

**数据属性**

| 属性              | 值                                |
| ----------------- | --------------------------------- |
| `[data-state]`    | `"open" \| "closed"`              |
| `[data-swipe]`    | `"start" \| "move" \| "cancel" \| "end"` |
| `[data-swipe-direction]` | `"up" \| "down" \| "left" \| "right"` |

**CSS 变量**

| 变量                      | 描述                               |
| ------------------------- | ---------------------------------- |
| `--reka-toast-swipe-move-x` | 水平滑动时 Toast 的偏移位置        |
| `--reka-toast-swipe-move-y` | 垂直滑动时 Toast 的偏移位置        |
| `--reka-toast-swipe-end-x`  | 水平滑动后 Toast 的结束偏移位置    |
| `--reka-toast-swipe-end-y`  | 垂直滑动后 Toast 的结束偏移位置    |

### Portal

使用时，将内容部分传送到 `body` 中。

| 属性         | 默认值 | 类型                 | 描述                                                                                              |
| ------------ | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `defer`      | `false`  | `boolean`            | 延迟解决 Teleport 目标，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。                        |
| `disabled`   | `false`  | `boolean`            | 禁用 teleport 并在行内渲染组件。                                                                |
| `forceMount` | `false`  | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `to`         |        | `string \| HTMLElement` | Vue 原生 teleport 组件 prop `:to`。                                                             |

### Title

Toast 的可选标题。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Description

Toast 消息。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Action

一个可以安全忽略的操作，以确保用户不会因为时间限制而完成具有意外副作用的任务。当需要用户响应时，将一个 `AlertDialog` 样式化的 Toast 传送到视口中。

| 属性        | 默认值 | 类型                 | 描述                                                                                              |
| ----------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `altText`\* |        | `string`             | 描述执行操作的替代方法的简短说明。适用于无法轻松/快速导航到按钮的屏幕阅读器用户。           |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Close

允许用户在 Toast 持续时间结束前关闭 Toast 的按钮。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

## 示例

### 自定义热键

使用每个按键的 `keycode.info` 中的 `event.code` 值覆盖默认热键。

```html
<template>
  <ToastProvider>
    ...
    <ToastViewport :hotkey="['altKey', 'KeyT']" />
  </ToastProvider>
</template>
```

### 自定义持续时间

自定义 Toast 的持续时间以覆盖提供者值。

```html
<template>
  <ToastRoot :duration="3000">
    <ToastDescription>Saved!</ToastDescription>
  </ToastRoot>
</template>
```

### 重复 Toast

当 Toast 必须在用户每次点击按钮时出现时，使用状态渲染同一 Toast 的多个实例（参见下文）。或者，您可以抽象这些部分以创建自己的[命令式 API](imperative API)。

```html
<template>
  <div>
    <form @submit="count++">
      ...
      <button>save</button>
    </form>
    <ToastRoot v-for="(_, index) in count" :key="index">
      <ToastDescription>Saved!</ToastDescription>
    </ToastRoot>
  </div>
</template>
```

### 动画滑动手势

将 `--reka-toast-swipe-move-[x|y]` 和 `--reka-toast-swipe-end-[x|y]` CSS 变量与 `data-swipe="[start|move|cancel|end]"` 属性结合使用，以动画化滑动关闭手势。这是一个示例：

```html
<template>
  <ToastProvider swipe-direction="right">
    <ToastRoot class="ToastRoot">
      ...
    </ToastRoot>
    <ToastViewport />
  </ToastProvider>
</template>
```

```css
/* styles.css */
.ToastRoot[data-swipe='move'] {
  transform: translateX(var(--reka-toast-swipe-move-x));
}
.ToastRoot[data-swipe='cancel'] {
  transform: translateX(0);
  transition: transform 200ms ease-out;
}
.ToastRoot[data-swipe='end'] {
  animation: slideRight 100ms ease-out;
}
@keyframes slideRight {
  from {
    transform: translateX(var(--reka-toast-swipe-end-x));
  }
  to {
    transform: translateX(100%);
  }
}
```

## 可访问性

遵循 [aria-live](https://www.google.com/search?q=aria-live) 要求。

### 敏感度

使用 `type` prop 控制 Toast 对屏幕阅读器的敏感度。
对于用户操作产生的 Toast，选择 `foreground`。后台任务产生的 Toast 应使用 `background`。

#### 前景 (Foreground)

前景 Toast 会立即宣布。当前景 Toast 出现时，辅助技术可能会选择清除之前排队的消息。尽量避免同时堆叠不同的前景 Toast。

#### 后台 (Background)

后台 Toast 会在下一个适当的时机宣布，例如，当屏幕阅读器完成阅读当前句子时。它们不会清除排队的消息，因此过度使用它们在响应用户交互时可能会被屏幕阅读器用户视为滞后的用户体验。

```html
<template>
  <ToastRoot type="foreground">
    <ToastDescription>File removed successfully.</ToastDescription>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
  <ToastRoot type="background">
    <ToastDescription>We've just released Reka UI 2.0.</ToastDescription>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
</template>
```

### 替代操作

在 `Action` 上使用 `altText` prop 来指示屏幕阅读器用户执行 Toast 操作的替代方法。
您可以将用户引导到应用程序中一个永久的位置，他们可以在那里执行操作，或者实现您自己的自定义热键逻辑。如果实现后者，请使用 `foreground` 类型立即宣布并增加持续时间，以给用户充足的时间。

```html
<template>
  <ToastRoot type="background">
    <ToastTitle>Upgrade Available!</ToastTitle>
    <ToastDescription>We've just released Reka UI 2.0.</ToastDescription>
    <ToastAction alt-text="Goto account settings to upgrade">
      Upgrade
    </ToastAction>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
  <ToastRoot type="foreground" :duration="10000">
    <ToastDescription>File removed successfully.</ToastDescription>
    <ToastAction alt-text="Undo (Alt+U)">
      Undo <kbd>Alt</kbd>+<kbd>U</kbd>
    </ToastAction>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
</template>
```

### 关闭图标按钮

当提供图标（或字体图标）时，请记住为屏幕阅读器用户正确标记它。

```html
<template>
  <ToastRoot type="foreground">
    <ToastDescription>Saved!</ToastDescription>
    <ToastClose aria-label="Close">
      <span aria-hidden="true">×</span>
    </ToastClose>
  </ToastRoot>
</template>
```

## 键盘交互

| 按键            | 描述                                     |
| --------------- | ---------------------------------------- |
| `F8`            | 聚焦 Toast 视口。                        |
| `Tab`           | 将焦点移动到下一个可聚焦元素。           |
| `Shift + Tab`   | 将焦点移动到上一个可聚焦元素。           |
| `Space`         | 当焦点位于 `ToastAction` 或 `ToastClose` 上时，关闭 Toast。 |
| `Enter`         | 当焦点位于 `ToastAction` 或 `ToastClose` 上时，关闭 Toast。 |
| `Esc`           | 当焦点位于 `Toast` 上时，关闭 Toast。      |

## 自定义 API

### 抽象部分

通过将原始部分抽象到您自己的组件中来创建您自己的 API。

**用法**

```html
<script setup lang="ts">
  import Toast from './your-toast.vue'
</script>

<template>
  <Toast
    title="Upgrade available"
    content="We've just released Radix 3.0!"
  >
    <button @click="handleUpgrade">
      Upgrade
    </button>
  </Toast>
</template>
```

**实现**

```vue
// your-toast.vue
<script setup lang="ts">
  import { ToastAction, ToastClose, ToastDescription, ToastRoot, ToastTitle } from 'reka-ui'

  defineProps<{
    title: string
    content: string
  }>()
</script>

<template>
  <ToastRoot>
    <ToastTitle v-if="title">
      {{ title }}
    </ToastTitle>
    <ToastDescription v-if="content">
      {{ content }}
    </ToastDescription>
    <ToastAction
      as-child
      alt-text="toast"
    >
      <slot />
    </ToastAction>
    <ToastClose aria-label="Close">
      <span aria-hidden="true">×</span>
    </ToastClose>
  </ToastRoot>
</template>
```

### 命令式 API

如果需要，创建自己的命令式 API 以允许[Toast 重复](toast duplication)。

**用法**

```html
<script setup lang="ts">
  import Toast from './your-toast.vue'
  const savedRef = ref<InstanceType<typeof Toast>>()
</script>

<template>
  <div>
    <form @submit="savedRef.publish()">
      ...
    </form>
    <Toast ref="savedRef">
      Saved successfully!
    </Toast>
  </div>
</template>
```

**实现**

```vue
// your-toast.vue
<script setup lang="ts">
  import { ToastClose, ToastDescription, ToastRoot, ToastTitle } from 'reka-ui'
  import { ref } from 'vue'

  const count = ref(0)
  function publish() {
    count.value++
  }

  defineExpose({
    publish
  })
</script>

<template>
  <ToastRoot
    v-for="index in count"
    :key="index"
  >
    <ToastDescription>
      <slot />
    </ToastDescription>
    <ToastClose>Dismiss</ToastClose>
  </ToastRoot>
</template>
```

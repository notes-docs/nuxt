---
title: Dialog
description: 覆盖在主窗口或另一个对话框窗口上的窗口，使下面的内容变得无效。
---

::component-example
---
name: 'reka-dialog-example'
collapse: true
---
::

## 功能特点

* 支持模态和非模态模式。
* 模态时自动捕获焦点。
* 可受控或不受控。
* 通过 `Title` 和 `Description` 组件管理屏幕阅读器公告。
* 按 Esc 键自动关闭组件。

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

导入所有部分并将其组合在一起。

```html
<script setup>
  import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from 'reka-ui'
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <DialogClose />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

## API 参考

### Root

包含对话框的所有部分。

| 属性         | 默认值   | 类型     | 描述                                                                                              |
| ------------ | -------- | -------- | ------------------------------------------------------------------------------------------------- |
| `defaultOpen` | `false`  | `boolean` | 对话框首次渲染时的打开状态。当您不需要控制其打开状态时使用。                                        |
| `modal`      | `true`   | `boolean` | 对话框的模态。当设置为 `true` 时，与外部元素的交互将被禁用，并且只有对话框内容对屏幕阅读器可见。 |
| `open`       |          | `boolean` | 对话框的受控打开状态。可以作为 `v-model:open` 绑定。                                            |

**触发事件 (Emit)**

| Payload          | 描述                           |
| ---------------- | ------------------------------ |
| `[value: boolean]` | 对话框打开状态改变时调用的事件处理程序。 |

**插槽 (默认)**

| Payload    | 描述           |
| ---------- | -------------- |
| `open`     | 当前打开状态   |
| `close`    | `(): void` 关闭对话框 |

### Trigger

打开对话框的按钮。

| 属性      | 默认值   | 类型             | 描述                                                                                              |
| --------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性           | 值             |
| -------------- | -------------- |
| `[data-state]` | `"open" \| "closed"` |

### Portal

当使用时，将您的覆盖层和内容部分传送到 `body` 中。

| 属性        | 默认值 | 类型                   | 描述                                                                    |
| ----------- | ------ | ---------------------- | ----------------------------------------------------------------------- |
| `defer`     |        | `boolean`              | 延迟 Teleport 目标的解析，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。 |
| `disabled`  |        | `boolean`              | 禁用 Teleport 并内联渲染组件。                                          |
| `forceMount` |        | `boolean`              | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `to`        |        | `string \| HTMLElement` | Vue 原生 Teleport 组件 prop `:to`。                                     |

### Overlay

当对话框打开时，覆盖视图的惰性部分的层。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` |        | `boolean`        | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。                                 |

**数据属性**

| 属性           | 值             |
| -------------- | -------------- |
| `[data-state]` | `"open" \| "closed"` |

### Content

包含要在打开的对话框中渲染的内容。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性                       | 默认值 | 类型             | 描述                                                                                              |
| -------------------------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`                       | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`                  | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disableOutsidePointerEvents` |        | `boolean`        | 当为 `true` 时，`DismissableLayer` 外部元素的悬停/聚焦/点击交互将被禁用。用户需要点击两次外部元素才能与其交互：一次关闭 `DismissableLayer`，再次触发元素。 |
| `forceMount`               |        | `boolean`        | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。                                 |
| `trapFocus`                |        | `boolean`        | 当为 `true` 时，焦点不能通过键盘、指针或程序聚焦逃离 `Content`。                                  |

**触发事件 (Emit)**

| Payload                 | 描述                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| `[event: Event]`        | 关闭时自动聚焦时调用的事件处理程序。可以阻止。                        |
| `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]` | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: Event]`        | 打开时自动聚焦时调用的事件处理程序。可以阻止。                        |
| `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性           | 值             |
| -------------- | -------------- |
| `[data-state]` | `"open" \| "closed"` |

### Close

关闭对话框的按钮。

| 属性      | 默认值   | 类型             | 描述                                                                                              |
| --------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Title

打开对话框时要宣布的可访问标题。
如果您想隐藏标题，请将其包裹在我们的 `Visually Hidden` 实用程序中，如下所示：`<VisuallyHidden asChild>`。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'h2'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Description

打开对话框时要宣布的可选可访问描述。
如果您想隐藏描述，请将其包裹在我们的 `Visually Hidden` 实用程序中，如下所示：`<VisuallyHidden asChild>`。如果您想完全移除描述，请移除此部分并将 `:aria-describedby="undefined"` 传递给 `DialogContent`。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'p'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

## 示例

### 嵌套对话框

您可以嵌套多层对话框。
[查看代码](View code)
[打开对话框](Open Dialog)

### 异步表单提交后关闭

使用受控 props 在异步操作完成后以编程方式关闭对话框。

```html
<script setup>
  import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'reka-ui'

  const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
  const open = ref(false)
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger>Open</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <form
          @submit.prevent="
            (event) => {
              wait().then(() => (open = false));
            }
          "
        >
          <button type="submit">
            Submit
          </button>
        </form>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

### 可滚动覆盖层

将内容移到覆盖层内部以渲染带溢出的对话框。

```html
<script setup>
  import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'reka-ui'
  import './styles.css'
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay class="DialogOverlay">
        <DialogContent class="DialogContent">
          ...
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
```

```css
/* styles.css */
.DialogOverlay {
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
}

.DialogContent {
  min-width: 300px;
  background: white;
  padding: 30px;
  border-radius: 4px;
}
```

然而，这种方法有一个需要注意的地方，用户可能会点击滚动条并意外关闭对话框。目前没有通用的解决方案可以解决这个问题，但是您可以向 `DialogContent` 添加以下代码片段，以防止在点击滚动条时关闭模态框。

```html
<DialogContent
  @pointer-down-outside="(event) => {
    const originalEvent = event.detail.originalEvent;
    const target = originalEvent.target as HTMLElement;
    if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
      event.preventDefault();
    }
  }"
>
```

### 自定义 Portal 容器

自定义对话框传送到的元素。

```html
<script setup>
  import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'reka-ui'
  const container = ref(null)
</script>

<template>
  <div>
    <DialogRoot>
      <DialogTrigger />
      <DialogPortal to="container">
        <DialogOverlay />
        <DialogContent>...</DialogContent>
      </DialogPortal>
    </DialogRoot>
    <div ref="container" />
  </div>
</template>
```

### 禁用外部交互时关闭

例如，如果您有一个全局的 Toast 组件，在点击它时不应该关闭对话框。
[查看代码](View code)
[打开对话框](Open Dialog)

## 可访问性

遵循 [Dialog WAI-ARIA 设计模式](Dialog WAI-ARIA design pattern)。

### 关闭图标按钮

当提供图标（或字体图标）时，请记住为屏幕阅读器用户正确标记它。

```html
<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <DialogClose aria-label="Close">
          <span aria-hidden="true">×</span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

### 使用插槽 props 关闭

或者，您可以使用 `DialogRoot` 插槽 props 提供的 `close` 方法以编程方式关闭对话框。

```html
<script setup>
  import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'reka-ui'
</script>

<template>
  <DialogRoot v-slot="{ close }">
    <DialogTrigger>Open</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <form>
          <button type="submit" @click="close">
            Submit
          </button>
        </form>
      </DialogContent>
      <DialogFooter>
        <button type="submit" @click="close">
          Submit
        </button>
      </DialogFooter>
    </DialogPortal>
  </DialogRoot>
</template>
```

### 键盘交互

| 按键        | 描述                 |
| ----------- | -------------------- |
| `Space`     | 打开/关闭对话框      |
| `Enter`     | 打开/关闭对话框      |
| `Tab`       | 将焦点移至下一个可聚焦元素。 |
| `Shift + Tab` | 将焦点移至上一个可聚焦元素。 |
| `Esc`       | 关闭对话框并将焦点移至 `DialogTrigger`。 |

## 自定义 API

通过将原始部分抽象为自己的组件来创建您自己的 API。

### 抽象覆盖层和关闭按钮

此示例抽象了 `DialogOverlay` 和 `DialogClose` 部分。

**用法**

```html
<script setup>
  import { Dialog, DialogContent, DialogTrigger } from './your-dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>Dialog trigger</DialogTrigger>
    <DialogContent>Dialog Content</DialogContent>
  </Dialog>
</template>
```

**实现**

```typescript
// your-dialog.ts
export { default as DialogContent } from 'DialogContent.vue'
export { DialogRoot as Dialog, DialogTrigger } from 'reka-ui'
```

```html
<script setup lang="ts">
  import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
  import { Cross2Icon } from '@radix-icons/vue'
  import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'

  const props = defineProps<DialogContentProps>()
  const emits = defineEmits<DialogContentEmits>()
  const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent v-bind="forwarded">
      <slot />
      <DialogClose>
        <Cross2Icon />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
```

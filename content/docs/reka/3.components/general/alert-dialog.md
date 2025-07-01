---
title: Alert Dialog
description: 模态对话框会用重要内容打断用户并期望得到回应。
---

::component-example
---
name: 'reka-alert-dialog-example'
collapse: true
---
::

## 功能特性

* [x] 焦点自动锁定。
* [x] 可以受控或不受控。
* [x] 通过 `Title` 和 `Description` 组件管理屏幕阅读器公告。
* [x] 按下 Esc 键自动关闭组件。

## 安装

从命令行安装组件。

::code-group
```bash [npm]
npm add reka-ui
```
```bash [pnpm]
pnpm add reka-ui
```
```bash [yarn]
yarn add reka-ui
```
```bash [bun]
bun add reka-ui
```
::

## 结构

导入所有部分并将它们组合在一起。

```vue
<script setup lang="ts">
  import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogRoot,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from 'reka-ui'
</script>

<template>
  <AlertDialogRoot>
    <AlertDialogTrigger />
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle />
        <AlertDialogDescription />
        <AlertDialogCancel />
        <AlertDialogAction />
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
```

## API 参考

### Root

包含警告对话框的所有部分。

| Prop | 默认值 | 类型 | 说明 |
| :----------- | :--------- | :--------- | :--------- |
| `defaultOpen` | | `boolean` |对话框首次渲染时的打开状态。当您不需要控制其打开状态时使用。|
| `open` | | `boolean` |对话框的受控打开状态。可以绑定为 v-model:open 。|

**Emit Payload**

| 事件名称 | Payload 类型 | 说明 |
| :--------------- | :--------- | :--------- |
| `update:open` | `[value: boolean]` | 当对话框的打开状态改变时调用事件处理程序。|

**Slots (default) Payload**

| Slot 名称 | Payload 类型 | 说明 |
| :-------- | :----------- |:----------- |
| `open` | `boolean` |当前打开状态|
| `close` | `(): void` |关闭对话框|

### Trigger

一个打开对话框的按钮。

| Prop | 默认值 | 类型 |说明 |
| :-------- | :------- | :-------------------- |:----------- |
| `as` | `'button'` | `AsTag \| Component` |此组件应渲染为的元素或组件。可以被 asChild 覆盖。|
| `asChild` | | `boolean` |更改作为子元素传递的默认渲染元素，合并它们的道具和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。|

**Data Attribute Value**

| 属性名称 | 值 |
| :--------------- | :------------------ |
| `[data-state]` | `"open" \| "closed"` |

### Portal

使用时，将您的覆盖层和内容部分传送到 `body` 中。

| Prop | 默认值 | 类型 |说明 |
| :---------- | :----- | :------------------- | :------------------- |
| `defer` | | `boolean` |推迟 Teleport 目标的解析，直到应用程序的其他部分已安装（需要 Vue 3.5.0+）|
| `disabled` | | `boolean` |禁用传送并以内联方式呈现组件|
| `forceMount` | | `boolean` |当需要更多控制时，用于强制挂载。在使用 Vue 动画库控制动画时非常有用。|
| `to` | | `string \| HTMLElement` |Vue 原生传送组件 prop :to|

### Overlay

对话框打开时，覆盖视图中非活动部分的图层。

| Prop | 默认值 | 类型 |说明 |
| :---------- | :----- | :-------------------- |:-------------------- |
| `as` | `'div'` | `AsTag \| Component` |此组件应渲染为的元素或组件。可以被 asChild 覆盖。|
| `asChild` | | `boolean` |更改作为子元素传递的默认渲染元素，合并它们的道具和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。|
| `forceMount` | | `boolean` |当需要更多控制时，用于强制挂载。在使用 Vue 动画库控制动画时非常有用。|

**Data Attribute Value**

| 属性名称 | 值 |
| :--------------- | :------------------ |
| `[data-state]` | `"open" \| "closed"` |

### Content

包含对话框打开时要渲染的内容。

| Prop | 默认值 | 类型 | 说明                                                              |
| :-------------------------- | :----- | :-------------------- |:----------------------------------------------------------------|
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以被 asChild 覆盖。                                   |
| `asChild` | | `boolean` | 更改作为子元素传递的默认渲染元素，合并它们的道具和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |
| `disableOutsidePointerEvents` | | `boolean` |设置为 `true` 时， `DismissableLayer` 外部元素上的悬停/聚焦/点击交互将被禁用。用户需要在外部元素上点击两次才能与其交互：一次关闭 `DismissableLayer` ，再次触发该元素。|
| `forceMount` | | `boolean` | 当需要更多控制时，用于强制挂载。在使用 Vue 动画库控制动画时非常有用。|
| `trapFocus` | | `boolean` | 当为 true 时，焦点无法通过键盘、指针或程序焦点脱离 Content 。|
 
**Emit Payload**

| 事件名称 | Payload 类型 | 说明 |
| :-------------------- | :--------------------------------------- |:--------------------------------------- |
| `closeAutoFocus` | `[event: Event]` | 自动对焦关闭时调用的事件处理程序。可以阻止。|
| `escapeKeyDown` | `[event: KeyboardEvent]` | 按下 Esc 键时调用的事件处理程序。可以阻止。|
| `focusOutside` | `[event: FocusOutsideEvent]` |当焦点移出 DismissableLayer 时调用的事件处理程序。可以阻止。|
| `interactOutside` | `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` |当 DismissableLayer 之外发生交互时调用的事件处理程序。具体来说，当 pointerdown 事件发生在 DismissableLayer 之外或焦点移到 DismissableLayer 之外时。可以阻止。|
| `openAutoFocus` | `[event: Event]` |自动聚焦打开时调用的事件处理程序。可以阻止。|
| `pointerDownOutside` | `[event: PointerDownOutsideEvent]` |当 `pointerdown` 事件发生在 `DismissableLayer` 之外时调用的事件处理程序。可以阻止。|

**Data Attribute Value**

| 属性名称 | 值 |
| :--------------- | :------------------ |
| `[data-state]` | `"open" \| "closed"` |

### Cancel

一个关闭对话框的按钮。此按钮应与 `AlertDialogAction` 按钮在视觉上有所区别。

| Prop | 默认值 | 类型 | 说明                                                                   |
| :-------- | :------- | :-------------------- |:---------------------------------------------------------------------|
| `as` | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以被 asChild 覆盖。                                        |
| `asChild` | | `boolean` | 更改作为子元素传递的默认渲染元素，合并它们的 props 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |

### Action

一个关闭对话框的按钮。这些按钮应与 `AlertDialogCancel` 按钮在视觉上有所区别。

| Prop | 默认值 | 类型 | 说明 |
| :-------- | :------- | :-------------------- |:-------------------- |
| `as` | `'button'` | `AsTag \| Component` |此组件应渲染为的元素或组件。可以被 asChild 覆盖。|
| `asChild` | | `boolean` |更改作为子元素传递的默认渲染元素，合并它们的 props 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |

### Title

对话框打开时要宣布的可访问名称。或者，您可以为 `AlertDialogContent` 提供 `aria-label` 或 `aria-labelledby` 并排除此组件。

| Prop | 默认值 | 类型 |说明 |
| :-------- | :----- | :-------------------- |:-------------------- |
| `as` | `'h2'` | `AsTag \| Component` |此组件应渲染为的元素或组件。可以被 asChild 覆盖。
| `asChild` | | `boolean` |更改作为子元素传递的默认渲染元素，合并它们的 props 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |

### Description

对话框打开时要宣布的可访问描述。或者，您可以为 `AlertDialogContent` 提供 `aria-describedby` 并排除此组件。

| Prop | 默认值 | 类型 |说明 |
| :-------- | :----- | :-------------------- |:-------------------- |
| `as` | `'p'` | `AsTag \| Component` |此组件应渲染为的元素或组件。可以被 asChild 覆盖。
| `asChild` | | `boolean` |更改作为子元素传递的默认渲染元素，合并它们的 props 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |

## 示例

### 异步表单提交后关闭

使用受控 prop 在异步操作完成后通过编程方式关闭警告对话框。

```html
<script setup>
  import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogRoot,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from 'reka-ui'
  const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
  const open = ref(false)
</script>

<template>
  <AlertDialogRoot v-model:open="open">
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <form
          @submit.prevent="
            (event) => {
              wait().then(() => open = false);
            }
          "
        >
          <button type="submit">
            Submit
          </button>
        </form>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
```

### 自定义传送门容器

自定义警告对话框传送到的元素。

```html
<script setup>
  import { ref } from 'vue'
  const container = ref(null)
</script>

<template>
  <div>
    <AlertDialogRoot>
      <AlertDialogTrigger />
      <AlertDialogPortal :to="container">
        <AlertDialogOverlay />
        <AlertDialogContent>...</AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialogRoot>
    <div ref="container" />
  </div>
</template>
```

## 可访问性

遵循 [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)。

### 键盘交互

| 键 | 描述 |
| :---------- | :-------------------------------- |
| `Space` | 打开/关闭对话框。 |
| `Enter` | 打开/关闭对话框。 |
| `Tab` | 将焦点移动到下一个可聚焦元素。 |
| `Shift + Tab` | 将焦点移动到上一个可聚焦元素。 |
| `Esc` | 关闭对话框并将焦点移动到 `AlertDialogTrigger`。 |

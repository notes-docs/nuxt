---
title: Context Menu
description: 显示位于指针处的菜单，通过右键单击或长按触发。
---

::component-example
---
name: 'reka-context-menu-example'
collapse: true
---
::

## 功能特点

* [x] 支持带可配置阅读方向的子菜单。
* [x] 支持项目、标签、项目组。
* [x] 支持可勾选项目（单选或多选），并可选不确定状态。
* [x] 支持模态和非模态模式。
* [x] 自定义侧边、对齐方式、偏移量、碰撞处理。
* [x] 焦点完全管理。
* [x] 完整的键盘导航。
* [x] 类型提前支持（Typeahead support）。
* [x] 关闭和分层行为高度可定制。
* [x] 在触摸设备上通过长按触发。

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
<script setup lang="ts">
  import {
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuItemIndicator,
    ContextMenuLabel,
    ContextMenuPortal,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuRoot,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger />
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuLabel />
        <ContextMenuItem />
        <ContextMenuGroup>
          <ContextMenuItem />
        </ContextMenuGroup>
        <ContextMenuCheckboxItem>
          <ContextMenuItemIndicator />
        </ContextMenuCheckboxItem>
        <ContextMenuRadioGroup>
          <ContextMenuRadioItem>
            <ContextMenuItemIndicator />
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSub>
          <ContextMenuSubTrigger />
          <ContextMenuPortal>
            <ContextMenuSubContent />
          </ContextMenuPortal>
        </ContextMenuSub>
        <ContextMenuSeparator />
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

## API 参考

遵循 [Menu WAI-ARIA 设计模式](Menu WAI-ARIA design pattern) 并使用 [漫游 tabindex](roving tabindex) 来管理菜单项之间的焦点移动。

### Root

包含上下文菜单的所有部分。

| 属性    | 默认值  | 类型             | 描述                                                                                                        |
| ------- | ------- | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| `dir`   |         | `'ltr' \| 'rtl'` | 适用时，组合框的阅读方向。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `modal` | `true`  | `boolean`        | 下拉菜单的模态。当设置为 `true` 时，与外部元素的交互将被禁用，并且只有菜单内容对屏幕阅读器可见。 |

**触发事件 (Emit)**

| Payload          | 描述                     |
| ---------------- | ------------------------ |
| `[payload: boolean]` | 子菜单打开状态改变时调用的事件处理程序。 |

### Trigger

打开上下文菜单的区域。将其包裹在您希望上下文菜单在右键单击（或使用相关键盘快捷键）时打开的目标周围。

| 属性      | 默认值   | 类型             | 描述                                                                                              |
| --------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled` | `false`  | `boolean`        | 当为 `true` 时，右键单击时不会打开上下文菜单。请注意，这也会恢复原生上下文菜单。                   |

**数据属性**

| 属性           | 值             |
| -------------- | -------------- |
| `[data-state]` | `"open" \| "closed"` |

### Portal

当使用时，将内容部分传送到 `body` 中。

| 属性        | 默认值 | 类型                   | 描述                                                                    |
| ----------- | ------ | ---------------------- | ----------------------------------------------------------------------- |
| `defer`     |        | `boolean`              | 延迟 Teleport 目标的解析，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。 |
| `disabled`  |        | `boolean`              | 禁用 Teleport 并内联渲染组件。                                          |
| `forceMount` |        | `boolean`              | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `to`        |        | `string \| HTMLElement` | Vue 原生 Teleport 组件 prop `:to`。                                     |

### Content

在打开的上下文菜单中弹出的组件。

| 属性                   | 默认值      | 类型                                                                          | 描述                                                                                                |
| ---------------------- | ----------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `alignOffset`          | `0`         | `number`                                                                      | 从 `start` 或 `end` 对齐选项的像素偏移量。                                                            |
| `as`                   | `'div'`     | `AsTag \| Component`                                                          | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                                 |
| `asChild`              | `false`     | `boolean`                                                                     | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `avoidCollisions`      | `true`      | `boolean`                                                                     | 当为 `true` 时，覆盖侧边和对齐偏好以防止与边界边缘碰撞。                                            |
| `collisionBoundary`    | `[]`        | `Element \| (Element \| null)[] \| null`                                      | 用作碰撞边界的元素。默认情况下是视口，但您可以提供额外的元素以包含在此检查中。                       |
| `collisionPadding`     | `0`         | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 碰撞检测应发生的边界边缘的像素距离。接受一个数字（所有边相同），或一个部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableUpdateOnLayoutShift` |             | `boolean`                                                                     | 是否在布局偏移时禁用内容更新位置。                                                                    |
| `forceMount`           |             | `boolean`                                                                     | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。                                     |
| `hideWhenDetached`     | `false`     | `boolean`                                                                     | 当触发器完全被遮挡时是否隐藏内容。                                                                    |
| `loop`                 |             | `boolean`                                                                     | 当为 `true` 时，键盘导航将从最后一个项目循环到第一个，反之亦然。                                      |
| `positionStrategy`     |             | `'fixed' \| 'absolute'`                                                       | 要使用的 CSS `position` 属性类型。                                                                  |
| `prioritizePosition`   |             | `boolean`                                                                     | 强制内容在视口内定位。可能会与参考元素重叠，这可能不是期望的。                                        |
| `reference`            |             | `ReferenceElement`                                                            | 将作为浮动元素定位参考的自定义元素或虚拟元素。如果提供，它将替换默认锚点元素。                       |
| `sticky`               | `'partial'` | `'partial' \| 'always'`                                                       | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将无论如何都使内容保持在边界内。 |

**触发事件 (Emit)**

| Payload                 | 描述                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| `[event: Event]`        | 关闭时自动聚焦时调用的事件处理程序。可以阻止。                        |
| `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]` | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性           | 值                     |
| -------------- | ---------------------- |
| `[data-state]` | `"open" \| "closed"`     |
| `[data-side]`  | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]` | `"start" \| "end" \| "center"` |

**CSS 变量**

| 变量                                   | 描述                                       |
| -------------------------------------- | ------------------------------------------ |
| `--reka-context-menu-content-transform-origin` | 从内容和箭头位置/偏移量计算的 `transform-origin` |
| `--reka-context-menu-content-available-width`  | 触发器和边界边缘之间剩余的宽度             |
| `--reka-context-menu-content-available-height` | 触发器和边界边缘之间剩余的高度             |
| `--reka-context-menu-trigger-width`    | 触发器的宽度                               |
| `--reka-context-menu-trigger-height`   | 触发器的高度                               |

### Arrow

一个可选的箭头元素，与子菜单一起渲染。这可以用于帮助将触发项目与 `ContextMenu.Content` 视觉链接起来。必须在 `ContextMenu.Content` 内部渲染。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'svg'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `height`  | `5`    | `number`         | 箭头的像素高度。                                                                                  |
| `rounded` |        | `boolean`        | 当为 `true` 时，渲染圆角版本的箭头。不适用于 `as/asChild`。                                       |
| `width`   | `10`   | `number`         | 箭头的像素宽度。                                                                                  |

### Item

包含上下文菜单项目的组件。

| 属性        | 默认值 | 类型             | 描述                                                                                              |
| ----------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`  |        | `boolean`        | 当为 `true` 时，阻止用户与项目交互。                                                              |
| `textValue` |        | `string`         | 用于类型提前的可选文本。默认情况下，类型提前行为将使用项目的 `.textContent`。当内容复杂或内部有非文本内容时使用。 |

**触发事件 (Emit)**

| Payload          | 描述                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `[event: Event]` | 当用户选择项目（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该项目时菜单关闭。 |

**数据属性**

| 属性            | 值             |
| --------------- | -------------- |
| `[data-highlighted]` | 高亮时存在     |
| `[data-disabled]` | 禁用时存在     |

### Group

用于分组多个 `ContextMenu.Items`。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Label

用于渲染标签。它不能使用箭头键聚焦。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### CheckboxItem

可以像复选框一样控制和渲染的项目。

| 属性        | 默认值         | 类型                      | 描述                                                                                              |
| ----------- | -------------- | ------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`        | `AsTag \| Component`      | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`        | `boolean`                 | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`  |                | `boolean`                 | 当为 `true` 时，阻止用户与项目交互。                                                              |
| `modelValue` | `false \| true \| 'indeterminate'` | 受控的勾选状态。可以作为 `v-model` 使用。                                                         |
| `textValue` |                | `string`                  | 用于类型提前的可选文本。默认情况下，类型提前行为将使用项目的 `.textContent`。当内容复杂或内部有非文本内容时使用。 |

**触发事件 (Emit)**

| Payload          | 描述                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `[event: Event]` | 当用户选择项目（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该项目时菜单关闭。 |
| `[payload: boolean]` | 当值改变时调用的事件处理程序。                                                                                    |

**数据属性**

| 属性            | 值                             |
| --------------- | ------------------------------ |
| `[data-state]`  | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-highlighted]` | 高亮时存在                     |
| `[data-disabled]` | 禁用时存在                     |

### RadioGroup

用于分组多个 `ContextMenu.RadioItems`。

| 属性         | 默认值 | 类型             | 描述                                                                                              |
| ------------ | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `modelValue` |        | `string`         | 组中选中项目的值。                                                                                |

**触发事件 (Emit)**

| Payload          | 描述                   |
| ---------------- | ---------------------- |
| `[payload: string]` | 当值改变时调用的事件处理程序。 |

### RadioItem

可以像单选框一样控制和渲染的项目。

| 属性        | 默认值 | 类型             | 描述                                                                                              |
| ----------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`  |        | `boolean`        | 当为 `true` 时，阻止用户与项目交互。                                                              |
| `textValue` |        | `string`         | 用于类型提前的可选文本。默认情况下，类型提前行为将使用项目的 `.textContent`。当内容复杂或内部有非文本内容时使用。 |
| `value`\* |        | `string`         | 项目的唯一值。                                                                                    |

**触发事件 (Emit)**

| Payload          | 描述                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `[event: Event]` | 当用户选择项目（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该项目时菜单关闭。 |

**数据属性**

| 属性            | 值                             |
| --------------- | ------------------------------ |
| `[data-state]`  | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-highlighted]` | 高亮时存在                     |
| `[data-disabled]` | 禁用时存在                     |

### ItemIndicator

当父级 `ContextMenu.CheckboxItem` 或 `ContextMenu.RadioItem` 被勾选时渲染。您可以直接设置此元素的样式，也可以将其用作放置图标的包装器，或两者兼而有之。

| 属性        | 默认值 | 类型             | 描述                                                                                              |
| ----------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` |        | `boolean`        | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。                                 |

**数据属性**

| 属性            | 值                             |
| --------------- | ------------------------------ |
| `[data-state]`  | `"checked" \| "unchecked" \| "indeterminate"` |

### Separator

用于在上下文菜单中视觉上分隔项目。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Sub

包含子菜单的所有部分。

| 属性          | 默认值 | 类型     | 描述                                                     |
| ------------- | ------ | -------- | -------------------------------------------------------- |
| `defaultOpen` |        | `boolean` | 子菜单首次渲染时的打开状态。当您不需要控制其打开状态时使用。 |
| `open`        |        | `boolean` | 菜单的受控打开状态。可以作为 `v-model:open` 使用。       |

**触发事件 (Emit)**

| Payload          | 描述                     |
| ---------------- | ------------------------ |
| `[payload: boolean]` | 子菜单打开状态改变时调用的事件处理程序。 |

**插槽 (默认)**

| Payload    | 描述         |
| ---------- | ------------ |
| `open`     | 当前打开状态 |

### SubTrigger

打开子菜单的项目。必须在 `ContextMenu.Sub` 内部渲染。

| 属性        | 默认值 | 类型             | 描述                                                                                              |
| ----------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`  |        | `boolean`        | 当为 `true` 时，阻止用户与项目交互。                                                              |
| `textValue` |        | `string`         | 用于类型提前的可选文本。默认情况下，类型提前行为将使用项目的 `.textContent`。当内容复杂或内部有非文本内容时使用。 |

**数据属性**

| 属性            | 值             |
| --------------- | -------------- |
| `[data-state]`  | `"open" \| "closed"` |
| `[data-highlighted]` | 高亮时存在     |
| `[data-disabled]` | 禁用时存在     |

### SubContent

当子菜单打开时弹出的组件。必须在 `ContextMenu.Sub` 内部渲染。

| 属性                   | 默认值 | 类型                                                                          | 描述                                                                                                |
| ---------------------- | ------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `alignOffset`          |        | `number`                                                                      | 从 `start` 或 `end` 对齐选项的像素偏移量。                                                            |
| `arrowPadding`         |        | `number`                                                                      | 箭头与内容边缘之间的填充。如果您的内容有 `border-radius`，这将防止它溢出角。                           |
| `as`                   | `'div'`  | `AsTag \| Component`                                                          | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                                 |
| `asChild`              | `false`  | `boolean`                                                                     | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `avoidCollisions`      |        | `boolean`                                                                     | 当为 `true` 时，覆盖侧边和对齐偏好以防止与边界边缘碰撞。                                            |
| `collisionBoundary`    |        | `Element \| (Element \| null)[] \| null`                                      | 用作碰撞边界的元素。默认情况下是视口，但您可以提供额外的元素以包含在此检查中。                       |
| `collisionPadding`     |        | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 碰撞检测应发生的边界边缘的像素距离。接受一个数字（所有边相同），或一个部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableUpdateOnLayoutShift` |        | `boolean`                                                                     | 是否在布局偏移时禁用内容更新位置。                                                                    |
| `forceMount`           |        | `boolean`                                                                     | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。                                     |
| `hideWhenDetached`     |        | `boolean`                                                                     | 当触发器完全被遮挡时是否隐藏内容。                                                                    |
| `loop`                 |        | `boolean`                                                                     | 当为 `true` 时，键盘导航将从最后一个项目循环到第一个，反之亦然。                                      |
| `positionStrategy`     |        | `'fixed' \| 'absolute'`                                                       | 要使用的 CSS `position` 属性类型。                                                                  |
| `prioritizePosition`   |        | `boolean`                                                                     | 强制内容在视口内定位。可能会与参考元素重叠，这可能不是期望的。                                        |
| `reference`            |        | `ReferenceElement`                                                            | 将作为浮动元素定位参考的自定义元素或虚拟元素。如果提供，它将替换默认锚点元素。                       |
| `sideOffset`           |        | `number`                                                                      | 与触发器的像素距离。                                                                                |
| `sticky`               |        | `'partial' \| 'always'`                                                       | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将无论如何都使内容保持在边界内。 |
| `updatePositionStrategy` |        | `'always' \| 'optimized'`                                                     | 在每个动画帧上更新浮动元素位置的策略。                                                              |

**触发事件 (Emit)**

| Payload                 | 描述                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| `[event: Event]`        | 关闭时自动聚焦时调用的事件处理程序。可以阻止。                        |
| `[event: Event]`        | 容器被聚焦时调用的事件处理程序。可以阻止。                            |
| `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]` | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: Event]`        | 打开时自动聚焦时调用的事件处理程序。可以阻止。                        |
| `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性           | 值                     |
| -------------- | ---------------------- |
| `[data-state]` | `"open" \| "closed"`     |
| `[data-side]`  | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]` | `"start" \| "end" \| "center"` |

**CSS 变量**

| 变量                                   | 描述                                       |
| -------------------------------------- | ------------------------------------------ |
| `--reka-context-menu-content-transform-origin` | 从内容和箭头位置/偏移量计算的 `transform-origin` |
| `--reka-context-menu-content-available-width`  | 触发器和边界边缘之间剩余的宽度             |
| `--reka-context-menu-content-available-height` | 触发器和边界边缘之间剩余的高度             |
| `--reka-context-menu-trigger-width`    | 触发器的宽度                               |
| `--reka-context-menu-trigger-height`   | 触发器的高度                               |

## 示例

### 带子菜单

您可以结合使用 `ContextMenuSub` 及其部分来创建子菜单。

```html
<script setup lang="ts">
  import {
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuPortal,
    ContextMenuRoot,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Sub menu →</ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent>
              <ContextMenuItem>Sub menu item</ContextMenuItem>
              <ContextMenuItem>Sub menu item</ContextMenuItem>
              <ContextMenuArrow />
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>…</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### 带禁用项

您可以通过 `data-disabled` 属性为禁用项添加特殊样式。

```html
<script setup lang="ts">
  import { ContextMenuContent, ContextMenuItem, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem
          class="ContextMenuItem"
          disabled
        >
          …
        </ContextMenuItem>
        <ContextMenuItem class="ContextMenuItem">
          …
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css
/* styles.css */
.ContextMenuItem[data-disabled] {
  color: gainsboro;
}
```

### 带分隔符

使用 `Separator` 部分在项目之间添加分隔符。

```html
<script setup lang="ts">
  import {
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuPortal,
    ContextMenuRoot,
    ContextMenuSeparator,
    ContextMenuTrigger,
  } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>…</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### 带标签

使用 `Label` 部分帮助标记一个部分。

```html
<script setup lang="ts">
  import {
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuPortal,
    ContextMenuRoot,
    ContextMenuTrigger,
  } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuLabel>Label</ContextMenuLabel>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### 带复选框项

使用 `CheckboxItem` 部分添加一个可勾选的项目。

```html
<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import {
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuItemIndicator,
    ContextMenuPortal,
    ContextMenuRoot,
    ContextMenuSeparator,
    ContextMenuTrigger,
  } from 'reka-ui'

  const checked = ref(true)
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuItem>…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem v-model="checked">
          <ContextMenuItemIndicator>
            <Icon icon="radix-icons:check" />
          </ContextMenuItemIndicator>
          Checkbox item
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### 带单选框项

使用 `RadioGroup` 和 `RadioItem` 部分添加一个可在其他项目之间选择的项目。

```html
<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import {
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuItemIndicator,
    ContextMenuPortal,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuRoot,
    ContextMenuSeparator,
    ContextMenuTrigger,
  } from 'reka-ui'

  const color = ref('blue')
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuRadioGroup v-model="color">
          <ContextMenuRadioItem value="red">
            <ContextMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </ContextMenuItemIndicator>
            Red
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="blue">
            <ContextMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </ContextMenuItemIndicator>
            Blue
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="green">
            <ContextMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </ContextMenuItemIndicator>
            Green
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### 带复杂项

您可以在 `Item` 部分中添加额外的装饰元素，例如图片。

```html
<script setup lang="ts">
  import { ContextMenuContent, ContextMenuItem, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent>
        <ContextMenuItem>
          <img src="…">
          Adolfo Hess
        </ContextMenuItem>
        <ContextMenuItem>
          <img src="…">
          Miyah Myles
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

### 限制内容/子内容大小

您可能希望限制内容（或子内容）的宽度，使其与触发器（或子触发器）的宽度匹配。您可能还希望限制其高度不超过视口。
我们暴露了几个 CSS 自定义属性，例如 `--reka-context-menu-trigger-width` 和 `--reka-context-menu-content-available-height` 来支持这一点。使用它们来限制内容尺寸。

```html
<script setup lang="ts">
  import { ContextMenuContent, ContextMenuItem, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent class="ContextMenuContent">
        …
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css
/* styles.css */
.ContextMenuContent {
  width: var(--reka-context-menu-trigger-width);
  max-height: var(--reka-context-menu-content-available-height);
}
```

### 感知源动画

我们暴露了一个 CSS 自定义属性 `--reka-context-menu-content-transform-origin`。使用它来根据 `side`、`sideOffset`、`align`、`alignOffset` 和任何碰撞从计算出的原点动画内容。

```html
<script setup lang="ts">
  import { ContextMenuContent, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent class="ContextMenuContent">
        …
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css
/* styles.css */
.ContextMenuContent {
  transform-origin: var(--reka-context-menu-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 感知碰撞动画

我们暴露了 `data-side` 和 `data-align` 属性。它们的值将在运行时改变以反映碰撞。使用它们来创建感知碰撞和方向的动画。

```html
<script setup lang="ts">
  import { ContextMenuContent, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from 'reka-ui'
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>…</ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent class="ContextMenuContent">
        …
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
```

```css
/* styles.css */
.ContextMenuContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.ContextMenuContent[data-side="top"] {
  animation-name: slideUp;
}

.ContextMenuContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 可访问性

使用 [漫游 tabindex](roving tabindex) 来管理菜单项之间的焦点移动。

### 键盘交互

| 按键        | 描述                 |
| ----------- | -------------------- |
| `Space`     | 激活聚焦的项目。     |
| `Enter`     | 激活聚焦的项目。     |
| `ArrowDown` | 将焦点移至下一个项目。 |
| `ArrowUp`   | 将焦点移至上一个项目。 |
| `ArrowRight` | `ArrowLeft`         | 当焦点在 `ContextMenu.SubTrigger` 上时，根据阅读方向打开或关闭子菜单。 |
| `Esc`       | 关闭上下文菜单。     |

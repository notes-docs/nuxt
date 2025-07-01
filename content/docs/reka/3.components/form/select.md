---
title: Select
description: 显示一个选项列表，供用户选择——由按钮触发。
---

::component-example
---
name: 'reka-select-example'
collapse: true
---
::

## 特性 (Features)

* 可控或非控
* 提供 2 种定位模式
* 支持项目、标签、项目组
* 焦点完全受管理
* 完整的键盘导航
* 支持自定义占位符
* 预输入支持
* 支持从右到左 (RTL) 方向

## 安装 (Installation)

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

## 解剖 (Anatomy)

导入所有部件并组装它们。

```vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>
      <SelectValue />
      <SelectIcon />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectScrollUpButton />
        <SelectViewport>
          <SelectItem>
            <SelectItemText />
            <SelectItemIndicator />
          </SelectItem>
          <SelectGroup>
            <SelectLabel />
            <SelectItem>
              <SelectItemText />
              <SelectItemIndicator />
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
        </SelectViewport>
        <SelectScrollDownButton />
        <SelectArrow />
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含 Select 的所有部分。

| 属性             | 默认值 | 类型                                                | 描述                                                                |
| :--------------- | :----- | :-------------------------------------------------- | :------------------------------------------------------------------ |
| `autocomplete`   |        | `string`                                            | 原生 html 输入框的 `autocomplete` 属性。                            |
| `by`             |        | `string \| ((a: AcceptableValue, b: AcceptableValue) => boolean)` | 使用此属性按特定字段比较对象，或者传入您自己的比较函数以完全控制对象的比较方式。 |
| `defaultOpen`    |        | `boolean`                                           | Select 初始渲染时的打开状态。当您不需要控制其打开状态时使用。       |
| `defaultValue`   |        | `AcceptableValue \| AcceptableValue[]`              | Select 初始渲染时的值。当您不需要控制 Select 的状态时使用。         |
| `dir`            |        | `'ltr' \| 'rtl'`                                    | 组合框的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`       |        | `boolean`                                           | 当 `true` 时，阻止用户与 Select 交互。                              |
| `modelValue`     |        | `AcceptableValue \| AcceptableValue[]`              | Select 的受控值。可以通过 `v-model` 绑定。                          |
| `multiple`       |        | `boolean`                                           | 是否可以选择多个选项。                                              |
| `name`           |        | `string`                                            | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `open`           |        | `boolean`                                           | Select 的受控打开状态。可以通过 `v-model:open` 绑定。               |
| `required`       |        | `boolean`                                           | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |

**EmitPayload**

| 事件             | Payload               | 描述                 |
| :--------------- | :-------------------- | :------------------- |
| `update:modelValue` | `[value: AcceptableValue]` | 值更改时调用的事件处理程序。 |
| `update:open`    | `[value: boolean]`    | 上下文菜单打开状态更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload        | 描述         |
| :------------- | :----------- |
| `modelValue`   | 当前输入值   |
| `open`         | 当前打开状态 |

### 触发器 (Trigger)

切换 Select 的按钮。`SelectContent` 会通过对齐到触发器来定位自身。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |            | `boolean`            |                                                                     |
| `reference` |            | `ReferenceElement`   | 用于定位的参考（或锚定）元素。如果未提供，将使用当前组件作为锚点。  |

**数据属性 (Data Attributes)**

| 数据属性          | 值                 |
| :---------------- | :----------------- |
| `[data-state]`    | `"open" \| "closed"` |
| `[data-disabled]` | 禁用时存在         |
| `[data-placeholder]` | 有占位符时存在     |

### 值 (Value)

反映所选值的部分。默认情况下，将渲染所选项目的文本。如果您需要更多控制，可以控制 Select 并传入您自己的子元素。不应为其设置样式以确保正确的位置。当 Select 没有值时，还提供了一个可选的 `placeholder` 属性。

| 属性        | 默认值   | 类型                 | 描述                                                                |
| :---------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`        | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`   |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `placeholder` | `''`     | `string`             | 当未设置 `value` 或 `defaultValue` 时，将在 `SelectValue` 内部渲染的内容。 |

**Slots (默认)**

| Payload          | 描述         |
| :--------------- | :----------- |
| `selectedLabel`  |              |
| `modelValue`     |              |

### 图标 (Icon)

一个通常显示在值旁边的小图标，作为其可打开的视觉提示。默认渲染 ▼，但您可以通过 `asChild` 使用您自己的图标或使用 `children`。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |        | `boolean`            | 当 `true` 时，阻止用户与项目交互。                                  |
| `textValue` |        | `string`             | 用于预输入的可选文本。默认情况下，预输入行为将使用 `SelectItemText` 部分的 `textContent`。当内容复杂或您内部有非文本内容时使用此属性。 |
| `value`   |        | `AcceptableValue`    | 作为数据提交时随 `name` 提交的值。                                  |

**EmitPayload**

| 事件     | Payload                          | 描述                               |
| :------- | :------------------------------- | :--------------------------------- |
| `select` | `[event: SelectEvent<AcceptableValue>]` | 选择项目时调用的事件处理程序。可以通过调用 `event.preventDefault()` 阻止默认行为。 |

### 门户 (Portal)

当使用时，将内容部分传送到 `body`。

| 属性         | 默认值 | 类型                 | 描述                                                                |
| :----------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `defer`      |        | `boolean`            | 将 Teleport 目标的解析延迟到应用程序的其他部分挂载之后（需要 Vue 3.5.0+）。 |
| `reference`  |        |                      |                                                                     |
| `disabled`   |        | `boolean`            | 禁用 Teleport 并内联渲染组件。                                      |
| `reference`  |        |                      |                                                                     |
| `forceMount` |        | `boolean`            | 当需要更多控制时用于强制挂载。在与 Vue 动画库一起控制动画时很有用。 |
| `to`         |        | `string \| HTMLElement` | Vue 原生 Teleport 组件的 `to` 属性。                              |
| `reference`  |        |                      |                                                                     |

### 内容 (Content)

当 Select 打开时弹出的组件。

**提示**

使用 `Presence` 组件构建 - 支持任何[动画技术](https://www.google.com/search?q=https://reka-ui.dev/guides/animation)同时保持对 Presence 发出的事件的访问。

| 属性                 | 默认值       | 类型                                                   | 描述                                                                                                       |
| :------------------- | :----------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `align`              |              | `'start' \| 'center' \| 'end'`                         | 相对于触发器的首选对齐方式。当发生冲突时可能会改变。                                                       |
| `alignOffset`        |              | `number`                                               | 距离 `start` 或 `end` 对齐选项的像素偏移量。                                                               |
| `arrowPadding`       |              | `number`                                               | 箭头与内容边缘之间的填充。如果您的内容有 `border-radius`，这将防止它溢出角落。                             |
| `as`                 | `'div'`      | `AsTag \| Component`                                   | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                                                        |
| `asChild`            |              | `boolean`                                              | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `avoidCollisions`    |              | `boolean`                                              | 当 `true` 时，覆盖侧边和对齐偏好以防止与边界边缘冲突。                                                     |
| `bodyLock`           |              | `boolean`                                              | `document.body` 将被锁定，滚动将被禁用。                                                                   |
| `collisionBoundary`  |              | `Element \| (Element \| null)[] \| null`               | 用作碰撞边界的元素。默认情况下是视口，但您可以提供额外的元素以包含在此检查中。                             |
| `collisionPadding`   |              | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 距离边界边缘的像素距离，在该距离处应发生碰撞检测。接受数字（所有侧面相同）或部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableUpdateOnLayoutShift` |              | `boolean`                                              | 布局发生变化时是否禁用内容的位置更新。                                                                     |
| `forceMount`         |              | `boolean`                                              | 当需要更多控制时用于强制挂载。在与 Vue 动画库一起控制动画时很有用。 |
| `hideWhenDetached`   |              | `boolean`                                              | 当触发器完全被遮挡时是否隐藏内容。                                                                         |
| `position`           | `'item-aligned'` | `'popper' \| 'item-aligned'`                           | 要使用的定位模式。`item-aligned`（默认）- 行为类似于原生的 MacOS 菜单，通过相对于活动项目定位内容。`popper` - 以与我们其他原语（例如 `Popover` 或 `DropdownMenu`）相同的方式定位内容。 |
| `positionStrategy`   |              | `'fixed' \| 'absolute'`                                | 要使用的 CSS `position` 属性类型。                                                                       |
| `prioritizePosition` |              | `boolean`                                              | 强制内容定位在视口内。可能会与参考元素重叠，这可能不希望如此。                                           |
| `reference`          |              | `ReferenceElement`                                     | 将设置为参考以定位浮动元素的自定义元素或虚拟元素。如果提供，它将替换默认的锚定元素。                       |
| `side`               |              | `'top' \| 'right' \| 'bottom' \| 'left'`               | 打开时相对于触发器的首选侧面。当发生冲突且 `avoidCollisions` 启用时，将反转。                               |
| `sideOffset`         |              | `number`                                               | 距触发器的像素距离。                                                                                       |
| `sticky`             |              | `'partial' \| 'always'`                                | 在对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将使内容始终保持在边界内。 |
| `updatePositionStrategy` |              | `'always' \| 'optimized'`                              | 在每个动画帧上更新浮动元素位置的策略。                                                                     |

**EmitPayload**

| 事件             | Payload               | 描述                               |
| :--------------- | :-------------------- | :--------------------------------- |
| `closeAutoFocus` | `[event: Event]`      | 关闭时自动聚焦时调用的事件处理程序。可以阻止。 |
| `escapeKeyDown`  | `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。 |
| `pointerDownOutside` | `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性 (Data Attributes)**

| 数据属性        | 值                       |
| :-------------- | :----------------------- |
| `[data-state]`  | `"open" \| "closed"`       |
| `[data-side]`   | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]`  | `"start" \| "end" \| "center"` |

**CSS 变量 (CSS Variables)**

| CSS 变量                      | 描述                                                                                                 |
| :---------------------------- | :--------------------------------------------------------------------------------------------------- |
| `--reka-select-content-transform-origin` | 从内容和箭头位置/偏移量计算的 `transform-origin`。仅当 `position="popper"` 时存在。                  |
| `--reka-select-content-available-width` | 触发器和边界边缘之间的剩余宽度。仅当 `position="popper"` 时存在。                                    |
| `--reka-select-content-available-height` | 触发器和边界边缘之间的剩余高度。仅当 `position="popper"` 时存在。                                    |
| `--reka-select-trigger-width` | 触发器的宽度。仅当 `position="popper"` 时存在。                                                      |
| `--reka-select-trigger-height` | 触发器的高度。仅当 `position="popper"` 时存在。                                                      |

### 视口 (Viewport)

包含所有项目的可滚动视口。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `nonce`   |        | `string`             | 将 `nonce` 属性添加到样式标签，可供内容安全策略使用。如果省略，则全局继承自 `ConfigProvider`。 |

### 项目 (Item)

包含 Select 项目的组件。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |        | `boolean`            | 当 `true` 时，阻止用户与项目交互。                                  |
| `textValue` |        | `string`             | 用于预输入的可选文本。默认情况下，预输入行为将使用 `SelectItemText` 部分的 `textContent`。当内容复杂或您内部有非文本内容时使用此属性。 |
| `value`   |        | `AcceptableValue`    | 作为数据提交时随 `name` 提交的值。                                  |

**EmitPayload**

| 事件     | Payload                          | 描述                               |
| :------- | :------------------------------- | :--------------------------------- |
| `select` | `[event: SelectEvent<AcceptableValue>]` | 选择项目时调用的事件处理程序。可以通过调用 `event.preventDefault()` 阻止默认行为。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"checked" \| "unchecked"` |
| `[data-highlighted]` | 高亮时存在               |
| `[data-disabled]` | 禁用时存在               |

### 项目文本 (ItemText)

项目的文本部分。它应该只包含您希望在选中该项目时在触发器中看到的文本。不应为其设置样式以确保正确的位置。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 项目指示器 (ItemIndicator)

当项目被选中时渲染。您可以直接样式化此元素，也可以将其用作包装器以放置图标，或两者兼而有之。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 向上滚动按钮 (ScrollUpButton)

一个可选按钮，用作显示视口溢出的辅助功能，并功能性地启用向上滚动。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 向下滚动按钮 (ScrollDownButton)

一个可选按钮，用作显示视口溢出的辅助功能，并功能性地启用向下滚动。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 组 (Group)

用于对多个项目进行分组。与 `SelectLabel` 结合使用可确保通过自动标签实现良好的可访问性。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 标签 (Label)

用于渲染组的标签。它不会通过箭头键聚焦。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `for`     |        | `string`             |                                                                     |

### 分隔符 (Separator)

用于在 Select 项目之间进行视觉分离。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 箭头 (Arrow)

一个可选的箭头元素，与内容一起渲染。这有助于将触发器与 `SelectContent` 视觉连接起来。必须在 `SelectContent` 内部渲染。仅当 `position` 设置为 `popper` 时可用。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'svg'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `height`  | `5`    | `number`             | 箭头的像素高度。                                                    |
| `rounded` |        | `boolean`            | 当 `true` 时，渲染圆角版本的箭头。不适用于 `as/asChild`。         |
| `width`   | `10`   | `number`             | 箭头的像素宽度。                                                    |

## 示例 (Examples)

### 更改定位模式 (Change the positioning mode)

默认情况下，`Select` 的行为类似于原生 MacOS 菜单，通过相对于活动项目定位 `SelectContent`。如果您更喜欢类似于 `Popover` 或 `DropdownMenu` 的替代定位方法，那么您可以将 `position` 设置为 `popper` 并利用额外的对齐选项，例如 `side`、`sideOffset` 等。

```vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'reka-ui'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent
        position="popper"
        :side-offset="5"
      >
        …
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### 限制内容大小 (Constrain the content size)

当在 `SelectContent` 上使用 `position="popper"` 时，您可能希望限制内容的宽度以匹配触发器宽度。您可能还希望限制其高度，使其不超过视口。
我们公开了几个 CSS 自定义属性，例如 `--reka-select-trigger-width` 和 `--reka-select-content-available-height` 来支持这一点。使用它们来限制内容的尺寸。

```vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'reka-ui'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent
        class="SelectContent"
        position="popper"
        :side-offset="5"
      >
        …
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css
/* styles.css */
.SelectContent {
  width: var(--reka-select-trigger-width);
  max-height: var(--reka-select-content-available-height);
}
```

### 禁用项目 (With disabled items)

您可以通过 `data-disabled` 属性为禁用的项目添加特殊样式。

```vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'reka-ui'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem
            class="SelectItem"
            disabled
          >
            …
          </SelectItem>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css
/* styles.css */
.SelectItem[data-disabled] {
  color: "gainsboro";
}
```

### 带占位符 (With a placeholder)

您可以在 `Value` 上使用 `placeholder` 属性，以便在 Select 没有值时显示。`Trigger` 上还有一个 `data-placeholder` 属性，用于样式设置。

```vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'reka-ui'
import './styles.css'
</script>

<template>
  <SelectRoot>
    <SelectTrigger class="SelectTrigger">
      <SelectValue placeholder="Pick an option" />
      <SelectIcon />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>…</SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css
/* styles.css */
.SelectTrigger[data-placeholder] {
  color: "gainsboro";
}
```

### 带分隔符 (With separators)

使用 `Separator` 部分在项目之间添加分隔符。

```vue
<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
          <SelectSeparator />
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### 带分组项目 (With grouped items)

使用 `Group` 和 `Label` 部分对项目进行分组。

```vue
<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Label</SelectLabel>
            <SelectItem>…</SelectItem>
            <SelectItem>…</SelectItem>
            <SelectItem>…</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### 带复杂项目 (With complex items)

您可以在项目中使用自定义内容。

```vue
<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'reka-ui'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem>
            <SelectItemText>
              <img src="…">
              Adolfo Hess
            </SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### 控制触发器中显示的值 (Controlling the value displayed in the trigger)

默认情况下，触发器显示所选项目的文本（不再像 v1 那样自动渲染 `ItemText` 的内容）。
如果您需要渲染除纯文本以外的内容，可以使用 `v-model` 属性（或访问 `SelectValue` 的 `slotProps`）并向 `SelectValue` 传递 `slot` 来控制组件。请记住确保您放入的内容是可访问的。

```vue
<script setup>
import { ref } from 'vue'
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'

const countries = { 'france': '🇫🇷', 'united-kingdom': '🇬🇧', 'spain': '🇪🇸' }
const value = ref('france')
</script>

<template>
  <SelectRoot v-model="value">
    <SelectTrigger>
      <SelectValue :aria-label="value">
        {{ countries[value] }}
      </SelectValue>
      <SelectIcon />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectViewport>
          <SelectItem value="france">
            <SelectItemText>France</SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
          <SelectItem value="united-kingdom">
            <SelectItemText>United Kingdom</SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
          <SelectItem value="spain">
            <SelectItemText>Spain</SelectItemText>
            <SelectItemIndicator>…</SelectItemIndicator>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### 带自定义滚动条 (With custom scrollbar)

原生滚动条默认隐藏，因为我们建议使用 `ScrollUpButton` 和 `ScrollDownButton` 部分以获得最佳用户体验。如果您不想使用这些部分，请将您的 Select 与我们的 `Scroll Area` 原语组合。

```vue
<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'reka-ui'
</script>

<template>
  <SelectRoot>
    <SelectTrigger>…</SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <ScrollAreaRoot
          class="ScrollAreaRoot"
          type="auto"
        >
          <SelectViewport as-child>
            <ScrollAreaViewport class="ScrollAreaViewport">
              <StyledItem>…</StyledItem>
              <StyledItem>…</StyledItem>
              <StyledItem>…</StyledItem>
            </ScrollAreaViewport>
          </SelectViewport>
          <ScrollAreaScrollbar
            class="ScrollAreaScrollbar"
            orientation="vertical"
          >
            <ScrollAreaThumb class="ScrollAreaThumb" />
          </ScrollAreaScrollbar>
        </ScrollAreaRoot>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```css
/* styles.css */
.ScrollAreaRoot {
  width: 100%;
  height: 100%;
}
.ScrollAreaViewport {
  width: 100%;
  height: 100%;
}
.ScrollAreaScrollbar {
  width: 4px;
  padding: 5px 2px;
}
.ScrollAreaThumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}
```

## 可访问性 (Accessibility)

遵循 [ListBox WAI-ARIA 设计模式](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)。
有关更多信息，请参见 W3C 的 [Select-Only Combobox](https://www.google.com/search?q=https://www.w3.org/WAI/ARIA/apg/examples/combobox/combobox-select-only/) 示例。

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                                       |
| :---------- | :----------------------------------------- |
| `Space`     | 当焦点在 `SelectTrigger` 上时，打开 Select 并聚焦选中的项目。当焦点在一个项目上时，选择聚焦的项目。 |
| `Enter`     | 当焦点在 `SelectTrigger` 上时，打开 Select 并聚焦第一个项目。当焦点在一个项目上时，选择聚焦的项目。 |
| `ArrowDown` | 当焦点在 `SelectTrigger` 上时，打开 Select。当焦点在一个项目上时，将焦点移动到下一个项目。 |
| `ArrowUp`   | 当焦点在 `SelectTrigger` 上时，打开 Select。当焦点在一个项目上时，将焦点移动到上一个项目。 |
| `Esc`       | 关闭 Select 并将焦点移回 `SelectTrigger`。 |

### 标签 (Labelling)

使用我们的 `Label` 组件为 Select 提供视觉和可访问的标签。

```vue
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  Label,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from 'reka-ui'
import { ref } from 'vue'
</script>

<template>
  <Label>
    Country
    <SelectRoot>…</SelectRoot>
  </Label>
  <Label for="country">Country</Label>
  <SelectRoot>
    <SelectTrigger id="country">
      …
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>…</SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

### 自定义 API (Custom APIs)

通过将原始部分抽象到您自己的组件中来创建您自己的 API。

#### 抽象到 `Select` 和 `SelectItem` (Abstract down to `Select` and `SelectItem`)

此示例抽象了大部分部分。

**用法 (Usage)**

```vue
<script setup lang="ts">
import { Select, SelectItem } from './your-select'
</script>

<template>
  <Select default-value="2">
    <SelectItem value="1">
      Item 1
    </SelectItem>
    <SelectItem value="2">
      Item 2
    </SelectItem>
    <SelectItem value="3">
      Item 3
    </SelectItem>
  </Select>
</template>
```

**实现 (Implementation)**

```typescript
// your-select.ts
export { default as Select } from './Select.vue'
export { default as SelectItem } from './SelectItem.vue'
```

```vue
<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'reka-ui'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, } from '@radix-icons/vue'
import { SelectContent, SelectIcon, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()
const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot v-bind="forward">
    <SelectTrigger>
      <SelectValue />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <slot />
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
```

```vue
<script setup lang="ts">
import type { SelectItemProps } from 'reka-ui'
import { CheckIcon } from '@radix-icons/vue'
import { SelectItem, SelectItemIndicator, SelectItemText } from 'reka-ui'

const props = defineProps<SelectItemProps>()
</script>

<template>
  <SelectItem v-bind="props">
    <SelectItemText>
      <slot />
    </SelectItemText>
    <SelectItemIndicator>
      <CheckIcon />
    </SelectItemIndicator>
  </SelectItem>
</template>
```


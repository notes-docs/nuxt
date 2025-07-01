---
title: Menubar
description: 桌面应用程序中常见的视觉持久菜单，可快速访问一组一致的命令。
---

::component-example
---
name: 'reka-menubar-example'
collapse: true
---
::

## 功能

* 可控或不可控。
* 支持子菜单，可配置阅读方向。
* 支持项目、标签、项目组。
* 支持可选中项目（单选或多选）。
* 自定义侧边、对齐方式、偏移量、碰撞处理。
* 可选渲染一个指向箭头。
* 焦点完全由组件管理。
* 完整的键盘导航。
* 支持 Typeahead (即时搜索/输入提示)。

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
    MenubarArrow,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarItemIndicator,
    MenubarLabel,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarRoot,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from './'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger />
      <MenubarPortal>
        <MenubarContent>
          <MenubarLabel />
          <MenubarItem />
          <MenubarGroup>
            <MenubarItem />
          </MenubarGroup>
          <MenubarCheckboxItem>
            <MenubarItemIndicator />
          </MenubarCheckboxItem>
          <MenubarRadioGroup>
            <MenubarRadioItem>
              <MenubarItemIndicator />
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSub>
            <MenubarSubTrigger />
            <MenubarPortal>
              <MenubarSubContent />
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarArrow />
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

## API 参考

### Root

包含菜单栏的所有部分。

| 属性         | 默认值 | 类型                   | 描述                                                                    |
| ------------ | ------ | ---------------------- | ----------------------------------------------------------------------- |
| `defaultValue` |        | `string`               | 首次渲染时应打开的菜单值。当您不需要控制值状态时使用。                 |
| `dir`        |        | `'ltr' \| 'rtl'`       | 组合框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `loop`       | `false`  | `boolean`              | 当为 `true` 时，键盘导航将从最后一项循环到第一项，反之亦然。             |
| `modelValue` |        | `string`               | 要打开的菜单的受控值。可用作 `v-model`。                                 |

**触发事件 (Emit)**

| Payload          | 描述                           |
| ---------------- | ------------------------------ |
| `[value: boolean]` | 值改变时调用的事件处理程序。     |

**插槽 (默认)**

| Payload        | 描述             |
| -------------- | ---------------- |
| `modelValue`   | 当前输入值       |

### Menu

一个顶层菜单项，包含触发器和内容的组合。

| 属性    | 默认值 | 类型       | 描述                                                           |
| ------- | ------ | ---------- | -------------------------------------------------------------- |
| `value` |        | `string`   | 当导航菜单受控时，将项目与活动值关联的唯一值。当不受控时，此 prop 会自动管理。 |

### Trigger

切换内容的按钮。默认情况下，`MenubarContent` 将根据触发器自身定位。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled` | `false`    | `boolean`            | 当为 `true` 时，阻止用户与项目交互。                                                             |

**数据属性**

| 属性           | 值                 |
| -------------- | ------------------ |
| `[data-state]` | `"open" \| "closed"` |
| `[data-highlighted]` | 高亮时存在           |
| `[data-disabled]` | 禁用时存在           |

### Portal

当使用时，将内容部分传送到 `body` 中。

| 属性        | 默认值 | 类型                   | 描述                                                                    |
| ----------- | ------ | ---------------------- | ----------------------------------------------------------------------- |
| `defer`     |        | `boolean`              | 延迟 Teleport 目标的解析，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。 |
| `disabled`  | `false`  | `boolean`              | 禁用 Teleport 并内联渲染组件。                                          |
| `forceMount` | `false`  | `boolean`              | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `to`        |        | `string \| HTMLElement` | Vue 原生 Teleport 组件 prop `:to`。                                     |

### Content

菜单打开时弹出的组件。

| 属性                   | 默认值    | 类型                                                                          | 描述                                                                                                |
| ---------------------- | --------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `align`                | `'start'` | `'start' \| 'center' \| 'end'`                                                | 首选的相对于触发器的对齐方式。当发生碰撞时可能会改变。                                            |
| `alignOffset`          | `0`       | `number`                                                                      | 从 `start` 或 `end` 对齐选项的像素偏移量。                                                            |
| `arrowPadding`         | `0`       | `number`                                                                      | 箭头与内容边缘之间的填充。如果您的内容有 `border-radius`，这将防止它溢出角。                           |
| `as`                   | `'div'`   | `AsTag \| Component`                                                          | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                                 |
| `asChild`              | `false`   | `boolean`                                                                     | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `avoidCollisions`      | `true`    | `boolean`                                                                     | 当为 `true` 时，覆盖侧边和对齐偏好以防止与边界边缘碰撞。                                            |
| `collisionBoundary`    | `window`  | `Element \| (Element \| null)[] \| null`                                      | 用作碰撞边界的元素。默认情况下是视口，但您可以提供额外的元素以包含在此检查中。                       |
| `collisionPadding`     | `0`       | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 碰撞检测应发生的边界边缘的像素距离。接受一个数字（所有边相同），或一个部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableUpdateOnLayoutShift` | `false`   | `boolean`                                                                     | 是否在布局偏移时禁用内容更新位置。                                                                    |
| `forceMount`           | `false`   | `boolean`                                                                     | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `hideWhenDetached`     | `false`   | `boolean`                                                                     | 当触发器完全被遮挡时是否隐藏内容。                                                                    |
| `loop`                 | `false`   | `boolean`                                                                     | 当为 `true` 时，键盘导航将从最后一项循环到第一项，反之亦然。             |
| `positionStrategy`     | `'absolute'` | `'fixed' \| 'absolute'`                                                       | 要使用的 CSS `position` 属性类型。                                                                  |
| `prioritizePosition`   | `false`   | `boolean`                                                                     | 强制内容在视口内定位。可能会与参考元素重叠，这可能不是期望的。                                        |
| `reference`            | `null`    | `ReferenceElement`                                                            | 将作为浮动元素定位参考的自定义元素或虚拟元素。如果提供，它将替换默认锚点元素。                       |
| `side`                 | `'bottom'` | `'top' \| 'right' \| 'bottom' \| 'left'`                                      | 打开时相对于触发器的首选侧边。当发生碰撞且 `avoidCollisions` 启用时，将反转。                       |
| `sideOffset`           | `0`       | `number`                                                                      | 与触发器的像素距离。                                                                                |
| `sticky`               | `'partial'` | `'partial' \| 'always'`                                                       | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将无论如何都使内容保持在边界内。 |
| `updatePositionStrategy` | `'optimized'` | `'always' \| 'optimized'`                                                     | 在每个动画帧上更新浮动元素位置的策略。                                                              |

**触发事件 (Emit)**

| Payload                 | 描述                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| `[event: Event]`        | 自动关闭时调用的事件处理程序。可以阻止。                            |
| `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]` | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性           | 值                                       |
| -------------- | ---------------------------------------- |
| `[data-state]` | `"open" \| "closed"`                     |
| `[data-side]`  | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]` | `"start" \| "end" \| "center"`           |

**CSS 变量**

| 变量                                       | 描述                                       |
| ------------------------------------------ | ------------------------------------------ |
| `--reka-menubar-content-transform-origin` | 从内容和箭头位置/偏移量计算的 `transform-origin` |
| `--reka-menubar-content-available-width` | 触发器和边界边缘之间剩余的宽度             |
| `--reka-menubar-content-available-height` | 触发器和边界边缘之间剩余的高度             |
| `--reka-menubar-trigger-width`    | 触发器的宽度                               |
| `--reka-menubar-trigger-height`   | 触发器的高度                               |

### Arrow

一个可选的箭头元素，与菜单栏菜单一起渲染。这可以用于帮助将触发器与 `MenubarContent` 视觉链接起来。必须在 `MenubarContent` 内部渲染。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'svg'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `height`  | `5`    | `number`             | 箭头的像素高度。                                                                                  |
| `rounded` | `false`  | `boolean`            | 当为 `true` 时，渲染圆角版本的箭头。不适用于 `as/asChild`。                                       |
| `width`   | `10`   | `number`             | 箭头的像素宽度。                                                                                  |

### Item

包含菜单栏项目的组件。

| 属性        | 默认值 | 类型                 | 描述                                                                                              |
| ----------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`  | `false`  | `boolean`            | 当为 `true` 时，阻止用户与项目交互。                                                             |
| `textValue` |        | `string`             | 用于 Typeahead 目的的可选文本。默认情况下，Typeahead 行为将使用项目的 `.textContent`。当内容复杂或包含非文本内容时使用此项。 |

**触发事件 (Emit)**

| Payload           | 描述                                                                |
| ----------------- | ------------------------------------------------------------------- |
| `[event: Event]`  | 用户选择项目（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该项目时关闭菜单。 |

**数据属性**

| 属性              | 值         |
| ----------------- | ---------- |
| `[data-highlighted]` | 高亮时存在 |
| `[data-disabled]` | 禁用时存在 |

### Group

用于将多个 `MenubarItems` 分组。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Label

用于渲染标签。无法通过箭头键聚焦。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### CheckboxItem

可以像复选框一样控制和渲染的项目。

| 属性         | 默认值    | 类型                       | 描述                                                                                              |
| ------------ | --------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`   | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`   | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`   | `false`   | `boolean`                  | 当为 `true` 时，阻止用户与项目交互。                                                             |
| `modelValue` | `false`   | `false \| true \| 'indeterminate'` | 项目的受控选中状态。可用作 `v-model`。                                                            |
| `textValue`  |           | `string`                   | 用于 Typeahead 目的的可选文本。默认情况下，Typeahead 行为将使用项目的 `.textContent`。当内容复杂或包含非文本内容时使用此项。 |

**触发事件 (Emit)**

| Payload           | 描述                                                                |
| ----------------- | ------------------------------------------------------------------- |
| `[event: Event]`  | 用户选择项目（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该项目时关闭菜单。 |
| `[payload: boolean]` | 值改变时调用的事件处理程序。                                        |

**数据属性**

| 属性              | 值                      |
| ----------------- | ----------------------- |
| `[data-state]`    | `"checked" \| "unchecked"` |
| `[data-highlighted]` | 高亮时存在                |
| `[data-disabled]` | 禁用时存在                |

### RadioGroup

用于将多个 `MenubarRadioItems` 分组。

| 属性         | 默认值 | 类型                 | 描述                                                                                              |
| ------------ | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `modelValue` |        | `string`             | 组中选中项目的值。                                                                                |

**触发事件 (Emit)**

| Payload           | 描述                       |
| ----------------- | -------------------------- |
| `[payload: string]` | 值改变时调用的事件处理程序。 |

### RadioItem

可以像单选框一样控制和渲染的项目。

| 属性        | 默认值 | 类型                 | 描述                                                                                              |
| ----------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`  | `false`  | `boolean`            | 当为 `true` 时，阻止用户与项目交互。                                                             |
| `textValue` |        | `string`             | 用于 Typeahead 目的的可选文本。默认情况下，Typeahead 行为将使用项目的 `.textContent`。当内容复杂或包含非文本内容时使用此项。 |
| `value`\* |        | `string`             | 项目的唯一值。                                                                                    |

**触发事件 (Emit)**

| Payload           | 描述                                                                |
| ----------------- | ------------------------------------------------------------------- |
| `[event: Event]`  | 用户选择项目（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该项目时关闭菜单。 |

**数据属性**

| 属性              | 值                      |
| ----------------- | ----------------------- |
| `[data-state]`    | `"checked" \| "unchecked"` |
| `[data-highlighted]` | 高亮时存在                |
| `[data-disabled]` | 禁用时存在                |

### ItemIndicator

当父 `MenubarCheckboxItem` 或 `MenubarRadioItem` 被选中时渲染。您可以直接设置此元素的样式，也可以将其用作放置图标的包装器，或两者兼而有之。

| 属性         | 默认值 | 类型                 | 描述                                                                                              |
| ------------ | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` | `false`  | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |

**数据属性**

| 属性           | 值                      |
| -------------- | ----------------------- |
| `[data-state]` | `"checked" \| "unchecked"` |

### Separator

用于在菜单栏项目之间进行视觉分隔。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Sub

包含子菜单的所有部分。

| 属性         | 默认值 | 类型      | 描述                                                                    |
| ------------ | ------ | --------- | ----------------------------------------------------------------------- |
| `defaultOpen` | `false`  | `boolean` | 子菜单首次渲染时的打开状态。当您不需要控制其打开状态时使用。           |
| `open`       |        | `boolean` | 菜单的受控打开状态。可用作 `v-model:open`。                             |

**触发事件 (Emit)**

| Payload           | 描述                           |
| ----------------- | ------------------------------ |
| `[payload: boolean]` | 子菜单打开状态改变时调用的事件处理程序。 |

**插槽 (默认)**

| Payload    | 描述         |
| ---------- | ------------ |
| `open`     | 当前打开状态 |

### SubTrigger

打开子菜单的项目。必须在 `MenubarSub` 内部渲染。

| 属性        | 默认值 | 类型                 | 描述                                                                                              |
| ----------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`  | `false`  | `boolean`            | 当为 `true` 时，阻止用户与项目交互。                                                             |
| `textValue` |        | `string`             | 用于 Typeahead 目的的可选文本。默认情况下，Typeahead 行为将使用项目的 `.textContent`。当内容复杂或包含非文本内容时使用此项。 |

**数据属性**

| 属性           | 值                 |
| -------------- | ------------------ |
| `[data-state]` | `"open" \| "closed"` |
| `[data-highlighted]` | 高亮时存在           |
| `[data-disabled]` | 禁用时存在           |

### SubContent

子菜单打开时弹出的组件。必须在 `MenubarSub` 内部渲染。

| 属性                   | 默认值    | 类型                                                                          | 描述                                                                                                |
| ---------------------- | --------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `alignOffset`          | `0`       | `number`                                                                      | 从 `start` 或 `end` 对齐选项的像素偏移量。                                                            |
| `arrowPadding`         | `0`       | `number`                                                                      | 箭头与内容边缘之间的填充。如果您的内容有 `border-radius`，这将防止它溢出角。                           |
| `as`                   | `'div'`   | `AsTag \| Component`                                                          | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                                 |
| `asChild`              | `false`   | `boolean`                                                                     | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `avoidCollisions`      | `true`    | `boolean`                                                                     | 当为 `true` 时，覆盖侧边和对齐偏好以防止与边界边缘碰撞。                                            |
| `collisionBoundary`    | `window`  | `Element \| (Element \| null)[] \| null`                                      | 用作碰撞边界的元素。默认情况下是视口，但您可以提供额外的元素以包含在此检查中。                       |
| `collisionPadding`     | `0`       | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 碰撞检测应发生的边界边缘的像素距离。接受一个数字（所有边相同），或一个部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableUpdateOnLayoutShift` | `false`   | `boolean`                                                                     | 是否在布局偏移时禁用内容更新位置。                                                                    |
| `forceMount`           | `false`   | `boolean`                                                                     | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `hideWhenDetached`     | `false`   | `boolean`                                                                     | 当触发器完全被遮挡时是否隐藏内容。                                                                    |
| `loop`                 | `false`   | `boolean`                                                                     | 当为 `true` 时，键盘导航将从最后一项循环到第一项，反之亦然。             |
| `positionStrategy`     | `'absolute'` | `'fixed' \| 'absolute'`                                                       | 要使用的 CSS `position` 属性类型。                                                                  |
| `prioritizePosition`   | `false`   | `boolean`                                                                     | 强制内容在视口内定位。可能会与参考元素重叠，这可能不是期望的。                                        |
| `reference`            | `null`    | `ReferenceElement`                                                            | 将作为浮动元素定位参考的自定义元素或虚拟元素。如果提供，它将替换默认锚点元素。                       |
| `sideOffset`           | `0`       | `number`                                                                      | 与触发器的像素距离。                                                                                |
| `sticky`               | `'partial'` | `'partial' \| 'always'`                                                       | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将无论如何都使内容保持在边界内。 |
| `updatePositionStrategy` | `'optimized'` | `'always' \| 'optimized'`                                                     | 在每个动画帧上更新浮动元素位置的策略。                                                              |

**触发事件 (Emit)**

| Payload                 | 描述                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| `[event: Event]`        | 自动关闭时调用的事件处理程序。可以阻止。                            |
| `[event: Event]`        | 容器获得焦点时调用的事件处理程序。可以阻止。                        |
| `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]` | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: Event]`        | 自动打开时调用的事件处理程序。可以阻止。                            |
| `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性              | 值                                       |
| ----------------- | ---------------------------------------- |
| `[data-state]`    | `"open" \| "closed"`                     |
| `[data-side]`     | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]`    | `"start" \| "end" \| "center"`           |
| `[data-orientation]` | `"vertical" \| "horizontal"`             |

**CSS 变量**

| 变量                                       | 描述                                       |
| ------------------------------------------ | ------------------------------------------ |
| `--reka-menubar-content-transform-origin` | 从内容和箭头位置/偏移量计算的 `transform-origin` |
| `--reka-menubar-content-available-width` | 触发器和边界边缘之间剩余的宽度             |
| `--reka-menubar-content-available-height` | 触发器和边界边缘之间剩余的高度             |
| `--reka-menubar-trigger-width`    | 触发器的宽度                               |
| `--reka-menubar-trigger-height`   | 触发器的高度                               |

## 示例

### 带子菜单

您可以使用 `MenubarSub` 及其部分创建子菜单。

```html
<script setup lang="ts">
  import {
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarPortal,
    MenubarRoot,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Sub menu →</MenubarSubTrigger>
            <MenubarPortal>
              <MenubarSubContent>
                <MenubarItem>Sub menu item</MenubarItem>
                <MenubarItem>Sub menu item</MenubarItem>
                <MenubarArrow />
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>…</MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### 带禁用项

您可以通过 `data-disabled` 属性为禁用项添加特殊样式。

```html
<script setup lang="ts">
  import { MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem
            class="MenubarItem"
            disabled
          >
            …
          </MenubarItem>
          <MenubarItem class="MenubarItem">
            …
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css
/* styles.css */
.MenubarItem[data-disabled] {
  color: gainsboro;
}
```

### 带分隔符

使用 `Separator` 部分在项目之间添加分隔符。

```html
<script setup lang="ts">
  import {
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarPortal,
    MenubarRoot,
    MenubarSeparator,
    MenubarTrigger,
  } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>…</MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### 带标签

使用 `Label` 部分帮助标记一个部分。

```html
<script setup lang="ts">
  import {
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarPortal,
    MenubarRoot,
    MenubarTrigger,
  } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarLabel>Label</MenubarLabel>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### 带复选框项

使用 `CheckboxItem` 部分添加一个可选中项目。

```html
<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import {
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarItemIndicator,
    MenubarMenu,
    MenubarPortal,
    MenubarRoot,
    MenubarSeparator,
    MenubarTrigger,
  } from 'reka-ui'

  const checked = ref(true)
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>…</MenubarItem>
          <MenubarItem>…</MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem v-model="checked">
            <MenubarItemIndicator>
              <Icon icon="radix-icons:check" />
            </MenubarItemIndicator>
            Checkbox item
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### 带单选框项

使用 `RadioGroup` 和 `RadioItem` 部分添加一个可在其他项中选中的项目。

```html
<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import {
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarItemIndicator,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarRoot,
    MenubarSeparator,
    MenubarTrigger,
  } from 'reka-ui'

  const color = ref('blue')
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarRadioGroup v-model="color">
            <MenubarRadioItem value="red">
              <MenubarItemIndicator>
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Red
            </MenubarRadioItem>
            <MenubarRadioItem value="blue">
              <MenubarItemIndicator>
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Blue
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### 带复杂项

您可以在 `Item` 部分中添加额外的装饰元素，例如图像。

```html
<script setup lang="ts">
  import { MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem>
            <img src="…">
            Adolfo Hess
          </MenubarItem>
          <MenubarItem>
            <img src="…">
            Miyah Myles
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

### 限制内容/子内容大小

您可能希望限制内容（或子内容）的宽度，使其与触发器（或子触发器）宽度匹配。您可能还希望限制其高度不超过视口。
我们暴露了几个 CSS 自定义属性，例如 `--reka-menubar-trigger-width` 和 `--reka-menubar-content-available-height` 来支持这一点。使用它们来限制内容尺寸。

```html
<script setup lang="ts">
  import { MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger> Trigger </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="MenubarContent"
          :side-offset="5"
          :align-offset="-3"
        >
          <MenubarItem> New Tab </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css
/* styles.css */
.MenubarContent {
  width: var(--reka-menubar-trigger-width);
  max-height: var(--reka-menubar-content-available-height);
}
```

### 感知源动画

我们暴露了一个 CSS 自定义属性 `--reka-menubar-content-transform-origin`。使用它来根据 `side`、`sideOffset`、`align`、`alignOffset` 和任何碰撞从计算出的原点动画内容。

```html
<script setup lang="ts">
  import { MenubarContent, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent class="MenubarContent">
          …
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css
/* styles.css */
.MenubarContent {
  transform-origin: var(--reka-menubar-content-transform-origin);
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
  import { MenubarContent, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'reka-ui'
</script>

<template>
  <MenubarRoot>
    <MenubarMenu>
      <MenubarTrigger>…</MenubarTrigger>
      <MenubarPortal>
        <MenubarContent class="MenubarContent">
          …
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
```

```css
/* styles.css */
.MenubarContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.MenubarContent[data-side="top"] {
  animation-name: slideUp;
}

.MenubarContent[data-side="bottom"] {
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

遵循 [菜单按钮 WAI-ARIA 设计模式](Menu Button WAI-ARIA design pattern) 并使用 [漫游 tabindex](roving tabindex) 来管理菜单项之间的焦点移动。

### 键盘交互

| 按键        | 描述                                                           |
| ----------- | -------------------------------------------------------------- |
| `Space`     | 当焦点在 `MenubarTrigger` 上时，打开菜单栏并聚焦第一个项目。当焦点在一个项目上时，激活聚焦的项目。 |
| `Enter`     | 当焦点在 `MenubarTrigger` 上时，打开关联的菜单。当焦点在一个项目上时，激活聚焦的项目。 |
| `ArrowDown` | 当焦点在 `MenubarTrigger` 上时，打开关联的菜单。当焦点在一个项目上时，将焦点移到下一个项目。 |
| `ArrowUp`   | 当焦点在一个项目上时，将焦点移到上一个项目。                 |
| `ArrowRight` | 当焦点在 `MenubarTrigger` 上时，将焦点移到下一个或上一个项目。当焦点在 `MenubarSubTrigger` 上时，根据阅读方向打开或关闭子菜单。当焦点在 `MenubarContent` 内时，打开菜单栏中的下一个菜单。 |
| `ArrowLeft` | 当焦点在 `MenubarTrigger` 上时，将焦点移到下一个或上一个项目。当焦点在 `MenubarSubTrigger` 上时，根据阅读方向打开或关闭子菜单。当焦点在 `MenubarContent` 内时，打开菜单栏中的下一个菜单。 |
| `Esc`       | 关闭当前打开的菜单并将焦点移至其 `MenubarTrigger`。          |

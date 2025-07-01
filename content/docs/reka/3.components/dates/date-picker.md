---
title: Date Picker
description: 通过输入和基于日历的界面方便选择日期。
---

::component-example
---
name: 'reka-date-picker-example'
collapse: true
---
::

## 功能特性 (Features)

* 完整的键盘导航。
* 可控或非控。
* 焦点完全管理。
* 支持本地化。
* 默认可访问。
* 支持日期和日期时间格式。

## 前言 (Preface)

该组件依赖于 **`@internationalized/date`** 包，它解决了 JavaScript 中处理日期和时间所带来的许多问题。

我们强烈建议您阅读该包的文档，以充分了解其工作原理。您需要在项目中安装它才能使用日期相关的组件。

### 安装日期包 (Install the date package)

::code-group
```bash [npm]
$ npm add @internationalized/date
```
```bash [pnpm]
$ pnpm add @internationalized/date
```
```bash [yarn]
$ yarn add @internationalized/date
```
```bash [bun]
$ bun add @internationalized/date
```
::

### 安装组件 (Install the component)

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

## 解构 (Anatomy)

导入所有部件并将其组合在一起。

```vue
<script setup>
import {
  DatePickerAnchor,
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerClose,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
} from 'reka-ui'
</script>

<template>
  <DatePickerRoot>
    <DatePickerField>
      <DatePickerInput />
      <DatePickerTrigger />
    </DatePickerField>
    <DatePickerAnchor />
    <DatePickerContent>
      <DatePickerClose />
      <DatePickerArrow />
      <DatePickerCalendar>
        <DatePickerHeader>
          <DatePickerPrev />
          <DatePickerHeading />
          <DatePickerNext />
        </DatePickerHeader>
        <DatePickerGrid>
          <DatePickerGridHead>
            <DatePickerGridRow>
              <DatePickerHeadCell />
            </DatePickerGridRow>
          </DatePickerGridHead>
          <DatePickerGridBody>
            <DatePickerGridRow>
              <DatePickerCell>
                <DatePickerCellTrigger />
              </DatePickerCell>
            </DatePickerGridRow>
          </DatePickerGridBody>
        </DatePickerGrid>
      </DatePickerCalendar>
    </DatePickerContent>
  </DatePickerRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含日期选择器的所有部分。

| 属性               | 默认值   | 类型                                | 描述                                                                |
| :----------------- | :------- | :---------------------------------- | :------------------------------------------------------------------ |
| `as`               | `'div'`  | `AsTag \| Component`                | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`          |          | `boolean`                           | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultOpen`      | `false`  | `boolean`                           | 弹出框初始渲染时的打开状态。当您不需要控制其打开状态时使用。        |
| `defaultPlaceholder` |          | `DateValue`                         | 默认占位符日期。                                                    |
| `defaultValue`     |          | `DateValue`                         | 日历的默认值。                                                      |
| `dir`              |          | `'ltr' \| 'rtl'`                    | 日期字段的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`         | `false`  | `boolean`                           | 日期字段是否禁用。                                                  |
| `fixedWeeks`       | `false`  | `boolean`                           | 日历是否始终显示 6 周。                                             |
| `granularity`      |          | `'day' \| 'hour' \| 'minute' \| 'second'` | 用于格式化时间的粒度。如果提供了 `CalendarDate`，则默认为天，否则默认为分钟。字段将渲染日期各部分的片段，直至并包括指定的粒度。 |
| `hideTimeZone`     |          | `boolean`                           | 是否隐藏字段的时区片段。                                            |
| `hourCycle`        |          | `12 \| 24`                          | 用于格式化时间的小时制。默认为本地偏好设置。                        |
| `id`               |          | `string`                            | 元素的 ID。                                                         |
| `isDateDisabled`   |          | `Matcher`                           | 返回日期是否被禁用的函数。                                          |
| `isDateUnavailable` |          | `Matcher`                           | 返回日期是否不可用的函数。                                          |
| `locale`           | `'en'`   | `string`                            | 用于格式化日期的区域设置。                                          |
| `maxValue`         |          | `DateValue`                         | 可选择的最大日期。                                                  |
| `minValue`         |          | `DateValue`                         | 可选择的最小日期。                                                  |
| `modal`            | `false`  | `boolean`                           | 弹出框的模态性。当设置为 `true` 时，与外部元素的交互将被禁用，并且只有弹出框内容对屏幕阅读器可见。 |
| `modelValue`       |          | `DateValue \| null`                 | 日历的受控选中状态。可绑定为 `v-model`。                            |
| `name`             |          | `string`                            | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `numberOfMonths`   | `1`      | `number`                            | 一次显示的月份数量。                                                |
| `open`             |          | `boolean`                           | 弹出框的受控打开状态。                                              |
| `pagedNavigation`  | `false`  | `boolean`                           | 此属性使“上一页”和“下一页”按钮根据一次显示的月份数量而不是一个月进行导航。 |
| `placeholder`      |          | `DateValue`                         | 占位符日期，用于在未选择日期时确定要显示的月份。它会随着用户导航日历而更新，可用于编程控制日历视图。 |
| `preventDeselect`  | `false`  | `boolean`                           | 是否阻止用户在未选择另一个日期的情况下取消选择日期。                |
| `readonly`         | `false`  | `boolean`                           | 日期字段是否只读。                                                  |
| `required`         |          | `boolean`                           | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `step`             | `1`      | `DateStep`                          | 时间字段的步进间隔。默认为 `1`。                                    |
| `weekdayFormat`    | `'narrow'` | `'narrow' \| 'short' \| 'long'`     | 用于通过 `weekdays` 插槽提供的星期几字符串的格式。                |
| `weekStartsOn`     | `0`      | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6`   | 日历开始的星期几。                                                  |

**发出载荷 (EmitPayload)**

| 事件               | Payload             | 描述                   |
| :----------------- | :------------------ | :--------------------- |
| `update:modelValue` | `[date: DateValue]` | `modelValue` 更改时调用的事件处理程序。 |
| `update:open`      | `[value: boolean]`  | 子菜单打开状态更改时调用的事件处理程序。 |
| `update:placeholder` | `[date: DateValue]` | `placeholder` 值更改时调用的事件处理程序。 |

**方法 (Methods)**

| 类型                 | 描述                               |
| :------------------- | :--------------------------------- |
| `isDateDisabled`     | 返回日期是否被禁用的函数。         |
| `isDateUnavailable`  | 返回日期是否不可用的函数。         |

### 字段 (Field)

包含日期选择器日期字段片段和触发器。

**插槽 (默认) (Slots (default))**

| Payload      | 描述           |
| :----------- | :------------- |
| `segments`   | 日期字段片段内容。 |
| `modelValue` | 字段的当前日期。 |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-readonly]`   | 只读时存在       |
| `[data-disabled]`   | 禁用时存在       |
| `[data-invalid]`    | 无效时存在       |

### 输入 (Input)

包含日期选择器日期字段片段。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `part`\* |          | `'day' \| 'month' \| 'year' \| 'hour' \| 'minute' \| 'second' \| 'dayPeriod' \| 'literal' \| 'timeZoneName'` | 要渲染的日期部分。                                                  |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-disabled]`   | 禁用时存在       |
| `[data-invalid]`    | 无效时存在       |
| `[data-placeholder]` | 未设置值时存在   |

### 触发器 (Trigger)

切换弹出框的按钮。默认情况下，`DatePickerContent` 将根据触发器定位自身。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 内容 (Content)

当弹出框打开时弹出的组件。

| 属性                   | 默认值   | 类型                                                              | 描述                                                                |
| :--------------------- | :------- | :---------------------------------------------------------------- | :------------------------------------------------------------------ |
| `align`                |          | `'start' \| 'center' \| 'end'`                                    | 相对于触发器的首选对齐方式。当发生碰撞时可能会改变。                |
| `alignOffset`          |          | `number`                                                          | 距 `start` 或 `end` 对齐选项的像素偏移量。                          |
| `arrowPadding`         |          | `number`                                                          | 箭头与内容边缘之间的填充。如果您的内容有 `border-radius`，这将防止它溢出角落。 |
| `as`                   | `'div'`  | `AsTag \| Component`                                              | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`              |          | `boolean`                                                         | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `avoidCollisions`      |          | `boolean`                                                         | 当 `true` 时，覆盖侧边和对齐偏好设置，以防止与边界边缘发生碰撞。    |
| `collisionBoundary`    |          | `Element \| (Element \| null)[] \| null`                          | 用作碰撞边界的元素。默认情况下是视口，但您可以提供额外的元素以包含在此检查中。 |
| `collisionPadding`     |          | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 碰撞检测应发生的距边界边缘的像素距离。接受一个数字（所有边相同），或部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableOutsidePointerEvents` |          | `boolean`                                                         | 当 `true` 时，将禁用 `DismissableLayer` 外部元素的悬停/焦点/点击交互。用户需要点击外部元素两次才能与它们交互：一次关闭 `DismissableLayer`，再次触发元素。 |
| `disableUpdateOnLayoutShift` |          | `boolean`                                                         | 当布局发生偏移时是否禁用内容的位置更新。                            |
| `forceMount`           |          | `boolean`                                                         | 当需要更多控制时用于强制挂载。在控制 Vue 动画库的动画时很有用。     |
| `hideWhenDetached`     |          | `boolean`                                                         | 当触发器完全被遮挡时是否隐藏内容。                                  |
| `portal`               |          | `PopoverPortalProps`                                              | 控制包裹内容的门户的 props。                                        |
| `positionStrategy`     |          | `'fixed' \| 'absolute'`                                           | 要使用的 CSS 定位属性的类型。                                       |
| `prioritizePosition`   |          | `boolean`                                                         | 强制内容定位在视口内。可能会与参考元素重叠，这可能不是期望的。      |
| `reference`            |          | `ReferenceElement`                                                | 将作为浮动元素定位参考的自定义元素或虚拟元素。如果提供，它将替换默认的锚点元素。 |
| `side`                 |          | `'top' \| 'right' \| 'bottom' \| 'left'`                          | 打开时相对于触发器的首选渲染侧。当发生碰撞且 `avoidCollisions` 启用时，将反转。 |
| `sideOffset`           |          | `number`                                                          | 距触发器的像素距离。                                                |
| `sticky`               |          | `'partial' \| 'always'`                                           | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将使内容始终保持在边界内。 |
| `updatePositionStrategy` |          | `'always' \| 'optimized'`                                         | 在每个动画帧上更新浮动元素位置的策略。                              |

**发出载荷 (EmitPayload)**

| 事件               | Payload                                   | 描述                                                                                                                                                             |
| :----------------- | :---------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `closeAutoFocus`   | `[event: Event]`                          | 关闭时自动聚焦时调用的事件处理程序。可以阻止。                                                                                                                   |
| `escapeKeyDown`    | `[event: KeyboardEvent]`                  | 按下 Escape 键时调用的事件处理程序。可以阻止。                                                                                                                   |
| `focusOutside`     | `[event: FocusOutsideEvent]`              | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。                                                                                                     |
| `interactOutside`  | `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当外部发生 `pointerdown` 事件或焦点移出时。可以阻止。                                      |
| `openAutoFocus`    | `[event: Event]`                          | 打开时自动聚焦时调用的事件处理程序。可以阻止。                                                                                                                   |
| `pointerDownOutside` | `[event: PointerDownOutsideEvent]`      | 当 `DismissableLayer` 外部发生 `pointerdown` 事件时调用的事件处理程序。可以阻止。                                                                                |

### 箭头 (Arrow)

一个可选的箭头元素，与弹出框一起渲染。这可用于帮助视觉上将锚点与 `DatePickerContent` 连接起来。必须在 `DatePickerContent` 内部渲染。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `height`  |          | `number`             | 箭头的像素高度。                                                    |
| `rounded` |          | `boolean`            | 当 `true` 时，渲染圆角版本的箭头。不适用于 `as/asChild`。         |
| `width`   |          | `number`             | 箭头的像素宽度。                                                    |

### 关闭 (Close)

关闭打开的日期选择器的按钮。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 锚点 (Anchor)

一个可选元素，用于定位 `DatePickerContent`。如果未使用此部分，内容将与 `DatePickerTrigger` 一起定位。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `reference` |          | `ReferenceElement`   | 被引用以进行定位的参考（或锚点）元素。如果未提供，将使用当前组件作为锚点。 |

### 日历 (Calendar)

包含日历的所有部分。

**插槽 (默认) (Slots (default))**

| Payload      | 描述                       |
| :----------- | :------------------------- |
| `date`       | 日期。                     |
| `grid`       | 网格。                     |
| `weekDays`   | 星期几。                   |
| `weekStartsOn` | 周的开始。                 |
| `locale`     | 区域设置。                 |
| `fixedWeeks` | 是否固定周数。             |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-disabled]`   | 禁用时存在       |
| `[data-invalid]`    | 无效时存在       |
| `[data-readonly]`   | 只读时存在       |

### 头部 (Header)

包含导航按钮和标题段。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 上一页按钮 (Prev Button)

日历导航按钮。它根据当前日历视图将日历向前导航一个月/年/十年。

| 属性      | 默认值   | 类型                                | 描述                                                                |
| :-------- | :------- | :---------------------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component`                | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`                           | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `prevPage` |          | `((placeholder: DateValue) => DateValue)` | 用于上一页的函数。覆盖 `CalendarRoot` 上设置的 `prevPage` 函数。      |

**插槽 (默认) (Slots (default))**

| Payload    | 描述         |
| :--------- | :----------- |
| `disabled` | 当前禁用状态 |

**数据属性 (Data Attribute)**

| 值                  | 描述         |
| :------------------ | :----------- |
| `[data-disabled]`   | 禁用时存在   |

### 下一页按钮 (Next Button)

日历导航按钮。它根据当前日历视图将日历向后导航一个月/年/十年。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `nextPage` |          | `((placeholder: DateValue) => DateValue)` | 用于下一页的函数。覆盖 `CalendarRoot` 上设置的 `nextPage` 函数。      |

**插槽 (默认) (Slots (default))**

| Payload    | 描述         |
| :--------- | :----------- |
| `disabled` | 当前禁用状态 |

**数据属性 (Data Attribute)**

| 值                  | 描述         |
| :------------------ | :----------- |
| `[data-disabled]`   | 禁用时存在   |

### 标题 (Heading)

显示当前月份和年份的标题。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**插槽 (默认) (Slots (default))**

| Payload       | 描述             |
| :------------ | :--------------- |
| `headingValue` | 当前月份和年份。 |

### 网格 (Grid)

用于包裹日历网格的容器。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-disabled]`   | 禁用时存在       |
| `[data-readonly]`   | 只读时存在       |

### 网格头部 (Grid Head)

用于包裹网格头部的容器。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 网格体 (Grid Body)

用于包裹网格主体的容器。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 网格行 (Grid Row)

用于包裹网格行的容器。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 头部单元格 (Head Cell)

用于包裹头部单元格的容器。用于显示星期几。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 单元格 (Cell)

用于包裹日历单元格的容器。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `date`\* |          | `DateValue`          | 单元格的日期值。                                                    |

**数据属性 (Data Attribute)**

| 值                  | 描述         |
| :------------------ | :----------- |
| `[data-disabled]`   | 禁用时存在   |

### 单元格触发器 (Cell Trigger)

用于显示单元格日期的可交互容器。点击它会选择日期。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `day`\* |          | `DateValue`          | 提供给单元格触发器的日期值。                                        |
| `month`\* |          | `DateValue`          | 渲染单元格的月份。                                                  |

**插槽 (默认) (Slots (default))**

| Payload          | 描述               |
| :--------------- | :----------------- |
| `dayValue`       | 当前日期。         |
| `disabled`       | 当前禁用状态。     |
| `selected`       | 当前选中状态。     |
| `today`          | 当前是否为今天。   |
| `outsideView`    | 当前是否在当前月份视图之外。 |
| `outsideVisibleView` | 当前是否在日历可见月份之外。 |
| `unavailable`    | 当前是否不可用。   |

**数据属性 (Data Attribute)**

| 值                        | 描述                 |
| :------------------------ | :------------------- |
| `[data-selected]`         | 选中时存在           |
| `[data-value]`            | 日期的 ISO 字符串值。 |
| `[data-disabled]`         | 禁用时存在           |
| `[data-unavailable]`      | 不可用时存在         |
| `[data-today]`            | 今天时存在           |
| `[data-outside-view]`     | 日期在当前月份视图之外时存在。 |
| `[data-outside-visible-view]` | 日期在日历可见月份之外时存在。 |
| `[data-focused]`          | 聚焦时存在           |

## 可访问性 (Accessibility)

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                                                                                                                                                                                                                                                                                       |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Tab`       | 当焦点移动到日期字段时，聚焦第一个片段。                                                                                                                                                                                                                                                 |
| `Space`     | 当焦点位于 `DatePickerNext` 或 `DatePickerPrev` 上时，导航日历。否则，选择日期。如果焦点位于 `DatePickerTrigger` 上，则打开/关闭弹出框。                                                                                                                                              |
| `Enter`     | 当焦点位于 `DatePickerNext` 或 `DatePickerPrev` 上时，导航日历。否则，选择日期。如果焦点位于 `DatePickerTrigger` 上，则打开/关闭弹出框。                                                                                                                                              |
| `ArrowLeft` | 在日期字段片段之间导航。如果焦点位于 `DatePickerCalendar` 上，则在日期之间导航。                                                                                                                                                                                                     |
| `ArrowRight` | 在日期字段片段之间导航。如果焦点位于 `DatePickerCalendar` 上，则在日期之间导航。                                                                                                                                                                                                     |
| `ArrowUp`   | 增加/更改片段的值。如果焦点位于 `DatePickerCalendar` 上，则在日期之间导航。                                                                                                                                                                                                            |
| `ArrowDown` | 增加/更改片段的值。如果焦点位于 `DatePickerCalendar` 上，则在日期之间导航。                                                                                                                                                                                                            |
| `0-9`       | 当焦点位于数字 `DatePickerInput` 上时，输入数字并聚焦下一个片段，如果下一个输入会导致无效值。                                                                                                                                                                                             |
| `Backspace` | 从聚焦的数字片段中删除一位数字。                                                                                                                                                                                                                                                       |
| `A`         | 当焦点位于日期间隔（上午/下午）时，将其设置为 AM。                                                                                                                                                                                                                                     |
| `P`         | 当焦点位于日期间隔（上午/下午）时，将其设置为 PM。                                                                                                                                                                                                                                     |

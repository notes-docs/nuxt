---
title: Calendar
description: 显示日期和星期几，方便与日期相关的互动。
---

::component-example
---
name: 'reka-calendar-example'
collapse: true
---
::

## 功能特性 (Features)

* 完整的键盘导航。
* 可控或非控。
* 完全管理焦点。
* 支持本地化。
* 高度可组合。

## 前言 (Preface)

该组件依赖于 **`@internationalized/date`** 包，该包解决了 JavaScript 中处理日期和时间带来的许多问题。

我们强烈建议您阅读该包的文档，以充分了解其工作原理，并且您需要在项目中安装它才能使用日期相关的组件。

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

导入所有部分并将其组合在一起。

```vue
<script setup>
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
  CalendarRoot
} from 'reka-ui'
</script>

<template>
  <CalendarRoot>
    <CalendarHeader>
      <CalendarPrev />
      <CalendarHeading />
      <CalendarNext />
    </CalendarHeader>
    <CalendarGrid>
      <CalendarGridHead>
        <CalendarGridRow>
          <CalendarHeadCell />
        </CalendarGridRow>
      </CalendarGridHead>
      <CalendarGridBody>
        <CalendarGridRow>
          <CalendarCell>
            <CalendarCellTrigger />
          </CalendarCell>
        </CalendarGridRow>
      </CalendarGridBody>
    </CalendarGrid>
  </CalendarRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含日历的所有部分。

| 属性                      | 默认值   | 类型                                | 描述                                                                |
| :------------------------ | :------- | :---------------------------------- | :------------------------------------------------------------------ |
| `as`                      | `'div'`  | `AsTag \| Component`                | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`                 |          | `boolean`                           | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `calendarLabel`           |          | `string`                            | 日历的可访问性标签。                                                |
| `defaultPlaceholder`      |          | `DateValue`                         | 默认占位符日期。                                                    |
| `defaultValue`            |          | `DateValue`                         | 日历的默认值。                                                      |
| `dir`                     |          | `'ltr' \| 'rtl'`                    | 日历的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`                | `false`  | `boolean`                           | 日历是否禁用。                                                      |
| `disableDaysOutsideCurrentView` | `false`  | `boolean`                           | 是否禁用当前视图之外的日期。                                        |
| `fixedWeeks`              | `false`  | `boolean`                           | 日历是否始终显示 6 周。                                             |
| `initialFocus`            | `false`  | `boolean`                           | 如果为 `true`，日历挂载时将根据可见情况聚焦选定的日期、今天或月份的第一天。 |
| `isDateDisabled`          |          | `Matcher`                           | 返回日期是否被禁用的函数。                                          |
| `isDateUnavailable`       |          | `Matcher`                           | 返回日期是否不可用的函数。                                          |
| `locale`                  |          | `string`                            | 用于格式化日期的区域设置。                                          |
| `maxValue`                |          | `DateValue`                         | 可选择的最大日期。                                                  |
| `minValue`                |          | `DateValue`                         | 可选择的最小日期。                                                  |
| `modelValue`              |          | `DateValue \| DateValue[]`          | 日历的受控选中状态。                                                |
| `multiple`                | `false`  | `boolean`                           | 是否可以选择多个日期。                                              |
| `nextPage`                |          | `((placeholder: DateValue) => DateValue)` | 返回日历下一页的函数。它在组件内部接收当前占位符作为参数。            |
| `numberOfMonths`          | `1`      | `number`                            | 一次显示的月份数量。                                                |
| `pagedNavigation`         | `false`  | `boolean`                           | 此属性使“上一页”和“下一页”按钮根据一次显示的月份数量而不是一个月进行导航。 |
| `placeholder`             |          | `DateValue`                         | 占位符日期，用于在未选择日期时确定要显示的月份。                    |
| `preventDeselect`         | `false`  | `boolean`                           | 是否阻止用户在未选择另一个日期的情况下取消选择日期。                |
| `prevPage`                |          | `((placeholder: DateValue) => DateValue)` | 返回日历上一页的函数。它在组件内部接收当前占位符作为参数。            |
| `readonly`                | `false`  | `boolean`                           | 日历是否只读。                                                      |
| `weekdayFormat`           | `'narrow'` | `'narrow' \| 'short' \| 'long'`     | 用于通过 `weekdays` 插槽提供的星期几字符串的格式。                |
| `weekStartsOn`            | `0`      | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6`   | 日历开始的星期几。                                                  |

**发出载荷 (EmitPayload)**

| 事件               | Payload             | 描述                   |
| :----------------- | :------------------ | :--------------------- |
| `update:modelValue` | `[date: DateValue]` | `modelValue` 更改时调用的事件处理程序。 |
| `update:placeholder` | `[date: DateValue]` | `placeholder` 值更改时调用的事件处理程序。 |

**插槽 (默认) (Slots (default))**

| Payload      | 描述                       |
| :----------- | :------------------------- |
| `date`       | 占位符的当前日期。         |
| `grid`       | 日期网格。                 |
| `weekDays`   | 星期几。                   |
| `weekStartsOn` | 周的开始。                 |
| `locale`     | 日历区域设置。             |
| `fixedWeeks` | 日历是否始终显示 6 周。    |
| `modelValue` | 日历的当前日期。           |

**方法 (Methods)**

| 类型                 | 描述                               |
| :------------------- | :--------------------------------- |
| `isDateDisabled`     | 返回日期是否被禁用的函数。         |
| `isDateUnavailable`  | 返回日期是否不可用的函数。         |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-readonly]`   | 只读时存在       |
| `[data-disabled]`   | 禁用时存在       |
| `[data-invalid]`    | 无效时存在       |

### 头部 (Header)

包含导航按钮和标题段。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 上一页按钮 (Prev Button)

日历导航按钮。它根据当前日历视图将日历向前导航一个月/年/十年。

| 属性      | 默认值     | 类型                                | 描述                                                                |
| :-------- | :--------- | :---------------------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component`                | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
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

| 属性      | 默认值     | 类型                                | 描述                                                                |
| :-------- | :--------- | :---------------------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component`                | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`                           | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
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

**数据属性 (Data Attribute)**

| 值                  | 描述         |
| :------------------ | :----------- |
| `[data-disabled]`   | 禁用时存在   |

### 网格 (Grid)

用于包裹日历网格的容器。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'table'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-readonly]`   | 只读时存在       |
| `[data-disabled]`   | 禁用时存在       |

### 网格头部 (Grid Head)

用于包裹网格头部的容器。

| 属性      | 默认值    | 类型                 | 描述                                                                |
| :-------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'thead'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 网格体 (Grid Body)

用于包裹网格主体的容器。

| 属性      | 默认值    | 类型                 | 描述                                                                |
| :-------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'tbody'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 网格行 (Grid Row)

用于包裹网格行的容器。

| 属性      | 默认值  | 类型                 | 描述                                                                |
| :-------- | :------ | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'tr'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 头部单元格 (Head Cell)

用于包裹头部单元格的容器。用于显示星期几。

| 属性      | 默认值  | 类型                 | 描述                                                                |
| :-------- | :------ | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'th'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 单元格 (Cell)

用于包裹日历单元格的容器。

| 属性      | 默认值  | 类型                 | 描述                                                                |
| :-------- | :------ | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'td'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `date`\* |          | `DateValue`          | 单元格的日期值。                                                    |

**数据属性 (Data Attribute)**

| 值                  | 描述         |
| :------------------ | :----------- |
| `[data-disabled]`   | 禁用时存在   |

### 单元格触发器 (Cell Trigger)

用于显示单元格日期的可交互容器。点击它会选择日期。

| 属性      | 默认值  | 类型                 | 描述                                                                |
| :-------- | :------ | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
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


## 示例 (Examples)

### 带年份递增的日历 (Calendar with Year Incrementation)

此示例展示了一个允许递增年份的日历。

### 带有区域设置和日历系统选择的日历 (Calendar with Locale and Calendar System Selection)

此示例展示了一些可用的区域设置以及日历系统的显示方式。

### 日历滑动手势导航 (Calendar swipe gesture navigation)

此组件演示了使用基于触摸的滑动手势进行直观的日历导航，这是一种用户友好的月份浏览方式。


## 可访问性 (Accessibility)

### 键盘交互 (Keyboard Interactions)

| 按键            | 描述                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `Tab`           | 当焦点移动到日历上时，聚焦第一个导航按钮。                                                                                       |
| `Space`         | 当焦点位于 `CalendarNext` 或 `CalendarPrev` 上时，导航日历。否则，选择日期。                                                    |
| `Enter`         | 当焦点位于 `CalendarNext` 或 `CalendarPrev` 上时，导航日历。否则，选择日期。                                                    |
| `ArrowLeft`     |                                                                                                                                  |
| `ArrowRight`    |                                                                                                                                  |
| `ArrowUp`       |                                                                                                                                  |
| `ArrowDown`     | 当焦点位于 `CalendarCellTrigger` 上时，导航日期，必要时更改月份/年份/十年。                                                    |

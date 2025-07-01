---
title: Date Range Field
description: 允许用户在指定字段内输入一系列日期。
---

::component-example
---
name: 'reka-date-range-field-example'
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

## 解剖 (Anatomy)

导入所有部件并组装它们。

```vue
<script setup>
import {
  DateRangeFieldInput,
  DateRangeFieldRoot,
} from 'reka-ui'
</script>

<template>
  <DateRangeFieldRoot>
    <DateRangeFieldInput />
  </DateRangeFieldRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含日期字段的所有部分。

| 属性               | 默认值   | 类型                                | 描述                                                                |
| :----------------- | :------- | :---------------------------------- | :------------------------------------------------------------------ |
| `as`               | `'div'`  | `AsTag \| Component`                | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`          |          | `boolean`                           | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultPlaceholder` |          | `DateValue`                         | 默认占位符日期。                                                    |
| `defaultValue`     |          | `DateRange`                         | 日历的默认值。                                                      |
| `dir`              |          | `'ltr' \| 'rtl'`                    | 日期字段的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`         | `false`  | `boolean`                           | 日期字段是否禁用。                                                  |
| `granularity`      |          | `'day' \| 'hour' \| 'minute' \| 'second'` | 用于格式化时间的粒度。如果提供了 `CalendarDate`，则默认为天，否则默认为分钟。字段将渲染日期各部分的片段，直至并包括指定的粒度。 |
| `hideTimeZone`     |          | `boolean`                           | 是否隐藏字段的时区片段。                                            |
| `hourCycle`        |          | `12 \| 24`                          | 用于格式化时间的小时制。默认为本地偏好设置。                        |
| `id`               |          | `string`                            | 元素的 ID。                                                         |
| `isDateUnavailable` |          | `Matcher`                           | 返回日期是否不可用的函数。                                          |
| `locale`           |          | `string`                            | 用于格式化日期的区域设置。                                          |
| `maxValue`         |          | `DateValue`                         | 可选择的最大日期。                                                  |
| `minValue`         |          | `DateValue`                         | 可选择的最小日期。                                                  |
| `modelValue`       |          | `DateRange \| null`                 | 日历的受控选中状态。可绑定为 `v-model`。                            |
| `name`             |          | `string`                            | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `placeholder`      |          | `DateValue`                         | 占位符日期，用于在未选择日期时确定要显示的月份。它会随着用户导航日历而更新，可用于编程控制日历视图。 |
| `readonly`         | `false`  | `boolean`                           | 日期字段是否只读。                                                  |
| `required`         |          | `boolean`                           | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `step`             | `1`      | `DateStep`                          | 时间字段的步进间隔。默认为 `1`。                                    |

**发出载荷 (EmitPayload)**

| 事件               | Payload             | 描述                   |
| :----------------- | :------------------ | :--------------------- |
| `update:modelValue` | `[DateRange]`       | `modelValue` 更改时调用的事件处理程序。 |
| `update:placeholder` | `[date: DateValue]` | `placeholder` 值更改时调用的事件处理程序。 |

**插槽 (默认) (Slots (default))**

| Payload      | 描述           |
| :----------- | :------------- |
| `modelValue` | 当前日期范围。   |
| `segments`   | 日期字段片段内容。 |

**方法 (Methods)**

| 类型                 | 描述                               |
| :------------------- | :--------------------------------- |
| `isDateUnavailable`  | 返回日期是否不可用的函数。         |
| `setFocusedElement`  | `(el: HTMLElement) => void`        | 设置 `DateField` 内部聚焦元素的辅助函数。 |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-readonly]`   | 只读时存在       |
| `[data-disabled]`   | 禁用时存在       |
| `[data-invalid]`    | 无效时存在       |

### 输入 (Input)

包含日期字段片段。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `part`\* |          | `'day' \| 'month' \| 'year' \| 'hour' \| 'minute' \| 'second' \| 'dayPeriod' \| 'literal' \| 'timeZoneName'` | 要渲染的日期部分。                                                  |
| `type`\* |          | `'start' \| 'end'`   | 要渲染的字段类型（开始或结束）。                                    |

**数据属性 (Data Attribute)**

| 值                  | 描述             |
| :------------------ | :--------------- |
| `[data-disabled]`   | 禁用时存在       |
| `[data-invalid]`    | 无效时存在       |
| `[data-placeholder]` | 未设置值时存在   |

## 可访问性 (Accessibility)

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                                                                                                                                                                                                                                                                                       |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Tab`       | 当焦点移动到日期字段时，聚焦第一个片段。                                                                                                                                                                                                                                                 |
| `ArrowLeft` | 在日期字段片段之间导航。                                                                                                                                                                                                                                                               |
| `ArrowRight` | 在日期字段片段之间导航。                                                                                                                                                                                                                                                               |
| `ArrowUp`   | 增加/更改片段的值。                                                                                                                                                                                                                                                                      |
| `ArrowDown` | 增加/更改片段的值。                                                                                                                                                                                                                                                                      |
| `0-9`       | 当焦点位于数字 `DateFieldInput` 上时，输入数字并聚焦下一个片段，如果下一个输入会导致无效值。                                                                                                                                                                                             |
| `Backspace` | 从聚焦的数字片段中删除一位数字。                                                                                                                                                                                                                                                       |
| `A`         | 当焦点位于日期间隔（上午/下午）时，将其设置为 AM。                                                                                                                                                                                                                                     |
| `P`         | 当焦点位于日期间隔（上午/下午）时，将其设置为 PM。                                                                                                                                                                                                                                     |

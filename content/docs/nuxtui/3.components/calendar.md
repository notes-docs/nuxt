---
title: Calendar
description: 一个用于选择单日、多日或日期范围的日历组件。
category: element
links:
  - label: Calendar
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Calendar.vue
---

::note
此组件依赖于 [`@internationalized/date`](https://react-spectrum.adobe.com/internationalized/date/index.html) 包，该包提供了以区域设置感知的方式表示和操作日期和时间的对象和函数。
::

## 用法

使用 `v-model` 指令来控制选定的日期。

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

当你不需要控制其状态时，使用 `default-value` prop 来设置初始值。

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

### 多选

使用 `multiple` prop 允许选择多个日期。

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
::

### 范围选择

使用 `range` prop 来选择一个日期范围。

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### 颜色

使用 `color` prop 来改变日历的颜色。

::component-code
---
props:
  color: neutral
---
::

### 尺寸(Size)

使用 `size` prop 来改变日历的尺寸。

::component-code
---
props:
  size: xl
---
::

### 禁用

使用 `disabled` prop 来禁用日历。

::component-code
---
props:
  disabled: true
---
::

### 月份数量

使用 `numberOfMonths` prop 来改变日历中显示的月份数量。

::component-code
---
props:
  numberOfMonths: 3
---
::

### 月份控制

使用 `month-controls` prop 来显示月份控制。默认为 `true`。

::component-code
---
props:
  monthControls: false
---
::

### 年份控制

使用 `year-controls` prop 来显示年份控制。默认为 `true`。

::component-code
---
props:
  yearControls: false
---
::

### 固定周数

使用 `fixed-weeks` prop 来以固定周数显示日历。

::component-code
---
props:
  fixedWeeks: false
---
::

## 示例

### 使用 chip events

使用 [Chip](/components/chip) 组件为特定日期添加事件。

::component-example
---
name: 'calendar-events-example'
---
::

### 使用 disabled dates

使用 `is-date-disabled` prop 结合一个函数来将特定日期标记为禁用。

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

### 使用不可用日期

使用 `is-date-unavailable` prop 结合一个函数来将特定日期标记为不可用。

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### 使用最小/最大日期

使用 `min-value` 和 `max-value` props 来限制日期范围。

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

### 使用其他日历系统

你可以使用 `@internationalized/date` 中的其他日历来实现不同的日历系统。

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
You can check all the available calendars on `@internationalized/date` docs.
::

### 使用外部控制

你可以通过操作 `v-model` 中传入的日期来通过外部控制日历。

::component-example
---
name: 'calendar-external-controls-example'
---
::

### 作为日期选择器

使用 [Button](/components/button) 和 [Popover](/components/popover) 组件来创建一个日期选择器。

::component-example
---
name: 'calendar-date-picker-example'
---
::

### 作为日期范围选择器

使用 [Button](/components/button) 和 [Popover](/components/popover) 组件来创建一个日期范围选择器。

::component-example
---
name: 'calendar-date-range-picker-example'
---
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

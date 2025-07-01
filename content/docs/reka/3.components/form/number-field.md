---
title: Number Field
description: 数字字段允许用户输入数字并使用步进按钮增加或减少该值。
---

::component-example
---
name: 'reka-number-field-example'
collapse: true
---
::

## 特性 (Features)

* 完整的键盘导航
* 可控或非控
* 支持按钮按住和滚轮事件
* 支持不同语言环境中的数字系统
* 可定制的格式

## 安装 (Installation)

安装 `number` 包。

::code-group
```bash [npm]
$ npm add @internationalized/number
```
```bash [pnpm]
$ pnpm add @internationalized/number
```
```bash [yarn]
$ yarn add @internationalized/number
```
```bash [bun]
$ bun add @internationalized/number
```
::

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
<script setup>
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from 'reka-ui'
</script>

<template>
  <NumberFieldRoot>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含数字输入字段的所有部分。当在 `form` 中使用时，也会渲染一个 `input` 以确保事件正确传播。

| 属性             | 默认值   | 类型                 | 描述                                                                |
| :--------------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`             | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`        |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue`   |          | `number`             |                                                                     |
| `disabled`       |          | `boolean`            | 当 `true` 时，阻止用户与数字输入字段交互。                          |
| `disableWheelChange` |          | `boolean`            | 当 `true` 时，阻止值在滚轮滚动时改变。                              |
| `formatOptions`  |          | `NumberFormatOptions` | 数字输入字段中显示值的格式化选项。这也影响用户可以输入的字符。        |
| `id`             |          | `string`             | 元素的 ID                                                           |
| `invertWheelChange` |          | `boolean`            | 当 `true` 时，反转滚轮改变的方向。                                  |
| `locale`         |          | `string`             | 用于格式化日期的语言环境。                                          |
| `max`            |          | `number`             | 输入允许的最大值。                                                  |
| `min`            |          | `number`             | 输入允许的最小值。                                                  |
| `modelValue`     |          | `number \| null`     |                                                                     |
| `name`           |          | `string`             | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `required`       |          | `boolean`            | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `step`           | `1`      | `number`             | 输入值在每次增加或减少“刻度”时的变化量。                            |
| `stepSnapping`   | `true`   | `boolean`            | 当 `false` 时，阻止值吸附到最近的步进值增量。                       |

**EmitPayload**

| 事件             | Payload  | 描述                 |
| :--------------- | :------- | :------------------- |
| `update:modelValue` | `[val: number]` | 值更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload     | 描述         |
| :---------- | :----------- |
| `modelValue` | 当前模型值   |
| `textValue` | 文本值       |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-disabled]` | 禁用时存在 |

### 输入 (Input)

输入组件，根据值和格式选项渲染文本值。

| 属性      | 默认值    | 类型                 | 描述                                                                |
| :-------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'input'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |           | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-disabled]` | 禁用时存在 |

### 增加 (Increment)

增加值的按钮。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |            | `boolean`            |                                                                     |

**数据属性 (Data Attributes)**

| 数据属性        | 值         |
| :-------------- | :--------- |
| `[data-pressed]` | 按下时存在 |
| `[data-disabled]` | 禁用时存在 |

### 减少 (Decrement)

减少值的按钮。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |            | `boolean`            |                                                                     |

**数据属性 (Data Attributes)**

| 数据属性        | 值         |
| :-------------- | :--------- |
| `[data-pressed]` | 按下时存在 |
| `[data-disabled]` | 禁用时存在 |

## 示例 (Example)

### 小数 (Decimal)

支持 `Intl.NumberFormat` 支持的所有选项，包括最小和最大小数位数、符号显示、分组分隔符等配置。

```vue
<template>
  <NumberFieldRoot
    :default-value="5"
    :format-options="{
      signDisplay: 'exceptZero',
      minimumFractionDigits: 1,
    }"
  >
    …
  </NumberFieldRoot>
</template>
```

### 百分比 (Percentage)

您可以将 `formatOptions.style` 设置为 `percent` 以将值视为百分比。您需要手动将 `step` 设置为 `0.01` 以允许在此模式下有适当的步长。

```vue
<template>
  <NumberFieldRoot
    :default-value="0.05"
    :step="0.01"
    :format-options="{
      style: 'percent',
    }"
  >
    …
  </NumberFieldRoot>
</template>
```

### 货币 (Currency)

您可以将 `formatOptions.style` 设置为 `currency` 以将值视为货币值。还必须传递 `currency` 选项以设置货币代码（例如，USD）。
如果您需要允许用户更改货币，您应该在数字输入字段旁边包含一个单独的下拉菜单。数字输入字段本身不会根据用户输入确定货币。

```vue
<template>
  <NumberFieldRoot
    :default-value="5"
    :format-options="{
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'code',
      currencySign: 'accounting',
    }"
  >
    …
  </NumberFieldRoot>
</template>
```

## 可访问性 (Accessibility)

遵循 [Spinbutton WAI-ARIA 设计模式](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/)。

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                       |
| :---------- | :------------------------- |
| `Arrow Up`  | 增加值                     |
| `Arrow Down` | 减少值                     |
| `Page Up`   | 将值增加 10 倍             |
| `Page Down` | 将值减少 10 倍             |
| `Home`      | 将值设置为最小值（如果提供了 `min`） |
| `End`       | 将值设置为最大值（如果提供了 `max`） |

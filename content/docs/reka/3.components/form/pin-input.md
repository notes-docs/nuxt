---
title: Pin Input
description: 一系列单字符的字母数字输入。
---

::component-example
---
name: 'reka-pin-input-example'
collapse: true
---
::

## 特性 (Features)

* 完整的键盘导航。
* 可控或非控。
* 支持从剪贴板粘贴。
* 当输入框被填满时发出事件。

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
<script setup>
import { PinInputInput, PinInputRoot } from 'reka-ui'
</script>

<template>
  <PinInputRoot>
    <PinInputInput />
  </PinInputRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含密码输入框的所有部分。当在 `form` 中使用时，也会渲染一个 `input` 以确保事件正确传播。

| 属性        | 默认值          | 类型                          | 描述                                                                |
| :---------- | :-------------- | :---------------------------- | :------------------------------------------------------------------ |
| `as`        | `'div'`         | `AsTag \| Component`          | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`   |                 | `boolean`                     | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue` | `(string[] \| number[])[]` | `(string[] \| number[])[]`    | 密码输入框初始渲染时的默认值。当您不需要控制其选中状态时使用。      |
| `dir`       |                 | `'ltr' \| 'rtl'`              | 组合框的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`  |                 | `boolean`                     | 当 `true` 时，阻止用户与密码输入框交互。                            |
| `id`        |                 | `string`                      | 元素的 ID                                                           |
| `mask`      |                 | `boolean`                     | 当 `true` 时，密码输入框将被视为密码。                              |
| `modelValue` |                 | `string[] \| number[] \| null` | 密码输入框的受控选中状态。可以通过 `v-model` 绑定。                 |
| `name`      |                 | `string`                      | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `otp`       |                 | `boolean`                     | 当 `true` 时，移动设备将自动从消息或剪贴板检测 OTP，并启用自动完成字段。 |
| `placeholder` | `''`            | `string`                      | 用于空密码输入框的占位符字符。                                      |
| `required`  |                 | `boolean`                     | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `type`      | `'text'` as any | `'number' \| 'text'`          | 输入框的输入类型。                                                  |

**EmitPayload**

| 事件             | Payload                 | 描述                               |
| :--------------- | :---------------------- | :--------------------------------- |
| `complete`       | `[value: string[] \| number[]]` |                                    |
| `update:modelValue` | `[value: string[] \| number[]]` | 值更改时调用的事件处理程序。       |

**Slots (默认)**

| Payload     | 描述         |
| :---------- | :----------- |
| `modelValue` | 当前输入值   |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-complete]` | 完成时存在 |
| `[data-disabled]` | 禁用时存在 |

### 输入 (Input)

密码输入的输入字段。您可以添加任意数量的输入。

| 属性      | 默认值    | 类型                 | 描述                                                                |
| :-------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'input'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |           | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |           | `boolean`            | 当 `true` 时，阻止用户与密码输入框交互。                            |
| `index`   |           | `number`             | 此输入绑定到的值的位置。                                            |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-complete]` | 完成时存在 |
| `[data-disabled]` | 禁用时存在 |

## 示例 (Examples)

### OTP 模式 (OTP mode)

您可以通过将 `otp` 设置为 `true` 来将密码输入设置为 OTP 模式。

```vue
<script setup lang="ts">
import { Label, PinInputInput, PinInputRoot } from 'reka-ui'
</script>

<template>
  <PinInputRoot v-model="value" otp>
    …
  </PinInputRoot>
</template>
```

### 数字模式 (Numeric mode)

您可以通过将 `type` 设置为 `number` 来将密码输入设置为只接受 `number` 类型。

```vue
<script setup lang="ts">
import { Label, PinInputInput, PinInputRoot } from 'reka-ui'
</script>

<template>
  <PinInputRoot v-model="value" type="number">
    …
  </PinInputRoot>
</template>
```

## 可访问性 (Accessibility)

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                                                                                                                                                                                                                                           |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ArrowLeft` | 聚焦到上一个输入框。                                                                                                                                                                                                                           |
| `ArrowRight` | 聚焦到下一个输入框。                                                                                                                                                                                                                           |
| `Home`      | 聚焦到第一个输入框。                                                                                                                                                                                                                           |
| `End`       | 聚焦到最后一个输入框。                                                                                                                                                                                                                         |
| `Backspace` | 删除当前输入框的值。如果输入框为空，则移动到上一个输入框并删除其值。                                                                                                                                                                           |
| `Delete`    | 删除当前输入框的值。                                                                                                                                                                                                                           |
| `Ctrl + V`  | 将剪贴板内容粘贴到密码输入框中。如果剪贴板中的字符数等于或超过输入框的数量，则从第一个输入框开始粘贴内容。否则，内容从当前输入框开始粘贴。 |

---
title: Switch
description: 允许用户在选中和未选中之间切换的控件。
---

::component-example
---
name: 'reka-switch-example'
collapse: true
---
::

## 特性 (Features)

* 完整的键盘导航。
* 可控或非控。


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
import { SwitchRoot, SwitchThumb } from 'reka-ui'
</script>

<template>
  <SwitchRoot>
    <SwitchThumb />
  </SwitchRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含开关的所有部分。在 `form` 中使用时，也会渲染一个 `input` 以确保事件正确传播。

| 属性         | 默认值   | 类型                 | 描述                                                                |
| :----------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`         | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`    |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue` |          | `boolean`            | 开关初始渲染时的状态。当您不需要控制其状态时使用。                  |
| `disabled`   |          | `boolean`            | 当 `true` 时，阻止用户与开关交互。                                  |
| `id`         |          | `string`             |                                                                     |
| `modelValue` |          | `boolean \| null`    | 开关的受控状态。可以通过 `v-model` 绑定。                           |
| `name`       |          | `string`             | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `required`   |          | `boolean`            | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `value`      | `'on'`   | `string`             | 作为数据提交时随 `name` 提交的值。                                  |

**EmitPayload**

| 事件             | Payload         | 描述                   |
| :--------------- | :-------------- | :--------------------- |
| `update:modelValue` | `[payload: boolean]` | 开关值更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload     | 描述     |
| :---------- | :------- |
| `modelValue` | 当前值   |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"checked" \| "unchecked"` |
| `[data-disabled]` | 禁用时存在               |

### 滑块 (Thumb)

用于视觉指示开关是开还是关的滑块。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"checked" \| "unchecked"` |
| `[data-disabled]` | 禁用时存在               |

## 可访问性 (Accessibility)

遵循[开关 (switch) 角色要求](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)。

### 键盘交互 (Keyboard Interactions)

| 按键  | 描述           |
| :---- | :------------- |
| `Space` | 切换组件的状态。 |
| `Enter` | 切换组件的状态。 |

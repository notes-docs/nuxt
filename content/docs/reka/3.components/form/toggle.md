---
title: Toggle
description: 可以打开或关闭的双状态按钮。
---

::component-example
---
name: 'reka-toggle-example'
collapse: true
---
::

以下是您提供的文本的简体中文翻译：

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

导入组件。

```vue
<script setup>
import { Toggle } from 'reka-ui'
</script>

<template>
  <Toggle />
</template>
```

## API 参考 (API Reference)

### 根 (Root)

切换开关。

| 属性         | 默认值   | 类型                 | 描述                                                                |
| :----------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`         | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`    |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue` |          | `boolean`            | 切换开关初始渲染时的按下状态。当您不需要控制其打开状态时使用。      |
| `disabled`   | `false`  | `boolean`            | 当 `true` 时，阻止用户与切换开关交互。                              |
| `modelValue` |          | `boolean \| null`    | 切换开关的受控按下状态。可以通过 `v-model` 绑定。                   |
| `name`       |          | `string`             | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `required`   |          | `boolean`            | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |

**EmitPayload**

| 事件             | Payload       | 描述                 |
| :--------------- | :------------ | :------------------- |
| `update:modelValue` | `[value: boolean]` | 切换开关值更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload     | 描述           |
| :---------- | :------------- |
| `modelValue` | 当前值         |
| `state`     | 当前状态       |
| `pressed`   | 当前按下状态   |
| `disabled`  | 当前禁用状态   |

**数据属性 (Data Attributes)**

| 数据属性        | 值               |
| :-------------- | :--------------- |
| `[data-state]`  | `"on" \| "off"`    |
| `[data-disabled]` | 禁用时存在       |

## 可访问性 (Accessibility)

### 键盘交互 (Keyboard Interactions)

| 按键  | 描述           |
| :---- | :------------- |
| `Space` | 激活/禁用切换开关。 |
| `Enter` | 激活/禁用切换开关。 |

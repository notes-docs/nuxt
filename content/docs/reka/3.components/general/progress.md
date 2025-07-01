---
title: Progress
description: 显示指示任务完成进度的指示器，通常显示为进度条。
---

::component-example
---
name: 'reka-progress-example'
collapse: true
---
::

## 功能特点

* 为辅助技术提供上下文，以读取任务的进度。

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
<script setup>
  import { ProgressIndicator, ProgressRoot } from 'reka-ui'
</script>

<template>
  <ProgressRoot>
    <ProgressIndicator />
  </ProgressRoot>
</template>
```

## 可访问性

遵循 [progressbar](https://www.google.com/search?q=progressbar) 角色要求。

## API 参考

### Root

包含所有进度部分。

| 属性            | 默认值                                | 类型                                   | 描述                                                                                              |
| --------------- | ------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`            | `'div'`                               | `AsTag \| Component`                   | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`       | `false`                               | `boolean`                              | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `getValueLabel` | ` isNumber(value) ?  `${Math.round((value / max) \* DEFAULT\_MAX)}%`  : undefined ` | `((value: number \| null, max: number) => string)` | 用于获取可访问标签文本的人类可读格式的函数。如果未提供，则将值标签读取为最大值的百分比数字值。 |
| `getValueText`  |                                       | `((value: number \| null, max: number) => string)` | 用于获取表示当前值的人类可读格式的可访问值文本的函数。                                        |
| `max`           | `DEFAULT_MAX`                         | `number`                               | 最大进度值。                                                                                      |
| `modelValue`    |                                       | `number \| null`                       | 进度值。可以绑定为 `v-model`。                                                                    |

**触发事件 (Emit)**

| Payload            | 描述                           |
| ------------------ | ------------------------------ |
| `[value: number]`  | 最大值更改时调用的事件处理程序。 |
| `[value: string[]]` | 进度值更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload                  | 描述           |
| ------------------------ | -------------- |
| `modelValue`             | `number \| null \| undefined` 当前输入值 |

**方法**

| 类型                                                            | 描述                                                                |
| --------------------------------------------------------------- | ------------------------------------------------------------------- |
| `(value: number \| null \| undefined, max: number) => string \| undefined` | 用于获取可访问标签文本的人类可读格式的函数。如果未提供，则将值标签读取为最大值的百分比数字值。 |

**数据属性**

| 属性           | 值                                   |
| -------------- | ------------------------------------ |
| `[data-state]` | `"complete" \| "indeterminate" \| "loading"` |
| `[data-value]` | 当前值                               |
| `[data-max]`   | 最大值                               |

### Indicator

用于视觉上显示进度。它还使进度可供辅助技术访问。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性           | 值                                   |
| -------------- | ------------------------------------ |
| `[data-state]` | `"complete" \| "indeterminate" \| "loading"` |
| `[data-value]` | 当前值                               |
| `[data-max]`   | 最大值                               |

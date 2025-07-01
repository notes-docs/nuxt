---
title: Label
description: 呈现与控件相关的可访问标签。
---

::component-example
---
name: 'reka-label-example'
collapse: true
---
::

## 特性 (Features)

* 双击标签时可阻止文本选择。
* 支持嵌套控件。

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
import { Label } from 'reka-ui'
</script>

<template>
  <Label />
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含标签的内容。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'label'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `for`     |          | `string`             | 标签关联元素的 ID。                                               |

## 可访问性 (Accessibility)

此组件基于原生的 **`label`** 元素，它在包装控件或使用 `for` 属性时会自动应用正确的标签。要使您自己的自定义控件正常工作，请确保它们使用原生元素（例如 **`button`** 或 **`input`**）作为基础。

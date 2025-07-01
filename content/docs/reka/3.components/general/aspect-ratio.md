---
title: Aspect Ratio
description: 按所需比例显示内容。
---

::component-example
---
name: 'reka-aspect-ratio-example'
collapse: true
---
::

## 功能特点

* [x] 接受任何自定义比例。

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

导入组件。

```vue
<script setup>
  import { AspectRatio } from 'reka-ui'
</script>

<template>
  <AspectRatio />
</template>
```

## API 参考

### 根

包含您想要约束为给定比例的内容。

| 属性      | 默认值 | 类型            | 描述                                                                                              |
| --------- | ------ | --------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`       | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.reka-ui.com/docs/guides/composition)。 |
| `ratio`   | `1`    | `number`        | 所需的比例。例如：16/9                                                                              |

### 插槽 (默认)

| Payload | 类型   | 描述             |
| ------- | ------ | ---------------- |
| `aspect`  | `number` | 当前纵横比（百分比） |

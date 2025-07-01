---
title: Separator
description: 从视觉或语义上分离内容。
---

::component-example
---
name: 'reka-separator-example'
collapse: true
---
::

## 功能特点

* 支持水平和垂直方向。

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
  import { Separator } from 'reka-ui'
</script>

<template>
  <Separator />
</template>
```

## API 参考

### Root

分隔线。

| 属性         | 默认值     | 类型                       | 描述                                                                                              |
| ------------ | ---------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`    | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`    | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `decorative` | `false`    | `boolean`                  | 组件是否纯粹是装饰性的。当为 `true` 时，辅助功能相关的属性会更新，以便渲染的元素从辅助功能树中移除。 |
| `orientation` | `'horizontal'` | `'vertical' \| 'horizontal'` | 组件的方向。可以是 `vertical` 或 `horizontal`。默认为 `horizontal`。                       |

**数据属性**

| 属性              | 值                       |
| ----------------- | ------------------------ |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

## 可访问性

遵循 [separator](https://www.google.com/search?q=separator) 角色要求。



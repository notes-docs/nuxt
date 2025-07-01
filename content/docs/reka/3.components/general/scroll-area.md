---
title: ScrollArea
description: 增强本机滚动功能，实现自定义、跨浏览器样式。
---

::component-example
---
name: 'reka-scroll-area-example'
collapse: true
---
::

## 功能特点

* 滚动条位于可滚动内容之上，不占用空间。
* 滚动是原生的；没有通过 CSS 变换进行底层位置移动。
* 仅在与控件交互时模拟指针行为，因此键盘控件不受影响。
* 支持从右到左的方向。

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
  import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'reka-ui'
</script>

<template>
  <ScrollAreaRoot>
    <ScrollAreaViewport />
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
```

## API 参考

### Root

包含滚动区域的所有部分。

| 属性            | 默认值  | 类型                       | 描述                                                                                              |
| --------------- | ------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`            | `'div'` | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`       | `false`   | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `dir`           |         | `'ltr' \| 'rtl'`           | 组合框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `scrollHideDelay` | `600`   | `number`                   | 如果类型设置为 `scroll` 或 `hover`，此 prop 确定在用户停止与滚动条交互后，滚动条隐藏前的毫秒时长。 |
| `type`          | `'hover'` | `'scroll' \| 'always' \| 'hover' \| 'auto'` | 描述滚动条可见性的性质，类似于 MacOS 中滚动条偏好设置控制原生滚动条可见性的方式。`auto` - 表示当内容在相应方向溢出时，滚动条可见。`always` - 表示无论内容是否溢出，滚动条始终可见。`scroll` - 表示当用户沿其相应方向滚动时，滚动条可见。`hover` - 当用户沿其相应方向滚动并且用户悬停在滚动区域上时。 |

**方法**

| 类型         | 描述               |
| ------------ | ------------------ |
| `() => void` | 滚动视口到顶部。   |
| `() => void` | 滚动视口到左上角。 |

### Viewport

滚动区域的视口。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `nonce`   |        | `string`             | 将 `nonce` 属性添加到 style 标签中，可供内容安全策略使用。如果省略，则从 `ConfigProvider` 全局继承。 |

### Scrollbar

垂直滚动条。添加第二个带有 `orientation` prop 的 `Scrollbar` 可启用水平滚动。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性         | 默认值   | 类型                       | 描述                                                                                              |
| ------------ | -------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`  | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`    | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` | `false`    | `boolean`                  | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `orientation` | `'vertical'` | `'vertical' \| 'horizontal'` | 滚动条的方向。                                                                                    |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-state]`    | `"visible" \| "hidden"`   |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Thumb

用于 `ScrollAreaScrollbar` 中的滑块。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性           | 值                        |
| -------------- | ------------------------- |
| `[data-state]` | `"visible" \| "hidden"`   |

### Corner

垂直和水平滚动条相交的角落。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

## 可访问性

在大多数情况下，最好依赖原生滚动并利用 CSS 中可用的自定义选项。当这还不够时，`ScrollArea` 在保持浏览器原生滚动行为（以及可访问性功能，如键盘滚动）的同时提供了额外的可定制性。

### 键盘交互

由于组件依赖于原生滚动，因此默认支持通过键盘滚动。特定键盘交互在不同平台之间可能有所不同，因此我们在此处不作具体说明，也不添加特定的事件监听器来处理通过按键事件滚动。

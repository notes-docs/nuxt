---
title: Splitter
description: 将您的布局划分为可调整大小的部分的组件。
---

::component-example
---
name: 'reka-splitter-example'
collapse: true
---
::

## 功能特点

* 支持键盘交互。
* 支持水平/垂直布局。
* 支持嵌套布局。
* 支持从右到左的方向。
* 可以跨另一个面板调整大小。
* 可以有条件地挂载。

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
  import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
</script>

<template>
  <SplitterGroup>
    <SplitterPanel />
    <SplitterResizeHandle />
  </SplitterGroup>
</template>
```

## API 参考

### Group

包含 Splitter 的所有部分。

| 属性            | 默认值          | 类型                      | 描述                                                                                              |
| --------------- | --------------- | ------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`            | `'div'`         | `AsTag \| Component`      | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`       | `false`         | `boolean`                 | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `autoSaveId`    | `null`          | `string \| null`          | 用于通过 `localStorage` 自动保存组排列的唯一 ID。                                                 |
| `direction`\* |                 | `'vertical' \| 'horizontal'` | 分割器组的方向。                                                                                  |
| `id`            | `null`          | `string \| null`          | 组 ID；未提供时回退到 `useId`。                                                                    |
| `keyboardResizeBy` | `10`            | `number \| null`          | 按下箭头键时的步长。                                                                              |
| `storage`       | `defaultStorage` | `PanelGroupStorage`       | 自定义存储 API；默认为 `localStorage`。                                                         |

**触发事件 (Emit)**

| Payload          | 描述                      |
| ---------------- | ------------------------- |
| `[val: number[]]` | 组布局更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload | 描述               |
| ------- | ------------------ |
| `layout` | `number[]` 当前布局大小 |

**数据属性**

| 属性              | 值                                |
| ----------------- | --------------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"`      |
| `[data-state]`    | `"collapsed" \| "expanded" \| "Present when collapsbile"` |

### Panel

一个可折叠部分。

| 属性          | 默认值   | 类型                 | 描述                                                                                              |
| ------------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`          | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`     | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `collapsedSize` |          | `number`             | 面板折叠时的大小。                                                                                |
| `collapsible` | `false`    | `boolean`            | 当调整大小超出其 `minSize` 时，面板是否应折叠。当为 `true` 时，它将折叠到 `collapsedSize`。 |
| `defaultSize` |          | `number`             | 面板的初始大小（1-100 之间的数字值）。                                                           |
| `id`          |          | `string`             | 面板 ID（组内唯一）；未提供时回退到 `useId`。                                                     |
| `maxSize`     | `100`    | `number`             | 面板的最大允许大小（1-100 之间的数字值）；默认为 `100`。                                         |
| `minSize`     | `10`     | `number`             | 面板的最小允许大小（1-100 之间的数字值）；默认为 `10`。                                           |
| `order`       |          | `number`             | 面板在组中的顺序；对于有条件渲染面板的组是必需的。                                                |

**触发事件 (Emit)**

| Payload      | 描述                       |
| ------------ | -------------------------- |
| `[]`         | 面板折叠时调用的事件处理程序。 |
| `[]`         | 面板展开时调用的事件处理程序。 |
| `[size: number, prevSize: number]` | 面板调整大小时调用的事件处理程序；`size` 参数是 1-100 之间的数字值。 |

**插槽 (默认)**

| Payload      | 描述                                     |
| ------------ | ---------------------------------------- |
| `isCollapsed` | `boolean` 面板是否已折叠                  |
| `isExpanded` | `boolean` 面板是否已展开                  |
| `collapse`   | `(): void` 如果面板可折叠，则完全折叠它。 |
| `expand`     | `(): void` 如果面板当前已折叠，则将其展开到最近的大小。 |
| `resize`     | `(size: number): void` 将面板调整为指定百分比（1 - 100）。 |

**方法**

| 类型                                 | 描述                                     |
| ------------------------------------ | ---------------------------------------- |
| `() => void`                         | 如果面板可折叠，则完全折叠它。           |
| `() => void`                         | 如果面板当前已折叠，则将其展开到最近的大小。 |
| `() => number`                       | 获取面板当前大小的百分比（1 - 100）。     |
| `(size: number) => void`             | 将面板调整为指定百分比（1 - 100）。     |

### Resize Handle

用于调整大小的把手。

| 属性            | 默认值 | 类型                   | 描述                                                                                              |
| --------------- | ------ | ---------------------- | ------------------------------------------------------------------------------------------------- |
| `as`            | `'div'`  | `AsTag \| Component`   | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`       | `false`  | `boolean`              | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled`      | `false`  | `boolean`              | 禁用拖动把手。                                                                                    |
| `hitAreaMargins` |        | `PointerHitAreaMargins` | 确定可调整大小把手命中检测时允许的边距。                                                          |
| `id`            |        | `string`               | 调整大小把手 ID（组内唯一）；未提供时回退到 `useId`。                                             |
| `tabindex`      | `0`    | `number`               | 把手的 Tab 索引。                                                                                 |

**触发事件 (Emit)**

| Payload            | 描述               |
| ------------------ | ------------------ |
| `[isDragging: boolean]` | 拖动处理程序时调用的事件处理程序。 |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"drag" \| "hover" \| "inactive"` |
| `[data-disabled]` | 禁用时存在                       |
| `[data-orientation]` | `"vertical" \| "horizontal"`     |

## 示例

### 可折叠

使用 `collapsible` prop 允许面板在达到 `minSize` 时折叠到 `collapsedSize`。（`collapsedSize` 和 `minSize` prop 是必需的。）

```html
<template>
  <SplitterGroup>
    <SplitterPanel
      collapsible
      :collapsed-size="10"
      :min-size="35"
    >
      Panel A
    </SplitterPanel>
    <SplitterResizeHandle />
    <SplitterPanel>
      Panel B
    </SplitterPanel>
  </SplitterGroup>
</template>
```

### 持久化到 localStorage

使用 `autoSaveId` prop 将布局数据保存到 `localStorage`。

```html
<template>
  <SplitterGroup auto-save-id="any-id">
    …
  </SplitterGroup>
</template>
```

### SSR 持久化布局

默认情况下，Splitter 使用 `localStorage` 来持久化布局。在服务器渲染中，当默认布局（在服务器上渲染）被持久化布局（在 `localStorage` 中）替换时，这可能会导致闪烁。避免这种闪烁的方法是也通过 cookie 持久化布局，如下所示：

```html
<script setup lang="ts">
  const layout = useCookie<number[]>('splitter:layout')
</script>

<template>
  <SplitterGroup
    direction="horizontal"
    @layout="layout = $event"
  >
    <SplitterPanel :default-size="layout[0]">
      …
    </SplitterPanel>
    <SplitterResizeHandle />
    <SplitterPanel :default-size="layout[1]">
      …
    </SplitterPanel>
  </SplitterGroup>
</template>
```

### 程序化折叠/展开

有时面板需要响应用户操作来调整大小或折叠/展开。`SplitterPanel` 暴露了 `collapse` 和 `expand` 方法来实现这一点。

```html
<script setup lang="ts">
  const panelRef = ref<InstanceType<typeof SplitterPanel>>()
</script>

<template>
  <button
    @click="panelRef?.isCollapsed ? panelRef?.expand() : panelRef?.collapse() "
  >
    {{ panelRef?.isCollapsed ? 'Expand' : 'Collapse' }}
  </button>
  <SplitterGroup>
    <SplitterPanel
      ref="panelRef"
      collapsible
      :collapsed-size="10"
      :min-size="35"
    >
      …
    </SplitterPanel>
    <SplitterResizeHandle />
    <SplitterPanel>
      …
    </SplitterPanel>
  </SplitterGroup>
</template>
```

### 自定义把手

通过将任何元素作为插槽传递来定制把手。

```html
<template>
  <SplitterGroup>
    <SplitterPanel>
      …
    </SplitterPanel>
    <SplitterResizeHandle>
      <Icon icon="radix-icons-drag-handle-dots-2" />
    </SplitterResizeHandle>
    <SplitterPanel>
      …
    </SplitterPanel>
  </SplitterGroup>
</template>
```

### SSR

Splitter 组件严重依赖唯一的 `id`，然而对于 Vue \< 3.4，我们没有可靠的方法来生成 `SSR-friendly` 的 `id`。
因此，如果您正在使用 Nuxt 或其他 SSR 框架，则需要手动为所有 Splitter 组件添加 `id`。或者，您可以使用 `<ClientOnly>` 包装组件。

```html
<template>
  <SplitterGroup id="group-1">
    <SplitterPanel id="group-1-panel-1">
      …
    </SplitterPanel>
    <SplitterResizeHandle id="group-1-resize-1">
      <Icon icon="radix-icons-drag-handle-dots-2" />
    </SplitterResizeHandle>
    <SplitterPanel id="group-1-panel-2">
      …
    </SplitterPanel>
  </SplitterGroup>
</template>
```

## 可访问性

遵循 [Window Splitter WAI-ARIA 设计模式](Window Splitter WAI-ARIA design pattern)。

### 键盘交互

| 按键        | 描述                                                           |
| ----------- | -------------------------------------------------------------- |
| `Enter`     | 如果主窗格未折叠，则折叠窗格。如果窗格已折叠，则将分割器恢复到其先前的位置。 |
| `ArrowDown` | 将水平分割器向下移动。                                         |
| `ArrowUp`   | 将水平分割器向上移动。                                         |
| `ArrowRight` | 将垂直分割器向右移动。                                         |
| `ArrowLeft` | 将垂直分割器向左移动。                                         |
| `Home`      | 将分割器移动到使主窗格具有其允许的最小大小的位置。             |
| `End`       | 将分割器移动到使主窗格具有其允许的最大大小的位置。             |

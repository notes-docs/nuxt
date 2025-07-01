---
title: Tabs
description: 一组分层的内容部分（称为选项卡面板），一次显示一个。
---

::component-example
---
name: 'reka-tabs-example'
collapse: true
---
::

## 功能特点

* 可控或不可控。
* 支持水平/垂直方向。
* 支持自动/手动激活。
* 完整的键盘导航。

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
  import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
</script>

<template>
  <TabsRoot>
    <TabsList>
      <TabsIndicator />
      <TabsTrigger />
    </TabsList>
    <TabsContent />
  </TabsRoot>
</template>
```

## API 参考

### Root

包含所有选项卡组件部分。

| 属性            | 默认值       | 类型                       | 描述                                                                                              |
| --------------- | ------------ | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `activationMode` | `'automatic'` | `'automatic' \| 'manual'` | 选项卡是自动激活（聚焦时）还是手动激活（点击时）。                                               |
| `as`            | `'div'`      | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`       | `false`      | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `defaultValue`  |              | `string \| number`         | 选项卡首次渲染时应激活的值。当您不需要控制选项卡状态时使用。                                    |
| `dir`           |              | `'ltr' \| 'rtl'`           | 组合框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `modelValue`    |              | `string \| number`         | 要激活的选项卡的受控值。可以绑定为 `v-model`。                                                   |
| `orientation`   | `'horizontal'` | `'vertical' \| 'horizontal'` | 选项卡的布局方向。主要用于相应地进行箭头导航（左右 vs. 上下）。                                   |
| `unmountOnHide` | `true`       | `boolean`                  | 当为 `true` 时，元素将在关闭状态时卸载。                                                          |

**触发事件 (Emit)**

| Payload                 | 描述                  |
| ----------------------- | --------------------- |
| `[payload: StringOrNumber]` | 值更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload    | 描述           |
| ---------- | -------------- |
| `modelValue` | `string \| number` 当前输入值 |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### List

包含与活动内容边缘对齐的触发器。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `loop`    | `true`   | `boolean`            | 当为 `true` 时，键盘导航将从最后一个选项卡循环到第一个选项卡，反之亦然。                           |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Trigger

激活其关联内容的按钮。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled` | `false`    | `boolean`            | 当为 `true` 时，阻止用户与选项卡交互。                                                             |
| `value`\* |        | `string \| number`   | 将触发器与内容关联的唯一值。                                                                      |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"active" \| "inactive"`         |
| `[data-disabled]` | 禁用时存在                       |
| `[data-orientation]` | `"vertical" \| "horizontal"`     |

### Indicator

突出显示当前活动选项卡的指示器。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**CSS 变量**

| 变量                       | 描述           |
| -------------------------- | -------------- |
| `--reka-tabs-indicator-size` | 指示器的大小   |
| `--reka-tabs-indicator-position` | 指示器的位置   |

### Content

包含与每个触发器关联的内容。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性         | 默认值 | 类型                 | 描述                                                                                              |
| ------------ | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` | `false`  | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `value`\* |        | `string \| number`   | 将内容与触发器关联的唯一值。                                                                      |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"active" \| "inactive"`         |
| `[data-orientation]` | `"vertical" \| "horizontal"`     |

## 示例

### 垂直

您可以使用 `orientation` prop 创建垂直选项卡。

```html
<script setup>
  import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
</script>

<template>
  <TabsRoot
    default-value="tab1"
    orientation="vertical"
  >
    <TabsList aria-label="tabs example">
      <TabsTrigger value="tab1">
        One
      </TabsTrigger>
      <TabsTrigger value="tab2">
        Two
      </TabsTrigger>
      <TabsTrigger value="tab3">
        Three
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      Tab one content
    </TabsContent>
    <TabsContent value="tab2">
      Tab two content
    </TabsContent>
    <TabsContent value="tab3">
      Tab three content
    </TabsContent>
  </TabsRoot>
</template>
```

## 可访问性

遵循 [Tabs WAI-ARIA 设计模式](Tabs WAI-ARIA design pattern)。

### 键盘交互

| 按键        | 描述                                                    |
| ----------- | ------------------------------------------------------- |
| `Tab`       | 当焦点移动到选项卡时，聚焦活动触发器。当触发器聚焦时，将焦点移动到活动内容。 |
| `ArrowDown` | 根据 `orientation` 将焦点移动到下一个触发器并激活其关联内容。 |
| `ArrowRight` | 根据 `orientation` 将焦点移动到下一个触发器并激活其关联内容。 |
| `ArrowUp`   | 根据 `orientation` 将焦点移动到上一个触发器并激活其关联内容。 |
| `ArrowLeft` | 根据 `orientation` 将焦点移动到上一个触发器并激活其关联内容。 |
| `Home`      | 将焦点移动到第一个触发器并激活其关联内容。             |
| `End`       | 将焦点移动到最后一个触发器并激活其关联内容。           |

---
title: ToggleGroup
description: 一组可以打开或关闭的双状态按钮。
---

::component-example
---
name: 'reka-toggle-group-example'
collapse: true
---
::

## 特性 (Features)

* 完整的键盘导航。
* 支持水平/垂直方向。
* 支持单个和多个按下按钮。
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
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
</script>

<template>
  <ToggleGroupRoot>
    <ToggleGroupItem />
  </ToggleGroupRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含切换组的所有部分。

| 属性          | 默认值   | 类型                 | 描述                                                                |
| :------------ | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`          | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`     |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue` |          | `AcceptableValue \| AcceptableValue[]` | 项目的默认活动值。当您不需要控制项目状态时使用。                 |
| `dir`         |          | `'ltr' \| 'rtl'`     | 组合框的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`    | `false`  | `boolean`            | 当 `true` 时，阻止用户与切换组及其所有项目交互。                    |
| `loop`        | `true`   | `boolean`            | 当 `loop` 和 `rovingFocus` 都为 `true` 时，键盘导航将从最后一项循环到第一项，反之亦然。 |
| `modelValue`  |          | `AcceptableValue \| AcceptableValue[]` | 活动项目的受控值。当您需要控制项目状态时使用。可与 `v-model` 绑定。 |
| `name`        |          | `string`             | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `orientation` |          | `'vertical' \| 'horizontal'` | 组件的方向，它决定了焦点移动方式：`horizontal` 用于左右箭头，`vertical` 用于上下箭头。 |
| `required`    |          | `boolean`            | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `rovingFocus` | `true`   | `boolean`            | 当 `false` 时，使用箭头键在项目之间导航将被禁用。                   |
| `type`        |          | `'single' \| 'multiple'` | 决定一次可以选择“单个”或“多个”项目。此属性将覆盖从 `modelValue` 和 `defaultValue` 推断的类型。 |

**EmitPayload**

| 事件             | Payload                                | 描述                 |
| :--------------- | :------------------------------------- | :------------------- |
| `update:modelValue` | `[payload: AcceptableValue \| AcceptableValue[]]` | 切换值更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload     | 描述         |
| :---------- | :----------- |
| `modelValue` | 当前切换值   |

**数据属性 (Data Attributes)**

| 数据属性        | 值                        |
| :-------------- | :------------------------ |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### 项目 (Item)

组中的一个项目。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |          | `boolean`            | 当 `true` 时，阻止用户与切换开关交互。                              |
| `value`   |          | `AcceptableValue`    | 切换组项目的字符串值。切换组中的所有项目都应使用唯一值。            |

**Slots (默认)**

| Payload     | 描述         |
| :---------- | :----------- |
| `modelValue` | 当前值         |
| `state`     | 当前状态       |
| `pressed`   | 当前按下状态   |
| `disabled`  | 当前禁用状态   |

**数据属性 (Data Attributes)**

| 数据属性        | 值                        |
| :-------------- | :------------------------ |
| `[data-state]`  | `"on" \| "off"`           |
| `[data-disabled]` | 禁用时存在                |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

## 示例 (Examples)

### 确保始终有值 (Ensuring there is always a value)

您可以控制组件以确保始终有一个值。

```vue
<script setup>
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import { ref } from 'vue'

const value = ref('left')
</script>

<template>
  <ToggleGroupRoot
    :model-value="value"
    @update:model-value="(val) => {
      if (val) value = val
    }"
  >
    <ToggleGroupItem value="left">
      <TextAlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <TextAlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <TextAlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
```

## 可访问性 (Accessibility)

使用[漫游 Tab 索引 (roving tabindex)](https://www.google.com/search?q=https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/%23kbd_label) 来管理项目之间的焦点移动。

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                                     |
| :---------- | :--------------------------------------- |
| `Tab`       | 将焦点移动到已按下的项目或组中的第一个项目。 |
| `Space`     | 激活/禁用项目。                          |
| `Enter`     | 激活/禁用项目。                          |
| `ArrowDown` | 将焦点移动到组中的下一个项目。           |
| `ArrowRight` | 将焦点移动到组中的下一个项目。           |
| `ArrowUp`   | 将焦点移动到组中的上一个项目。           |
| `ArrowLeft` | 将焦点移动到组中的上一个项目。           |
| `Home`      | 将焦点移动到第一个项目。                 |
| `End`       | 将焦点移动到最后一个项目。               |

---
title: Editable
description: 显示用于编辑单行文本的输入字段，加载时呈现为静态文本。触发编辑交互后，它会转换为文本输入字段。
---

::component-example
---
name: 'reka-editable-example'
collapse: true
---
::

## 特性 (Features)

* 完整的键盘导航
* 可控或非控
* 焦点完全受管理

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
import {
  EditableArea,
  EditableCancelTrigger,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
  EditableSubmitTrigger
} from 'reka-ui'
</script>

<template>
  <EditableRoot>
    <EditableArea>
      <EditablePreview />
      <EditableInput />
    </EditableArea>
    <EditableEditTrigger />
    <EditableSubmitTrigger />
    <EditableCancelTrigger />
  </EditableRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含可编辑组件的所有部件。

| 属性             | 默认值          | 类型                                  | 描述                                                                |
| :--------------- | :-------------- | :------------------------------------ | :------------------------------------------------------------------ |
| `activationMode` | `'focus'`       | `'dblclick' \| 'focus' \| 'none'`     | 可编辑字段的激活事件                                                |
| `as`             | `'div'`         | `AsTag \| Component`                  | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`        |                 | `boolean`                             | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `autoResize`     | `false`         | `boolean`                             | 可编辑字段是否应自动调整大小                                        |
| `defaultValue`   |                 | `string`                              | 可编辑字段的默认值                                                  |
| `dir`            |                 | `'ltr' \| 'rtl'`                      | 日历的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`       | `false`         | `boolean`                             | 可编辑字段是否禁用                                                  |
| `id`             |                 | `string`                              | 字段的 id                                                           |
| `maxLength`      |                 | `number`                              | 允许的最大字符数                                                    |
| `modelValue`     |                 | `string \| null`                      | 可编辑字段的值                                                      |
| `name`           |                 | `string`                              | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `placeholder`    | `'Enter text...'` | `string \| { edit: string; preview: string; }` | 可编辑字段的占位符                                                  |
| `readonly`       |                 | `boolean`                             | 可编辑字段是否只读                                                  |
| `required`       | `false`         | `boolean`                             | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `selectOnFocus`  | `false`         | `boolean`                             | 聚焦时是否选择输入中的文本。                                        |
| `startWithEditMode` |                 | `boolean`                             | 是否以编辑模式开始活动                                              |
| `submitMode`     | `'blur'`        | `'blur' \| 'none' \| 'enter' \| 'both'` | 可编辑字段的提交事件                                                |

**EmitPayload**

| 事件             | Payload               | 描述                     |
| :--------------- | :-------------------- | :----------------------- |
| `submit`         | `[value: string \| null]` | 提交值时调用的事件处理程序 |
| `update:modelValue` | `[value: string]`     | 模型值更改时调用的事件处理程序 |
| `update:state`   | `[state: 'cancel' \| 'submit' \| 'edit']` | 可编辑字段状态更改时调用的事件处理程序 |

**Slots (默认)**

| Payload          | 描述                  |
| :--------------- | :-------------------- |
| `isEditing`      | 可编辑字段是否处于编辑模式 |
| `modelValue`     | 可编辑字段的值        |
| `isEmpty`        | 可编辑字段是否为空    |
| `submit`         | 提交可编辑字段值的函数 |
| `cancel`         | 取消可编辑字段值的函数 |
| `edit`           | 将可编辑字段设置为编辑模式的函数 |

**方法 (Methods)**

| 类型                       |
| :------------------------- |
| `submit` `() => void`      |
| `cancel` `() => void`      |
| `edit` `() => void`        |

### 区域 (Area)

包含可编辑组件的文本部分。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性              | 值         |
| :-------------------- | :--------- |
| `[data-readonly]`     | 只读时存在 |
| `[data-disabled]`     | 禁用时存在 |
| `[data-placeholder-shown]` | 预览显示时存在 |
| `[data-empty]`        | 输入为空时存在 |
| `[data-focus]`        | 可编辑字段聚焦时存在。将弃用，改用 `[data-focused]` |
| `[data-focused]`      | 可编辑字段聚焦时存在 |

### 输入 (Input)

包含可编辑组件的输入。

| 属性      | 默认值    | 类型                 | 描述                                                                |
| :-------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'input'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |           | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性          | 值         |
| :---------------- | :--------- |
| `[data-readonly]` | 只读时存在 |
| `[data-disabled]` | 禁用时存在 |

### 预览 (Preview)

包含可编辑组件的预览。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 编辑触发器 (Edit Trigger)

包含可编辑组件的编辑触发器。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 提交触发器 (Submit Trigger)

包含可编辑组件的提交触发器。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 取消触发器 (Cancel Trigger)

包含可编辑组件的取消触发器。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

-----

## 示例 (Examples)

### 仅在提交时更改 (Change only on submit)

默认情况下，组件会在 `blur` 事件触发时提交。我们可以修改 `submit-mode` 属性来改变这种行为。在这种情况下，我们只想在用户点击 `EditableSubmitTrigger` 时提交，因此我们将提交模式更改为 `none`。

```vue
<template>
  <EditableRoot submit-mode="none">
    <EditableArea>
      <EditablePreview />
      <EditableInput />
    </EditableArea>
    <EditableEditTrigger />
    <EditableSubmitTrigger />
    <EditableCancelTrigger />
  </EditableRoot>
</template>
```

## 可访问性 (Accessibility)

### 键盘交互 (Keyboard Interactions)

| 按键     | 描述                                                           |
| :------- | :------------------------------------------------------------- |
| `Tab`    | 当焦点移到可编辑字段上时，如果 `activation-mode` 设置为 `focus`，则切换到编辑模式。 |
| `Enter`  | 如果 `submit-mode` 设置为 `enter` 或 `both`，则提交更改。      |
| `Escape` | 当焦点在可编辑字段上时，取消更改。                             |

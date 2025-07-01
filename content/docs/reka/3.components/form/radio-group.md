---
title: RadioGroup
description: 一组可选中的按钮（称为单选按钮），其中一次只能选中一个按钮。
---

::component-example
---
name: 'reka-radio-group-example'
collapse: true
---
::

## 特性 (Features)

* 完整的键盘导航。
* 支持水平/垂直方向。
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

导入所有部件并组装它们。

```vue
<script setup>
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
</script>

<template>
  <RadioGroupRoot>
    <RadioGroupItem>
      <RadioGroupIndicator />
    </RadioGroupItem>
  </RadioGroupRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含单选组的所有部分。

| 属性          | 默认值     | 类型                          | 描述                                                                |
| :------------ | :--------- | :---------------------------- | :------------------------------------------------------------------ |
| `as`          | `'div'`    | `AsTag \| Component`          | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`     |            | `boolean`                     | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue` |            | `AcceptableValue`             | 初始渲染时应选中的单选项目的值。当您不需要控制单选项目状态时使用。  |
| `dir`         |            | `'ltr' \| 'rtl'`              | 组合框的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`    | `false`    | `boolean`                     | 当 `true` 时，阻止用户与单选项目交互。                              |
| `loop`        | `true`     | `boolean`                     | 当 `true` 时，键盘导航将从最后一项循环到第一项，反之亦然。          |
| `modelValue`  |            | `AcceptableValue`             | 要检查的单选项目的受控值。可以通过 `v-model` 绑定。                 |
| `name`        |            | `string`                      | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `orientation` |            | `'vertical' \| 'horizontal'`  | 组件的方向。                                                        |
| `required`    | `false`    | `boolean`                     | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |

**EmitPayload**

| 事件             | Payload        | 描述                     |
| :--------------- | :------------- | :----------------------- |
| `update:modelValue` | `[payload: string]` | 单选组值更改时调用的事件处理程序 |

**Slots (默认)**

| Payload     | 描述         |
| :---------- | :----------- |
| `modelValue` | 当前输入值   |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-disabled]` | 禁用时存在 |

### 项目 (Item)

组中可被选中的项目。当在 `form` 中使用时，也会渲染一个 `input` 以确保事件正确传播。

| 属性      | 默认值    | 类型                 | 描述                                                                |
| :-------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |           | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` | `false`   | `boolean`            | 当 `true` 时，阻止用户与单选项目交互。                              |
| `id`      |           | `string`             |                                                                     |
| `name`    |           | `string`             | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `required` |           | `boolean`            | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `value`   |           | `AcceptableValue`    | 作为数据提交时随 `name` 提交的值。                                  |

**EmitPayload**

| 事件     | Payload        | 描述                                                           |
| :------- | :------------- | :------------------------------------------------------------- |
| `select` | `[event: SelectEvent]` | 用户选择链接（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该链接时关闭导航菜单。 |

**Slots (默认)**

| Payload    | 描述         |
| :--------- | :----------- |
| `checked`  | 当前选中状态 |
| `required` | 必填状态     |
| `disabled` | 禁用状态     |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"checked" \| "unchecked"` |
| `[data-disabled]` | 禁用时存在               |

### 指示器 (Indicator)

当单选项目处于选中状态时渲染。您可以直接样式化此元素，也可以将其用作包装器以放置图标，或两者兼而有之。

**提示：**

使用 `Presence` 组件构建 - 支持任何[动画技术](https://www.google.com/search?q=https://reka-ui.dev/guides/animation)同时保持对 Presence 发出的事件的访问。

| 属性        | 默认值   | 类型                 | 描述                                                                |
| :---------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`        | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`   |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `forceMount` |          | `boolean`            | 当需要更多控制时用于强制挂载。在与 Vue 动画库一起控制动画时很有用。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"checked" \| "unchecked"` |
| `[data-disabled]` | 禁用时存在               |

## 可访问性 (Accessibility)

遵循 [单选组 WAI-ARIA 设计模式](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/) 并使用**漫游 Tab 键**来管理单选项目之间的焦点移动。

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                                       |
| :---------- | :----------------------------------------- |
| `Tab`       | 将焦点移动到已选中的单选项目或组中的第一个单选项目。 |
| `Space`     | 当焦点在未选中的单选项目上时，选中它。     |
| `ArrowDown` | 将焦点移动并选中组中的下一个单选项目。     |
| `ArrowRight` | 将焦点移动并选中组中的下一个单选项目。     |
| `ArrowUp`   | 将焦点移动到组中的上一个单选项目。         |
| `ArrowLeft` | 将焦点移动到组中的上一个单选项目。         |

---
title: Checkbox
description: 允许用户在选中和未选中之间切换的控件。
---

::component-example
---
name: 'reka-checkbox-example'
collapse: true
---
::

## 特性

* 支持**不确定**状态。
* 完整的**键盘导航**。
* 可作为**受控**或**非受控**组件使用。

## 安装

从命令行安装组件：

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

```vue
<script setup>
import { CheckboxGroupRoot, CheckboxIndicator, CheckboxRoot } from 'reka-ui'
</script>

<template>
  <CheckboxRoot>
    <CheckboxIndicator />
  </CheckboxRoot>

  <CheckboxGroupRoot>
    <CheckboxRoot>
      <CheckboxIndicator />
    </CheckboxRoot>
  </CheckboxGroupRoot>
</template>
```

## API 参考

### Root

包含复选框的所有部分。当在 `form` 中使用时，也会渲染一个 `input` 以确保事件正确传播。

| Prop | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 prop 和行为。请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue` | | `boolean \| 'indeterminate'` | 复选框初始渲染时的值。当您不需要控制其值时使用。 |
| `disabled` | | `boolean` | 当为 `true` 时，阻止用户与复选框交互。 |
| `id` | | `string` | 元素的 ID。 |
| `modelValue` | | `boolean \| 'indeterminate' \| null` | 复选框的受控值。可以通过 `v-model` 绑定。 |
| `name` | | `string` | 字段的名称。作为名称/值对的一部分与所属表单一起提交。 |
| `required` | | `boolean` | 当为 `true` 时，表示用户必须设置值，然后才能提交所属表单。 |
| `value` | `'on'` | `AcceptableValue` | 作为数据提交时随 `name` 提交的值。 |

**EmitPayload**

| 事件 | Payload | 描述 |
| :--------------- | :----------------------------- | :--------------- |
| `update:modelValue` | `[value: boolean \| 'indeterminate']` | 复选框值更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload | 描述 |
| :---------- | :--------------------------------- |
| `modelValue` | `false \| true \| 'indeterminate'` | 当前值 |
| `state` | `CheckedState` | 当前状态 |

**数据属性**

| 数据属性 | 值 |
| :----------------- | :----------------------------- |
| `[data-state]` | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | 禁用时存在。 |

### Indicator

当复选框处于选中或不确定状态时渲染。您可以直接样式化此元素，也可以将其用作包装器来放入图标，或者两者兼而有之。

> **提示**
>
> 使用了 [`Presence`](https://www.google.com/search?q=%5Bhttps://reka-ui.dev/components/presence%5D\(https://reka-ui.dev/components/presence\)) 组件构建 - 支持任何[动画技术](https://www.google.com/search?q=https://reka-ui.dev/guides/animation)同时保持对 Presence 发射事件的访问。

| Prop | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 prop 和行为。请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `forceMount` | | `boolean` | 当需要更多控制时用于强制挂载。在与 Vue 动画库一起控制动画时很有用。 |

**数据属性**

| 数据属性 | 值 |
| :----------------- | :----------------------------- |
| `[data-state]` | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | 禁用时存在。 |

### Group Root

`CheckboxRoot` 的包装器，支持 `modelValue` 数组。

| Prop | 默认值 | 类型 | 描述 |
| :--------------- | :------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 prop 和行为。请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue` | | `AcceptableValue[]` | 复选框初始渲染时的值。当您不需要控制其值时使用。 |
| `dir` | | `'ltr' \| 'rtl'` | 项目之间的导航方向。 |
| `disabled` | | `boolean` | 当为 `true` 时，阻止用户与复选框交互。 |
| `loop` | | `boolean` | 键盘导航是否应循环。 |
| `modelValue` | | `AcceptableValue[]` | 复选框的受控值。可以通过 `v-model` 绑定。 |
| `name` | | `string` | 字段的名称。作为名称/值对的一部分与所属表单一起提交。 |
| `orientation` | | `'vertical' \| 'horizontal'` | 组的方向。主要用于相应地进行箭头导航（左 & 右 vs. 上 & 下）。 |
| `required` | | `boolean` | 当为 `true` 时，表示用户必须设置值，然后才能提交所属表单。 |
| `rovingFocus` | `true` | `boolean` | 当为 `false` 时，禁用使用箭头键在项目之间导航。 |

**EmitPayload**

| 事件 | Payload | 描述 |
| :--------------- | :------------------- | :--------------- |
| `update:modelValue` | `[value: AcceptableValue[]]` | 复选框值更改时调用的事件处理程序。 |

## 示例

### 不确定状态

您可以通过控制其状态将复选框设置为**不确定**。

```vue
<script setup>
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'

const checked = ref('indeterminate')
</script>

<template>
  <CheckboxRoot v-model="checked">
    <CheckboxIndicator>
      <Icon
        v-if="checked === 'indeterminate'"
        icon="radix-icons:divider-horizontal"
      />
      <Icon
        v-if="checked"
        icon="radix-icons:check"
      />
    </CheckboxIndicator>
  </CheckboxRoot>

  <button
    type="button"
    @click="() => (checked === 'indeterminate' ? (checked = false) : (checked = 'indeterminate'))"
  >
    切换不确定状态
  </button>
</template>
```

## 可访问性

遵循[三态复选框 WAI-ARIA 设计模式](https://www.google.com/search?q=https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/%23checkbox_tri-state)。

### 键盘交互

| 按键 | 描述 |
| :------ | :----------- |
| `Space` | 选中/取消选中复选框。 |

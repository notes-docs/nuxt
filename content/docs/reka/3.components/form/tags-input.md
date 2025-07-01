---
title: Tags Input
description: 标签输入在输入内部呈现标签，然后是实际的文本输入。
---

::component-example
---
name: 'reka-tags-input-example'
collapse: true
---
::

## 特性 (Features)

* 可控或非控。
* 完整的键盘导航。
* 限制标签数量。
* 支持从剪贴板粘贴值。
* 提供清除按钮以重置所有标签值。

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
import { TagsInputClear, TagsInputDelete, TagsInputInput, TagsInputItem, TagsInputRoot, TagsInputText } from 'reka-ui'
</script>

<template>
  <TagsInputRoot>
    <TagsInputItem>
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput />
    <TagsInputClear />
  </TagsInputRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含所有标签输入组件的部分。

| 属性         | 默认值      | 类型                                   | 描述                                                                |
| :----------- | :---------- | :------------------------------------- | :------------------------------------------------------------------ |
| `addOnBlur`  |             | `boolean`                              | 当 `true` 时，允许在输入框失焦时添加标签。                          |
| `addOnPaste` |             | `boolean`                              | 当 `true` 时，允许粘贴时添加标签。与 `delimiter` 属性配合使用。     |
| `addOnTab`   |             | `boolean`                              | 当 `true` 时，允许在按下 Tab 键时添加标签。                         |
| `as`         | `'div'`     | `AsTag \| Component`                   | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`    |             | `boolean`                              | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `convertValue` |             | `((value: string) => AcceptableInputValue)` | 将输入值转换为所需类型。当使用对象作为值并使用 `TagsInputInput` 时，此属性是强制性的。 |
| `defaultValue` | `[]`        | `AcceptableInputValue[]`               | 标签初始渲染时的值。当您不需要控制标签输入的状态时使用。            |
| `delimiter`  | `','`       | `string \| RegExp`                     | 触发添加新标签的字符或正则表达式。也用于在 `@paste` 事件中拆分标签。 |
| `dir`        |             | `'ltr' \| 'rtl'`                       | 组合框的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`   |             | `boolean`                              | 当 `true` 时，阻止用户与标签输入交互。                              |
| `displayValue` | `value.toString()` | `((value: AcceptableInputValue) => string)` | 显示标签的值。当您想对值应用修改（例如添加后缀或使用对象作为值）时很有用。 |
| `duplicate`  |             | `boolean`                              | 当 `true` 时，允许重复标签。                                        |
| `id`         |             | `string`                               |                                                                     |
| `max`        | `0`         | `number`                               | 最大标签数量。                                                      |
| `modelValue` |             | `AcceptableInputValue[] \| null`       | 标签输入的受控值。可以通过 `v-model` 绑定。                         |
| `name`       |             | `string`                               | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `required`   |             | `boolean`                              | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |

**EmitPayload**

| 事件             | Payload                    | 描述             |
| :--------------- | :------------------------- | :--------------- |
| `addTag`         | `[payload: AcceptableInputValue]` | 标签添加时调用的事件处理程序。 |
| `invalid`        | `[payload: AcceptableInputValue]` | 值无效时调用的事件处理程序。 |
| `removeTag`      | `[payload: AcceptableInputValue]` | 标签移除时调用的事件处理程序。 |
| `update:modelValue` | `[payload: AcceptableInputValue[]]` | 值更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload     | 描述         |
| :---------- | :----------- |
| `modelValue` | 当前输入值   |

**数据属性 (Data Attributes)**

| 数据属性        | 值               |
| :-------------- | :--------------- |
| `[data-disabled]` | 禁用时存在       |
| `[data-focused]` | 聚焦时存在       |
| `[data-invalid]` | 输入值无效时存在 |

### 项目 (Item)

包含标签的组件。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |        | `boolean`            | 当 `true` 时，阻止用户与标签输入交互。                              |
| `value`   |        | `string \| Record<string, any>` | 与标签关联的值。                                                    |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"active" \| "inactive"` |
| `[data-disabled]` | 禁用时存在               |

### 项目文本 (ItemText)

标签的文本部分。对可访问性很重要。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 项目删除 (ItemDelete)

删除关联标签的按钮。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"active" \| "inactive"` |
| `[data-disabled]` | 禁用时存在               |

### 输入 (Input)

标签输入的输入元素。

| 属性        | 默认值 | 类型                 | 描述                                                                |
| :---------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`        | `'input'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`   |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `autoFocus` |        | `boolean`            | 挂载时聚焦元素。                                                    |
| `maxLength` |        | `number`             | 允许的最大字符数。                                                  |
| `placeholder` |        | `string`             | 用于空标签输入的占位符字符。                                        |

**数据属性 (Data Attributes)**

| 数据属性        | 值               |
| :-------------- | :--------------- |
| `[data-invalid]` | 输入值无效时存在 |

### 清除 (Clear)

删除所有标签的按钮。

| 属性      | 默认值     | 类型                 | 描述                                                                |
| :-------- | :--------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |            | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-disabled]` | 禁用时存在 |

## 示例 (Examples)

### 粘贴行为 (Paste behavior)

您可以通过传入 `add-on-paste` 属性来在粘贴时自动添加标签。

```vue
<script setup lang="ts">
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'reka-ui'
</script>

<template>
  <TagsInputRoot
    v-model="modelValue"
    add-on-paste
  >
    …
  </TagsInputRoot>
</template>
```

### 多个分隔符 (Multiple delimiters)

您可以传入 `RegExp` 作为 `delimiter` 以允许使用多个字符触发新标签的添加。当传入 `add-on-paste` 时，它也将用于在 `@paste` 事件中拆分标签。

```vue
<script setup lang="ts">
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'reka-ui'

// split by space, comma, semicolon, tab, or newline
const delimiter = /[ ,;\t\n\r]+/
</script>

<template>
  <TagsInputRoot
    v-model="modelValue"
    :delimiter="delimiter"
    add-on-paste
  >
    …
  </TagsInputRoot>
</template>
```

## 可访问性 (Accessibility)

### 键盘交互 (Keyboard Interactions)

| 按键      | 描述                                                           |
| :-------- | :------------------------------------------------------------- |
| `Delete`  | 当标签处于活动状态时，删除它并设置右侧的标签为活动状态。       |
| `Backspace` | 当标签处于活动状态时，删除它并设置左侧的标签为活动状态。如果左侧没有标签，则焦点会移到下一个标签或输入框。 |
| `ArrowRight` | 设置下一个标签为活动状态。                                     |
| `ArrowLeft` | 设置上一个标签为活动状态。                                     |
| `Home`    | 设置第一个标签为活动状态。                                     |
| `End`     | 设置最后一个标签为活动状态。                                   |

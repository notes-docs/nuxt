---
title: Accordion
description: 一组垂直堆叠的交互式标题，每个标题可展开或折叠其关联的内容区块。
---

::component-example
---
name: 'reka-accordion-example'
collapse: true
---
::

## 特性

* [x] 完整的键盘导航。
* [x] 支持水平/垂直方向。
* [x] 支持从右到左方向。
* [x] 可以展开一个或多个项目。
* [x] 可以受控或不受控。

## 安装

从命令行安装组件。

::code-group
```bash [npm]
npm add reka-ui
```
```bash [pnpm]
pnpm add reka-ui
```
```bash [yarn]
yarn add reka-ui
```
```bash [bun]
bun add reka-ui
```
::

## 结构

导入所有部分并将它们组合在一起。

```vue
<script setup>
  import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
</script>

<template>
  <AccordionRoot>
    <AccordionItem>
      <AccordionHeader>
        <AccordionTrigger />
      </AccordionHeader>
      <AccordionContent />
    </AccordionItem>
  </AccordionRoot>
</template>
```

## API 参考

### Root

包含 Accordion 的所有部分

| Prop         | 默认值     | 类型                          | 说明                                                                                                                  |
| :----------- | :--------- | :---------------------------- |:--------------------------------------------------------------------------------------------------------------------|
| `as`         | `'div'`    | `AsTag \| Component`          | 此组件应渲染为的元素或组件。可以被 asChild 覆盖。                                                                                       |
| `asChild`    |            | `boolean`                     | 更改作为子元素传递的默认渲染元素，合并它们的 props 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |
| `collapsible`| `false`    | `boolean`                     | 当类型为“single”时，允许在点击打开项目的触发器时关闭内容。当类型为“multiple”时，此属性无效。                                                             |
| `defaultValue`|            | `string \| string[]`          | 项目的默认值。当您不需要控制项目的状态时使用。                                                                                             |
| `dir`        |            | `'ltr' \| 'rtl'`              | 适用时折叠面板的阅读方向。如果省略，则假定采用 LTR（从左到右）阅读模式。                                                                              |
| `disabled`   | `false`    | `boolean`                     | 如果为 true ，则阻止用户与 accordion 及其所有项目进行交互。                                                                              |
| `modelValue` |            | `string \| string[]`          | 当你需要控制项目状态时使用。可以与 v-model 绑定。|
| `orientation`| `'vertical'`| `'vertical' \| 'horizontal'`  | 手风琴的方向。|
| `type`       |            | `'single' \| 'multiple'`      | 确定是否可以一次选择“单个”还是“多个”项目。此 prop 将覆盖从 modelValue 和 defaultValue 推断出的类型。|
| `unmountOnHide`| `true`   | `boolean`                     | 当为 true 时，元素将在关闭状态下卸载。|

**Emit**

| 事件名称         | Payload 类型              |  说明 |
| :--------------- | :------------------------ |:-----|
| `update:modelValue`| `[value: string \| string[]]`|当项目的展开状态发生改变时调用的事件处理程序|

**Slots(default)**

| Slot 名称     | Payload 类型                             | 说明 |
| :------------ | :--------------------------------------- |:-------|
| `modelValue`  | `AcceptableValue \| AcceptableValue[] \| undefined`|当前活跃值|

**Data Attribute Value**

| 属性名称             | 值                        |
| :------------------- | :------------------------ |
| `[data-orientation]` | `"vertical" \| "horizontal"`|

### Item

包含可折叠部分的所有部分。

| Prop          | 默认值 | 类型       | 说明                                                                   |
| :------------ | :----- | :--------- |:---------------------------------------------------------------------|
| `as`          | `'div'`| `AsTag \| Component`| 此组件应渲染为的元素或组件。可以被 asChild 覆盖。                                        |
| `asChild`     |        | `boolean`  | 更改作为子元素传递的默认渲染元素，合并它们的 props 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |
| `disabled`    |        | `boolean`  |是否禁用折叠面板项目的用户交互。如果为 true ，则禁止用户与该项目交互。|
| `unmountOnHide`|        | `boolean`  |当为 true 时，元素将在关闭状态下卸载。|
| `value*`      |        | `string`   |折叠面板项的字符串值。折叠面板内的所有项都应使用唯一值。|

**Slots (default) Payload**

| Slot 名称 | Payload 类型 | 说明 |
| :-------- | :----------- |:-------|
| `open`    | `boolean`    |当前打开状态|

**Data Attribute Value**

| 属性名称             | 值                        |
| :------------------- | :------------------------ |
| `[data-state]`       | `"open" \| "closed"`      |
| `[data-disabled]`    | Present when disabled     |
| `[data-orientation]` | `"vertical" \| "horizontal"`|

### Header

包裹一个 `AccordionTrigger`。使用 `asChild` prop 将其更新为页面上适当的标题级别。

| Prop      | 默认值 | 类型       |说明                                                                   |
| :-------- | :----- | :--------- |:--------- |
| `as`      | `'h3'` | `AsTag \| Component`| 此组件应渲染为的元素或组件。可以被 asChild 覆盖。|
| `asChild` |        | `boolean`  | 更改作为子元素传递的默认渲染元素，合并它们的 prop 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。|

**Data Attribute Value**

| 属性名称             | 值                        |
| :------------------- | :------------------------ |
| `[data-state]`       | `"open" \| "closed"`      |
| `[data-disabled]`    | Present when disabled     |
| `[data-orientation]` | `"vertical" \| "horizontal"`|

### Trigger

切换其关联项目的折叠状态。它应该嵌套在 `AccordionHeader` 中。

| Prop      | 默认值 | 类型       | 说明 |
| :-------- | :----- | :--------- |:--------- |
| `as`      | `'div'`| `AsTag \| Component`|此组件应渲染为的元素或组件。可以被 `asChild` 覆盖。|
| `asChild` |        | `boolean`  |更改作为子元素传递的默认渲染元素，合并它们的 prop 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。|

**Data Attribute Value**

| 属性名称             | 值                        |
| :------------------- | :------------------------ |
| `[data-state]`       | `"open" \| "closed"`      |
| `[data-disabled]`    | Present when disabled     |
| `[data-orientation]` | `"vertical" \| "horizontal"`|

### Content

包含项目的可折叠内容。

| Prop        | 默认值 | 类型       | 说明                                                                                                                 |
| :---------- | :----- | :--------- |:-------------------------------------------------------------------------------------------------------------------|
| `as`        | `'div'`| `AsTag \| Component`| 此组件应渲染为的元素或组件。可以被 `asChild` 覆盖。                                                                                    |
| `asChild`   |        | `boolean`  | 更改作为子元素传递的默认渲染元素，合并它们的 prop 和行为。请阅读我们的 [Composition](https://www.reka-ui.com/docs/guides/composition) 指南以了解更多详细信息。 |
| `forceMount`|        | `boolean`  | 当需要更多控制时，用于强制挂载。在使用 Vue 动画库控制动画时非常有用。 |                                                                             

**Data Attribute Value**

| 属性名称             | 值                        |
| :------------------- | :------------------------ |
| `[data-state]`       | `"open" \| "closed"`      |
| `[data-disabled]`    | Present when disabled     |
| `[data-orientation]` | `"vertical" \| "horizontal"`|

**CSS Variable**

| 变量名称                     | 描述                  |
| :--------------------------- | :-------------------- |
| `--reka-accordion-content-width` | 内容打开/关闭时的宽度 |
| `--reka-accordion-content-height`| 内容打开/关闭时的高度 |

## 示例

### 默认展开

使用 `defaultValue` prop 默认定义打开的项目。

```vue
<template>
  <AccordionRoot
    type="single"
    default-value="item-2"
  >
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### 允许折叠所有项目

使用 `collapsible` prop 允许所有项目关闭。

```vue
<template>
  <AccordionRoot
    type="single"
    collapsible
  >
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### 同时打开多个项目

将 `type` prop 设置为 `multiple` 以启用同时打开多个项目。

```vue
<template>
  <AccordionRoot type="multiple">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### 打开时旋转图标

您可以添加额外的装饰元素，例如人字形，并在项目打开时旋转它。

::code-group
```vue [index.vue]
// index.vue
<script setup>
  import { Icon } from '@iconify/vue'
  import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
  import './styles.css'
</script>

<template>
  <AccordionRoot type="single">
    <AccordionItem value="item-1">
      <AccordionHeader>
        <AccordionTrigger class="AccordionTrigger">
          <span>Trigger text</span>
          <Icon
            icon="radix-icons:chevron-down"
            class="AccordionChevron"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>…</AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
```

```css [styles.css]
/* styles.css */
.AccordionChevron {
  transition: transform 300ms;
}

.AccordionTrigger[data-state="open"] > .AccordionChevron {
  transform: rotate(180deg);
}
```
::

### 水平方向

使用 `orientation` prop 创建一个水平 Accordion。

```vue
<template>
  <AccordionRoot orientation="horizontal">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### 动画化内容大小

使用 `--reka-accordion-content-width` 和/或 `--reka-accordion-content-height` CSS 变量来动画化内容打开/关闭时的大小：

::code-group
```vue [index.vue]
// index.vue
<script setup>
  import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
  import './styles.css'
</script>

<template>
  <AccordionRoot type="single">
    <AccordionItem value="item-1">
      <AccordionHeader>…</AccordionHeader>
      <AccordionContent class="AccordionContent">
        …
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
```

```css [styles.css]
/* styles.css */
.AccordionContent {
  overflow: hidden;
}

.AccordionContent[data-state="open"] {
  animation: slideDown 300ms ease-out;
}

.AccordionContent[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```
::

### 即使在关闭时也渲染内容

默认情况下，隐藏内容将被移除，使用 `:unmountOnHide="false"` 来使内容始终可用。这将允许浏览器搜索隐藏文本并打开手风琴。

```vue
<template>
  <AccordionRoot :unmount-on-hide="false">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

## 可访问性

遵循 [Accordion WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/accordion) 设计模式。

### 键盘交互

| 键           | 描述                                                                |
| :----------- | :------------------------------------------------------------------ |
| `Space`      | 当焦点在折叠部分的 `AccordionTrigger` 上时，展开该部分。            |
| `Enter`      | 当焦点在折叠部分的 `AccordionTrigger` 上时，展开该部分。            |
| `Tab`        | 将焦点移动到下一个可聚焦元素。                                      |
| `Shift + Tab`| 将焦点移动到上一个可聚焦元素。                                      |
| `ArrowDown`  | 当 `orientation` 为 `vertical` 时，将焦点移动到下一个 `AccordionTrigger`。|
| `ArrowUp`    | 当 `orientation` 为 `vertical` 时，将焦点移动到上一个 `AccordionTrigger`。|
| `ArrowRight` | 当 `orientation` 为 `horizontal` 时，将焦点移动到下一个 `AccordionTrigger`。|
| `ArrowLeft`  | 当 `orientation` 为 `horizontal` 时，将焦点移动到上一个 `AccordionTrigger`。|
| `Home`       | 当焦点在 `AccordionTrigger` 上时，将焦点移动到起始 `AccordionTrigger`。|
| `End`        | 当焦点在 `AccordionTrigger` 上时，将焦点移动到最后一个 `AccordionTrigger`。|



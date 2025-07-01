---
title: Stepper
description: 用于指示多步骤过程的进度的一组步骤。
---

::component-example
---
name: 'reka-stepper-example'
collapse: true
---
::

## 功能特点

* 支持键盘交互。
* 支持水平/垂直布局。
* 支持嵌套布局。
* 支持从右到左的方向。
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
  import { StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperTitle, StepperTrigger } from 'reka-ui'
</script>

<template>
  <StepperRoot>
    <StepperItem>
      <StepperTrigger />
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
      <StepperSeparator />
    </StepperItem>
  </StepperRoot>
</template>
```

## API 参考

### Root

包含所有 Stepper 组件部分。

| 属性         | 默认值       | 类型                       | 描述                                                                                              |
| ------------ | ------------ | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`      | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`      | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `defaultValue` | `1`          | `number`                   | 首次渲染时应激活的步骤值。当您不需要控制步骤状态时使用。                                        |
| `dir`        |              | `'ltr' \| 'rtl'`           | 组合框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `linear`     | `true`       | `boolean`                  | 步骤是否必须按顺序完成。                                                                          |
| `modelValue` |              | `number`                   | 要激活的步骤的受控值。可以绑定为 `v-model`。                                                     |
| `orientation` | `'horizontal'` | `'vertical' \| 'horizontal'` | 步骤的布局方向。主要用于相应地进行箭头导航（左右 vs. 上下）。                                   |

**触发事件 (Emit)**

| Payload          | 描述                  |
| ---------------- | --------------------- |
| `[payload: number]` | 值更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload        | 描述             |
| -------------- | ---------------- |
| `modelValue`   | `number \| undefined` 当前步骤 |
| `totalSteps`   | `number` 总步骤数    |
| `isNextDisabled` | `boolean` 下一步是否禁用 |
| `isPrevDisabled` | `boolean` 上一步是否禁用 |
| `isFirstStep`  | `boolean` 是否是第一步 |
| `isLastStep`   | `boolean` 是否是最后一步 |
| `goToStep`     | `(step: number): void` 转到特定步骤 |
| `nextStep`     | `(): void` 转到下一步      |
| `prevStep`     | `(): void` 转到上一步      |
| `hasNext`      | `(): boolean` 是否有下一步    |
| `hasPrev`      | `(): boolean` 是否有上一步    |

**方法**

| 类型                        | 描述 |
| --------------------------- | ---- |
| `(step: number) => void`    |      |
| `() => void`                |      |
| `() => void`                |      |
| `() => boolean`             |      |
| `() => boolean`             |      |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"` |
| `[data-linear]`    | 线性时存在                |

### Item

步骤项组件。

| 属性       | 默认值 | 类型                 | 描述                                                                                              |
| ---------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`       | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`  | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `completed` | `false`  | `boolean`            | 显示步骤是否已完成。                                                                              |
| `disabled` | `false`  | `boolean`            | 当为 `true` 时，阻止用户与步骤交互。                                                             |
| `step`\* |        | `number`             | 将步进器项与索引关联的唯一值。                                                                      |

**插槽 (默认)**

| Payload | 描述                                |
| ------- | ----------------------------------- |
| `state` | `'active' \| 'completed' \| 'inactive'` 步进器项的当前状态 |

**数据属性**

| 属性              | 值                                |
| ----------------- | --------------------------------- |
| `[data-state]`    | `"active" \| "inactive" \| "completed"` |
| `[data-disabled]` | 禁用时存在                        |
| `[data-orientation]` | `"vertical" \| "horizontal"`      |

### Trigger

切换步骤的触发器。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性              | 值                                |
| ----------------- | --------------------------------- |
| `[data-state]`    | `"active" \| "inactive" \| "completed"` |
| `[data-disabled]` | 禁用时存在                        |
| `[data-orientation]` | `"vertical" \| "horizontal"`      |

### Indicator

步骤的指示器。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**插槽 (默认)**

| Payload | 描述     |
| ------- | -------- |
| `step`  | `number` 当前步骤 |

### Title

当步进器触发器聚焦时宣布的可访问标题。如果您想隐藏标题，请将其包装在我们的 `Visually Hidden` 实用程序中，如下所示 `<VisuallyHidden asChild>`。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'h4'`   | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Description

当步进器触发器聚焦时宣布的可选可访问描述。如果您想隐藏描述，请将其包装在我们的 `Visually Hidden` 实用程序中，如下所示 `<VisuallyHidden asChild>`。如果您想完全删除描述，请删除此部分并将 `aria-describedby="undefined"` 传递给 `StepperTrigger`。

| 属性        | 默认值 | 类型                 | 描述                                                                                              |
| ----------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `completed` | `false`  | `boolean`            | 显示步骤是否已完成。                                                                              |
| `disabled`  | `false`  | `boolean`            | 当为 `true` 时，阻止用户与步骤交互。                                                             |
| `step`\* |        | `number`             | 将步进器项与索引关联的唯一值。                                                                      |

**插槽 (默认)**

| Payload | 描述                                |
| ------- | ----------------------------------- |
| `state` | `'active' \| 'completed' \| 'inactive'` 步进器项的当前状态 |

## 示例

### 垂直

您可以使用 `orientation` prop 创建垂直步骤。

```html
<script setup>
  import { StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperTitle } from 'reka-ui'
</script>

<template>
  <StepperRoot
    :default-value="1"
    orientation="vertical"
  >
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
  </StepperRoot>
</template>
```

### 带控件

您可以使用按钮为步进器添加额外的控件，并使用 `useTemplateRef` 访问类型化的组件实例。

```html
<script setup lang="ts">
  const stepper = useTemplateRef('stepper')
</script>

<template>
  <StepperRoot
    ref="stepper"
    :default-value="1"
  >
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
    <StepperItem>
      <StepperIndicator />
      <StepperTitle />
      <StepperDescription />
    </StepperItem>
  </StepperRoot>
  <div class="flex gap-2 justify-between mt-4">
    <button
      :disabled="!stepper?.hasPrev()"
      @click="stepper?.prevStep()"
    >
      Prev
    </button>
    <button
      :disabled="!stepper?.hasNext()"
      @click="stepper?.nextStep()"
    >
      Next
    </button>
  </div>
</template>
```

## 可访问性

### 键盘交互

| 按键        | 描述                                     |
| ----------- | ---------------------------------------- |
| `Tab`       | 当焦点移动到步骤时，聚焦第一个步骤。     |
| `ArrowDown` | 根据 `orientation` 将焦点移动到下一步。 |
| `ArrowRight` | 根据 `orientation` 将焦点移动到下一步。 |
| `ArrowUp`   | 根据 `orientation` 将焦点移动到上一步。 |
| `ArrowLeft` | 根据 `orientation` 将焦点移动到上一步。 |
| `Enter`     | 选择聚焦的步骤。                         |
| `Space`     | 选择聚焦的步骤。                         |

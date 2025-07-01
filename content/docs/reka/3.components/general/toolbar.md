---
title: Toolbar
description: 用于对一组控件（例如按钮、工具栏组或下拉菜单）进行分组的容器。
---

::component-example
---
name: 'reka-toolbar-example'
collapse: true
---
::

## 功能特点

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

导入组件。

```html
<script setup lang="ts">
  import {
    ToolbarButton,
    ToolbarLink,
    ToolbarRoot,
    ToolbarSeparator,
    ToolbarToggleGroup,
    ToolbarToggleItem,
  } from 'reka-ui'
</script>

<template>
  <ToolbarRoot>
    <ToolbarButton />
    <ToolbarSeparator />
    <ToolbarLink />
    <ToolbarToggleGroup>
      <ToolbarToggleItem />
    </ToolbarToggleGroup>
  </ToolbarRoot>
</template>
```

## API 参考

### Root

包含所有工具栏组件部分。

| 属性        | 默认值       | 类型                       | 描述                                                                                              |
| ----------- | ------------ | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`      | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`      | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `dir`       |              | `'ltr' \| 'rtl'`           | 组合框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `loop`      | `false`      | `boolean`                  | 当为 `true` 时，键盘导航将从最后一个选项卡循环到第一个选项卡，反之亦然。                           |
| `orientation` | `'horizontal'` | `'vertical' \| 'horizontal'` | 工具栏的方向。                                                                                    |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Button

一个按钮项。

| 属性       | 默认值 | 类型                 | 描述                                                                                              |
| ---------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`       | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`  | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled` | `false`  | `boolean`            |                                                                                                   |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Link

一个链接项。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'a'`    | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### ToggleGroup

一组可以切换开/关的双状态按钮。

| 属性           | 默认值         | 类型                                   | 描述                                                                                              |
| -------------- | -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`           | `'div'`        | `AsTag \| Component`                   | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`      | `false`        | `boolean`                              | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `defaultValue` |                | `AcceptableValue \| AcceptableValue[]` | 项目的默认活动值。当您不需要控制项目状态时使用。                                               |
| `dir`          |                | `'ltr' \| 'rtl'`                       | 组合框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `disabled`     | `false`        | `boolean`                              | 当为 `true` 时，阻止用户与切换组及其所有项目交互。                                             |
| `loop`         | `false`        | `boolean`                              | 当 `loop` 和 `rovingFocus` 为 `true` 时，键盘导航将从最后一项循环到第一项，反之亦然。           |
| `modelValue`   |                | `AcceptableValue \| AcceptableValue[]` | 活动项目的受控值。当您需要控制项目状态时使用。可以与 `v-model` 绑定。                            |
| `name`         |                | `string`                               | 字段的名称。作为名称/值对的一部分与其所属表单一起提交。                                       |
| `orientation`  |                | `'vertical' \| 'horizontal'`           | 组件的方向，它决定了焦点如何移动：`horizontal` 用于左右箭头，`vertical` 用于上下箭头。           |
| `required`     | `false`        | `boolean`                              | 当为 `true` 时，表示用户必须在提交所属表单之前设置值。                                       |
| `rovingFocus`  | `false`        | `boolean`                              | 当为 `false` 时，使用箭头键导航项目将被禁用。                                                 |
| `type`         |                | `'single' \| 'multiple'`               | 确定一次可以选择“单个”或“多个”项目。此 prop 将覆盖从 `modelValue` 和 `defaultValue` 推断的类型。 |

**触发事件 (Emit)**

| Payload                                | 描述                        |
| -------------------------------------- | --------------------------- |
| `[payload: AcceptableValue \| AcceptableValue[]]` | 切换值更改时调用的事件处理程序。 |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### ToggleItem

组中的一个项目。

| 属性       | 默认值 | 类型                 | 描述                                                                                              |
| ---------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`       | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`  | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled` | `false`  | `boolean`            | 当为 `true` 时，阻止用户与切换器交互。                                                             |
| `value`\* |        | `AcceptableValue`    | 切换组项的字符串值。切换组中的所有项都应使用唯一值。                                           |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"on" \| "off"`                  |
| `[data-disabled]` | 禁用时存在                       |
| `[data-orientation]` | `"vertical" \| "horizontal"`     |

### Separator

用于视觉上分隔工具栏中的项目。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性              | 值                        |
| ----------------- | ------------------------- |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

## 示例

### 与其他原语一起使用

我们所有公开 `Trigger` 部分的原语，例如 `Dialog`、`AlertDialog`、`Popover`、`DropdownMenu`，都可以通过使用 `asChild` prop 在工具栏中组合。
这是一个使用我们的 `DropdownMenu` 原语的示例。

```html
<script setup lang="ts">
  import {
    DropdownMenuContent,
    DropdownMenuRoot,
    DropdownMenuTrigger,
    ToolbarButton,
    ToolbarLink,
    ToolbarRoot,
    ToolbarSeparator,
    ToolbarToggleGroup,
    ToolbarToggleItem,
  } from 'reka-ui'
</script>

<template>
  <ToolbarRoot>
    <ToolbarButton>Action 1</ToolbarButton>
    <ToolbarSeparator />
    <DropdownMenuRoot>
      <ToolbarButton as-child>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
      </ToolbarButton>
      <DropdownMenuContent>…</DropdownMenuContent>
    </DropdownMenuRoot>
  </ToolbarRoot>
</template>
```

## 可访问性

使用 [roving tabindex](roving tabindex) 管理项目之间的焦点移动。

### 键盘交互

| 按键        | 描述                                     |
| ----------- | ---------------------------------------- |
| `Tab`       | 将焦点移动到组中的第一个项目。           |
| `Space`     | 激活/取消激活项目。                      |
| `Enter`     | 激活/取消激活项目。                      |
| `ArrowDown` | 根据 `orientation` 将焦点移动到下一个项目。 |
| `ArrowRight` | 根据 `orientation` 将焦点移动到下一个项目。 |
| `ArrowUp`   | 根据 `orientation` 将焦点移动到上一个项目。 |
| `ArrowLeft` | 根据 `orientation` 将焦点移动到上一个项目。 |
| `Home`      | 将焦点移动到第一个项目。                 |
| `End`       | 将焦点移动到最后一个项目。               |

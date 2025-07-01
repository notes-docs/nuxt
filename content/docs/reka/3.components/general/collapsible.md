---
title: Collapsible
description: 展开/折叠面板的交互式组件。
---

::component-example
---
name: 'reka-collapsible-example'
collapse: true
---
::

## 功能特点

* [x] 完整的键盘导航。
* [x] 可受控或不受控。

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

导入组件并将各部分组合在一起。

```vue
<script setup>
  import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger />
    <CollapsibleContent />
  </CollapsibleRoot>
</template>
```

## API 参考

### Root

包含可折叠组件的所有部分。

| 属性            | 默认值   | 类型             | 描述                                                                                              |
| --------------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`            | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`       | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.reka-ui.com/docs/guides/composition)。 |
| `defaultOpen`   | `false`  | `boolean`        | 组件首次渲染时的打开状态。当您不需要控制其打开状态时使用。                                        |
| `disabled`      |          | `boolean`        | 当为 `true` 时，阻止用户与可折叠组件交互。                                                        |
| `open`          |          | `boolean`        | 可折叠组件的受控打开状态。可与 `v-model` 绑定。                                                 |
| `unmountOnHide` | `true`   | `boolean`        | 当为 `true` 时，元素在关闭状态下将被卸载。                                                        |

**触发事件 (Emit)**

| Payload          | 描述                           |
| ---------------- | ------------------------------ |
| `[value: boolean]` | 可折叠组件打开状态改变时调用的事件处理程序。 |

**插槽 (默认)**

| Payload    | 描述         |
| ---------- | ------------ |
| `open`     | 当前打开状态 |

**数据属性**

| 属性            | 值             |
| --------------- | -------------- |
| `[data-state]`  | `"open" \| "closed"` |
| `[data-disabled]` | 禁用时存在     |

### Trigger

切换可折叠组件的按钮。

| 属性      | 默认值   | 类型             | 描述                                                                                              |
| --------- | -------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性            | 值             |
| --------------- | -------------- |
| `[data-state]`  | `"open" \| "closed"` |
| `[data-disabled]` | 禁用时存在     |

### Content

包含可折叠内容的组件。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性        | 默认值 | 类型             | 描述                                                                                              |
| ----------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`        | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`   | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` |        | `boolean`        | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。                                 |

**触发事件 (Emit)**

| Payload         |
| --------------- |
| `[(void)?]`     |

**数据属性**

| 属性            | 值             |
| --------------- | -------------- |
| `[data-state]`  | `"open" \| "closed"` |
| `[data-disabled]` | 禁用时存在     |

**CSS 变量**

| 变量                            | 描述                                 |
| ------------------------------- | ------------------------------------ |
| `--reka-collapsible-content-width` | 内容打开/关闭时的宽度                |
| `--reka-collapsible-content-height` | 内容打开/关闭时的高度                |

## 示例

### 动画内容大小

使用 `--reka-collapsible-content-width` 和/或 `--reka-collapsible-content-height` CSS 变量来动画内容打开/关闭时的大小。这是一个演示：

```html
<script setup>
  import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
  import './styles.css'
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger>…</CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent">
      …
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
```

```css
/* styles.css */
.CollapsibleContent {
  overflow: hidden;
}

.CollapsibleContent[data-state="open"] {
  animation: slideDown 300ms ease-out;
}

.CollapsibleContent[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-collapsible-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-collapsible-content-height);
  }
  to {
    height: 0;
  }
}
```

### 即使折叠也渲染内容

默认情况下，隐藏内容将被移除，使用 `:unmountOnHide="false"` 以使内容始终可用。
这还将允许浏览器搜索隐藏文本，并打开可折叠组件。

```html
<script setup>
  import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
</script>

<template>
  <CollapsibleRoot :unmount-on-hide="false">
    …
  </CollapsibleRoot>
</template>
```

## 可访问性

遵循 [Disclosure WAI-ARIA 设计模式](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure)。

### 键盘交互

| 按键  | 描述                 |
| ----- | -------------------- |
| `Space` | 打开/关闭可折叠组件 |
| `Enter` | 打开/关闭可折叠组件 |


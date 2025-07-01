---
title: Avatar
description: 用于代表用户的具有 fallback 功能的图像元素。
---

::component-example
---
name: 'reka-avatar-example'
collapse: true
---
::

## 功能特点

* [x] 自动和手动控制图片渲染时机。
* [x] 回退部分接受任何子元素。
* [x] 可选择延迟回退渲染以避免内容闪烁。

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

```vue
<script setup>
  import { AvatarImage, AvatarRoot } from 'reka-ui'
</script>

<template>
  <AvatarRoot>
    <AvatarImage />
    <AvatarFallback />
  </AvatarRoot>
</template>
```

## API 参考

### Root

包含头像的所有部分。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Image

要渲染的图片。默认情况下，它只会在加载完成后渲染。如果需要更多控制，可以使用 `@loadingStatusChange` 处理程序。

| 属性           | 默认值 | 类型                                                                                                                                                                                                                                           | 描述                                                                                              |
| -------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`           | `'img'`  | `AsTag \| Component`                                                                                                                                                                                                                           | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`      | `false`  | `boolean`                                                                                                                                                                                                                                      | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `crossOrigin`  | `''`   | `'' \| 'anonymous' \| 'use-credentials'`                                                                                                                                                                                                       |                                                                                                   |
| `referrerPolicy` | `''`   | `'' \| 'no-referrer' \| 'no-referrer-when-downgrade' \| 'origin' \| 'origin-when-cross-origin' \| 'same-origin' \| 'strict-origin' \| 'strict-origin-when-cross-origin' \| 'unsafe-url'` |                                                                                                   |
| `src`\* |        | `string`                                                                                                                                                                                                                                     |                                                                                                   |

**触发事件 (Emit)**

| Payload                 | 描述                                                           |
| ----------------------- | -------------------------------------------------------------- |
| `[value: ImageLoadingStatus]` | 提供有关图片加载状态的回调信息。这在您想要更精确地控制图片加载时渲染的内容时很有用。 |

### Fallback

当图片未加载时渲染的元素。这意味着在加载过程中，或出现错误时。如果您在加载期间注意到闪烁，可以提供 `delayMs` prop 来延迟其渲染，使其仅在连接较慢的情况下显示。如需更多控制，请使用 `AvatarImage` 上的 `@loadingStatusChange` emit。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `delayMs` |        | `number`         | 用于延迟渲染，使其仅在连接较慢的情况下显示。                                                      |

## 示例

### 可点击的带提示框的头像

您可以将头像与 `Tooltip` 组合以显示额外信息。

```vue
<script setup>
  import { AvatarImage, AvatarRoot, TooltipArrow, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>
      <AvatarRoot>…</AvatarRoot>
    </TooltipTrigger>
    <TooltipContent side="top">
      Tooltip content
      <TooltipArrow />
    </TooltipContent>
  </TooltipRoot>
</template>
```


---
title: HoverCard
description: 让视力正常的用户可以预览链接后面的内容。
---

::component-example
---
name: 'reka-hover-card-example'
collapse: true
---
::

## 功能特点

* 可控或不可控。
* 可自定义侧边、对齐方式、偏移量、碰撞处理。
* 可选渲染指向箭头。
* 支持自定义打开和关闭延迟。
* 被屏幕阅读器忽略。

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
  import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'reka-ui'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger />
    <HoverCardPortal>
      <HoverCardContent>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
```

## API 参考

### Root

包含悬浮卡的所有部分。

| 属性         | 默认值 | 类型     | 描述                                                                    |
| ------------ | ------ | -------- | ----------------------------------------------------------------------- |
| `closeDelay` | `300`  | `number` | 鼠标离开触发器或内容后，悬浮卡关闭的持续时间。                           |
| `defaultOpen` | `false`  | `boolean` | 悬浮卡首次渲染时的打开状态。当您不需要控制其打开状态时使用。             |
| `open`       |        | `boolean` | 悬浮卡的受控打开状态。可以作为 `v-model:open` 绑定。                     |
| `openDelay`  | `700`  | `number` | 鼠标进入触发器到悬浮卡打开的持续时间。                                   |

**触发事件 (Emit)**

| Payload          | 描述                           |
| ---------------- | ------------------------------ |
| `[value: boolean]` | 悬浮卡打开状态改变时调用的事件处理程序。 |

**插槽 (默认)**

| Payload    | 描述         |
| ---------- | ------------ |
| `open`     | 当前打开状态 |

### Trigger

悬停时打开悬浮卡的链接。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'a'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `reference` |        | `ReferenceElement` | 用于定位的引用（或锚点）元素。如果未提供，将使用当前组件作为锚点。                                 |

**数据属性**

| 属性           | 值             |
| -------------- | -------------- |
| `[data-state]` | `"open" \| "closed"` |

### Portal

当使用时，将内容部分传送到 `body` 中。

| 属性        | 默认值 | 类型                   | 描述                                                                    |
| ----------- | ------ | ---------------------- | ----------------------------------------------------------------------- |
| `defer`     |        | `boolean`              | 延迟 Teleport 目标的解析，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。 |
| `disabled`  |        | `boolean`              | 禁用 Teleport 并内联渲染组件。                                          |
| `forceMount` |        | `boolean`              | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `to`        |        | `string \| HTMLElement` | Vue 原生 Teleport 组件 prop `:to`。                                     |

### Content

悬浮卡打开时弹出的组件。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性                   | 默认值 | 类型                                                                          | 描述                                                                                                |
| ---------------------- | ------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `align`                |        | `'start' \| 'center' \| 'end'`                                                | 首选的相对于触发器的对齐方式。当发生碰撞时可能会改变。                                            |
| `alignOffset`          |        | `number`                                                                      | 从 `start` 或 `end` 对齐选项的像素偏移量。                                                            |
| `arrowPadding`         |        | `number`                                                                      | 箭头与内容边缘之间的填充。如果您的内容有 `border-radius`，这将防止它溢出角。                           |
| `as`                   | `'div'`  | `AsTag \| Component`                                                          | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                                 |
| `asChild`              | `false`  | `boolean`                                                                     | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `avoidCollisions`      |        | `boolean`                                                                     | 当为 `true` 时，覆盖侧边和对齐偏好以防止与边界边缘碰撞。                                            |
| `collisionBoundary`    |        | `Element \| (Element \| null)[] \| null`                                      | 用作碰撞边界的元素。默认情况下是视口，但您可以提供额外的元素以包含在此检查中。                       |
| `collisionPadding`     |        | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 碰撞检测应发生的边界边缘的像素距离。接受一个数字（所有边相同），或一个部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableUpdateOnLayoutShift` |        | `boolean`                                                                     | 是否在布局偏移时禁用内容更新位置。                                                                    |
| `forceMount`           |        | `boolean`                                                                     | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。                                     |
| `hideWhenDetached`     |        | `boolean`                                                                     | 当触发器完全被遮挡时是否隐藏内容。                                                                    |
| `positionStrategy`     |        | `'fixed' \| 'absolute'`                                                       | 要使用的 CSS `position` 属性类型。                                                                  |
| `prioritizePosition`   |        | `boolean`                                                                     | 强制内容在视口内定位。可能会与参考元素重叠，这可能不是期望的。                                        |
| `reference`            |        | `ReferenceElement`                                                            | 将作为浮动元素定位参考的自定义元素或虚拟元素。如果提供，它将替换默认锚点元素。                       |
| `side`                 |        | `'top' \| 'right' \| 'bottom' \| 'left'`                                      | 打开时相对于触发器的首选侧边。当发生碰撞且 `avoidCollisions` 启用时，将反转。                       |
| `sideOffset`           |        | `number`                                                                      | 与触发器的像素距离。                                                                                |
| `sticky`               |        | `'partial' \| 'always'`                                                       | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将无论如何都使内容保持在边界内。 |
| `updatePositionStrategy` |        | `'always' \| 'optimized'`                                                     | 在每个动画帧上更新浮动元素位置的策略。                                                              |

**触发事件 (Emit)**

| Payload                 | 描述                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]` | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性              | 值                                       |
| ----------------- | ---------------------------------------- |
| `[data-state]`    | `"open" \| "closed"`                     |
| `[data-side]`     | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]`    | `"start" \| "end" \| "center"`           |

**CSS 变量**

| 变量                                       | 描述                                       |
| ------------------------------------------ | ------------------------------------------ |
| `--reka-hover-card-content-transform-origin` | 从内容和箭头位置/偏移量计算的 `transform-origin` |
| `--reka-hover-card-content-available-width` | 触发器和边界边缘之间剩余的宽度             |
| `--reka-hover-card-content-available-height` | 触发器和边界边缘之间剩余的高度             |
| `--reka-hover-card-trigger-width`    | 触发器的宽度                               |
| `--reka-hover-card-trigger-height`   | 触发器的高度                               |

### Arrow

一个可选的箭头元素，与悬浮卡一起渲染。这可以用于帮助将触发器与 `HoverCardContent` 视觉链接起来。必须在 `HoverCardContent` 内部渲染。

| 属性      | 默认值 | 类型             | 描述                                                                                              |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'svg'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`        | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `height`  | `5`    | `number`         | 箭头的像素高度。                                                                                  |
| `rounded` |        | `boolean`        | 当为 `true` 时，渲染圆角版本的箭头。不适用于 `as/asChild`。                                       |
| `width`   | `10`   | `number`         | 箭头的像素宽度。                                                                                  |

## 示例

### 立即显示

使用 `openDelay` prop 控制悬浮卡打开所需的时间。

```html
<script setup>
  import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardPortal,
    HoverCardRoot,
    HoverCardTrigger,
  } from 'reka-ui'
</script>

<template>
  <HoverCardRoot :open-delay="0">
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardContent>…</HoverCardContent>
  </HoverCardRoot>
</template>
```

### 限制内容大小

您可能希望限制内容的宽度，使其与触发器宽度匹配。您可能还希望限制其高度不超过视口。
我们暴露了几个 CSS 自定义属性，例如 `--reka-hover-card-trigger-width` 和 `--reka-hover-card-content-available-height` 来支持这一点。使用它们来限制内容尺寸。

```html
<script setup>
  import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'reka-ui'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        class="HoverCardContent"
        :side-offset="5"
      >
        …
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
```

```css
/* styles.css */
.HoverCardContent {
  width: var(--reka-hover-card-trigger-width);
  max-height: var(--reka-hover-card-content-available-height);
}
```

### 感知源动画

我们暴露了一个 CSS 自定义属性 `--reka-hover-card-content-transform-origin`。使用它来根据 `side`、`sideOffset`、`align`、`alignOffset` 和任何碰撞从计算出的原点动画内容。

```html
<script setup>
  import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'reka-ui'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardContent class="HoverCardContent">
      …
    </HoverCardContent>
  </HoverCardRoot>
</template>
```

```css
/* styles.css */
.HoverCardContent {
  transform-origin: var(--reka-hover-card-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 感知碰撞动画

我们暴露了 `data-side` 和 `data-align` 属性。它们的值将在运行时改变以反映碰撞。使用它们来创建感知碰撞和方向的动画。

```html
<script setup>
  import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'reka-ui'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardContent class="HoverCardContent">
      …
    </HoverCardContent>
  </HoverCardRoot>
</template>
```

```css
/* styles.css */
.HoverCardContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.HoverCardContent[data-side="top"] {
  animation-name: slideUp;
}

.HoverCardContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 可访问性

悬浮卡仅适用于有视力障碍的用户，键盘用户无法访问其内容。

### 键盘交互

| 按键  | 描述                 |
| ----- | -------------------- |
| `Tab` | 打开/关闭悬浮卡。    |
| `Enter` | 打开悬浮卡链接。     |

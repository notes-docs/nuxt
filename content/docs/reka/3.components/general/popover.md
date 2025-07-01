---
title: Popover
description: 通过按钮触发，在门户中显示丰富的内容。
---

::component-example
---
name: 'reka-popover-example'
collapse: true
---
::

## 功能特点

* 可控或不可控。
* 自定义侧边、对齐方式、偏移量、碰撞处理。
* 可选渲染一个指向箭头。
* 焦点完全由管理和自定义。
* 支持模态和非模态模式。
* 关闭和分层行为高度可定制。

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
  import { PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger />
    <PopoverAnchor />
    <PopoverPortal>
      <PopoverContent>
        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

## API 参考

### Root

包含所有 Popover 部分。

| 属性         | 默认值 | 类型      | 描述                                                              |
| ------------ | ------ | --------- | ----------------------------------------------------------------- |
| `defaultOpen` | `false` | `boolean` | Popover 首次渲染时的打开状态。当您不需要控制其打开状态时使用。 |
| `modal`      | `false` | `boolean` | Popover 的模态。当设置为 true 时，与外部元素的交互将被禁用，并且只有 Popover 内容对屏幕阅读器可见。 |
| `open`       |        | `boolean` | Popover 的受控打开状态。                                         |

**触发事件 (Emit)**

| Payload         | 描述                                     |
| --------------- | ---------------------------------------- |
| `[value: boolean]` | Popover 打开状态更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload | 描述       |
| ------- | ---------- |
| `open`  | 当前打开状态 |

### Trigger

切换 Popover 的按钮。默认情况下，`PopoverContent` 会将自身定位在触发器旁边。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性           | 值                 |
| -------------- | ------------------ |
| `[data-state]` | `"open" \| "closed"` |

### Anchor

一个可选的元素，用于定位 `PopoverContent`。如果未使用此部分，内容将与 `PopoverTrigger` 并排定位。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `reference` |        | `ReferenceElement`   | 用作定位参考（或锚点）的元素。如果未提供，将使用当前组件作为锚点。                                |

### Portal

使用时，将内容部分传送到 `body` 中。

| 属性       | 默认值 | 类型                 | 描述                                                                                              |
| ---------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `defer`    | `false`  | `boolean`            | 延迟解决 Teleport 目标，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。                        |
| `disabled` | `false`  | `boolean`            | 禁用 teleport 并在行内渲染组件。                                                                |
| `forceMount` | `false`  | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `to`       |        | `string \| HTMLElement` | Vue 原生 teleport 组件 prop `:to`。                                                             |

### Content

当 Popover 打开时弹出的组件。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性                     | 默认值 | 类型                                            | 描述                                                                                              |
| ------------------------ | ------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `align`                  |        | `'start' \| 'center' \| 'end'`                  | 针对触发器的首选对齐方式。碰撞时可能会改变。                                                |
| `alignOffset`            | `0`    | `number`                                        | 距 `start` 或 `end` 对齐选项的像素偏移量。                                                 |
| `arrowPadding`           | `0`    | `number`                                        | 箭头与内容边缘之间的填充。如果您的内容有 `border-radius`，这将防止其溢出角落。                |
| `as`                     | `'div'`  | `AsTag \| Component`                            | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`                | `false`  | `boolean`                                       | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `avoidCollisions`        | `false`  | `boolean`                                       | 当为 `true` 时，覆盖侧边和对齐首选项以防止与边界边缘发生碰撞。                                  |
| `collisionBoundary`      | `null` | `Element \| (Element \| null)[] \| null`        | 用作碰撞边界的元素。默认情况下是视口，但您可以提供其他元素以包含在此检查中。                |
| `collisionPadding`       | `0`    | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 距离边界边缘发生碰撞检测的像素距离。接受数字（所有侧面相同）或部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `disableOutsidePointerEvents` | `false`  | `boolean`                                       | 当为 `true` 时，`DismissableLayer` 外部的悬停/焦点/点击交互将被禁用。用户需要两次点击外部元素才能与其交互：一次关闭 `DismissableLayer`，再次触发元素。 |
| `disableUpdateOnLayoutShift` | `false`  | `boolean`                                       | 是否在布局发生变化时禁用内容的更新位置。                                                    |
| `forceMount`             | `false`  | `boolean`                                       | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `hideWhenDetached`       | `false`  | `boolean`                                       | 当触发器完全被遮挡时是否隐藏内容。                                                          |
| `positionStrategy`       | `'absolute'` | `'fixed' \| 'absolute'`                         | 要使用的 CSS `position` 属性类型。                                                           |
| `prioritizePosition`     | `false`  | `boolean`                                       | 强制内容定位在视口内。可能会与参考元素重叠，这可能不希望发生。                                |
| `reference`              |        | `ReferenceElement`                              | 将作为参考来定位浮动元素的自定义元素或虚拟元素。如果提供，它将替换默认的锚点元素。            |
| `side`                   |        | `'top' \| 'right' \| 'bottom' \| 'left'`        | 打开时，内容相对于触发器的首选侧边渲染。当发生碰撞且 `avoidCollisions` 启用时，将反转。     |
| `sideOffset`             | `0`    | `number`                                        | 距触发器的像素距离。                                                                        |
| `sticky`                 | `'partial'` | `'partial' \| 'always'`                         | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将始终使内容保持在边界内。 |
| `updatePositionStrategy` | `'optimized'` | `'always' \| 'optimized'`                       | 在每个动画帧上更新浮动元素位置的策略。                                                      |

**触发事件 (Emit)**

| Payload                                     | 描述                                                                |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `[event: Event]`                            | 关闭时自动聚焦时调用的事件处理程序。可以阻止。                        |
| `[event: KeyboardEvent]`                    | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]`                | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: Event]`                            | 打开时自动聚焦时调用的事件处理程序。可以阻止。                        |
| `[event: PointerDownOutsideEvent]`          | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"open" \| "closed"`             |
| `[data-side]`     | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]`    | `"start" \| "end" \| "center"`   |

**CSS 变量**

| 变量                                       | 描述                                     |
| ------------------------------------------ | ---------------------------------------- |
| `--reka-popover-content-transform-origin`    | 根据内容和箭头位置/偏移量计算的 `transform-origin` |
| `--reka-popover-content-available-width`   | 触发器和边界边缘之间剩余的宽度         |
| `--reka-popover-content-available-height`  | 触发器和边界边缘之间剩余的高度         |
| `--reka-popover-trigger-width`             | 触发器的宽度                             |
| `--reka-popover-trigger-height`            | 触发器的高度                             |

### Arrow

一个可选的箭头元素，与 Popover 一起渲染。这可以用于帮助视觉上将锚点与 `PopoverContent` 链接起来。必须在 `PopoverContent` 内部渲染。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'svg'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `height`  | `5`    | `number`             | 箭头的像素高度。                                                                                  |
| `rounded` | `false`  | `boolean`            | 当为 `true` 时，渲染圆角版本的箭头。不适用于 `as/asChild`。                                         |
| `width`   | `10`   | `number`             | 箭头的像素宽度。                                                                                  |

### Close

关闭打开的 Popover 的按钮。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

## 示例

### 约束内容大小

您可能希望约束内容的宽度以使其与触发器宽度匹配。您可能还希望约束其高度以不超过视口。
我们暴露了几个 CSS 自定义属性，例如 `--reka-popover-trigger-width` 和 `--reka-popover-content-available-height` 来支持此功能。使用它们来约束内容尺寸。

```html
<script setup>
  import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        class="PopoverContent"
        :side-offset="5"
      >
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.PopoverContent {
  width: var(--reka-popover-trigger-width);
  max-height: var(--reka-popover-content-available-height);
}
```

### 起点感知动画

我们暴露了一个 CSS 自定义属性 `--reka-popover-content-transform-origin`。使用它来根据 `side`、`sideOffset`、`align`、`alignOffset` 和任何碰撞从其计算出的原点动画内容。

```html
<script setup>
  import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.PopoverContent {
  transform-origin: var(--reka-popover-content-transform-origin);
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

### 碰撞感知动画

我们暴露了 `data-side` 和 `data-align` 属性。它们的值将在运行时更改以反映碰撞。使用它们来创建碰撞和方向感知的动画。

```html
<script setup>
  import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>…</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">
        …
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.PopoverContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.PopoverContent[data-side="top"] {
  animation-name: slideUp;
}

.PopoverContent[data-side="bottom"] {
  animation-name: slideDown;
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
```

### 带自定义锚点

如果您不想使用触发器作为锚点，可以将内容锚定到另一个元素。

```html
<script setup>
  import { PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
</script>

<template>
  <PopoverRoot>
    <PopoverAnchor as-child>
      <div class="Row">
        Row as anchor <PopoverTrigger>Trigger</PopoverTrigger>
      </div>
    </PopoverAnchor>
    <PopoverPortal>
      <PopoverContent>…</PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

```css
/* styles.css */
.Row {
  background-color: gainsboro;
  padding: 20px;
}
```

## 可访问性

遵循 [Dialog WAI-ARIA 设计模式](Dialog WAI-ARIA design pattern)。

### 键盘交互

| 按键        | 描述                                     |
| ----------- | ---------------------------------------- |
| `Space`     | 打开/关闭 Popover。                      |
| `Enter`     | 打开/关闭 Popover。                      |
| `Tab`       | 将焦点移动到下一个可聚焦元素。           |
| `Shift + Tab` | 将焦点移动到上一个可聚焦元素。           |
| `Esc`       | 关闭 Popover 并将焦点移动到 `PopoverTrigger`。 |

## 自定义 API

通过将原始部分抽象到您自己的组件中来创建您自己的 API。

### 抽象箭头并设置默认配置

此示例抽象了 `PopoverArrow` 部分并设置了默认的 `sideOffset` 配置。

**用法**

```html
<script setup lang="ts">
  import { Popover, PopoverContent, PopoverTrigger } from './your-popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>Popover trigger</PopoverTrigger>
    <PopoverContent>Popover content</PopoverContent>
  </Popover>
</template>
```

**实现**

```typescript
// your-popover.ts
export { default as PopoverContent } from 'PopoverContent.vue'
export { PopoverRoot as Popover, PopoverTrigger } from 'reka-ui'
```

```html
<script setup lang="ts">
  import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
  import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

  const props = defineProps<PopoverContentProps>()
  const emits = defineEmits<PopoverContentEmits>()
  const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
```

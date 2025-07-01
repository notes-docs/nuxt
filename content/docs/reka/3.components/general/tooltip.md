---
title: Tooltip
description: 当元素获得键盘焦点或鼠标悬停在其上时，弹出窗口显示与元素相关的信息。
---

::component-example
---
name: 'reka-tooltip-example'
collapse: true
---
::

## 功能特点

* 提供者可全局控制显示延迟。
* 在触发器聚焦或悬停时打开。
* 在触发器激活或按 Escape 键时关闭。
* 支持自定义时间。

## 结构

导入所有部分并将其组合在一起。

```html
<script setup lang="ts">
  import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger />
      <TooltipPortal>
        <TooltipContent>
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
```

## API 参考

### Provider

包裹您的应用程序以向您的工具提示提供全局功能。

| 属性                   | 默认值 | 类型     | 描述                                                                                              |
| ---------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
| `delayDuration`        | `700`  | `number` | 指针进入触发器到工具提示打开的持续时间。                                                        |
| `disableClosingTrigger` | `false`  | `boolean` | 当为 `true` 时，点击触发器不会关闭内容。                                                        |
| `disabled`             | `false`  | `boolean` | 当为 `true` 时，禁用工具提示。                                                                  |
| `disableHoverableContent` | `false`  | `boolean` | 当为 `true` 时，尝试悬停内容将导致工具提示在指针离开触发器时关闭。                                |
| `ignoreNonKeyboardFocus` | `false`  | `boolean` | 通过匹配 `:focus-visible` 选择器，阻止工具提示在焦点不是来自键盘时打开。这在您希望避免在切换浏览器选项卡或关闭对话框时打开工具提示时很有用。 |
| `skipDelayDuration`    | `300`  | `number` | 用户在不再次延迟的情况下进入另一个触发器的时间。                                                  |

### Root

包含工具提示的所有部分。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性                   | 默认值  | 类型                 | 描述                                                                                              |
| ---------------------- | ------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `defaultOpen`          | `false` | `boolean`            | 工具提示首次渲染时的打开状态。当您不需要控制其打开状态时使用。                                    |
| `delayDuration`        | `700`   | `number`             | 覆盖传递给 `Provider` 的持续时间，以自定义特定工具提示的打开延迟。                                |
| `disableClosingTrigger` | `false`   | `boolean`            | 当为 `true` 时，点击触发器不会关闭内容。                                                        |
| `disabled`             | `false`   | `boolean`            | 当为 `true` 时，禁用工具提示。                                                                  |
| `disableHoverableContent` | `false`   | `boolean`            | 阻止 `Tooltip.Content` 在悬停时保持打开状态。禁用此功能会影响可访问性。从 `Tooltip.Provider` 继承。 |
| `ignoreNonKeyboardFocus` | `false`   | `boolean`            | 通过匹配 `:focus-visible` 选择器，阻止工具提示在焦点不是来自键盘时打开。这在您希望避免在切换浏览器选项卡或关闭对话框时打开工具提示时很有用。 |
| `open`                 | `false` | `boolean`            | 工具提示的受控打开状态。                                                                        |

**触发事件 (Emit)**

| Payload            | 描述                       |
| ------------------ | -------------------------- |
| `[value: boolean]` | 工具提示打开状态更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload | 描述               |
| ------- | ------------------ |
| `open`  | `boolean` 当前打开状态 |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"closed" \| "delayed-open" \| "instant-open"` |

### Trigger

切换工具提示的按钮。默认情况下，`TooltipContent` 将自身定位在触发器旁边。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `reference` |          | `ReferenceElement`   | 用于定位的参考（或锚点）元素。如果未提供，将使用当前组件作为锚点。                                |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"closed" \| "delayed-open" \| "instant-open"` |

### Portal

使用时，将内容部分传送到 `body` 中。

| 属性         | 默认值 | 类型                 | 描述                                                                                              |
| ------------ | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `defer`      | `false`  | `boolean`            | 延迟解决 Teleport 目标，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。                        |
| `disabled`   | `false`  | `boolean`            | 禁用 teleport 并在行内渲染组件。                                                                |
| `forceMount` | `false`  | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `to`         |        | `string \| HTMLElement` | Vue 原生 teleport 组件 prop `:to`。                                                             |

### Content

当工具提示打开时弹出的组件。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性                  | 默认值   | 类型                                                                  | 描述                                                                                              |
| --------------------- | -------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `align`               | `'center'` | `'start' \| 'center' \| 'end'`                                        | 相对于触发器的首选对齐方式。当发生碰撞时可能会改变。                                                |
| `alignOffset`         | `0`      | `number`                                                              | 距离 `start` 或 `end` 对齐选项的像素偏移量。                                                      |
| `ariaLabel`           |          | `string`                                                              | 默认情况下，屏幕阅读器将宣布组件内部的内容。如果这不够描述性，或者您有无法宣布的内容，请使用 `aria-label` 作为更具描述性的标签。 |
| `arrowPadding`        | `0`      | `number`                                                              | 箭头与内容边缘之间的填充。如果您的内容有圆角，这将防止它溢出角。                                    |
| `as`                  | `'div'`  | `AsTag \| Component`                                                  | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`             | `false`    | `boolean`                                                             | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `avoidCollisions`     | `true`   | `boolean`                                                             | 当为 `true` 时，覆盖侧边和对齐首选项以防止与边界边缘碰撞。                                        |
| `collisionBoundary`   | `null`   | `Element \| (Element \| null)[] \| null`                              | 用作碰撞边界的元素。默认情况下是视口，但您可以提供要包含在此检查中的其他元素。                 |
| `collisionPadding`    | `0`      | `number \| Partial<Record<'top' \| 'right' \| 'bottom' \| 'left', number>>` | 从边界边缘到碰撞检测发生处的像素距离。接受一个数字（所有边相同）或部分填充对象，例如：`{ top: 20, left: 20 }`。 |
| `forceMount`          | `false`    | `boolean`                                                             | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |
| `hideWhenDetached`    | `false`  | `boolean`                                                             | 当触发器完全被遮挡时是否隐藏内容。                                                              |
| `positionStrategy`    | `'absolute'` | `'fixed' \| 'absolute'`                                               | 要使用的 CSS 定位属性的类型。                                                                     |
| `side`                | `'top'`  | `'top' \| 'right' \| 'bottom' \| 'left'`                              | 打开时相对于触发器的首选渲染侧。当发生碰撞且 `avoidCollisions` 启用时，将反转。           |
| `sideOffset`          | `0`      | `number`                                                              | 距触发器的像素距离。                                                                              |
| `sticky`              | `'partial'` | `'partial' \| 'always'`                                               | 对齐轴上的粘性行为。`partial` 将使内容保持在边界内，只要触发器至少部分在边界内，而 `always` 将使内容始终保持在边界内。 |
| `updatePositionStrategy` | `'optimized'` | `'always' \| 'optimized'`                                             | 在每个动画帧上更新浮动元素位置的策略。                                                          |

**触发事件 (Emit)**

| Payload                                     | 描述                                                                |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `[event: KeyboardEvent]`                    | 打开后焦点移动到破坏性操作时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |
| `[event: Event]`                            | 当指针事件发生在组件边界之外时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |

**数据属性**

| 属性              | 值                               |
| ----------------- | -------------------------------- |
| `[data-state]`    | `"closed" \| "delayed-open" \| "instant-open"` |
| `[data-side]`     | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]`    | `"start" \| "end" \| "center"`   |

**CSS 变量**

| 变量                                   | 描述                                                                  |
| -------------------------------------- | --------------------------------------------------------------------- |
| `--reka-tooltip-content-transform-origin` | 根据内容和箭头位置/偏移量计算的 `transform-origin`                    |
| `--reka-tooltip-content-available-width` | 触发器和边界边缘之间剩余的宽度                                        |
| `--reka-tooltip-content-available-height` | 触发器和边界边缘之间剩余的高度                                        |
| `--reka-tooltip-trigger-width`         | 触发器的宽度                                                          |
| `--reka-tooltip-trigger-height`        | 触发器的高度                                                          |

### Arrow

一个可选的箭头元素，与工具提示一起渲染。这有助于在视觉上将触发器与 `TooltipContent` 链接起来。必须在 `TooltipContent` 内部渲染。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'svg'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `height`  | `5`    | `number`             | 箭头的像素高度。                                                                                  |
| `width`   | `10`   | `number`             | 箭头的像素宽度。                                                                                  |

## 示例

### 全局配置

使用 `Provider` 全局控制 `delayDuration` 和 `skipDelayDuration`。

```html
<script setup>
  import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipProvider
    :delay-duration="800"
    :skip-delay-duration="500"
  >
    <TooltipRoot>
      <TooltipTrigger>…</TooltipTrigger>
      <TooltipContent>…</TooltipContent>
    </TooltipRoot>
    <TooltipRoot>
      <TooltipTrigger>…</TooltipTrigger>
      <TooltipContent>…</TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
```

### 立即显示

使用 `delayDuration` prop 控制工具提示打开所需的时间。

```html
<script setup>
  import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipRoot :delay-duration="0">
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipContent>…</TooltipContent>
  </TooltipRoot>
</template>
```

### 从禁用按钮显示工具提示

由于禁用按钮不会触发事件，您需要：

* 将 `Trigger` 渲染为 `span`。
* 确保 `button` 没有 `pointerEvents`。

<!-- end list -->

```html
<script setup>
  import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger as-child>
      <span tabindex="0">
        <button
          disabled
          style="{ pointerEvents: 'none' }"
        >…</button>
      </span>
    </TooltipTrigger>
    <TooltipContent>…</TooltipContent>
  </TooltipRoot>
</template>
```

### 限制内容大小

您可能希望限制内容的宽度，使其与触发器宽度匹配。您可能还希望限制其高度，使其不超过视口。
我们公开了几个 CSS 自定义属性，例如 `--reka-tooltip-trigger-width` 和 `--reka-tooltip-content-available-height` 来支持这一点。使用它们来限制内容尺寸。

```html
<script setup>
  import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        class="TooltipContent"
        :side-offset="5"
      >
        …
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
```

```css
/* styles.css */
.TooltipContent {
  width: var(--reka-tooltip-trigger-width);
  max-height: var(--reka-tooltip-content-available-height);
}
```

### 原点感知动画

我们公开了一个 CSS 自定义属性 `--reka-tooltip-content-transform-origin`。使用它根据 `side`、`sideOffset`、`align`、`alignOffset` 和任何碰撞来从其计算的原点动画内容。

```html
<script setup>
  import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipContent class="TooltipContent">
      …
    </TooltipContent>
  </TooltipRoot>
</template>
```

```css
/* styles.css */
.TooltipContent {
  transform-origin: var(--reka-tooltip-content-transform-origin);
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

我们暴露 `data-side` 和 `data-align` 属性。它们的值将在运行时更改以反映碰撞。使用它们来创建碰撞和方向感知的动画。

```html
<script setup>
  import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipContent class="TooltipContent">
      …
    </TooltipContent>
  </TooltipRoot>
</template>
```

```css
/* styles.css */
.TooltipContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.TooltipContent[data-side="top"] {
  animation-name: slideUp;
}
.TooltipContent[data-side="bottom"] {
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

## 可访问性

### 键盘交互

| 按键     | 描述               |
| -------- | ------------------ |
| `Tab`    | 立即打开/关闭工具提示。 |
| `Space`  | 如果打开，立即关闭工具提示。 |
| `Enter`  | 如果打开，立即关闭工具提示。 |
| `Escape` | 如果打开，立即关闭工具提示。 |

## 自定义 API

通过将原始部分抽象到您自己的组件中来创建您自己的 API。

### 抽象部分并引入内容 prop

此示例抽象了所有 `Tooltip` 部分并引入了一个新的 `content` prop。

**用法**

```html
<script setup lang="ts">
  import { Tooltip } from './your-tooltip'
</script>

<template>
  <Tooltip content="Tooltip content">
    <button>Tooltip trigger</button>
  </Tooltip>
</template>
```

**实现**

使用 `asChild` prop 将触发器部分转换为可插槽区域。它将用传递给它的子元素替换触发器。

```vue
<script setup lang="ts">
  import type { TooltipRootEmits, TooltipRootProps } from 'reka-ui'
  import { TooltipArrow, TooltipContent, TooltipRoot, TooltipTrigger, useForwardPropsEmits } from 'reka-ui'

  const props = defineProps<TooltipRootProps & { content?: string }>()
  const emits = defineEmits<TooltipRootEmits>()
  const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipRoot v-bind="forward">
    <TooltipTrigger as-child>
      <slot />
    </TooltipTrigger>
    <TooltipContent
      side="top"
      align="center"
    >
      {{ content }}
      <TooltipArrow
        :width="11"
        :height="5"
      />
    </TooltipContent>
  </TooltipRoot>
</template>
```

---
title: Slider
description: 用户从给定范围内选择值的输入。
---

::component-example
---
name: 'reka-slider-example'
collapse: true
---
::

## 特性 (Features)

* 可控或非控。
* 支持多个滑块。
* 支持滑块之间的最小值。
* 支持触摸或点击轨道更新值。
* 支持从右到左 (RTL) 方向。
* 完整的键盘导航。

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
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
</script>

<template>
  <SliderRoot>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含滑块的所有部分。当在 `form` 中使用时，它会为每个滑块渲染一个 `input` 以确保事件正确传播。

| 属性               | 默认值   | 类型                          | 描述                                                                |
| :----------------- | :------- | :---------------------------- | :------------------------------------------------------------------ |
| `as`               | `'span'` | `AsTag \| Component`          | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`          |          | `boolean`                     | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `defaultValue`     | `[0]`    | `number[]`                    | 滑块初始渲染时的值。当您不需要控制滑块状态时使用。                  |
| `dir`              |          | `'ltr' \| 'rtl'`              | 组合框的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`         | `false`  | `boolean`                     | 当 `true` 时，阻止用户与滑块交互。                                  |
| `inverted`         | `false`  | `boolean`                     | 滑块是否视觉反转。                                                  |
| `max`              | `100`    | `number`                      | 范围的最大值。                                                      |
| `min`              | `0`      | `number`                      | 范围的最小值。                                                      |
| `minStepsBetweenThumbs` | `0`      | `number`                      | 多个滑块之间允许的最小步长。                                        |
| `modelValue`       |          | `number[] \| null`            | 滑块的受控值。可以通过 `v-model` 绑定。                             |
| `name`             |          | `string`                      | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。           |
| `orientation`      | `'horizontal'` | `'vertical' \| 'horizontal'`  | 滑块的方向。                                                        |
| `required`         |          | `boolean`                     | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                |
| `step`             | `1`      | `number`                      | 步进间隔。                                                          |
| `thumbAlignment`   | `'contain'` | `'contain' \| 'overflow'`     | 滑块的对齐方式。`contain`: 滑块将包含在轨道边界内。`overflow`: 滑块不受轨道限制。不会添加额外偏移。 |

**EmitPayload**

| 事件             | Payload          | 描述                               |
| :--------------- | :--------------- | :--------------------------------- |
| `update:modelValue` | `[payload: number[]]` | 滑块值更改时调用的事件处理程序。   |
| `valueCommit`    | `[payload: number[]]` | 交互结束时值更改时调用的事件处理程序。当您只需要捕获最终值（例如更新后端服务）时很有用。 |

**Slots (默认)**

| Payload     | 描述         |
| :---------- | :----------- |
| `modelValue` | 当前滑块值   |

**数据属性 (Data Attributes)**

| 数据属性         | 值                        |
| :--------------- | :------------------------ |
| `[data-disabled]` | 禁用时存在                |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### 轨道 (Track)

包含 `SliderRange` 的轨道。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                        |
| :--------------- | :------------------------ |
| `[data-disabled]` | 禁用时存在                |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### 范围 (Range)

范围部分。必须位于 `SliderTrack` 内部。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                        |
| :--------------- | :------------------------ |
| `[data-disabled]` | 禁用时存在                |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### 滑块 (Thumb)

一个可拖动的滑块。您可以渲染多个滑块。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |          | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                        |
| :--------------- | :------------------------ |
| `[data-disabled]` | 禁用时存在                |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

## 示例 (Examples)

### 垂直方向 (Vertical orientation)

使用 `orientation` 属性创建垂直滑块。

```vue
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
</script>

<template>
  <SliderRoot
    class="SliderRoot"
    :default-value="[50]"
    orientation="vertical"
  >
    <SliderTrack class="SliderTrack">
      <SliderRange class="SliderRange" />
    </SliderTrack>
    <SliderThumb class="SliderThumb" />
  </SliderRoot>
</template>
```

```css
/* styles.css */
.SliderRoot {
  position: relative;
  display: flex;
  align-items: center;
}
.SliderRoot[data-orientation="vertical"] {
  flex-direction: column;
  width: 20px;
  height: 100px;
}
.SliderTrack {
  position: relative;
  flex-grow: 1;
  background-color: grey;
}
.SliderTrack[data-orientation="vertical"] {
  width: 3px;
}
.SliderRange {
  position: absolute;
  background-color: black;
}
.SliderRange[data-orientation="vertical"] {
  width: 100%;
}
.SliderThumb {
  display: block;
  width: 20px;
  height: 20px;
  background-color: black;
}
```

### 创建范围 (Create a range)

添加多个滑块和值以创建范围滑块。

```vue
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
</script>

<template>
  <SliderRoot :default-value="[25, 75]">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
  </SliderRoot>
</template>
```

### 定义步长 (Define step size)

使用 `step` 属性增加步进间隔。

```vue
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
</script>

<template>
  <SliderRoot
    :default-value="[50]"
    :step="10"
  >
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
</template>
```

### 防止滑块重叠 (Prevent thumb overlap)

使用 `minStepsBetweenThumbs` 避免滑块具有相同的值。

```vue
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
</script>

<template>
  <SliderRoot
    :default-value="[25, 75]"
    :step="10"
    :min-steps-between-thumbs="1"
  >
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
  </SliderRoot>
</template>
```

## 可访问性 (Accessibility)

遵循 [滑块 WAI-ARIA 设计模式](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)。

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                       |
| :---------- | :------------------------- |
| `ArrowRight` | 按 `step` 量增加值。       |
| `ArrowLeft` | 按 `step` 量减少值。       |
| `ArrowUp`   | 按 `step` 量增加值。       |
| `ArrowDown` | 按 `step` 量减少值。       |
| `PageUp`    | 以更大的 `step` 增加值。   |
| `PageDown`  | 以更大的 `step` 减少值。   |
| `Shift + ArrowUp` | 以更大的 `step` 增加值。 |
| `Shift + ArrowDown` | 以更大的 `step` 减少值。 |
| `Home`      | 将值设置为最小值。         |
| `End`       | 将值设置为最大值。         |

### 反转滑块 (Inverted sliders)

当滑块被 `inverted` 时，一些控件也会反转，具体取决于 `orientation`。

* 当滑块为**水平**（默认）时，`ArrowRight`、`ArrowLeft`、`Home` 和 `End` 会反转。
* 当滑块为**垂直**时，`ArrowUp`、`ArrowDown`、`PageUp`、`PageDown`、`Shift + ArrowUp` 和 `Shift + ArrowDown` 会反转。

## 自定义 API (Custom APIs)

通过将原始部分抽象到您自己的组件中来创建您自己的 API。

### 抽象所有部分 (Abstract all parts)

此示例抽象了所有 `Slider` 部分，因此它可以作为自闭合元素使用。

**用法 (Usage)**

```vue
<script setup lang="ts">
import { Slider } from './your-slider'
</script>

<template>
  <Slider :default-value="[25]" />
</template>
```

**实现 (Implementation)**

```typescript
// your-slider.ts
export { default as Slider } from './Slider.vue'
```

```vue
<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui'
import { SliderRoot, SliderRange, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<SliderRootProps>()
const emits = defineEmits<SliderRootEmits>()
const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <SliderRoot v-slot="{ modelValue }" v-bind="forward">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb
      v-for="(_, i) in modelValue"
      :key="i"
    />
  </SliderRoot>
</template>
```

## 注意事项 (Caveats)

### 不触发鼠标事件 (Mouse events are not fired)

由于我们实现过程中遇到的[限制](https://www.google.com/search?q=https://github.com/radix-vue/radix-vue/issues/52%23issuecomment-1460395356)，以下示例不会按预期工作，并且 `@mousedown` 和 `@mouseup` 事件处理程序不会被触发：

```vue
<SliderRoot
  @mousedown="() => { console.log('onMouseDown')  }"
  @mouseup="() => { console.log('onMouseUp')  }"
>
  …
</SliderRoot>
```

我们建议改用**指针事件**（例如 `@pointerdown`、`@pointerup`）。无论上述限制如何，这些事件更适合跨平台/设备处理，因为它们针对所有指针输入类型（鼠标、触摸、笔等）都会触发。

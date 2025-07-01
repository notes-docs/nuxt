---
title: Combobox
description: 从具有完整键盘支持的建议值列表中进行选择。
---

::component-example
---
name: 'reka-combobox-example'
collapse: true
---
::

## 特性

* 可作为**受控**或**非受控**组件使用。
* 提供 2 种**定位模式**。
* 支持**项目**、**标签**、**项目组**。
* **焦点**完全受管理。
* 完整的**键盘导航**。
* 支持**自定义占位符**。
* 支持**从右到左**方向。

## 安装

在命令行中安装该组件：

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

导入所有部件并将其组合起来。

```vue
<script setup lang="ts">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxCancel,
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
} from 'reka-ui'
</script>

<template>
  <ComboboxRoot>
    <ComboboxAnchor>
      <ComboboxInput />
      <ComboboxTrigger />
      <ComboboxCancel />
    </ComboboxAnchor>
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxViewport>
          <ComboboxItem>
            <ComboboxItemIndicator />
          </ComboboxItem>
          <ComboboxGroup>
            <ComboboxLabel />
            <ComboboxItem>
              <ComboboxItemIndicator />
            </ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
        </ComboboxViewport>
        <ComboboxArrow />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

## API 参考

### Root

包含 Combobox 的所有部分。

| Prop | 默认值 | 类型 | 描述 |
| :---------------------- | :------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `by` | | `string \| ((a: AcceptableValue, b: AcceptableValue) => boolean)` | 用于按特定字段比较对象，或传递您自己的比较函数以完全控制对象的比较方式。 |
| `defaultOpen` | | `boolean` | 组合框初始渲染时的打开状态。当您不需要控制其打开状态时使用。 |
| `defaultValue` | | `AcceptableValue \| AcceptableValue[]` | 列表框初始渲染时的值。当您不需要控制列表框的状态时使用。 |
| `dir` | | `'ltr' \| 'rtl'` | 适用时列表框的阅读方向。如果省略，则全局继承自 `ConfigProvider` 或假定 LTR（从左到右）阅读模式。 |
| `disabled` | | `boolean` | 当为 `true` 时，阻止用户与列表框交互。 |
| `highlightOnHover` | | `boolean` | 当为 `true` 时，鼠标悬停在项目上将触发高亮。 |
| `ignoreFilter` | | `boolean` | 当为 `true` 时，禁用默认过滤器。 |
| `modelValue` | | `AcceptableValue \| AcceptableValue[]` | 列表框的受控值。可通过 `v-model` 绑定。 |
| `multiple` | | `boolean` | 是否可以选择多个选项。 |
| `name` | | `string` | 字段的名称。作为名称/值对的一部分与所属表单一起提交。 |
| `open` | | `boolean` | 组合框的受控打开状态。可通过 `v-model:open` 绑定。 |
| `required` | | `boolean` | 当为 `true` 时，表示用户必须设置值，然后才能提交所属表单。 |
| `resetSearchTermOnBlur` | `true` | `boolean` | 当组合框输入框失去焦点时是否重置搜索词。 |
| `resetSearchTermOnSelect` | `true` | `boolean` | 当组合框值被选中时是否重置搜索词。 |

**EmitPayload**

| 事件 | Payload | 描述 |
| :------------------ | :---------------------------------------------------- | :-------------------------------- |
| `highlight` | `[payload: { ref: HTMLElement; value: AcceptableValue; }]` | 高亮元素更改时调用的事件处理程序。 |
| `update:modelValue` | `[value: AcceptableValue]` | 值更改时调用的事件处理程序。 |
| `update:open` | `[value: boolean]` | 组合框打开状态更改时调用的事件处理程序。 |

**Slots (默认)**

| Payload | 描述 |
| :---------- | :------------- |
| `open` | `boolean` | 当前打开状态 |
| `modelValue` | `AcceptableValue \| AcceptableValue[]` | 当前活动值 |

### Anchor

如果您将 `ComboboxContent` 的 `position` 设置为 `popper`，则用作锚点。

| Prop | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `reference` | | `ReferenceElement` | 用于定位的参考（或锚点）元素。如果未提供，将使用当前组件作为锚点。 |

### Input

用于搜索组合框项目的输入组件。

| Prop | 默认值 | 类型 | 描述 |
| :-------------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'input'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `autoFocus` | | `boolean` | 挂载时聚焦元素。 |
| `disabled` | | `boolean` | 当为 `true` 时，阻止用户与项目交互。 |
| `displayValue` | | `((val: any) => string)` | 选中项目输入的显示值。不适用于 `multiple`。 |
| `modelValue` | | `string` | 过滤器的受控值。可通过 `v-model` 绑定。 |

**EmitPayload**

| 事件 | Payload | 描述 |
| :--------------- | :---------- | :--------------- |
| `update:modelValue` | `[string]` | 值更改时调用的事件处理程序。 |

### Trigger

切换组合框内容的按钮。

| Prop | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `disabled` | | `boolean` | 当为 `true` 时，阻止用户与项目交互。 |

**数据属性**

| 数据属性 | 值 |
| :----------------- | :----------------- |
| `[data-state]` | `"open" \| "closed"` |
| `[data-disabled]` | 禁用时存在。 |

### Cancel

清除搜索词的按钮。

| Prop | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |

### Empty

当没有项目匹配查询时显示。

| Prop | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |

### Portal

使用时，将内容部分传送到 `body`。

您需要将 `ComboboxContent` 的 `position` 设置为 `"popper"`，以确保位置像 `Popover` 或 `DropdownMenu` 一样自动计算。

| Prop | 默认值 | 类型 | 描述 |
| :----------- | :------- | :--------------- | :----------------------------------------------------------------------------- |
| `defer` | | `boolean` | 推迟解析 Teleport 目标，直到应用程序的其他部分挂载（需要 Vue 3.5.0+）。 |
| `disabled` | `false` | `boolean` | 禁用传送并内联渲染组件。 |
| `forceMount` | | `boolean` | 当需要更多控制时用于强制挂载。在与 Vue 动画库一起控制动画时很有用。 |
| `to` | | `string \| HTMLElement` | Vue 原生 teleport 组件的 `to` 属性。 |

### 内容（Content）

当组合框打开时弹出的组件。

::tip
`Content` 组件基于 `Presence` 构建，支持各种动画技术，同时保留对 Presence 组件发出的事件的访问。
::

#### Props


#### 事件 (Emits)

| 事件名称 | Payload | 描述 |
| :--------------- | :---------------------------------------------------- | :------------------------------------------- |
| `escapeKeyDown` | `[event: KeyboardEvent]` | 当按下 Esc 键时触发。可以调用 `event.preventDefault()` 阻止默认行为。 |
| `focusOutside` | `[event: FocusOutsideEvent]` | 当焦点移到 `DismissableLayer` 外部时触发。可以调用 `event.preventDefault()` 阻止默认行为。 |
| `interactOutside` | `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当在 `DismissableLayer` 外部发生交互时触发。具体来说，当在外部发生 `pointerdown` 事件或焦点移到外部时。可以调用 `event.preventDefault()` 阻止默认行为。 |
| `pointerDownOutside` | `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件在 `DismissableLayer` 外部发生时触发。可以调用 `event.preventDefault()` 阻止默认行为。 |

#### 数据属性 (Data Attributes)

| 数据属性 | 值 |
| :----------------- | :----------------------------- |
| `[data-state]` | `"open" \| "closed"` |
| `[data-side]` | `"left" \| "right" \| "bottom" \| "top"` |
| `[data-align]` | `"start" \| "end" \| "center"` |

#### CSS 变量 (CSS Variables)

| CSS 变量 | 描述 |
| :-------------------------------------- | :----------------------------------------------------------- |
| `--reka-combobox-content-transform-origin` | 从内容和箭头位置/偏移量计算的 `transform-origin`。仅当 `position="popper"` 时存在。 |
| `--reka-combobox-content-available-width` | 触发器和边界边缘之间的剩余宽度。仅当 `position="popper"` 时存在。 |
| `--reka-combobox-content-available-height` | 触发器和边界边缘之间的剩余高度。仅当 `position="popper"` 时存在。 |
| `--reka-combobox-trigger-width` | 触发器的宽度。仅当 `position="popper"` 时存在。 |
| `--reka-combobox-trigger-height` | 触发器的高度。仅当 `position="popper"` 时存在。 |

### 视口 (Viewport)

包含所有项目可滚动的视口。

| 属性 | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `nonce` | | `string` | 将为样式标签添加 `nonce` 属性，可由内容安全策略使用。如果省略，则全局继承自 `ConfigProvider`。 |

### 项目 (Item)

包含组合框项目的组件。

| 属性 | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `disabled` | | `boolean` | 当为 `true` 时，阻止用户与该项目交互。 |
| `textValue` | | `string` | 项目内容的字符串表示。如果子元素不是纯文本，则 `textValue` 属性也必须设置为纯文本表示，该文本将用于组合框中的自动完成。 |
| `value` | | `AcceptableValue` | 作为数据提交时随 `name` 提交的值。 |

**EmitPayload**

| 事件 | Payload | 描述 |
| :------ | :------------------------------ | :------------------------------------- |
| `select` | `[event: SelectEvent<AcceptableValue>]` | 选择项目时调用的事件处理程序。可以通过调用 `event.preventDefault()` 阻止默认行为。 |

**数据属性 (Data Attributes)**

| 数据属性 | 值 |
| :----------------- | :----------------------------- |
| `[data-state]` | `"checked" \| "unchecked"` |
| `[data-highlighted]` | 高亮时存在。 |
| `[data-disabled]` | 禁用时存在。 |

### 项目指示器 (ItemIndicator)

当项目被选中时渲染。您可以直接样式化此元素，也可以将其用作包装器以放置图标，或两者兼而有之。

| 属性 | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |

### 组 (Group)

用于对多个项目进行分组。与 `ComboboxLabel` 结合使用可确保通过自动标签实现良好的可访问性。

| 属性 | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |

### 标签 (Label)

用于渲染组的标签。它不能通过箭头键聚焦。

| 属性 | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `for` | | `string` | |

### 分隔符 (Separator)

用于在组合框中视觉上分隔项目。

| 属性 | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |

### 箭头 (Arrow)

一个可选的箭头元素，与内容一起渲染。这有助于视觉上将触发器与 `ComboboxContent` 连接起来。必须在 `ComboboxContent` 内部渲染。仅当 `position` 设置为 `popper` 时可用。

| 属性 | 默认值 | 类型 | 描述 |
| :---------- | :------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `as` | `'svg'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。 |
| `asChild` | | `boolean` | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。更多详情请参阅我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)。 |
| `height` | `5` | `number` | 箭头的像素高度。 |
| `rounded` | | `boolean` | 当为 `true` 时，渲染圆角版本的箭头。不适用于 `as`/`asChild`。 |
| `width` | `10` | `number` | 箭头的像素宽度。 |

### 虚拟化器 (Virtualizer)

用于实现列表虚拟化的虚拟容器。

> **警告**
>
> 组合框项目**必须**在传递给虚拟化器之前手动过滤。请参阅下面的示例。
>
> 有关虚拟化的更多通用信息，请参阅[虚拟化指南](https://www.google.com/search?q=https://reka-ui.dev/guides/virtualization)。

| 属性 | 默认值 | 类型 | 描述 |
| :-------------- | :------- | :------------------------------------ | :----------------------------- |
| `estimateSize` | | `number` | 每个项目的估计大小（像素）。 |
| `options` | | `AcceptableValue[]` | 项目列表。 |
| `overscan` | | `number` | 可见区域之外渲染的项目数量。 |
| `textContent` | | `((option: AcceptableValue) => string)` | 每个项目的文本内容，用于实现预输入功能。 |

**Slots (默认)**

| Payload | 描述 |
| :---------- | :---------- |
| `option` | `null \| string \| number \| bigint \| Record<string, any>` | |
| `virtualizer` | `Virtualizer<HTMLElement, Element>` | |
| `virtualItem` | `VirtualItem` | |

## 示例

### 将对象绑定为值

与只允许您提供字符串作为值的原生 HTML 表单控件不同，`reka-ui` 支持绑定复杂对象。
确保设置 `displayValue` 属性以在项目选择时设置输入值。

```vue
<script setup lang="ts">
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'reka-ui'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const selectedPeople = ref(people[0])
</script>

<template>
  <ComboboxRoot v-model="selectedPeople">
    <ComboboxInput :display-value="(v) => v.name" />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          v-for="person in people"
          :key="person.id"
          :value="person"
          :disabled="person.unavailable"
        >
          {{ person.name }}
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### 选择多个值

`Combobox` 组件允许您选择多个值。您可以通过提供一个值数组而不是单个值来启用此功能。

```vue
<script setup lang="ts">
import { ComboboxRoot } from 'reka-ui'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const selectedPeople = ref([people[0], people[1]])
</script>

<template>
  <ComboboxRoot
    v-model="selectedPeople"
    multiple
  >
    …
  </ComboboxRoot>
</template>
```

### 自定义过滤

在内部，`ComboboxRoot` 将根据渲染的文本过滤项目。
但是，您也可以提供自己的自定义过滤逻辑，同时设置 `ignoreFilter="true"`。

```vue
<script setup lang="ts">
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot, useFilter } from 'reka-ui'
import { ref, computed } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const selectedPeople = ref(people[0])
const searchTerm = ref('')
const { startsWith } = useFilter({ sensitivity: 'base' })

const filteredPeople = computed(() => people.filter(p => startsWith(p.name, searchTerm.value)))
</script>

<template>
  <ComboboxRoot
    v-model="selectedPeople"
    :ignore-filter="true"
  >
    <ComboboxInput v-model="searchTerm" />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          v-for="person in filteredPeople"
          :key="person.id"
          :value="person"
        >
          {{ person.name }}
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### 自定义标签

默认情况下，`Combobox` 会使用输入内容作为屏幕阅读器的标签。如果您想更精细地控制辅助技术宣布的内容，请使用 `Label` 组件。

```vue
<script setup lang="ts">
import { ComboboxInput, ComboboxRoot, Label } from 'reka-ui'
import { ref } from 'vue'

const selectedPeople = ref(null) // Or your initial value
</script>

<template>
  <ComboboxRoot v-model="selectedPeople">
    <Label for="person">人物：</Label>
    <ComboboxInput
      id="person"
      placeholder="选择一个人"
    />
    …
  </ComboboxRoot>
</template>
```

### 带有禁用项目的组合框

您可以通过 `data-disabled` 属性为禁用项添加特殊样式。

```vue
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
} from 'reka-ui'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          class="ComboboxItem"
          disabled
        >
          …
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>

<style>
/* styles.css */
.ComboboxItem[data-disabled] {
  color: gainsboro;
}
</style>
```

### 带有分隔符的组合框

使用 `Separator` 部件在项目之间添加分隔符。

```vue
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator
} from 'reka-ui'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxSeparator />
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### 带有分组项目的组合框

使用 `Group` 和 `Label` 部件将项目分组到一个部分中。

```vue
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot
} from 'reka-ui'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxGroup>
          <ComboboxLabel>标签</ComboboxLabel>
          <ComboboxItem>…</ComboboxItem>
          <ComboboxItem>…</ComboboxItem>
          <ComboboxItem>…</ComboboxItem>
        </ComboboxGroup>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### 带有复杂项目的组合框

您可以在项目中使用自定义内容。

```vue
<script setup lang="ts">
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot
} from 'reka-ui'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem>
          <img src="…">
          Adolfo Hess
          <ComboboxItemIndicator />
        </ComboboxItem>
        …
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### 阻止选择行为

默认情况下，选择 `ComboboxItem` 将关闭内容，并使用提供的值更新 `modelValue`。您可以通过阻止默认的 `@select.prevent` 来阻止此行为。

```vue
<script setup lang="ts">
import { ComboboxContent, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxPortal, ComboboxRoot } from 'reka-ui'
import { ref } from 'vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem @select.prevent>
          项目 A
        </ComboboxItem>
        …
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### 带有工作过滤的虚拟化组合框

组合框项目**必须**在传递给虚拟化器之前手动过滤。
有关虚拟化的更多通用信息，请参阅[虚拟化指南](https://www.google.com/search?q=https://reka-ui.dev/guides/virtualization)。

```vue
<script setup lang="ts">
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot, ComboboxViewport, ComboboxVirtualizer, useFilter } from 'reka-ui'
import { computed, ref } from 'vue'

const people = Array.from({ length: 100000 }).map((_, id) => ({ id, name: `Person #${id}` }))

const selectedPeople = ref(people[0])
const searchTerm = ref('')
const { contains } = useFilter({ sensitivity: 'base' })

const filteredPeople = computed(() => people.filter(p => contains(p.name, searchTerm.value)))
</script>

<template>
  <ComboboxRoot v-model="selectedPeople">
    <ComboboxInput v-model="searchTerm" />
    <ComboboxPortal>
      <ComboboxContent class="max-h-[40vh] overflow-hidden">
        <ComboboxViewport>
          <ComboboxVirtualizer
            v-slot="{ option }"
            :options="filteredPeople"
            :text-content="(x) => x.name"
            :estimate-size="24"
          >
            <ComboboxItem :value="option">
              {{ option.name }}
            </ComboboxItem>
          </ComboboxVirtualizer>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

-----

## 可访问性

遵循 [组合框 WAI-ARIA 设计模式](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)。
有关更多信息，请参阅 W3C [组合框自动完成列表](https://www.google.com/search?q=https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-list) 示例。

### 键盘交互

| 按键 | 描述 |
| :-------- | :----------- |
| `Enter` | 当焦点在 `ComboboxItem` 上时，选择焦点项目。 |
| `ArrowDown` | 当焦点在 `ComboboxInput` 上时，打开组合框内容。当焦点在项目上时，将焦点移到下一个项目。 |
| `ArrowUp` | 当焦点在 `ComboboxInput` 上时，打开组合框内容。当焦点在项目上时，将焦点移到上一个项目。 |
| `Esc` | 关闭组合框并恢复 `ComboboxInput` 字段中选定的项目。 |

## 自定义 API

通过将原始部件抽象为自己的组件来创建您自己的 API。

### 命令菜单

组合框可以用于构建您自己的命令菜单。

#### 用法

```vue
<script setup lang="ts">
import { Command, CommandItem } from './your-command'
</script>

<template>
  <Command>
    <CommandItem value="1">
      项目 1
    </CommandItem>
    <CommandItem value="2">
      项目 2
    </CommandItem>
    <CommandItem value="3">
      项目 3
    </CommandItem>
  </Command>
</template>
```

#### 实现

```typescript
// your-command.ts
export { default as Command } from 'Command.vue'
export { default as CommandItem } from 'CommandItem.vue'
```

```vue
<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from 'reka-ui'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-icons/vue'
import { ComboboxContent, ComboboxInput, ComboboxPortal, ComboboxRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxRoot
    v-bind="forward"
    :open="true"
    model-value=""
  >
    <ComboboxInput placeholder="输入命令或搜索…" />
    <ComboboxPortal>
      <ComboboxContent
        @escape-key-down.prevent
        @focus-outside.prevent
        @interact-outside.prevent
        @pointer-down-outside.prevent
      >
        <ComboboxViewport>
          <slot />
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

```vue
<script setup lang="ts">
import type { ComboboxItemProps } from 'reka-ui'
import { CheckIcon } from '@radix-icons/vue'
import { ComboboxItem } from 'reka-ui'

const props = defineProps<ComboboxItemProps>()
</script>

<template>
  <ComboboxItem
    v-bind="props"
    @select.prevent
  >
    <slot />
  </ComboboxItem>
</template>
```

---
title: Listbox
description: 允许用户在选中和未选中之间切换的控件。
---

::component-example
---
name: 'reka-listbox-example'
collapse: true
---
::

## 特性 (Features)

* 可控或非控
* 支持项目、标签、项目组
* 焦点完全受管理
* 完整的键盘导航
* 支持从右到左 (RTL) 方向
* 不同的选择行为

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
import { ListboxContent, ListboxFilter, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxItemIndicator, ListboxRoot, ListboxVirtualizer } from 'reka-ui'
</script>

<template>
  <ListboxRoot>
    <ListboxFilter />
    <ListboxContent>
      <ListboxItem>
        <ListboxItemIndicator />
      </ListboxItem>
      <ListboxGroup>
        <ListboxGroupLabel />
        <ListboxItem>
          <ListboxItemIndicator />
        </ListboxItem>
      </ListboxGroup>
      <ListboxVirtualizer>
        <ListboxItem>
          <ListboxItemIndicator />
        </ListboxItem>
      </ListboxVirtualizer>
    </ListboxContent>
  </ListboxRoot>
</template>
```

## API 参考 (API Reference)

### 根 (Root)

包含列表框的所有部件。当在 `form` 中使用时，也会渲染一个 `input` 以确保事件正确传播。

| 属性             | 默认值      | 类型                                                | 描述                                                                                                       |
| :--------------- | :---------- | :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `as`             | `'div'`     | `AsTag \| Component`                                | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                                                        |
| `asChild`        |             | `boolean`                                           | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `by`             |             | `string \| ((a: AcceptableValue, b: AcceptableValue) => boolean)` | 使用此属性按特定字段比较对象，或者传入您自己的比较函数以完全控制对象的比较方式。                           |
| `defaultValue`   |             | `AcceptableValue \| AcceptableValue[]`              | 列表框初始渲染时的值。当您不需要控制列表框的状态时使用。                                                 |
| `dir`            |             | `'ltr' \| 'rtl'`                                    | 列表框的阅读方向（如果适用）。如果省略，则全局继承自 `ConfigProvider` 或假定为 LTR（从左到右）阅读模式。 |
| `disabled`       |             | `boolean`                                           | 当 `true` 时，阻止用户与列表框交互。                                                                       |
| `highlightOnHover` |             | `boolean`                                           | 当 `true` 时，鼠标悬停在项目上会触发高亮显示。                                                             |
| `modelValue`     |             | `AcceptableValue \| AcceptableValue[]`              | 列表框的受控值。可以通过 `v-model` 绑定。                                                                  |
| `multiple`       |             | `boolean`                                           | 是否可以选择多个选项。                                                                                     |
| `name`           |             | `string`                                            | 字段的名称。作为名称/值对的一部分随其所属的表单一起提交。                                                  |
| `orientation`    | `'vertical'` | `'vertical' \| 'horizontal'`                        | 列表框的方向。主要用于相应地进行箭头导航（左右 vs. 上下）。                                                |
| `required`       |             | `boolean`                                           | 当 `true` 时，表示用户必须在提交所属表单之前设置值。                                                       |
| `selectionBehavior` | `'toggle'` | `'toggle' \| 'replace'`                             | 集合中多选的行为方式。                                                                                     |

**EmitPayload**

| 事件             | Payload                                     | 描述                             |
| :--------------- | :------------------------------------------ | :------------------------------- |
| `entryFocus`     | `[event: CustomEvent<any>]`                | 容器获得焦点时调用的事件处理程序。可以阻止。 |
| `highlight`      | `[payload: { ref: HTMLElement; value: AcceptableValue; }]` | 高亮元素更改时触发的事件处理程序。       |
| `leave`          | `[event: Event]`                            | 鼠标离开容器时调用的事件处理程序。       |
| `update:modelValue` | `[value: AcceptableValue]`                  | 值更改时调用的事件处理程序。             |

**Slots (默认)**

| Payload            | 描述               |
| :----------------- | :----------------- |
| `modelValue`       | 当前激活的值       |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-disabled]` | 禁用时存在 |

### 过滤器 (Filter)

用于执行过滤的输入元素。

| 属性        | 默认值    | 类型                 | 描述                                                                |
| :---------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| `as`        | `'input'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild`   |           | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `autoFocus` |           | `boolean`            | 挂载时聚焦元素。                                                    |
| `disabled`  |           | `boolean`            | 当 `true` 时，阻止用户与项目交互。                                  |
| `modelValue` |           | `string`             | 过滤器的受控值。可以通过 `v-model` 绑定。                           |

**EmitPayload**

| 事件             | Payload   | 描述             |
| :--------------- | :-------- | :--------------- |
| `update:modelValue` | `[string]` | 值更改时调用的事件处理程序 |

**Slots (默认)**

| Payload        | 描述         |
| :------------- | :----------- |
| `modelValue`   | 当前输入值   |

**数据属性 (Data Attributes)**

| 数据属性         | 值         |
| :--------------- | :--------- |
| `[data-disabled]` | 禁用时存在 |

### 内容 (Content)

包含所有列表框组和项目。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 项目 (Item)

项目组件。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `disabled` |        | `boolean`            | 当 `true` 时，阻止用户与该项目交互。                                |
| `value`   |        | `AcceptableValue`    | 作为数据提交时随 `name` 提交的值。                                  |

**EmitPayload**

| 事件     | Payload                          | 描述                               |
| :------- | :------------------------------- | :--------------------------------- |
| `select` | `[event: SelectEvent<AcceptableValue>]` | 选择项目时调用的事件处理程序。可以通过调用 `event.preventDefault()` 阻止默认行为。 |

**数据属性 (Data Attributes)**

| 数据属性         | 值                       |
| :--------------- | :----------------------- |
| `[data-state]`   | `"checked" \| "unchecked"` |
| `[data-highlighted]` | 高亮时存在               |
| `[data-disabled]` | 禁用时存在               |

### 项目指示器 (ItemIndicator)

当项目被选中时渲染。您可以直接样式化此元素，也可以将其用作包装器以放置图标，或两者兼而有之。

| 属性      | 默认值   | 类型                 | 描述                                                                |
| :-------- | :------- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'span'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 组 (Group)

用于对多个项目进行分组。与 `ListboxGroupLabel` 结合使用可确保通过自动标签实现良好的可访问性。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |

### 组标签 (GroupLabel)

用于渲染组的标签。它不会通过箭头键聚焦。

| 属性      | 默认值 | 类型                 | 描述                                                                |
| :-------- | :----- | :------------------- | :------------------------------------------------------------------ |
| `as`      | `'div'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可通过 `asChild` 覆盖。                 |
| `asChild` |        | `boolean`            | 将默认渲染的元素替换为作为子元素传递的元素，合并它们的 props 和行为。阅读我们的[组合指南](https://www.google.com/search?q=https://reka-ui.dev/guides/composition)了解更多详情。 |
| `for`     |        | `string`             |                                                                     |

### 虚拟化器 (Virtualizer)

用于实现列表虚拟化的虚拟容器。

| 属性         | 默认值 | 类型                                         | 描述                     |
| :----------- | :----- | :------------------------------------------- | :----------------------- |
| `estimateSize` |        | `number`                                     | 每个项目的估计大小（像素） |
| `options`    |        | `AcceptableValue[]`                          | 项目列表                 |
| `overscan`   |        | `number`                                     | 可见区域之外渲染的项目数量 |
| `textContent` |        | `((option: AcceptableValue) => string)`      | 每个项目的文本内容，用于实现预输入功能 |

**Slots (默认)**

| Payload     | 描述               |
| :---------- | :----------------- |
| `option`    | `null \| string \| number \| bigint \| Record<string, any>` |
| `virtualizer` | `Virtualizer<HTMLElement, Element>` |
| `virtualItem` | `VirtualItem`      |

## 示例 (Examples)

### 将对象绑定为值 (Binding objects as values)

与只允许您提供字符串作为值的原生 HTML 表单控件不同，`reka-ui` 也支持绑定复杂对象。

```vue
<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot } from 'reka-ui'
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
  <ListboxRoot v-model="selectedPeople">
    <ListboxContent>
      <ListboxItem
        v-for="person in people"
        :key="person.id"
        :value="person"
        :disabled="person.unavailable"
      >
        {{ person.name }}
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>
```

### 选择多个值 (Selecting multiple values)

`Listbox` 组件允许您选择多个值。您可以通过提供一个值数组而不是单个值来启用此功能。

```vue
<script setup lang="ts">
import { ListboxRoot } from 'reka-ui'
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
  <ListboxRoot
    v-model="selectedPeople"
    multiple
  >
    ...
  </ListboxRoot>
</template>
```

### 自定义过滤 (Custom filtering)

```vue
<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot, useFilter } from 'reka-ui'
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
  <ListboxRoot v-model="selectedPeople">
    <ListboxFilter v-model="searchTerm" />
    <ListboxContent>
      <ListboxItem
        v-for="person in filteredPeople"
        :key="person.id"
        :value="person"
      >
        {{ person.name }}
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
</template>
```

### 虚拟列表 (Virtual List)

渲染大量项目会使应用程序变慢，因此使用**虚拟化**将显著提高性能。
有关虚拟化的更多通用信息，请参阅[虚拟化指南](https://www.google.com/search?q=https://reka-ui.dev/guides/virtualization)。

```vue
<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxItem, ListboxRoot, ListboxVirtualizer } from 'reka-ui'
import { ref } from 'vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
  // 还有更多
]
</script>

<template>
  <ListboxRoot>
    <ListboxContent>
      <ListboxVirtualizer
        v-slot="{ option }"
        :options="people"
        :text-content="(opt) => opt.name"
      >
        <ListboxItem :value="option">
          {{ option.name }}
        </ListboxItem>
      </ListboxVirtualizer>
    </ListboxContent>
  </ListboxRoot>
</template>
```

## 可访问性 (Accessibility)

遵循 [列表框 WAI-ARIA 设计模式](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)。

### 键盘交互 (Keyboard Interactions)

| 按键        | 描述                                 |
| :---------- | :----------------------------------- |
| `Enter`     | 当焦点在高亮 `ListboxItem` 上时，选择该项目。 |
| `ArrowDown` | 当焦点在 `ListboxItem` 上时，将焦点移到下一个项目。 |
| `ArrowUp`   | 当焦点在 `ListboxItem` 上时，将焦点移到上一个项目。 |
| `Home`      | 将焦点和高亮移到第一个项目。         |
| `End`       | 将焦点和高亮移到最后一个项目。       |
| `Ctrl/Cmd + A` | 选择所有项目。                     |

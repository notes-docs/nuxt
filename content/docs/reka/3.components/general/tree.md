---
title: Tree
description: 树形视图小部件显示项目的层次列表，可以展开或折叠以显示或隐藏其子项目，例如在文件系统导航器中。
---

::component-example
---
name: 'reka-tree-example'
collapse: true
---
::

## 功能特点

* 可控或不可控。
* 焦点完全管理。
* 完整的键盘导航。
* 支持从右到左的方向。
* 支持多选。
* 不同的选择行为。

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
  import { TreeItem, TreeRoot, TreeVirtualizer } from 'reka-ui'
</script>

<template>
  <TreeRoot>
    <TreeItem />
    <TreeVirtualizer>
      <TreeItem />
    </TreeVirtualizer>
  </TreeRoot>
</template>
```

## API 参考

### Root

包含树的所有部分。

| 属性            | 默认值          | 类型                                                                  | 描述                                                                                              |
| --------------- | --------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`            | `'ul'`          | `AsTag \| Component`                                                  | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`       | `false`         | `boolean`                                                             | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `bubbleSelect`  | `false`         | `boolean`                                                             | 当为 `true` 时，选择子节点将更新父节点状态。                                                        |
| `defaultExpanded` | `[]`            | `string[]`                                                            | 树首次渲染时展开的值。当您不需要控制展开树的状态时使用。                                         |
| `defaultValue`  | `undefined`     | `Record<string, any> \| Record<string, any>[]`                      | 树首次渲染时的值。当您不需要控制树的状态时使用。                                                 |
| `dir`           | `undefined`     | `'ltr' \| 'rtl'`                                                      | 列表框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `disabled`      | `false`         | `boolean`                                                             | 当为 `true` 时，阻止用户与树交互。                                                                |
| `expanded`      | `[]`            | `string[]`                                                            | 展开项的受控值。可以与 `v-model` 绑定。                                                           |
| `getChildren`   | `val.children`  | `((val: Record<string, any>) => Record<string, any>[])`              | 此函数将传递每个项目的索引，并应返回该项目的子项列表。                                         |
| `getKey`\* |                 | `((val: Record<string, any>): string)`                              | 此函数将传递每个项目的索引，并应返回该项目的唯一键。                                             |
| `items`         | `[]`            | `Record<string, any>[]`                                             | 项目列表。                                                                                        |
| `modelValue`    | `undefined`     | `Record<string, any> \| Record<string, any>[]`                      | 树的受控值。可以与 `v-model` 绑定。                                                               |
| `multiple`      | `false`         | `boolean`                                                             | 是否可以选择多个选项。                                                                            |
| `propagateSelect` | `false`         | `boolean`                                                             | 当为 `true` 时，选择父节点将选择后代。                                                             |
| `selectionBehavior` | `'toggle'`      | `'toggle' \| 'replace'`                                               | 集合中多选应如何表现。                                                                            |

**触发事件 (Emit)**

| Payload                                           | 描述                          |
| ------------------------------------------------- | ----------------------------- |
| `[val: string[]]`                                 | `update:expanded`             |
| `[val: Record<string, any> \| Record<string, any>[]]` | 切换值更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload                               | 描述               |
| ------------------------------------- | ------------------ |
| `flattenItems`                        | `FlattenedItem<Record<string, any>>[]` |
| `modelValue`                          | `Record<string, any> \| Record<string, any>[]` |
| `expanded`                            | `string[]`         |

### Item

项目组件。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'li'`   | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `level`\* |        | `number`             | 深度级别。                                                                                        |
| `value`\* |        | `Record<string, any>`| 赋予此项目的值。                                                                                  |

**触发事件 (Emit)**

| Payload                           | 描述                                     |
| --------------------------------- | ---------------------------------------- |
| `[event: SelectEvent<Record<string, any>>]` | 选择项目时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |
| `[event: ToggleEvent<Record<string, any>>]` | 选择项目时调用的事件处理程序。可以通过调用 `event.preventDefault` 来阻止。 |

**插槽 (默认)**

| Payload         | 描述                               |
| --------------- | ---------------------------------- |
| `isExpanded`    | `boolean`                          |
| `isSelected`    | `boolean`                          |
| `isIndeterminate` | `boolean \| undefined`             |
| `handleToggle`  | `(): void`                         |
| `handleSelect`  | `(): void`                         |

**数据属性**

| 属性            | 值                   |
| --------------- | -------------------- |
| `[data-indent]` | `Number`             |
| `[data-expanded]` | 展开时存在             |
| `[data-selected]` | 选中时存在             |

### Virtualizer

用于实现列表虚拟化的虚拟容器。

| 属性          | 默认值   | 类型                                | 描述                                     |
| ------------- | -------- | ----------------------------------- | ---------------------------------------- |
| `estimateSize` | `0`      | `number`                            | 每个项目的估计大小（像素）。           |
| `overscan`    | `0`      | `number`                            | 在可见区域之外渲染的项目数量。         |
| `textContent` |          | `((item: Record<string, any>) => string)` | 每个项目的文本内容，用于实现类型前瞻功能。 |

**插槽 (默认)**

| Payload       | 描述                                   |
| ------------- | -------------------------------------- |
| `item`        | `FlattenedItem<Record<string, any>>` |
| `virtualizer` | `Virtualizer<Element \| Window, Element>` |
| `virtualItem` | `VirtualItem`                          |

## 示例

### 选择多个项目

`Tree` 组件允许您选择多个项目。您可以通过提供一个值数组而不是单个值并设置 `multiple="true"` 来启用此功能。

```html
<script setup lang="ts">
  import { TreeRoot } from 'reka-ui'
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
  <TreeRoot
    v-model="selectedPeople"
    multiple
  >
    ...
  </TreeRoot>
</template>
```

### 虚拟列表

渲染长列表项可能会减慢应用程序速度，因此使用虚拟化将显著提高性能。
有关虚拟化的更多一般信息，请参阅[虚拟化指南](virtualization guide)。

```html
<script setup lang="ts">
  import { TreeItem, TreeRoot, TreeVirtualizer } from 'reka-ui'
  import { ref } from 'vue'
</script>

<template>
  <TreeRoot :items>
    <TreeVirtualizer
      v-slot="{ item }"
      :text-content="(opt) => opt.name"
    >
      <TreeItem v-bind="item.bind">
        {{ person.name }}
      </TreeItem>
    </TreeVirtualizer>
  </TreeRoot>
</template>
```

### 带复选框

一些 `Tree` 组件可能希望显示 `toggled/indeterminate` 复选框。我们可以通过使用一些 props 和 `preventDefault` 事件来更改 `Tree` 组件的行为。
我们将 `propagateSelect` 设置为 `true`，因为我们希望父复选框选择/取消选择其后代。然后，我们添加一个触发 `select` 事件的复选框。

```html
<script setup lang="ts">
  import { TreeItem, TreeRoot } from 'reka-ui'
  import { ref } from 'vue'
</script>

<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    :items
    multiple
    propagate-select
  >
    <TreeItem
      v-for="item in flattenItems"
      :key="item._id"
      v-bind="item.bind"
      v-slot="{ handleSelect, isSelected, isIndeterminate }"
      @select="(event) => {
        if (event.detail.originalEvent.type === 'click')
          event.preventDefault()
      }"
      @toggle="(event) => {
        if (event.detail.originalEvent.type === 'keydown')
          event.preventDefault()
      }"
    >
      <Icon
        v-if="item.hasChildren"
        icon="radix-icons:chevron-down"
      />
      <button
        tabindex="-1"
        @click.stop
        @change="handleSelect"
      >
        <Icon
          v-if="isSelected"
          icon="radix-icons:check"
        />
        <Icon
          v-else-if="isIndeterminate"
          icon="radix-icons:dash"
        />
        <Icon
          v-else
          icon="radix-icons:box"
        />
      </button>
      <div class="pl-2">
        {{ item.value.title }}
      </div>
    </TreeItem>
  </TreeRoot>
</template>
```

### 嵌套树节点

默认示例显示扁平的树项和节点，这使得[虚拟化](https://www.google.com/search?q=Virtualization)和拖放等自定义功能更容易实现。但是，您也可以将其构建为具有嵌套 DOM 节点。

在 `Tree.vue` 中：

```html
<script setup lang="ts">
  import { TreeItem } from 'reka-ui'

  interface TreeNode {
    title: string
    icon: string
    children?: TreeNode[]
  }

  withDefaults(defineProps<{
    treeItems: TreeNode[]
    level?: number
  }>(), { level: 0 })
</script>

<template>
  <li
    v-for="tree in treeItems"
    :key="tree.title"
  >
    <TreeItem
      v-slot="{ isExpanded }"
      as-child
      :level="level"
      :value="tree"
    >
      <button>…</button>
      <ul v-if="isExpanded && tree.children">
        <Tree
          :tree-items="tree.children"
          :level="level + 1"
        />
      </ul>
    </TreeItem>
  </li>
</template>
```

在 `CustomTree.vue` 中：

```html
<template>
  <TreeRoot
    :items="items"
    :get-key="(item) => item.title"
  >
    <Tree :tree-items="items" />
  </TreeRoot>
</template>
```

### 自定义子节点 schema

默认情况下，`<TreeRoot />` 要求您通过为每个节点传递 `children` 列表来提供节点子节点列表。您可以通过提供 `getChildren` prop 来覆盖此设置。

**信息**
如果节点没有任何子节点，`getChildren` 应该返回 `undefined` 而不是空数组。

```html
<script setup lang="ts">
  import { TreeRoot } from 'reka-ui'
  import { ref } from 'vue'

  interface FileNode {
    title: string
    icon: string
  }

  interface DirectoryNode {
    title: string
    icon: string
    directories?: DirectoryNode[]
    files?: FileNode[]
  }
</script>

<template>
  <TreeRoot
    :items="items"
    :get-key="(item) => item.title"
    :get-children="(item) => (!item.files) ? item.directories : (!item.directories) ? item.files : [...item.directories, ...item.files]"
  >
    ...
  </TreeRoot>
</template>
```

### 可拖拽/可排序树

对于更复杂的拖拽 `Tree` 组件，在此示例中，我们将使用 [pragmatic-drag-and-drop](https://www.google.com/search?q=pragmatic-drag-and-drop) 作为处理 dnd 的核心包。

[Stackblitz 演示](Stackblitz Demo)

## 可访问性

遵循 [Tree WAI-ARIA 设计模式](Tree WAI-ARIA design pattern)。

### 键盘交互

| 按键       | 描述                                                                                |
| ---------- | ----------------------------------------------------------------------------------- |
| `Enter`    | 当焦点位于 `TreeItem` 上时，选择聚焦的项目。                                        |
| `ArrowDown` | 当焦点位于 `TreeItem` 上时，将焦点移动到下一个项目。                                |
| `ArrowUp`  | 当焦点位于 `TreeItem` 上时，将焦点移动到上一个项目。                                |
| `ArrowRight` | 当焦点位于关闭的 `TreeItem`（节点）上时，打开节点但不移动焦点。当焦点位于打开的节点上时，将焦点移动到第一个子节点。当焦点位于末端节点上时，不执行任何操作。 |
| `ArrowLeft` | 当焦点位于打开的 `TreeItem`（节点）上时，关闭节点。当焦点位于子节点上且该子节点是末端节点或关闭节点时，将焦点移动到其父节点。当焦点位于根节点上且该根节点是末端节点或关闭节点时，不执行任何操作。 |
| `Home`     | `PageUp` 将焦点移动到第一个 `TreeItem`。                                             |
| `End`      | `PageDown` 将焦点移动到最后一个 `TreeItem`。                                         |

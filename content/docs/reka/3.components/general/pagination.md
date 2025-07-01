---
title: Pagination
description: 以分页格式显示数据并提供页面之间的导航。
---

::component-example
---
name: 'reka-pagination-example'
collapse: true
---
::

## 功能

* 启用快速访问第一页或最后一页。
* 启用始终显示边缘，或不显示。

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
  import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'reka-ui'
</script>

<template>
  <PaginationRoot>
    <PaginationList v-slot="{ items }">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
        />
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>
```

## API 参考

### Root

包含所有分页部分。

| 属性         | 默认值 | 类型                 | 描述                                                                                              |
| ------------ | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'nav'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `defaultPage` | `1`    | `number`             | 首次渲染时应激活的页面值。当您不需要控制值状态时使用。                                        |
| `disabled`   | `false`  | `boolean`            | 当为 `true` 时，阻止用户与项目交互。                                                             |
| `itemsPerPage`\* |        | `number`             | 每页的项目数。                                                                                    |
| `page`       |        | `number`             | 当前页的受控值。可以绑定为 `v-model:page`。                                                     |
| `showEdges`  | `false`  | `boolean`            | 当为 `true` 时，始终显示第一页、最后一页和省略号。                                               |
| `siblingCount` | `2`    | `number`             | 当前页周围应显示的兄弟数量。                                                                      |
| `total`      | `0`    | `number`             | 列表中项目的总数。                                                                                |

**触发事件 (Emit)**

| Payload          | 描述                       |
| ---------------- | -------------------------- |
| `[value: number]` | 页面值更改时调用的事件处理程序。 |

**插槽 (默认)**

| Payload    | 描述         |
| ---------- | ------------ |
| `page`     | 当前页面状态 |
| `pageCount` | 页面数量     |

### List

用于显示页面列表。它还使分页可供辅助技术访问。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**插槽 (默认)**

| Payload | 描述               |
| ------- | ------------------ |
| `items` | `{ type: 'ellipsis'; } \| { type: 'page'; value: number; }` 页面项目 |

### Item

用于渲染更改当前页面的按钮。

**数据属性**

| 属性           | 值                |
| -------------- | ----------------- |
| `[data-selected]` | `"true" \| ""`    |
| `[data-type]`  | `"page"`          |

### Ellipsis

当列表很长，且仅设置了少量 `siblingCount` 并且 `showEdges` 设置为 `true` 时的占位符元素。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性         | 值            |
| ------------ | ------------- |
| `[data-type]` | `"ellipsis"` |

### First

将页面值设置为 1 的触发器。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Prev

将页面值设置为上一页的触发器。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Next

将页面值设置为下一页的触发器。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

### Last

将页面值设置为最后一页的触发器。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

## 示例

### 带省略号

您可以添加 `PaginationEllipsis` 作为更多前后项目的视觉提示。

```html
<script setup lang="ts">
  import { PaginationEllipsis, PaginationList, PaginationListItem, PaginationRoot } from 'reka-ui'
</script>

<template>
  <PaginationRoot>
    <PaginationList v-slot="{ items }">
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
        />
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
    </PaginationList>
  </PaginationRoot>
</template>
```

### 带首页/末页按钮

您可以添加 `PaginationFirst` 允许用户导航到首页，或 `PaginationLast` 导航到末页。

```html
<script setup lang="ts">
  import { PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationRoot } from 'reka-ui'
</script>

<template>
  <PaginationRoot>
    <PaginationList>
      <PaginationFirst />
      ...
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>
```

### 程序化控制页面

您可以通过传递响应式值来控制当前页面。

```html
<script setup lang="ts">
  import { PaginationRoot } from 'reka-ui'
  import { ref } from 'vue'
  import { Select } from './custom-select'

  const currentPage = ref(1)
</script>

<template>
  <Select v-model="currentPage" />
  <PaginationRoot v-model:page="currentPage">
    ...
  </PaginationRoot>
</template>
```

### 键盘交互

| 按键  | 描述                               |
| ----- | ---------------------------------- |
| `Tab` | 将焦点移动到下一个可聚焦元素。     |
| `Space` | 当焦点在任何触发器上时，触发选定页面或箭头导航。 |
| `Enter` | 当焦点在任何触发器上时，触发选定页面或箭头导航。 |


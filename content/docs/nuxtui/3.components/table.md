---
description: 一个响应式表格元素，用于以行和列显示数据。
category: data
links:
  - label: TanStack Table
    avatar:
      src: https://github.com/tanstack.png
    to: https://tanstack.com/table/latest
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Table.vue
---

## 用法

Table 组件构建于 [TanStack Table](https://tanstack.com/table/latest) 之上，并由 [useVueTable](https://tanstack.com/table/latest/docs/framework/vue/vue-table#usevuetable) 可组合项提供支持，以提供灵活且完全类型安全的 API。TanStack Table 的 **某些功能尚不受支持，我们将随着时间推移添加更多功能**。

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v3/docs/app/components/content/examples/table/TableExample.vue" aria-label="View source code"}
此示例演示了 `Table` 组件最常见的用例。请在 GitHub 上查看源代码。
::

### 数据 (Data)

使用 `data` prop 作为对象数组，列将根据对象的键生成。

::component-code
---
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

### 列 (Columns)

使用 `columns` prop 作为 [ColumnDef](https://tanstack.com/table/latest/docs/api/core/column-def) 对象数组，其中包含以下属性：

- `accessorKey`: [The key of the row object to use when extracting the value for the column.]{class="text-muted"}
- `header`: [The header to display for the column. If a string is passed, it can be used as a default for the column ID. If a function is passed, it will be passed a props object for the header and should return the rendered header value (the exact type depends on the adapter being used).]{class="text-muted"}
- `cell`: [The cell to display each row for the column. If a function is passed, it will be passed a props object for the cell and should return the rendered cell value (the exact type depends on the adapter being used).]{class="text-muted"}
- `meta`: [Extra properties for the column.]{class="text-muted"}
  - `class`:
    - `td`: [The classes to apply to the `td` element.]{class="text-muted"}
    - `th`: [The classes to apply to the `th` element.]{class="text-muted"}

为了渲染组件或其他 HTML 元素，你需要使用 Vue [h 函数](https://vuejs.org/api/render-function.html#h) 在 `header` 和 `cell` prop 内部。这与其他使用插槽的组件不同，但提供了更大的灵活性。

::tip{to="#with-slots" aria-label="Table columns with slots"}
你也可以使用插槽来自定义表格的标题和数据单元格。
::

::component-example
---
prettier: true
collapse: true
class: '!p-0'
name: 'table-columns-example'
highlights:
  - 53
  - 105
---
::

::note
使用 `h` 渲染组件时，你可以使用 `resolveComponent` 函数或从 `#components` 导入。
::

### 元数据 (Meta)

使用 `meta` prop 作为对象 (([TableMeta](https://tanstack.com/table/latest/docs/api/core/table#meta)) 来传递属性，例如：

- `class`:
  - `tr`: [The classes to apply to the `tr` element.]{class="text-muted"}

### 加载中 (Loading)

使用 `loading` prop 显示加载状态，`loading-color` prop 更改其颜色，`loading-animation` prop 更改其动画。

::component-code
---
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  loading: true
  loadingColor: primary
  loadingAnimation: carousel
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

### 吸附 (Sticky)

使用 `sticky` prop 使标题吸附。

::component-code
---
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  sticky: true
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4595'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4594'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1 max-h-[312px]'
---
::

## 示例

### 带行操作

你可以添加一个新列，该列在 `cell` 内部渲染一个 [DropdownMenu](/components/dropdown-menu) 组件以渲染行操作。

::component-example
---
prettier: true
collapse: true
name: 'table-row-actions-example'
highlights:
  - 110
  - 134
class: '!p-0'
---
::

### 带可展开行

你可以添加一个新列，该列在 `cell` 内部渲染一个 [Button](/components/button) 组件，以使用 TanStack Table [展开 API](https://tanstack.com/table/latest/docs/api/features/expanding) 切换行的可展开状态。

::caution
你需要定义 `#expanded` 插槽以渲染展开内容，该插槽将接收行作为参数。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-expandable-example'
highlights:
  - 55
  - 71
class: '!p-0'
---
::

::tip
你可以使用 `expanded` prop 控制行的可展开状态（可以通过 `v-model` 绑定）。
::

::note
你也可以将此操作添加到 `actions` 列中的 [`DropdownMenu`](/components/dropdown-menu) 组件。
::

### 带分组行

你可以根据给定的列值对行进行分组，并通过添加到单元格中的按钮显示/隐藏子行，使用 TanStack Table [分组 API](https://tanstack.com/table/latest/docs/api/features/grouping)。

#### 重要部分：

- 在 `UTable` 组件中添加 `grouping` prop，其中包含要分组的列 ID 数组。
- 在 `UTable` 中添加 `grouping-options` prop。它必须包含 `getGroupedRowModel`，你可以从 `@tanstack/vue-table` 导入它或自己实现。
- 通过 `row.toggleExpanded()` 方法在行的任何单元格上展开行。请记住，它也会切换 `#expanded` 插槽。
- 在列定义上使用 `aggregateFn` 定义如何聚合行。
- 列定义上的 `agregatedCell` 渲染器仅在没有 `cell` 渲染器时才有效。

::component-example
---
prettier: true
collapse: true
name: 'table-grouped-rows-example'
highlights:
  - 159
  - 169
class: '!p-0'
---
::

### 带行选择

你可以添加一个新列，该列在 header 和 cell 内部渲染一个 [Checkbox](/components/checkbox) 组件，以使用 TanStack Table [行选择 API](https://tanstack.com/table/latest/docs/api/features/row-selection) 选择行。

::component-example
---
prettier: true
collapse: true
name: 'table-row-selection-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
你可以使用 `row-selection` prop 控制行的选择状态（可以通过 `v-model` 绑定）。
::

### 带 @select 事件

你可以添加 `@select` 监听器，使行可点击。处理函数接收 `TableRow` 实例作为第一个参数，可选的 `Event` 作为第二个参数。

::note
你可以使用它导航到页面、打开模态框，甚至手动选择行。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-selection-event-example'
highlights:
  - 123
  - 130
class: '!p-0'
---
::

### 带列排序

你可以更新列 `header` 以在 `header` 内部渲染一个 [Button](/components/button) 组件，以使用 TanStack Table [排序 API](https://tanstack.com/table/latest/docs/api/features/sorting) 切换排序状态。

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-example'
highlights:
  - 90
  - 105
class: '!p-0'
---
::

::tip
你可以使用 `sorting` prop 控制列的排序状态（可以通过 `v-model` 绑定）。
::

你还可以创建一个可重用组件，使任何列标题可排序。

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-reusable-example'
highlights:
  - 110
  - 161
class: '!p-0'
---
::

::note
在此示例中，我们使用函数定义列标题，但你也可以创建一个实际的组件。
::

### 带列固定 (Pinning)

你可以更新列 `header` 以在 `header` 内部渲染一个 [Button](/components/button) 组件，以使用 TanStack Table [固定 API](https://tanstack.com/table/latest/docs/api/features/row-pinning) 切换固定状态。

::note
固定的列将吸附在表格的左侧或右侧。
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-pinning-example'
highlights:
  - 100
  - 113
class: '!p-0 overflow-clip'
---
::

::tip
你可以使用 `column-pinning` prop 控制列的固定状态（可以通过 `v-model` 绑定）。
::

### 带列可见性

你可以使用 [DropdownMenu](/components/dropdown-menu) 组件，通过 TanStack Table [列可见性 API](https://tanstack.com/table/latest/docs/api/features/column-visibility) 切换列的可见性。

::component-example
---
prettier: true
collapse: true
name: 'table-column-visibility-example'
highlights:
  - 135
  - 142
class: '!p-0'
---
::

::tip
你可以使用 `column-visibility` prop 控制列的可见性状态（可以通过 `v-model` 绑定）。
::

### 带列过滤器

你可以使用 [Input](/components/input) 组件，通过 TanStack Table [列过滤 API](https://tanstack.com/table/latest/docs/api/features/column-filtering) 按列过滤行。

::component-example
---
prettier: true
collapse: true
name: 'table-column-filters-example'
highlights:
  - 135
  - 142
class: '!p-0'
---
::

::tip
你可以使用 `column-filters` prop 控制列的过滤状态（可以通过 `v-model` 绑定）。
::

### 带全局过滤器

你可以使用 [Input](/components/input) 组件，通过 TanStack Table [全局过滤 API](https://tanstack.com/table/latest/docs/api/features/global-filtering) 过滤行。

::component-example
---
prettier: true
collapse: true
name: 'table-global-filter-example'
class: '!p-0'
---
::

::tip
你可以使用 `global-filter` prop 控制全局过滤状态（可以通过 `v-model` 绑定）。
::

### 带分页

你可以使用 [Pagination](/components/pagination) 组件，通过 [分页 API](https://tanstack.com/table/latest/docs/api/features/pagination) 控制分页状态。

如 [分页指南](https://tanstack.com/table/latest/docs/guide/pagination#pagination-guide) 中所述，有不同的分页方法。在此示例中，我们使用客户端分页，因此我们需要手动传递 `getPaginationRowModel()`{lang="ts-type"} 函数。

::component-example
---
prettier: true
collapse: true
name: 'table-pagination-example'
class: '!p-0'
---
::

::tip
你可以使用 `pagination` prop 控制分页状态（可以通过 `v-model` 绑定）。
::

### 带获取的数据

你可以从 API 获取数据并在 Table 中使用它们。

::component-example
---
prettier: true
collapse: true
name: 'table-fetch-example'
class: '!p-0'
---
::

### 带无限滚动

如果你使用服务器端分页，可以使用 [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) 可组合项在滚动时加载更多数据。

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-infinite-scroll-example'
class: '!p-0'
---
::

### 带拖放

使用 [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) 中的 [`useSortable`](https://vueuse.org/integrations/useSortable/) 可组合项，在 Table 上启用拖放功能。此集成封装了 [Sortable.js](https://sortablejs.github.io/Sortable/) 以提供无缝的拖放体验。

::note
由于表格引用不暴露 tbody 元素，请通过 `:ui` prop 为其添加唯一的类，以便使用 `useSortable` 定位它（例如 `:ui="{ tbody: 'my-table-tbody' }"`）。
::

::component-example
---
prettier: true
collapse: true
name: 'table-drag-and-drop-example'
class: '!p-0'
---
::

### 带插槽

你可以使用插槽自定义表格的标题和数据单元格。

使用 `#<column>-header` 插槽自定义列的标题。你将在插槽作用域中访问 `column`、`header` 和 `table` 属性。

使用 `#<column>-cell` 插槽自定义列的单元格。你将在插槽作用域中访问 `cell`、`column`、`getValue`、`renderValue`、`row` 和 `table` 属性。

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Expose

你可以使用 [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) 访问类型化的组件实例。

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

这将让你访问以下内容：

| Name | Type |
| ---- | ---- |
| `tableRef`{lang="ts-type"} | `Ref<HTMLTableElement \| null>`{lang="ts-type"} |
| `tableApi`{lang="ts-type"} | [`Ref<Table \| null>`{lang="ts-type"}](https://tanstack.com/table/latest/docs/api/core/table#table-api) |

## Theme

:component-theme

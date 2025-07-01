---
description: 一组可折叠面板的堆叠。
category: data
links:
  - label: Accordion
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Accordion.vue
---

## 用法

### accordion 

`accordion` prop 属性：

- `items` 属性: 这是定义手风琴内容的数组。数组中的每个对象代表一个可折叠项，你可以为每个项设置 `label` (标题)、`content` (内容)、`icon`、`trailingIcon`、`disabled` 等。
- `type` 属性:
  - 'single' (默认): 一次只能展开一个项。
  - 'multiple': 可以同时展开多个项。
- `default-value` 或 `v-model`: 控制手风琴项的默认展开状态或通过响应式数据进行双向绑定。
- `ui` 属性: 这是 Nuxt UI 组件的一个强大特性，允许你传递一个对象，其中包含 Tailwind CSS 类，用于深度定制手风琴的各个子元素（如 `root`、`item`、`header`、`trigger`、`content`、`body` 等）。这使得组件的样式高度可定制，无需修改其内部结构。
- 插槽 (Slots):
  - 默认插槽 (`#default`): 如果你需要完全自定义手风琴项的标题部分，可以使用这个作用域插槽。它会暴露 `item`, `index`, `open` 数据。
  - `leading` 插槽 (`#leading`): 自定义标题左侧的内容，通常用于图标。
  - `trailing` 插槽 (`#trailing`): 自定义标题右侧的内容，通常用于箭头或切换图标。
  - `content` 插槽 (`#content`): 自定义手风琴项的内容区域。
  - `body` 内容主体插槽 (`#body`): 类似 `content`，但通常用于包裹默认内容，并保留 `body` 样式。
  - 自定义具名插槽 (`#{{ item.slot }}`): 如果你在 `items` 数组的某个项中设置了 `slot: 'myCustomSlotName'`，你可以使用 `#myCustomSlotName` 或 `#myCustomSlotName-body` 来为该特定项提供完全自定义的内容。

### Items

使用 `items` prop 属性，它是一个对象数组，具有以下属性：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### 多选 (Multiple)

将 `type` 属性设置为 `multiple` 以允许同时激活多个项目。默认为 `single`。

::component-code
---
ignore:
  - type
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  type: 'multiple'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### 可折叠 (Collapsible)

当 `type` 为 `single` 时，您可以将 `collapsible` 属性设置为 `false` 以防止活动项目折叠。

::component-code
---
ignore:
  - collapsible
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  collapsible: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### 卸载 (Unmount)

使用 `unmount-on-hide` 属性可以防止手风琴折叠时内容被卸载。默认为 `true`。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  unmountOnHide: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 您无需做任何事，@nuxt/icon 会自动处理。
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 从您的 Tailwind CSS 主题中选择一个主色(primary)和一个中性色(neutral)。
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 您可以通过使用 `class` / `ui` 属性或在 app.config.ts 中自定义组件。
---
::

::note
您可以检查 DOM 以查看每个项目的渲染内容。
::

### 禁用 (Disabled)

使用 `disabled` 属性禁用整个手风琴。

您还可以通过在项目对象中使用 `disabled` 属性来禁用特定项目。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  disabled: true
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      disabled: true
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### 尾部图标 (Trailing Icon)

使用 `trailing-icon` 属性自定义每个项目的尾部 [Icon](/components/icon)。默认为 `i-lucide-chevron-down`。

::tip
您还可以通过在项目对象中使用 `trailingIcon` 属性为特定项目设置图标。
::

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 您无需做任何事，@nuxt/icon 会自动处理。
      trailingIcon: 'i-lucide-plus'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 从您的 Tailwind CSS 主题中选择一个主色(primary)和一个中性色(neutral)。
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 您可以通过使用 `class` / `ui` 属性或在 `app.config.ts` 中自定义组件。
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
您可以在 `app.config.ts` 中的 `ui.icons.chevronDown` 键下全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
您可以在 `vite.config.ts` 中的 `ui.icons.chevronDown` 键下全局自定义此图标。
:::
::

## 示例

### 控制活动项目

您可以通过使用 `default-value` 属性或使用 `v-model` 指令结合数据项的索引来控制活动项目。

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
您也可以传递所提供项目中的 `value`。
::

::caution
当 `type="multiple"` 时，请确保向 `default-value` 属性或 `v-model` 指令传递一个数组。
::

### 拖放 (Drag and Drop)

使用来自 [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) 的 [`useSortable`](https://vueuse.org/integrations/useSortable/) 可组合项，以在手风琴上启用拖放功能。此集成封装了 [Sortable.js](https://sortablejs.github.io/Sortable/)，以提供无缝的拖放体验。

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### 使用 body 插槽

使用 `#body` 插槽自定义每个项目的主体。

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
`#body` 插槽包含一些预定义样式，如果您想从头开始，请使用 [`#content` slot](#with-content-slot)。
::

### 使用 content 插槽

使用 `#content` 插槽自定义每个项目的内容。

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### 使用自定义插槽

使用 `slot` 属性自定义特定数据项使用的插槽。

您将可以访问以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-body`{lang="ts-type"}

::note
`#{{ item.slot }}-body`{lang="ts-type"} 比 `#{{ item.slot }}`{lang="ts-type"} 插槽多包含一些预定义样式。如果想从头开始，请使用 `#{{ item.slot }}`{lang="ts-type"}。
::

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

#### 内容渲染的优先级流程

以下是内容渲染的优先级顺序，从高到低：

1. 数据项特定的 `item.slot`（不带 `-body` 后缀）：如果 `item.slot` 已定义，并且父组件提供了与该确切名称匹配的具名插槽。
2. 通用 `content` 插槽：如果没有使用 `item.slot`（或没有为其提供匹配的插槽），但父组件提供了通用的 `content` 具名插槽。
3. 数据项特定的 `item.slot-body`（带 `-body` 后缀）：如果上述两者都不适用，但 `item.slot` 已定义，并且父组件提供了与 `item.slot + '-body'` 匹配的具名插槽。
4. 通用 `body` 插槽：如果上述三者都不适用，但父组件提供了通用的 `body` 插槽。
5. `item.content` 字符串：如果父组件绝对没有提供任何插槽，则显示 `item.content` 中的原始字符串。

::tip
包含 `content` 类型插槽比包含 `body` 插槽可定制性更多。
::

### 使用自定义 ui

::component-example
---
name: 'accordion-custom-ui-example'
collapse: true
props:
  class: 'w-full'
---
::

1. 可以通过 `props.class` 定义根组件的样式。
2. 可以通过 `props.ui` 覆盖组件的默认样式。
3. 可以通过 `item.class` 定义当前手风琴项目的根样式。
4. 可以通过 `item.ui` 覆盖当前手风琴项目默认样式。

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

::tip
当一个项目的展开状态改变时调用的事件处理程序。`update:modelValue` 事件是 UAccordion 组件向父组件 “报告” 其内部展开状态变化的方式，使得父组件可以响应并控制手风琴的行为。
::

::note
`UAccordion` 组件自身并不直接在其内部逻辑中显式地调用 `emits('update:modelValue', ...)`，而是依赖于其内部使用的 `reka-ui` 库的 `AccordionRoot` 组件来发出这个事件。`AccordionRoot` 是一个 Radix Vue 或类似无头 UI 库的组件，它会管理手风琴的展开/折叠状态，并在状态改变时发出 `update:modelValue` 事件。
::

#### update:modelValue 事件的使用场景

update:modelValue 事件主要用于：

- **双向绑定**（`v-model`）：这是最常见和推荐的用法。
- **单向数据流控制**（`:model-value` 和 `@update:model-value`）：当你需要更精细地控制手风琴的展开状态时。

`modelValue` 的值会根据 `type` 属性的不同而有所区别：

- 当 `type="single"` (单选模式) 时，`modelValue` 会是一个 **字符串** (对应当前展开项的 `value` 属性) 或 null。
- 当 `type="multiple"` (多选模式) 时，`modelValue` 会是一个 **字符串数组** (对应所有展开项的 `value` 属性)。

#### 示例用法

假设你有一个手风琴，你想在父组件中控制哪个项是展开的，并在展开状态改变时执行一些逻辑。

1. 使用 `v-model` (推荐)

这是最简洁的用法。

::component-example
---
name: 'accordion-model-value2-example'
collapse: true
props:
  class: 'w-full'
---
::

解释：

- `v-model="activeAccordionItem"` 等同于 `:model-value="activeAccordionItem"` `@update:modelValue="activeAccordionItem = $event"`。
- 当用户点击手风琴项使其展开或折叠时，底层的 `AccordionRoot` 会发出 `update:modelValue` 事件，事件的载荷就是新的 `modelValue` (当前展开项的 `value` 或 `value` 数组)。
- Vue 的 `v-model` 语法会自动捕获这个事件并更新 `activeAccordionItem` 这个 `ref`。

2. 使用 `:model-value` 和 `@update:modelValue` (更精细控制)

当你需要截获 `update:modelValue` 事件并执行额外逻辑时，可以使用这种方式。

::component-example
---
name: 'accordion-model-value3-example'
collapse: true
props:
  class: 'w-full'
---
::

解释：

- 我们使用 `:model-value="currentActiveItem"` 来向 `UAccordion` 传递当前展开的状态。
- 我们通过 `@update:model-value="handleAccordionChange"` 监听事件。`handleAccordionChange` 函数会接收到最新的展开状态值。
- 重要：在 `handleAccordionChange` 中，你必须手动更新 `currentActiveItem.value = newValue`，否则手风琴的展开状态将不会在 UI 上反映出来，因为它不再是自动双向绑定。
- 你可以在 `handleAccordionChange` 函数中加入任何你需要的自定义逻辑。

## Theme

:component-theme

::tip
在你的整个 Nuxt UI 应用程序中，每当你在 UAccordion 组件（或者 items 数组中的某个手风琴项）上设置了 `disabled="true"` 属性时，该手风琴项的 “标题/点击区域”（即 `trigger`）就会自动拥有一个 “禁止点击” 的鼠标游标和 75% 的不透明度。
::

::note
variants 的作用<br><br>

在 Nuxt UI 中，`app.config.ts` 文件允许你对所有组件进行全局默认样式的定制。而 `variants` 字段是其中非常重要的一个部分，它专门用来定义组件在不同状态或不同属性值下所展现的样式 “变体”。
<br><br>
你可以把它想象成：**当组件的某个属性发生变化时，它的外观也会随之改变，而 variants 就是预先定义这些变化规则的地方**。
::

::note
`variants` 的配置方式 <br>
`variants` 字段在 `app.config.ts` 中用于定义基于组件 `props` 值的条件样式。它的结构通常是：

```typescript
variants: {
  // `propName` 是组件的 prop 名称
  propName: {
    // `propValue` 是 prop 的一个可能值
    propValue: {
      // `componentPart` 是组件内部的一个部分（比如 `root`, `title`, `description`, `icon` 等）
      componentPart: 'tailwind-css-classes'
    },
    // ... 其他 propValue
  },
  // ... 其他 propName
}
```

`compoundVariants` 的配置方式，就是：当一个或多个特定的 `props` 组合出现时，才应用某些额外的样式。

`compoundVariants` 的语法结构

它通常是 `variants` 同级的一个数组，每个数组项是一个对象：

```typescript
// app.config.ts 或组件的 theme 定义中
export default defineAppConfig({
  ui: {
    ComponentName: {
      // ... 其他 slots 和 variants 配置

      compoundVariants: [
        {
          // 第一个对象定义了触发这个复合变体的 prop 组合
          // 这些键/值对必须与组件的 props 名称及其值匹配
          propName1: 'propValueA',
          propName2: 'propValueB',
          // ... 更多 prop 组合条件
          class: {
            // `componentPart` 是组件内部的一个部分（比如 `root`, `title`, `description`, `icon` 等）
            componentPart: 'tailwind-css-classes'
          } // 当所有条件都满足时应用的类
        },
        {
          // 第二个复合变体规则
          propNameX: 'propValueY',
          propNameZ: true,
          class: {
            // `componentPart` 是组件内部的一个部分（比如 `root`, `title`, `description`, `icon` 等）
            componentPart: 'tailwind-css-classes'
          }
        }
        // ... 更多复合变体
      ]
    }
  }
})
```

`defaultVariants` 的作用
`defaultVariants` 主要用于：

- 设置组件的默认样式变体：它指定了在没有显式传递某些 prop 时，组件应该使用哪种颜色、变体、尺寸等。
- 减少重复代码：避免在每次使用组件时都手动设置那些你希望大多数情况下都是默认的 prop。
- 提供一致的基准外观：确保组件在被使用时，即使没有传递任何 prop，也能有一个合理的、符合设计规范的初始状态。

`defaultVariants` 的语法结构

它通常是 `variants` 同级的一个对象，键是 prop 名称，值是该 prop 的默认值。

```typescript
// app.config.ts 或组件的 theme 定义中
export default defineAppConfig({
  ui: {
    ComponentName: {
      // ... slots 和 variants 配置

      defaultVariants: {
        propName1: 'defaultValue1',
        propName2: 'defaultValue2',
        // ... 更多 prop 的默认值
      }
    }
  }
})
```

`defaultVariants` 如何与 `props` 和 `variants` 协作

`defaultVariants` 的优先级通常是这样的（从低到高）：

1. 组件内置主题的 `defaultVariants`: 组件本身定义的最基础的默认值。
2. `app.config.ts` 中的 `defaultVariants`: 你在全局配置中覆盖或扩展的默认值。
3. 组件实例上直接传递的 `prop`: 这是最高优先级，会覆盖所有默认值。
::

---
description: \<NuxtLink\> 的包装器，带有一些额外的 prop。
category: navigation
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Link.vue
---

## 用法

Link 组件是 [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 的一个包装器，使用了 [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) prop。它提供了一些额外的 prop：

- `inactive-class` prop 用于设置链接不活跃时的类名，`active-class` 在活跃时使用。
- `exact` prop 用于当链接活跃且路由与当前路由完全相同时，使用 `active-class` 进行样式设置。
- `exact-query` 和 `exact-hash` props 用于当链接活跃且查询或哈希与当前查询或哈希完全相同时，使用 `active-class` 进行样式设置。
  - 使用 `exact-query="partial"` 可在链接活跃且查询部分匹配当前查询时，使用 `active-class` 进行样式设置。

这样做的目的是为了提供与 Nuxt 2 / Vue 2 中 <NuxtLink> 相同的 API。你可以在 Vue Router 从 [Vue 2 迁移](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link) 指南中阅读更多相关信息。

::note
它被 [`Breadcrumb`](/components/breadcrumb)、[`Button`](/components/button)、[`ContextMenu`](/components/context-menu)、[`DropdownMenu`](/components/dropdown-menu) 和 [`NavigationMenu`](/components/navigation-menu) 组件使用。
::

### 标签(Tag)

`Link` 组件在提供了 `to` prop 时渲染一个 `<a>` 标签，否则渲染一个 `<button>` 标签。你可以使用 `as` prop 来改变回退(fallback)标签。

::component-code
---
props:
  to: ''
  as: 'button'
slots:
  default: Link
---
::

::note
尝试改变 `to` prop 来检查渲染的 HTML。
::

### 样式(Style)

默认情况下，链接具有默认的活跃和不活跃样式，请查看 [#theme](#theme) 部分。

::component-code
---
props:
  to: /ui/components/link
slots:
  default: Link
---
::

::note
尝试改变 `to` prop 来查看活跃和不活跃状态。
::

你可以通过使用 `raw` prop 并提供自己的样式，通过 `class`、`active-class` 和 `inactive-class` 来覆盖此行为。

::component-code
---
ignore:
  - raw
props:
  raw: true
  to: /ui/components/link
  activeClass: 'font-bold'
  inactiveClass: 'text-muted'
slots:
  default: Link
---

Link
::

## IntelliSense

如果你正在使用 VSCode 并希望为 `active-class` 和 `inactive-class` 类获得自动补全，你可以将以下设置添加到你的 `.vscode/settings.json` 中：

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```

## API

### Props

::component-props
---
ignore:
  - custom
---
::

#### custom prop

我们来详细解析 Nuxt UI 中 `ULink` 组件的 `custom` prop，以及它背后的 Vue Router `<RouterLink custom>` (在 Nuxt 中是 `<NuxtLink custom>`) 的含义和用法。

1. `custom` Prop 的含义

在 Vue Router 的 `<RouterLink>` 组件中（以及 Nuxt UI 封装的 `<ULink>` 内部），`custom` prop 的作用是：

告诉 `<RouterLink>` (或 `<NuxtLink>`) 不要渲染任何 HTML 元素，而是将它的所有内部逻辑和计算出的属性（如 `href`, `Maps`, `isActive`, `isExactActive`, `route` 等）通过默认插槽的作用域暴露出来。

简而言之，`custom` 让你完全掌控链接的渲染，而 `<RouterLink>` 只负责提供路由相关的逻辑。

2. 为什么需要 `custom`？

通常，`<RouterLink>` 会渲染一个 `<a>` 标签。但有些场景下，你可能不希望它渲染 `<a>`：

- 完全自定义渲染：你可能想用一个 `<button>`、`<div>`、甚至是一个自定义的 Vue 组件来作为链接的视觉表现，但它仍然需要执行路由跳转逻辑。
- 组合组件：当像 Nuxt UI 的 `UButton` 或 `ULink` 这样的组件需要封装 `<NuxtLink>` 的功能时，它们需要 `<NuxtLink>` 提供底层逻辑，但由自己来决定最终渲染什么标签以及如何应用样式。
- 高级样式控制：你可能需要根据链接的 `isActive` 状态来动态改变子元素（而不是根元素）的样式，或者需要将 `href` 和 `Maps` 函数传递给内部的某个子组件。

`custom` prop 正是为了解决这些需求而诞生的。

3. `ULink` 中 `custom` 的用法与内部机制

在 `ULink.vue` 组件中，`custom` prop 有两种使用方式：

a. `ULink` 内部使用 `custom` Prop (默认且关键)

这是 `ULink` 组件实现其灵活性的核心。在 `ULink.vue` 的 `<template>` 部分，你会看到：

```vue
<NuxtLink v-slot="{ href, navigate, route: linkRoute, rel, target, isExternal, isActive, isExactActive }" v-bind="nuxtLinkProps" :to="to" custom>
  </NuxtLink>
```

- `ULink` 组件自身将其内部的 `<NuxtLink>` 设置为 `custom` 模式。
- 这样，`<NuxtLink>` 就不会渲染 `<a>` 标签，而是通过 `v-slot` 将其所有路由相关的内部状态和方法（如 `href`, `Maps`, `isActive`, `isExactActive` 等）暴露给了 `ULink` 组件。
- `ULink` 组件然后利用这些暴露出来的属性，来决定最终是渲染 `ULinkBase`（当 `custom` 为 `false` 时），还是将这些属性透传给其 **自己的默认插槽**（当 `custom` 为 `true` 时）。

b. 你在外部使用 ULink 时传入 custom Prop

这个 `custom` prop 也会暴露给 `ULink` 的使用者。如果你将 `ULink` 的 `custom` prop 设置为 `true`，那么 `ULink` 将不会渲染它的默认结构 (`ULinkBase`)，而是将 `NuxtLink` 暴露给它的所有属性（以及 `ULink` 自身的额外属性如 `as`, `type`, `disabled`, `active` 等）进一步暴露给 `ULink` 的默认插槽。

当 `ULink` 的 `custom` 为 `true` 时，它会渲染你的插槽内容，并向插槽传递以下作用域属性：

```vue
// 这些属性会通过 v-slot 暴露给你的自定义插槽
v-bind="{
  ...$attrs, // 任何未声明为 prop 的属性
  ...(exact && isExactActive ? { 'aria-current': props.ariaCurrentValue } : {}),
  as,
  type,
  disabled,
  href, // 计算出的最终 href
  navigate, // 导航函数，你可以手动调用它进行跳转
  rel,
  target,
  isExternal,
  active: isLinkActive({ route: linkRoute, isActive, isExactActive }) // ULink 自己的激活状态判断
}"
```

示例：使用 `ULink custom` 进行完全自定义渲染

假设你想用一个 `div` 来作为链接，并且根据激活状态改变 `div` 的背景颜色，同时手动控制点击跳转。

```vue
<template>
  <div class="p-4">
    <ULink
      to="/settings"
      custom
      :class="currentPath === '/settings' ? 'active-link-wrapper' : 'inactive-link-wrapper'"
    >
      <template #default="{ href, navigate, active, disabled }">
        <div
          class="p-3 rounded-lg cursor-pointer transition-all duration-200"
          :class="{
            'bg-blue-500 text-white shadow': active,
            'bg-gray-100 text-gray-800 hover:bg-gray-200': !active,
            'opacity-50 cursor-not-allowed': disabled
          }"
          @click="!disabled && navigate()"
          :aria-current="active ? 'page' : undefined"
        >
          <span class="font-semibold">
            我的设置
          </span>
          <p class="text-sm">点击进入设置页面 ({{ href }})</p>
        </div>
      </template>
    </ULink>

    <div class="mt-4">
      当前路由: {{ currentPath }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from '#imports';

const route = useRoute();
const currentPath = computed(() => route.path);

// ULink 是自动导入的，无需 import
</script>

<style scoped>
/* 这里可以定义 active-link-wrapper 或 inactive-link-wrapper 的样式 */
</style>
```

解释：

- 通过设置 `<ULink custom>`，我们告诉 `ULink` 不要渲染其默认的 `<ULinkBase>` 结构。
- 我们通过 `v-slot="{ href, navigate, active, disabled }"` 从 `ULink` 获取了路由相关的核心数据和函数。
- 我们手动渲染了一个 `div`，并使用 `active` 状态来动态改变其样式。
- 我们手动将 `Maps()` 函数绑定到 `div` 的 `@click` 事件上，从而实现了点击跳转。`href` 可以用于显示链接的实际目标。
- `disabled` 状态也被透传，你可以用它来控制自定义渲染内容的交互。

4. custom 与 raw 的区别
这是一个常见的混淆点：

- `custom`: 控制渲染结构。它决定 `<ULink>` 是否会渲染其内部的 `ULinkBase`。如果 `custom` 为 `true`，`ULink` 仅暴露插槽作用域，由你完全控制 HTML 结构。
- `raw`: 控制样式注入。它决定 `ULink` 是否会应用其默认的 Nuxt UI 主题样式。如果 `raw` 为 `true`，`ULink` 将不会添加任何默认的 `root` 样式，只保留你通过 `class`、`activeClass`、`inactiveClass` 提供的样式。

你可以同时使用它们，例如：

```vue
<ULink to="/about" custom raw>
  <template #default="{ navigate, active }">
    <button
      class="p-2 rounded"
      :class="{ 'bg-purple-500 text-white': active, 'bg-gray-200': !active }"
      @click="navigate()"
    >
      自定义外观和行为的按钮
    </button>
  </template>
</ULink>
```

`custom` prop 是 Nuxt UI `ULink` (以及底层 `NuxtLink`/`RouterLink`) 提供的一个非常强大的 **渲染控制** 工具。它让你能够脱离默认的 `<a>` 标签限制，使用任何你想要的 HTML 结构或 Vue 组件来作为路由链接的视觉呈现，同时依然能够利用 Vue Router 提供的路由匹配逻辑和导航功能。

### Slots

:component-slots

- default(props: { active: boolean }): any:

  - 默认插槽，用于放置链接的内容（文本、图标等）。
  - 插槽作用域会暴露一个 active prop，这是一个布尔值，指示链接是否当前处于激活状态。你可以利用这个 active 状态来动态改变插槽内部元素的样式。

```vue
<ULink to="/profile">
  <template #default="{ active }">
    <span :class="{ 'font-bold text-primary-500': active, 'text-gray-600': !active }">我的资料</span>
    <UIcon name="i-heroicons-light-user" :class="{ 'ml-2': true, 'text-primary-500': active }" />
  </template>
</ULink>
```

## Theme

:component-theme

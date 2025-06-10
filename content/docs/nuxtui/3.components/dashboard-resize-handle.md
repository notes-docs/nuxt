---
title: DashboardResizeHandle
description: 一个用于调整侧边栏或面板大小的手柄。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardResizeHandle.vue
---

## 用法 (Usage)

`DashboardResizeHandle` 组件由 `DashboardSidebar` 和 `DashboardPanel` 组件使用。

当 `resizable` 属性被设置时，它会自动显示，**你无需手动添加它**。

## 示例 (Examples)

### 在 `resize-handle` 插槽中 (Within `resize-handle` slot)

尽管此组件在设置 `resizable` 属性时会自动显示，但你可以使用 `DashboardSidebar` 和 `DashboardPanel` 组件的 `resize-handle` 插槽来**自定义手柄**。

::code-group
```vue [layouts/dashboard.vue]
<template>
  <UDashboardGroup>
    <UDashboardSidebar resizable>
      <template #resize-handle="{ onMouseDown, onTouchStart }">
        <UDashboardResizeHandle
          class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-border-accented) after:transition"
          @mousedown="onMouseDown"
          @touchstart="onTouchStart"
        />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel resizable>
    <template #resize-handle="{ onMouseDown, onTouchStart }">
      <UDashboardResizeHandle
        class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-border-accented) after:transition"
        @mousedown="onMouseDown"
        @touchstart="onTouchStart"
      />
    </template>
  </UDashboardPanel>
</template>
```
::

::note
在此示例中，我们添加了一个 `after` 伪元素，以在悬停时显示一条垂直线。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

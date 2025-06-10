---
title: DashboardGroup
description: 一个固定布局组件，提供仪表盘组件的上下文，并带有侧边栏状态管理和持久化功能。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardGroup.vue
---

## 用法 (Usage)

`DashboardGroup` 组件是主要的布局组件，它包裹 `DashboardSidebar` 和 `DashboardPanel` 组件，以创建响应式仪表盘界面。

在布局文件或 `app.vue` 中使用它：

```vue [layouts/dashboard.vue]
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

---
title: DashboardSidebar
description: 一个可调整大小且可折叠的侧边栏，用于在仪表盘中显示。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardSidebar.vue
---

## 用法 (Usage)

`DashboardSidebar` 组件用于显示一个侧边栏。它的状态（大小、是否折叠等）将根据你提供给 `DashboardGroup` 组件的 `storage` 和 `storage-key` props 进行保存。

在 `DashboardGroup` 组件的默认插槽中使用它：

```vue{3} [layouts/dashboard.vue]
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

使用 `left`、`default` 和 `right` 插槽来自定义侧边栏，并使用 `body` 或 `content` 插槽来自定义侧边栏菜单。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[][] = [[{
  label: '首页',
  icon: 'i-lucide-house',
  active: true
}, {
  label: '收件箱',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: '联系人',
  icon: 'i-lucide-users'
}, {
  label: '设置',
  icon: 'i-lucide-settings',
  defaultOpen: true,
  children: [{
    label: '通用'
  }, {
    label: '成员'
  }, {
    label: '通知'
  }]
}], [{
  label: '反馈',
  icon: 'i-lucide-message-circle',
  to: 'https://github.com/nuxt-ui-pro/dashboard',
  target: '_blank'
}, {
  label: '帮助与支持',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt/ui-pro',
  target: '_blank'
}]]
</script>

<template>
  <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-default' }">
    <template #header="{ collapsed }">
      <LogoPro :collapsed="collapsed" class="h-5 w-auto shrink-0" />
    </template>

    <template #default="{ collapsed }">
      <UButton
        :label="collapsed ? undefined : '搜索...'"
        icon="i-lucide-search"
        color="neutral"
        variant="outline"
        block
        :square="collapsed"
      >
        <template v-if="!collapsed" #trailing>
          <div class="flex items-center gap-0.5 ms-auto">
            <UKbd value="meta" variant="subtle" />
            <UKbd value="K" variant="subtle" />
          </div>
        </template>
      </UButton>

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[1]"
        orientation="vertical"
        class="mt-auto"
      />
    </template>

    <template #footer="{ collapsed }">
      <UButton
        :avatar="{
          src: 'https://github.com/benjamincanac.png'
        }"
        :label="collapsed ? undefined : 'Benjamin'"
        color="neutral"
        variant="ghost"
        class="w-full"
        :block="collapsed"
      />
    </template>
  </UDashboardSidebar>
</template>
```
::

::note
将侧边栏拖拽到屏幕左边缘附近即可将其折叠。
::

### 可调整大小 (Resizable)

使用 `resizable` prop 使侧边栏可调整大小。

::code-preview

TODO

#code
```vue
<template>
  <UDashboardSidebar resizable>
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```
::


### 可折叠 (Collapsible)

使用 `collapsible` prop 使侧边栏在拖拽到屏幕边缘附近时可折叠。

::warning
如果侧边栏不可折叠，`DashboardSidebarCollapse` 组件将不起作用。
::

::code-preview

TODO

#code
```vue
<template>
  <UDashboardSidebar resizable collapsible>
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```
::

::tip
你可以在插槽 props 中访问 `collapsed` 状态，以便在侧边栏折叠时自定义其内容。
::

### 大小 (Size)

使用 `min-size`、`max-size`、`default-size` 和 `collapsed-size` props 自定义侧边栏的大小。

::code-preview

TODO

#code
```vue
<template>
  <UDashboardSidebar
    resizable
    collapsible
    :min-size="22"
    :default-size="35"
    :max-size="40"
    :collapsed-size="0"
  >
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```
::

::note
`collapsed-size` prop 默认为 `0`，但侧边栏有一个 `min-w-16`，以确保其可见。
::

### 侧边 (Side)

使用 `side` prop 更改侧边栏的侧边位置。默认为 `left`。

::code-preview

TODO

#code
```vue
<template>
  <UDashboardSidebar side="right" resizable collapsible>
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```
::

### 模式 (Mode)

使用 `mode` prop 更改侧边栏菜单的模式。默认为 `slideover`。

使用 `body` 插槽填充菜单主体（在标题下方），或使用 `content` 插槽填充整个菜单。

::tip
你可以使用 `menu` prop 自定义侧边栏菜单，它会根据你选择的模式进行调整。
::

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  mode: 'drawer' | 'slideover' | 'modal'
}>()

const items: NavigationMenuItem[] = [{
  label: '首页',
  icon: 'i-lucide-house',
  active: true
}, {
  label: '收件箱',
  icon: 'i-lucide-inbox'
}, {
  label: '联系人',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar :mode="mode">
      <template #header>
        <LogoPro class="h-5 w-auto" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard" />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
```
::

::note
这些示例包含 `DashboardGroup`、`DashboardPanel` 和 `DashboardNavbar` 组件，因为它们是演示移动端侧边栏所必需的。
::

### 切换按钮 (Toggle)

使用 `toggle` prop 自定义在移动设备上显示的 `DashboardSidebarToggle` 组件。

你可以传递 `Button` 组件的任何属性来自定义它。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: '首页',
  icon: 'i-lucide-house',
  active: true
}, {
  label: '收件箱',
  icon: 'i-lucide-inbox'
}, {
  label: '联系人',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      open
      :toggle="{
        color: 'primary',
        variant: 'subtle',
        class: 'rounded-full'
      }"
    >
      <template #header>
        <LogoPro class="h-5 w-auto" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard" />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
```
::

### 切换侧边 (Toggle Side)

使用 `toggle-side` prop 更改切换按钮的侧边位置。默认为 `left`。

::code-preview

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: '首页',
  icon: 'i-lucide-house',
  active: true
}, {
  label: '收件箱',
  icon: 'i-lucide-inbox'
}, {
  label: '联系人',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      open
      toggle-side="right"
    >
      <template #header>
        <LogoPro class="h-5 w-auto" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard" />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
```
::

## 示例 (Examples)

### 控制打开状态 (Control open state)

你可以使用 `open` prop 或 `v-model:open` 指令来控制打开状态。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: '首页',
  icon: 'i-lucide-house',
  active: true
}, {
  label: '收件箱',
  icon: 'i-lucide-inbox'
}, {
  label: '联系人',
  icon: 'i-lucide-users'
}]

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UDashboardSidebar v-model:open="open">
    <template #header>
      <LogoPro class="h-5 w-auto" />
    </template>

    <UNavigationMenu
      :items="items"
      orientation="vertical"
    />
  </UDashboardSidebar>
</template>
```
::

::note
在此示例中，利用 `defineShortcuts`，你可以通过按下 **`O`** 键来切换 `DashboardSidebar` 的打开状态。
::

### 控制折叠状态 (Control collapsed state)

你可以使用 `collapsed` prop 或 `v-model:collapsed` 指令来控制折叠状态。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: '首页',
  icon: 'i-lucide-house',
  active: true
}, {
  label: '收件箱',
  icon: 'i-lucide-inbox'
}, {
  label: '联系人',
  icon: 'i-lucide-users'
}]

const collapsed = ref(false)

defineShortcuts({
  c: () => collapsed.value = !collapsed.value
})
</script>

<template>
  <UDashboardSidebar v-model:collapsed="collapsed" collapsible>
    <template #header>
      <LogoPro class="h-5 w-auto" :collapsed="collapsed" />
    </template>

    <UNavigationMenu
      :collapsed="collapsed"
      :items="items"
      orientation="vertical"
    />
  </UDashboardSidebar>
</template>
```
::

::note
在此示例中，利用 `defineShortcuts`，你可以通过按下 **`C`** 键来切换 `DashboardSidebar` 的折叠状态。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


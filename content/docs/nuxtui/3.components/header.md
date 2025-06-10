---
description: 响应式标题组件。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/Header.vue
---

## 基本用法

`<Header>` 渲染一个 `<header>` 元素。它的高度通过 CSS 变量 `--ui-header-height` 定义，你可以在自己的样式中覆盖它：

```css
:root {
  --ui-header-height: --spacing(16);
}
```

你可以使用 `left`、`default` 和 `right` 插槽自定义 Header，以及使用 `body` 或 `content` 插槽来自定义菜单内容。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: '文档',
    to: '/getting-started',
    active: route.path.startsWith('/getting-started')
  },
  {
    label: '组件',
    to: '/components',
    active: route.path.startsWith('/components')
  },
  {
    label: '路线图',
    to: '/roadmap'
  },
  {
    label: 'Figma',
    to: 'https://www.figma.com/community/file/1288455405058138934',
    target: '_blank'
  },
  {
    label: '版本发布',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
```
::

### `title`

设置标题文字。默认值为 `Nuxt UI Pro`。

::code-preview

TODO

#code
```vue
<template>
    <UHeader title="Nuxt UI Pro" />
</template>
```
::

也可以使用 `title` 插槽放置 logo：

::code-preview

TODO

#code
```vue
<UHeader>
  <template #title>
    <Logo class="h-6 w-auto" />
  </template>
</UHeader>
```
::


### `to`

设置标题链接地址。默认值为 `/`。

::code-preview

TODO

#code
```vue
<template>
<UHeader to="/getting-started" />
</template>
```
::

也可以使用 `left` 插槽完全自定义链接区域：

::code-preview

#code
```vue
<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/getting-started">
        <Logo class="h-6 w-auto" />
      </NuxtLink>
    </template>
  </UHeader>
</template>
```
::

### `mode`

使用 `mode` 属性来更改标题菜单的模式。默认为 `modal` 。

使用 `body` 插槽填充菜单主体，或使用 `content` 插槽替换整个菜单内容。

::tip{to="/ui/components/header#props"}
可以传入 `menu` 属性自定义菜单行为，自动根据 `mode` 适配（modal 或 drawer）。
::

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
```
::

### `toggle`

使用 `toggle` 属性来自定义移动设备上显示的切换按钮。

您可以传递 `Button` 组件的任何属性来对其进行自定义。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
```
::

### `toggle-side`

使用 toggle-side 属性来更改切换按钮的侧面。默认为 right 。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader toggle-side="left">
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
```
::

## 示例
### 应用场景：在 `app.vue` 中使用

你可以在 `app.vue` 或 layout 中使用 `UHeader`：

```vue [app.vue]
<template>
  <UApp>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

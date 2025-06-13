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

::component-example
---
name: 'header-example'
class: '!px-0 !pt-0'
collapse: true
props:
  class: 'w-full'
---
::

::note
在这个例子中，我们使用 [NavigationMenu](/ui/components/navigation-menu) 组件来在中心渲染头部链接。
::

### `title`

设置标题文字。默认值为 `Nuxt UI Pro`。

::component-code
---
pro: true
prettier: true
class: '!px-0 !pt-0'
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: 'w-full'
  title: 'Nuxt UI Pro'
---
::

也可以使用 `title` 插槽放置 logo：

::component-code
---
pro: true
prettier: true
class: '!px-0 !pt-0'
ignore:
  - class
hide:
  - class
external:
externalTypes:
slots:
   title: <LogoPro class="h-6 w-auto" />
props:
  class: 'w-full'
---
#title
<LogoPro class="h-6 w-auto" />
::

### `to`

设置标题链接地址。默认值为 `/`。

::component-code
---
pro: true
prettier: true
class: '!px-0 !pt-0'
ignore:
  - class
  - title
hide:
  - class
external:
externalTypes:
props:
  class: 'w-full'
  title: 'Nuxt UI Pro'
  to: '/getting-started'
---
::

也可以使用 `left` 插槽完全自定义链接区域：

::component-code
---
pro: true
prettier: true
class: '!px-0 !pt-0'
ignore:
  - class
hide:
  - class
external:
externalTypes:
slots:
  left: |

      <NuxtLink to="/getting-started">
        <LogoPro class="h-6 w-auto" />
      </NuxtLink>    

props:
  class: 'w-full'
---
#left
:::nuxt-link{to="/getting-started"}
:logo-pro{class="h-6 w-auto"}
:::
::

### `mode`

使用 `mode` 属性来更改标题菜单的模式。默认为 `modal` 。

使用 `body` 插槽填充菜单主体，或使用 `content` 插槽替换整个菜单内容。

::tip{to="/ui/components/header#props"}
可以传入 `menu` 属性自定义菜单行为，自动根据 `mode` 适配（modal 或 drawer）。
::

::component-example
---
name: 'header-mode-example'
class: 'w-full'
collapse: true
iframe: 
  height: 300px
iframeMobile: true
options:
  - name: 'mode'
    label: 'mode'
    items:
      - 'modal'
      - 'slideover'
      - 'drawer'
    default: 'drawer'
props:
  class: 'w-full'
---
::

### `toggle`

使用 `toggle` 属性来自定义移动设备上显示的切换按钮。

您可以传递 `Button` 组件的任何属性来对其进行自定义。

::component-example
---
name: 'header-toggle-example'
class: 'w-full'
collapse: true
iframe:
  height: 300px
iframeMobile: true
props:
  class: 'w-full'
---
::

### `toggle-side`

使用 toggle-side 属性来更改切换按钮的侧面。默认为 right 。

::component-example
---
name: 'header-toggle-side-example'
class: 'w-full'
collapse: true
iframe:
  height: 300px
iframeMobile: true
props:
  class: 'w-full'
---
::

## 示例
### 应用场景：在 `app.vue` 中使用

你可以在 `app.vue` 或 layout 中使用 `UHeader`：

```vue{28-51} [app.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  to: '/roadmap'
}, {
  label: 'Figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

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

### Emits

:component-emits

## 主题 (Theme)

:component-theme{pro=true}

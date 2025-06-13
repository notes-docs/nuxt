---
description: 一个响应式页脚组件。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/Footer.vue
---

## 用法 (Usage)

`Footer` 组件渲染一个 `<footer>` 元素。

使用 `left`、`default` 和 `right` 插槽来自定义页脚。

::component-example
---
name: 'footer-example'
class: '!p-0'
collapse: true
props:
  class: 'w-full'
---
::

::note
在此示例中，我们使用 `NavigationMenu` 组件在中心渲染页脚链接。
::

## 示例 (Examples)

### 在 `app.vue` 中 (Within `app.vue`)

在你的 `app.vue` 或布局中使用 `Footer` 组件：

```vue{32-67} [app.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Figma Kit',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://stackblitz.com/edit/nuxt-ui',
  target: '_blank'
}, {
  label: 'Roadmap',
  to: '/roadmap'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          版权所有 © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://chat.nuxt.dev"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://x.com/nuxt_js"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
```

::note
在此示例中，我们使用 `Separator` 组件在页脚上方添加一个边框。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

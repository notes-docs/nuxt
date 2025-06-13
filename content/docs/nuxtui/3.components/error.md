---
description: 一个预构建的错误组件，支持 NuxtError。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/Error.vue
---

## 用法 (Usage)

与 `Main` 组件类似，`Error` 组件渲染一个 `<main>` 元素，它与 `Header` 组件协同工作，创建一个延伸至视口可用高度的全高布局。

::note
`Header` 组件通过一个 `--ui-header-height` CSS 变量定义其高度，你可以在 CSS 中覆盖它来对其进行自定义：

```css
:root {
  --ui-header-height: var(--spacing-16);
}
```
::

### 错误 (Error)

使用 `error` prop 来显示错误消息。

::note{to="/docs/nuxt/guide/directory-structure/error"}
在大多数情况下，你会在 `error.vue` 文件中接收到 `error` prop。
::

::component-code
---
pro: true
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: '!min-h-96'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
---
::

### 清除 (Clear)

使用 `clear` prop 自定义或隐藏清除按钮（设置为 `false` 值时隐藏）。

你可以传递 `Button` 组件的任何属性来自定义它。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - clear.color
  - clear.size
  - clear.icon
  - clear.class
  - error.statusCode
  - error.statusMessage
  - error.message
hide:
  - class
external:
externalTypes:
props:
  class: '!min-h-96'
  clear:
    color: 'neutral'
    size: 'xl'
    icon: 'i-lucide-arrow-left'
    class: 'rounded-full'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
---
::

### 重定向 (Redirect)

使用 `redirect` prop 在点击清除按钮时将用户重定向到不同的页面。默认为 `/`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - error.statusCode
  - error.statusMessage
  - error.message
hide:
  - class
external:
externalTypes:
props:
  class: '!min-h-96'
  redirect: '/getting-started'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
---
::

## 示例 (Examples)

### 在 `error.vue` 中 (Within `error.vue`)

在你的 `error.vue` 中使用 `Error` 组件：

```vue{13} [error.vue]
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
你可能希望复制 `app.vue` 中的代码到 `error.vue` 文件中，以拥有相同的布局和功能，这里有一个例子：[https://github.com/nuxt/ui/blob/v3/docs/app/error.vue](https://github.com/nuxt/ui/blob/v3/docs/app/error.vue)。
::

::note
你可以在 [Nuxt 文档](https://nuxt.com/docs/getting-started/error-handling) 中阅读更多关于如何处理错误的信息，但是当使用 `nuxt generate` 时，建议在 `createError` 调用中添加 `fatal: true`，以确保错误页面被正确显示：

```vue [pages/[...slug].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


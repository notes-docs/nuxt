---
title: PageAside
description: 一个用于显示页面导航的粘性侧边栏。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageAside.vue
---

## 用法

`PageAside` 组件是一个粘性的 `<aside>` 元素，它只在 `lg` 断点及以上显示。

::note
`PageAside` 组件使用 `--ui-header-height` CSS 变量来正确地定位在 `Header` 组件下方。你可以通过在 CSS 中覆盖该变量来定制其高度：

```css
:root {
  --ui-header-height: --spacing(16);
}
```
::

将其用在 `Page` 组件的 `left` 或 `right` 插槽中：

```vue{4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## 示例

::note
虽然这些示例使用了 Nuxt Content，但这些组件可以与任何内容管理系统集成。
::

### **在布局中**

在布局中使用 `PageAside` 组件来显示导航：

```vue{9-13} [layouts/docs.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
在此示例中，我们使用 `ContentNavigation` 组件来显示注入到 `app.vue` 中的导航。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


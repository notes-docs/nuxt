---
description: 一个填充可用视口高度的 main 元素。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/Main.vue
---

### 用法

`Main` 组件渲染一个 `<main>` 元素，它与 `Header` 组件协同工作，创建一个延伸到视口可用高度的全高布局。

::note
`Header` 组件通过 CSS 变量 `--ui-header-height` 定义其高度，你可以在你的 CSS 中通过覆盖它来定制：

```css
:root {
  --ui-header-height: --spacing(16);
}
```
::

## 示例

### 在 `app.vue` 中

在你的 `app.vue` 或布局中使用 `Main` 组件：

```vue{5-9} [app.vue]
<template>
  <UApp>
    <UHeader />

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


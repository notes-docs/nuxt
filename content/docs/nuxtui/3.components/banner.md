---
description: 在你的网站顶部显示横幅，以告知用户重要信息。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/Banner.vue
---

## 用法 (Usage)

### 标题 (Title)

使用 `title` prop 在横幅上显示标题。

::code-preview

TODO

#code
```vue
<template>
  <UBanner title="This is a banner with an important message." />
</template>
```
::

### 图标 (Icon)

使用 `icon` prop 在横幅上显示图标。

::code-preview

TODO

#code
```vue
<template>
  <UBanner icon="i-lucide-info" title="This is a banner with an icon." />
</template>
```
::

### 颜色 (Color)

使用 `color` prop 更改横幅的颜色。

::code-preview

TODO

#code
```vue
<template>
  <UBanner color="neutral" icon="i-lucide-info" title="This is a banner with an icon." />
</template>
```
::

### 关闭 (Close)

使用 `close` prop 显示一个 [Button](/ui/components/button) 来关闭横幅。默认为 `false`。

::tip
当点击关闭按钮时，将发出一个 `close` 事件。
::

::code-preview

TODO

#code
```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```
::

::note
关闭后，`banner-${id}` 将存储在本地存储中，以防止其再次显示。
<br/>
对于上面的示例，`banner-example` 将存储在本地存储中。
::

### 关闭图标 (Close Icon)

使用 `close-icon` prop 自定义关闭按钮的 [Icon](https://ui.nuxt.com/components/icon)。默认为 `i-lucide-x`。

::code-preview

TODO

#code
```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```
::

::tip
你可以在 `app.config.ts` 中的 `ui.icons.close` 键下全局自定义此图标。
::

### 动作 (Actions)

使用 `actions` prop 为横幅添加一些 `Button` 动作。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const actions = ref([
  {
    label: 'Action 1',
    variant: 'outline'
  },
  {
    label: 'Action 2',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UBanner title="This is a banner with actions." :actions="actions" />
</template>
```
::

::note
动作按钮默认为 `color="neutral"` 和 `size="xs"`。你可以通过直接传递这些值到每个动作按钮来定制它们。
::

### 链接 (Link)

你可以传递 `NuxtLink` 组件的任何属性，例如 `to`、`target`、`rel` 等。

::code-preview

TODO

#code
```vue
<template>
  <UBanner
    to="https://github.com/nuxt/ui-pro"
    target="_blank"
    title="Purchase Nuxt UI Pro and get access to all components."
    color="primary"
  />
</template>
```
::

::note
`NuxtLink` 组件将继承你传递给 `User` 组件的所有其他属性。
::

## 示例 (Examples)

### 在 `app.vue` 中 (Within `app.vue`)

在 `app.vue` 或布局中使用 Banner 组件：

```vue [app.vue]
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v3 has been released!" />

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

### 插槽 (Slots)

:component-slots

### 事件 (Emits)

:component-emits

## 主题 (Theme)

:component-theme{pro=true}

::callout{icon="i-simple-icons-github" color="neutral" to="https://github.com/nuxt/ui-pro/blob/v3/src/theme/banner.ts"}
为了可读性，`compoundVariants` 中的某些颜色被省略。请查看 GitHub 上的源代码。
::

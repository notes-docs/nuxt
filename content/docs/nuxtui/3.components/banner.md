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

::component-code
---
pro: true
prettier: true
ignore:
  - class
hide:
  - class
props:
  class: 'px-4'
  title: 'This is a banner with an important message.'
---
::

### 图标 (Icon)

使用 `icon` prop 在横幅上显示图标。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
hide:
  - class
props:
  class: 'px-4'
  icon: 'i-lucide-info'
  title: 'This is a banner with an important message.'
---
::

### 颜色 (Color)

使用 `color` prop 更改横幅的颜色。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - icon
hide:
  - class
props:
  color: 'neutral'
  class: 'px-4'
  icon: 'i-lucide-info'
  title: 'This is a banner with an important message.'
---
::

### 关闭 (Close)

使用 `close` prop 显示一个 [Button](/ui/components/button) 来关闭横幅。默认为 `false`。

::tip
当点击关闭按钮时，将发出一个 `close` 事件。
::

::component-code
---
pro: true
prettier: true
ignore:
  - id
  - class
  - close
  - title
hide:
  - class
props:
  id: 'example'
  class: 'px-4'
  title: 'This is a banner with an important message.'
  close: true
---
::

::note
关闭后，`banner-${id}` 将存储在本地存储中，以防止其再次显示。
<br/>
对于上面的示例，`banner-example` 将存储在本地存储中。
::

### 关闭图标 (Close Icon)

使用 `close-icon` prop 自定义关闭按钮的 [Icon](https://ui.nuxt.com/components/icon)。默认为 `i-lucide-x`。

::component-code
---
pro: true
prettier: true
ignore:
  - id
  - class
  - close
  - title
  - close-icon
hide:
  - class
props:
  id: 'example'
  class: 'px-4'
  title: 'This is a banner with an important message.'
  close: true
  close-icon: 'i-lucide-x-circle'
---
::

::tip
你可以在 `app.config.ts` 中的 `ui.icons.close` 键下全局自定义此图标。
::

### 动作 (Actions)

使用 `actions` prop 为横幅添加一些 `Button` 动作。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - actions
external:
  - actions
hide:
  - class
props:
  class: 'px-4'
  title: 'This is a banner with an important message.'
  actions:
    - label: 'Action 1'
      variant: 'outline'
    - label: 'Action 2'
      trailingIcon: 'i-lucide-arrow-right'
---
::

::note
动作按钮默认为 `color="neutral"` 和 `size="xs"`。你可以通过直接传递这些值到每个动作按钮来定制它们。
::

### 链接 (Link)

你可以传递 `NuxtLink` 组件的任何属性，例如 `to`、`target`、`rel` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - to
  - target
  - title
hide:
  - class
props:
  class: 'px-4'
  to: 'https://github.com/nuxt/ui-pro'
  target: '_blank'
  title: 'This is a banner with an important message.'
  color: 'primary'
---
::

::note
`NuxtLink` 组件将继承你传递给 `User` 组件的所有其他属性。
::

## 示例 (Examples)

### 在 `app.vue` 中 (Within `app.vue`)

在 `app.vue` 或布局中使用 Banner 组件：

```vue{3} [app.vue]
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


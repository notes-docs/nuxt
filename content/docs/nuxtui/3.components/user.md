---
description: 显示用户信息，包括姓名、描述和头像。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/User.vue
---

## 用法

### 姓名

使用 `name` prop 显示用户的姓名。

::code-preview

TODO

#code
```vue
<template>
  <UUser name="John Doe" />
</template>
```
::

### 描述

使用 `description` prop 显示用户的描述。

::code-preview

TODO

#code
```vue
<template>
  <UUser name="John Doe" description="软件工程师" />
</template>
```
::

### 头像

使用 `avatar` prop 显示一个 **Avatar** 组件。

::code-preview

TODO

#code
```vue
<template>
  <UUser
    name="John Doe"
    description="软件工程师"
    :avatar="{
      src: 'https://i.pravatar.cc/150?u=john-doe',
      icon: 'i-lucide-image'
    }"
  />
</template>
```
::

[显示所有头像属性] TODO

### 徽章

使用 `chip` prop 显示一个 **Chip** 组件。

::code-preview

TODO

#code
```vue
<template>
  <UUser
    name="John Doe"
    description="软件工程师"
    :avatar="{
      src: 'https://i.pravatar.cc/150?u=john-doe'
    }"
    :chip="{
      color: 'primary',
      position: 'top-right'
    }"
  />
</template>
```
::

[显示所有徽章属性] TODO

### 尺寸

使用 `size` prop 更改用户头像和文本的大小。

::code-preview

TODO

#code
```vue
<template>
  <UUser
    name="John Doe"
    description="软件工程师"
    :avatar="{
      src: 'https://i.pravatar.cc/150?u=john-doe'
    }"
    chip
    size="xl"
  />
</template>
```
::

### 方向

使用 `orientation` prop 更改方向。默认为 `horizontal`。

::code-preview

TODO

#code
```vue
<template>
  <UUser
    orientation="vertical"
    name="John Doe"
    description="软件工程师"
    :avatar="{
      src: 'https://i.pravatar.cc/150?u=john-doe'
    }"
  />
</template>
```
::

### 链接

您可以传递 **<NuxtLink>** 组件的任何属性，例如 `to`、`target`、`rel` 等。

::code-preview

TODO

#code
```vue
<template>
  <UUser
    to="https://github.com/nuxt/ui-pro"
    target="_blank"
    name="Nuxt UI Pro"
    description="Vue 高级组件"
    :avatar="{
      src: 'https://github.com/nuxt-ui-pro.png'
    }"
  />
</template>
```
::

::note
**NuxtLink** 组件将继承您传递给 **User** 组件的所有其他属性。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


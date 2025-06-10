---
title: LocaleSelect
description: 一个用于在不同语言环境之间切换的 Select 组件。
category: element
module: ui-pro
links:
  - label: SelectMenu
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/select-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/locale/LocaleSelect.vue
---

## 用法

`LocaleSelect` 组件扩展了 `SelectMenu` 组件，因此你可以传递任何属性，例如 `color`、`variant`、`size` 等。

::note{to="/docs/nuxt/getting-started/i18n/nuxt"}
该组件旨在与 `i18n` 系统配合使用。在指南中了解更多信息。
::

::warning
flags 通过 Unicode 字符显示。这可能会导致不同的显示效果，例如 Windows 上的 Microsoft Edge 会显示 ISO 3166-1 alpha-2 代码，因为操作系统字体中不包含旗帜图标。
::

### 语言环境

使用 `locales` 属性，传入 `@nuxt/ui/locale` 中的语言环境数组。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="Object.values(locales)" class="w-48" />
</template>
```
::

你也可以只传入你应用中需要的语言环境：

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```
::

### 动态语言环境

你可以将其与 Nuxt i18n 配合使用：

```vue
<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="Object.values(locales)" />
</template>
```

## API

### 属性 (Props)

:component-props


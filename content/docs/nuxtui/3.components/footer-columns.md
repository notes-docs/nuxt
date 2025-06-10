---
title: FooterColumns
description: 一个在页脚中以列形式显示的链接列表。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/FooterColumns.vue
---


## 用法 (Usage)

`FooterColumns` 组件渲染一个在页脚中显示的列列表。

在 `Footer` 组件的 `top` 插槽中使用它：

```vue
<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns />
      </UContainer>
    </template>
  </UFooter>
</template>
```

## 列 (Columns)

使用 `columns` prop，它是一个包含以下属性的对象数组：

* `label`: `string`
* `children?`: `FooterColumnLink[]`

每列包含一个定义链接的 `children` 对象数组。每个链接可以具有以下属性：

* `label?`: `string`
* `icon?`: `string`
* `class?`: `any`
* `ui?`: `{ item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`

你可以传递 `Link` 组件的任何属性，例如 `to`、`target` 等。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui-pro'

const columns: FooterColumn[] = [
  {
    label: '社区',
    children: [
      {
        label: 'Nuxters',
        to: 'https://nuxters.nuxt.com',
        target: '_blank'
      },
      {
        label: '视频课程',
        to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
        target: '_blank'
      },
      {
        label: 'GitHub 上的 Nuxt',
        to: 'https://github.com/nuxt',
        target: '_blank'
      }
    ]
  },
  {
    label: '解决方案',
    children: [
      {
        label: 'Nuxt Content',
        to: 'https://content.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt DevTools',
        to: 'https://devtools.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt Image',
        to: 'https://image.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt UI',
        to: 'https://ui.nuxt.com/',
        target: '_blank'
      }
    ]
  }
]
</script>

<template>
  <UFooterColumns :columns="columns">
    <template #right>
      <UFormField name="email" label="订阅我们的新闻通讯" size="lg">
        <UInput type="email" class="w-full">
          <template #trailing>
            <UButton type="submit" size="xs" color="neutral" label="订阅" />
          </template>
        </UInput>
      </UFormField>
    </template>
  </UFooterColumns>
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


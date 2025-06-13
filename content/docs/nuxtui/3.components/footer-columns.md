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

```vue{3-7}
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

::component-example
---
name: 'footer-columns-example'
class: 'p-4 p-8'
collapse: true
props:
  class: 'w-full'
---
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


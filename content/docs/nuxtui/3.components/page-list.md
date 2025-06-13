---
title: PageList
description: 一个用于以堆叠格式显示内容的垂直列表布局。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageList.vue
---

## 用法

`PageList` 组件提供了一种灵活的方式来以垂直列表布局显示内容。它非常适合创建 **PageCard** 组件或任何其他元素的堆叠列表，并可选择在项目之间添加分隔线。

::component-example
---
name: 'page-list-example'
collapse: true
---
::

### **分隔线**

使用 `divide` 属性在每个子元素之间添加分隔线。

::component-example
---
name: 'page-list-divide-example'
collapse: true
---
::

### API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

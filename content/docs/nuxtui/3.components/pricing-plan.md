---
title: PricingPlan
description: 一个可定制的定价计划，用于显示在定价页面。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PricingPlan.vue
---

## 用法

`PricingPlan` 组件提供了一种灵活的方式来显示定价计划，其内容可定制，包括标题、描述、价格、功能等。

TODO

::tip
使用 `PricingPlans` 组件以响应式网格布局显示多个定价计划。
::

### 标题

使用 `title` prop 设置 `PricingPlan` 的标题。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan title="Solo" class="w-96" />
</template>
```
::

### 描述

使用 `description` prop 设置 `PricingPlan` 的描述。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan title="Solo" description="专为白手起家者和独立开发者设计。" />
</template>
```
::

### 徽章

使用 `badge` prop 在 `PricingPlan` 标题旁边显示一个 **Badge**。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    badge="最受欢迎"
  />
</template>
```
::

您可以传递 **Badge** 组件的任何属性来自定义它。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    :badge="{
      label: '最受欢迎',
      color: 'neutral',
      variant: 'solid'
    }"
  />
</template>
```
::

### 价格

使用 `price` prop 设置 `PricingPlan` 的价格。

::code-preview

TODO

#code

```vue
<template>
  <UPricingPlan title="Solo" description="专为白手起家者和独立开发者设计。" price="$249" />
</template>
```
::

### 折扣

使用 `discount` prop 设置一个折扣价，该价格将与原价（将被划掉显示）一起显示。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    discount="$199"
  />
</template>
```
::

### 计费

使用 `billing-cycle` 和/或 `billing-period` props 显示 `PricingPlan` 的计费信息。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$9"
    billing-cycle="/月"
    billing-period="按年计费"
  />
</template>
```
::

### 功能

使用 `features` prop 作为字符串数组，在 `PricingPlan` 上显示功能列表：

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    :features="[
      '一名开发者',
      '无限项目',
      '访问 GitHub 仓库',
      '无限补丁和次要更新',
      '终身访问'
    ]"
  />
</template>
```
::

::tip
您可以在 `app.config.ts` 中通过 `ui.icons.success` 键全局自定义此图标。
::

您还可以传递一个包含以下属性的对象数组：

* `title`: `string`
* `icon?`: `string`

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const features = ref([
  {
    title: '一名开发者',
    icon: 'i-lucide-user'
  },
  {
    title: '无限项目',
    icon: 'i-lucide-infinity'
  },
  {
    title: '访问 GitHub 仓库',
    icon: 'i-lucide-github'
  },
  {
    title: '无限补丁和次要更新',
    icon: 'i-lucide-refresh-cw'
  },
  {
    title: '终身访问',
    icon: 'i-lucide-clock'
  }
])
</script>

<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    :features="features"
  />
</template>
```
::

### 按钮

使用 `button` prop 并结合 **Button** 组件的任何属性，在 `PricingPlan` 底部显示一个按钮。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    :features="[
      '一名开发者',
      '无限项目',
      '访问 GitHub 仓库',
      '无限补丁和次要更新',
      '终身访问'
    ]"
    :button="{
      label: '立即购买'
    }"
  />
</template>
```
::

::tip
使用 `onClick` 字段添加点击处理程序以触发计划购买。
::

### 变体

使用 `variant` prop 更改 `PricingPlan` 的变体。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    :features="[
      '一名开发者',
      '无限项目',
      '访问 GitHub 仓库',
      '无限补丁和次要更新',
      '终身访问'
    ]"
    :button="{
      label: '立即购买'
    }"
    variant="subtle"
  />
</template>
```
::

### 方向

使用 `orientation` prop 更改 `PricingPlan` 的方向。默认为 `vertical`。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    :features="[
      '一名开发者',
      '无限项目',
      '访问 GitHub 仓库',
      '终身访问'
    ]"
    :button="{
      label: '立即购买'
    }"
    orientation="horizontal"
    variant="outline"
  />
</template>
```
::

### 标语

使用 `tagline` prop 在价格上方显示标语文本。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="For bootstrappers and indie hackers."
    price="$249"
    :features="[
      'One developer',
      'Unlimited projects',
      'Access to GitHub repository',
      'Lifetime access'
    ]"
    :button="{
      label: 'Buy now'
    }"
    orientation="horizontal"
    tagline="Pay once, own it forever"
  />
</template>

```
::

### 条款

使用 `terms` prop 在价格下方显示条款。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    :features="[
      '一名开发者',
      '无限项目',
      '访问 GitHub 仓库',
      '终身访问'
    ]"
    :button="{
      label: '立即购买'
    }"
    orientation="horizontal"
    tagline="一次性付款，永久拥有"
    terms="提供发票和收据。"
  />
</template>
```
::

### 高亮

使用 `highlight` prop 在 `PricingPlan` 周围显示高亮边框。

::code-preview

TODO

#code
```vue
<template>
  <UPricingPlan
    title="Solo"
    description="专为白手起家者和独立开发者设计。"
    price="$249"
    :features="[
      '一名开发者',
      '无限项目',
      '访问 GitHub 仓库',
      '无限补丁和次要更新',
      '终身访问'
    ]"
    :button="{
      label: '立即购买'
    }"
    highlight
  />
</template>
```
::

### 缩放

使用 `scale` prop 使一个 `PricingPlan` 比其他计划更大。

::note
请查看 PricingPlans 的 `scale` 示例，以了解其工作原理，因为它本身很难演示。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

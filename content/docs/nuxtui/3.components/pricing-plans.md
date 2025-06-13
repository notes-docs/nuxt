---
title: PricingPlans
description: 在响应式网格布局中显示定价计划列表。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PricingPlans.vue
---

## 用法

`PricingPlans` 组件提供了一个灵活的布局，可以使用默认插槽或 `plans` prop 来显示 `PricingPlan` 组件列表。

```vue{2,8}
<template>
  <UPricingPlans>
    <UPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </UPricingPlans>
</template>
```

::tip
网格列将根据计划数量自动计算，这适用于 `plans` prop，也适用于默认插槽。
::

### 计划

使用 `plans` prop 作为对象数组，其中包含 `PricingPlan` 组件的属性。

::component-code
---
pro: true
prettier: true
class: 'rounded-t-md'
ignore:
  - class
  - plans
hide:
  - class
external:
  - plans
externalTypes:
props:
  plans:
    - title: 'Solo'
      description: 'Tailored for indie hackers.'
      price: '$249'
      features: 
        - 'One developer'
        - 'Lifetime access'
      button: 
        label: 'Buy now'
    - title: 'Startup'
      description: 'Best suited for small teams.'
      price: '$499'
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: 'Organization'
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
---
::

### 方向

使用 `orientation` prop 更改 `PricingPlans` 的方向。默认为 `horizontal`。

::component-code
---
pro: true
prettier: true
class: 'rounded-t-md'
ignore:
  - class
  - plans
hide:
  - class
external:
  - plans
externalTypes:
props:
  class: 'w-full'
  orientation: 'vertical'
  plans:
    - title: 'Solo'
      description: 'Tailored for indie hackers.'
      price: '$249'
      features:
        - 'One developer'
        - 'Lifetime access'
      button:
        label: 'Buy now'
    - title: 'Startup'
      description: 'Best suited for small teams.'
      price: '$499'
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: 'Organization'
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
---
::

::tip
当使用 `plans` prop 而不是默认插槽时，计划的 `orientation` 会自动反转，`horizontal` 变为 `vertical`，反之亦然。
::

### 紧凑

使用 `compact` prop 减小计划之间的填充，当其中一个计划被放大时，以获得更好的视觉平衡。

::component-code
---
pro: true
prettier: true
class: 'rounded-t-md p-8'
ignore:
  - class
  - plans
  - compact
hide:
  - class
external:
  - plans
externalTypes:
props:
  compact: true
  plans:
    - title: 'Solo'
      description: 'Tailored for indie hackers.'
      price: '$249'
      features:
        - 'One developer'
        - 'Lifetime access'
      button:
        label: 'Buy now'
    - title: 'Startup'
      description: 'Best suited for small teams.'
      price: '$499'
      scale: true
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: 'Organization'
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
---
::

### 缩放

使用 `scale` prop 调整计划之间的间距，当其中一个计划被放大时，以获得更好的视觉平衡。

::component-code
---
pro: true
prettier: true
class: 'rounded-t-md p-8'
ignore:
  - class
  - plans
  - scale
hide:
  - class
external:
  - plans
externalTypes:
props:
  scale: false
  plans:
    - title: 'Solo'
      description: 'Tailored for indie hackers.'
      price: '$249'
      features:
        - 'One developer'
        - 'Lifetime access'
      button:
        label: 'Buy now'
    - title: 'Startup'
      description: 'Best suited for small teams.'
      price: '$499'
      scale: true
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: 'Organization'
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
---
::

## 示例

::note
尽管这些示例使用了 `Nuxt Content`，但组件可以与任何内容管理系统集成。
::

### 页面内

在页面中使用 `PricingPlans` 组件创建定价页面：

```vue{11} [pages/pricing/index.vue]
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <UPage>
    <UPageHero title="定价" />

    <UPageBody>
      <UContainer>
        <UPricingPlans :plans="plans" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
在此示例中，`plans` 是使用 `@nuxt/content` 模块中的 `queryCollection` 获取的。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

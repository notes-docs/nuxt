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

::component-example
---
name: 'pricing-plan-example'
source: false
---
::

::tip
使用 `PricingPlans` 组件以响应式网格布局显示多个定价计划。
::

### 标题

使用 `title` prop 设置 `PricingPlan` 的标题。

::component-code
---
pro: true
prettier: true
ignore:
  - class
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
---
::

### 描述

使用 `description` prop 设置 `PricingPlan` 的描述。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.' 
---
::

### 徽章

使用 `badge` prop 在 `PricingPlan` 标题旁边显示一个 **Badge**。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  badge: "Most popular"
---
::

您可以传递 **Badge** 组件的任何属性来自定义它。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - badge.label
  - badge.color
  - badge.variant
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  badge: 
    label: 'Most popular'
    color: 'neutral'
    variant: 'solid'
---
::

### 价格

使用 `price` prop 设置 `PricingPlan` 的价格。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
---
::

### 折扣

使用 `discount` prop 设置一个折扣价，该价格将与原价（将被划掉显示）一起显示。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  discount: "$199"
---
::

### 计费

使用 `billing-cycle` 和/或 `billing-period` props 显示 `PricingPlan` 的计费信息。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$9'
  billing-cycle: "/month"
  billing-period: "billed annually"
---
::

### 功能

使用 `features` prop 作为字符串数组，在 `PricingPlan` 上显示功能列表：

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features: 
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
---
::

::tip
您可以在 `app.config.ts` 中通过 `ui.icons.success` 键全局自定义此图标。
::

您还可以传递一个包含以下属性的对象数组：

* `title`: `string`
* `icon?`: `string`

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
hide:
  - class
external:
  - features
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - title: 'One developer'
      icon: 'i-lucide-user'
    - title: 'Unlimited projects'
      icon: 'i-lucide-infinity'
    - title: 'Access to GitHub repository'
      icon: 'i-lucide-github'
    - title: 'Unlimited patch & minor updates'
      icon: 'i-lucide-refresh-cw'
    - title: 'Lifetime access'
      icon: 'i-lucide-clock'
---
::

### 按钮

使用 `button` prop 并结合 **Button** 组件的任何属性，在 `PricingPlan` 底部显示一个按钮。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
---
::

::tip
使用 `onClick` 字段添加点击处理程序以触发计划购买。
::

### 变体

使用 `variant` prop 更改 `PricingPlan` 的变体。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
  - button.label
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  variant: 'subtle'
---
::

### 方向

使用 `orientation` prop 更改 `PricingPlan` 的方向。默认为 `vertical`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
  - button.label
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  orientation: 'horizontal'
  variant: 'subtle'
---
::

### 标语

使用 `tagline` prop 在价格上方显示标语文本。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
  - button.label
  - orientation
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  orientation: 'horizontal'
  tagline: 'Pay once, own it forever'
---
::

### 条款

使用 `terms` prop 在价格下方显示条款。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
  - button.label
  - orientation
  - tagline
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  orientation: 'horizontal'
  tagline: "Pay once, own it forever"
  terms: "Invoices and receipts available."
---
::

### 高亮

使用 `highlight` prop 在 `PricingPlan` 周围显示高亮边框。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - title
  - description
  - price
  - features
  - button.label
hide:
  - class
external:
externalTypes:
props:
  class: 'w-96'
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  highlight: true
---
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

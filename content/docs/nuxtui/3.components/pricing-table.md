---
title: PricingTable
description: 一个响应式定价表组件，用于显示分级定价计划和功能对比。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PricingTable.vue
---

## 用法
`PricingTable` 组件提供了一种响应式且可自定义的方式，以表格形式显示定价计划，在桌面端自动切换为水平表格布局以便于比较，在移动端则切换为垂直卡片布局以提高可读性。

TODO

### 层级

使用 `tiers` prop 作为对象数组来定义您的定价计划。每个层级对象支持以下属性：

* `id`: `string` - 层级的唯一标识符（必需）
* `title?`: `string` - 定价计划的名称
* `description?`: `string` - 计划的简短描述
* `price?`: `string` - 计划的当前价格（例如，“$99”，“€99”，“免费”）
* `discount?`: `string` - 折扣价格，将显示 `price` 并带有删除线（例如，“$79”，“€79”）
* `billingCycle?`: `string` - 显示在价格旁边的单价周期（例如，“/月”，“/席位/月”）
* `billingPeriod?`: `string` - 显示在计费周期上方的额外计费上下文（例如，“按月计费”）
* `badge?`: `string` | `BadgeProps` - 在标题旁边显示徽章 `{ color: 'primary', variant: 'subtle' }`
* `button?`: `ButtonProps` - 配置 CTA 按钮 `{ size: 'lg', block: true }`
* `highlight?`: `boolean` - 是否将此层级在视觉上强调为推荐选项

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const tiers = ref([
  {
    id: 'solo',
    title: 'Solo',
    description: '为独立开发者设计。',
    price: '$249',
    billingCycle: '/月',
    billingPeriod: '每年计费',
    badge: '最受欢迎',
    button: {
      label: '立即购买',
      variant: 'subtle'
    }
  },
  {
    id: 'team',
    title: 'Team',
    description: '为成长型团队设计。',
    price: '$499',
    billingCycle: '/月',
    billingPeriod: '每年计费',
    button: {
      label: '立即购买'
    },
    highlight: true
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: '为大型组织设计。',
    price: '自定义',
    button: {
      label: '联系销售',
      color: 'neutral'
    }
  }
])
</script>

<template>
  <UPricingTable :tiers="tiers" />
</template>
```
::

### 分区

使用 `sections` prop 将功能组织成逻辑组。每个分区代表您希望在不同定价层级之间进行比较的功能类别。

* `title`: `string` - 功能分区的标题
* `features`: `PricingTableSectionFeature[]` - 功能数组，包含其在每个层级中的可用性：
  * 每个功能都需要一个 `title` 和一个 `tiers` 对象，将层级 ID 映射到值
  * 布尔值（true/false）将显示为勾选（✓）或减号（-）图标
  * 字符串值将显示为文本（例如，“无限”，“最多 5 个用户”）
  * 数字值将按原样显示（例如，10，100）

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const tiers = ref([
  {
    id: 'solo',
    title: 'Solo',
    price: '$249',
    description: '为独立开发者设计。',
    billingCycle: '/月',
    button: {
      label: '立即购买',
      variant: 'subtle'
    }
  },
  {
    id: 'team',
    title: 'Team',
    price: '$499',
    description: '为成长型团队设计。',
    billingCycle: '/月',
    button: {
      label: '立即购买'
    }
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: '自定义',
    description: '为大型组织设计。',
    button: {
      label: '联系销售',
      color: 'neutral'
    }
  }
])
const sections = ref([
  {
    title: '功能',
    features: [
      {
        title: '开发者数量',
        tiers: {
          solo: '1',
          team: '5',
          enterprise: '无限'
        }
      },
      {
        title: '项目',
        tiers: {
          solo: true,
          team: true,
          enterprise: true
        }
      }
    ]
  },
  {
    title: '安全',
    features: [
      {
        title: 'SSO',
        tiers: {
          solo: false,
          team: true,
          enterprise: true
        }
      }
    ]
  }
])
</script>

<template>
  <UPricingTable :tiers="tiers" :sections="sections" />
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


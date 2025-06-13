---
title: PricingTable
description: 一个响应式定价表组件，用于显示分级定价计划和功能对比。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PricingTable.vue
navigation.badge: New
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

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - tiers
hide:
  - class
external:
  - tiers
externalTypes:
props:
  class: 'px-4'
  tiers:
    - id: 'solo'
      title: 'Solo'
      description: 'For indie hackers.'
      price: '$249'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      badge: 'Most popular'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      description: 'For growing teams.'
      price: '$499'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      button:
        label: 'Buy now'
      highlight: true
    - id: 'enterprise'
      title: 'Enterprise'
      description: 'For large organizations.'
      price: 'Custom'
      button:
        label: 'Contact sales'
        color: 'neutral'
---
::

### 分区

使用 `sections` prop 将功能组织成逻辑组。每个分区代表您希望在不同定价层级之间进行比较的功能类别。

* `title`: `string` - 功能分区的标题
* `features`: `PricingTableSectionFeature[]` - 功能数组，包含其在每个层级中的可用性：
  * 每个功能都需要一个 `title` 和一个 `tiers` 对象，将层级 ID 映射到值
  * 布尔值（true/false）将显示为勾选（✓）或减号（-）图标
  * 字符串值将显示为文本（例如，“无限”，“最多 5 个用户”）
  * 数字值将按原样显示（例如，10，100）

::component-code
---
pro: true
prettier: true
collapse: true
ignore:
  - class
  - tiers
  - sections
hide:
  - class
external:
  - tiers
  - sections
externalTypes:
props:
  class: 'px-4'
  tiers:
    - id: 'solo'
      title: 'Solo'
      description: 'For indie hackers.'
      price: '$249'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      badge: 'Most popular'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      description: 'For growing teams.'
      price: '$499'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      button:
        label: 'Buy now'
      highlight: true
    - id: 'enterprise'
      title: 'Enterprise'
      description: 'For large organizations.'
      price: 'Custom'
      button:
        label: 'Contact sales'
      color: 'neutral'
  sections:
    - title: 'Features'
      features:
        - title: 'Number of developers'
          tiers:
            solo: '1'
            team: '5'
            enterprise: 'Unlimited'
        - title: 'Projects'
          tiers:
            solo: true
            team: true
            enterprise: true
    - title: 'Security'
      features:
        - title: 'SSO'
          tiers:
            solo: false
            team: true
            enterprise: true
---
::

## 示例

### 插槽

PricingTable 组件提供了强大的插槽定制选项，可以根据您的内容量身定制显示效果。您可以使用通用插槽定制单个元素，或者使用其 ID 定位特定项目。

::component-example
---
name: 'pricing-table-example'
collapse: true
---
::

该组件支持多种插槽类型，以实现最大的定制灵活性：

| 插槽类型  | 匹配模式                                          | 描述  | 示例 |
|---|-----------------------------------------------|---|---|
| Tier slots  | `#{tier-id}-{element}`                          | 定位特定层级  | `#team-title`、`#solo-price`  |
| Section slots  | `#section-{id\|formatted-title}-title`          | 定位特定部分  | `#section-features-title`  |
| Feature slots  | `#feature-{id\|formatted-title}-{title \|value}` | 定位特定功能  | `#feature-developers-title`  |
| Generic slots  | `#tier-title`、`#section-title`                    | 应用于所有项目  | `#feature-value`  |

::note
当未提供 `id` 时，插槽名称会从标题自动生成（例如，“Premium Features!” 会变成 `#section-premium-features-title`）。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


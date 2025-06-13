---
title: PageAccordion
description: 一个预设样式的手风琴组件，用于在你的页面中显示。
category: data
module: ui-pro
links:
  - label: Accordion
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/accordion
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageAccordion.vue
---

## 用法

`PageAccordion` 组件构建在 `Accordion` 组件之上。它的样式与其他的页面组件匹配。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - items
hide:
  - class
external:
  - items
externalTypes:
props:
  class: 'px-4'
  items:
    - label: 'What are the main considerations when upgrading to Nuxt UI v3?'
      icon: 'i-lucide-circle-help'
      content: 'The transition to v3 involves significant changes, including new component structures, updated theming approaches, and revised TypeScript definitions. We recommend a careful, incremental upgrade process, starting with thorough testing in a development environment.'
    - label: 'Is Nuxt UI v3 compatible with standalone Vue projects?'
      icon: 'i-lucide-circle-help'
      content: 'Nuxt UI is now compatible with Vue! You can follow the [installation guide](/getting-started/installation/vue) to get started.'
    - label: 'What about Nuxt UI Pro?'
      icon: 'i-lucide-circle-help'
      content: 'We also rebuilt Nuxt UI Pro from scratch and released a v3.0.0-alpha.x package but it only contains the components to build this documentation yet. This will be a free update, so the license you buy now will be valid for v3. We are actively working to finish the rewrite of all Nuxt UI Pro components.'
---
::

## 示例

### **使用 Markdown 内容**

你可以使用 `@nuxtjs/mdc` 中的 `MDC` 组件在手风琴项中渲染 Markdown。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - items
hide:
  - class
external:
  - items
externalTypes:
slots: 
  body:  <MDC :value="item.content" unwrap="p" />
props:
  class: 'px-4'
  items:
  - label: 'What are the main considerations when upgrading to Nuxt UI v3?'
    icon: 'i-lucide-circle-help'
    content: 'The transition to v3 involves significant changes, including new component structures, updated theming approaches, and revised TypeScript definitions. We recommend a careful, incremental upgrade process, starting with thorough testing in a development environment.'
  - label: 'Is Nuxt UI v3 compatible with standalone Vue projects?'
    icon: 'i-lucide-circle-help'
    content: 'Nuxt UI is now compatible with Vue! You can follow the [installation guide](/getting-started/installation/vue) to get started.'
  - label: 'What about Nuxt UI Pro?'
    icon: 'i-lucide-circle-help'
    content: 'We also rebuilt Nuxt UI Pro from scratch and released a v3.0.0-alpha.x package but it only contains the components to build this documentation yet. This will be a free update, so the license you buy now will be valid for v3. We are actively working to finish the rewrite of all Nuxt UI Pro components.'
  - label: 'Will Nuxt UI v3 work with other CSS frameworks like UnoCSS?'
    icon: 'i-lucide-circle-help'
    content: 'Nuxt UI v3 is currently designed to work exclusively with Tailwind CSS. While there is interest in UnoCSS support, implementing it would require significant changes to the theme structure due to differences in class naming conventions. As a result, we do not have plans to add UnoCSS support in v3.'
  - label: 'How does Nuxt UI v3 handle accessibility?'
    icon: 'i-lucide-circle-help'
    content: 'Nuxt UI v3 enhances accessibility through Reka UI integration. This provides automatic ARIA attributes, keyboard navigation support, intelligent focus management, and screen reader announcements. While offering a strong foundation, proper implementation and testing in your specific use case remains crucial for full accessibility compliance. For more detailed information, refer to [Reka UI is accessibility documentation](https://reka-ui.com/docs/overview/accessibility).'
---
#body
<MDC :value="item.content" unwrap="p" />
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


---
description: 用于网站导航的层级链接。
category: navigation
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Breadcrumb.vue
---

## 用法

### Items

使用 `items` prop，它是一个包含以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`{lang="ts-type"}

你可以传递 [Link](/components/link#props) 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  items:
    - label: 'Home'
      icon: 'i-lucide-house'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/components/breadcrumb'
---
::

::note
当 `to` 属性未定义时，会渲染一个 `<span>` 标签而不是链接。
::

### 分隔符图标 (Separator Icon)

使用 `separator-icon` prop 来自定义每个条目之间的 [Icon](/components/icon)。默认为 `i-lucide-chevron-right`。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  separatorIcon: 'i-lucide-arrow-right'
  items:
    - label: 'Home'
      icon: 'i-lucide-house'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/components/breadcrumb'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.chevronRight` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.chevronRight` 键全局自定义此图标。
:::
::

## 示例

### 使用 separator slot

使用 `#separator` 插槽来自定义每个条目之间的分隔符。

:component-example{name="breadcrumb-separator-slot-example"}

### 使用 custom slot

使用 `slot` 属性来自定义特定条目。

你将可以使用以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

:component-example{name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
你也可以使用 `#item`, `#item-leading`, `#item-label` 和 `#item-trailing` 插槽来自定义所有条目。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

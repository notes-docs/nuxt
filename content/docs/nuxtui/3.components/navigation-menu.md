---
title: NavigationMenu
description: 一个可以水平或垂直显示的链接列表。
category: navigation
links:
  - label: NavigationMenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/NavigationMenu.vue
---

## 用法

### Items

使用 `items` prop 作为对象数组，具有以下属性：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
- `tooltip?: TooltipProps`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `type?: 'label' | 'trigger' | 'link'`{lang="ts-type"}
- `defaultOpen?: boolean`{lang="ts-type"}
- `open?: boolean`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?(e: Event): void`{lang="ts-type"}
- `children?: NavigationMenuChildItem[]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"}

你可以传递 [Link](/components/link#props) 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /components/progress
    - label: GitHub
      icon: i-simple-icons-github
      badge: 3.8k
      to: https://github.com/nuxt/ui
      target: _blank
    - label: Help
      icon: i-lucide-circle-help
      disabled: true
  class: 'w-full justify-center'
---
::

::note
你也可以将一个数组的数组传递给 `items` prop，以显示项目组。
::

::tip
每个项目都可以接受一个 `children` 对象数组，其中包含以下属性来创建子菜单：

- `label: string`
- `description?: string`
- `icon?: string`
- `onSelect?(e: Event): void`
- `class?: any`

::

### 方向 (Orientation)

使用 `orientation` prop 更改 NavigationMenu 的方向。

::note
当 orientation 为 `vertical` 时，将使用 [Accordion](/components/accordion) 组件来显示每个组。你可以使用 `open` 和 `defaultOpen` 属性控制每个项目的打开状态，并使用 [`collapsible`](/components/accordion#collapsible) 和 [`type`](/components/accordion#multiple) props 更改行为。
::

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /components
        active: true
        defaultOpen: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 3.8k
        to: https://github.com/nuxt/ui
        target: _blank
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
  class: 'data-[orientation=vertical]:w-48'
---
::

::note
当 `orientation` 为 `horizontal` 时，组之间会留有间距；当 `orientation` 为 `vertical` 时，组之间会分隔开。
::

### 折叠 (Collapsed)

在 `vertical` 方向上，使用 `collapsed` prop 折叠 NavigationMenu，这在侧边栏中非常有用。

::note
你可以使用 [`tooltip`](#with-tooltip-in-items) 和 [`popover`](#with-popover-in-items) props 来显示折叠项目的更多信息。
::

::component-code
---
collapse: true
ignore:
  - items
  - orientation
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
items:
  tooltip:
    - true
    - false
  popover:
    - true
    - false
props:
  collapsed: true
  tooltip: false
  popover: false
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /components
        active: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 3.8k
        to: https://github.com/nuxt/ui
        target: _blank
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
---
::

### 高亮 (Highlight)

使用 `highlight` prop 为活动项显示高亮边框。

使用 `highlight-color` prop 更改边框颜色。它默认为 `color` prop。

::component-code
---
collapse: true
prettier: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  highlight: true
  highlightColor: 'primary'
  orientation: 'horizontal'
  items:
    - - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /components
        active: true
        defaultOpen: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 3.8k
        to: https://github.com/nuxt/ui
        target: _blank
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
  class: 'data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48'
---
::

::note
在此示例中，`border-b` 类应用于在 `horizontal` 方向上显示边框，这不是默认行为，以便您拥有一个干净的画布。
::

::caution
在 `vertical` 方向上，`highlight` prop 仅高亮活动子项的边框。
::

### 颜色 (Color)

使用 `color` prop 更改 NavigationMenu 的颜色。

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  color: neutral
  items:
    - - label: Guide
        icon: i-lucide-book-open
        to: /getting-started
      - label: Composables
        icon: i-lucide-database
        to: /composables
      - label: Components
        icon: i-lucide-box
        to: /components
        active: true
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 3.8k
        to: https://github.com/nuxt/ui
        target: _blank
  class: 'w-full'
---
::

### 变体 (Variant)

使用 `variant` prop 更改 NavigationMenu 的变体。

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  color: neutral
  variant: link
  highlight: false
  items:
    - - label: Guide
        icon: i-lucide-book-open
        to: /getting-started
      - label: Composables
        icon: i-lucide-database
        to: /composables
      - label: Components
        icon: i-lucide-box
        to: /components
        active: true
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 3.8k
        to: https://github.com/nuxt/ui
        target: _blank
  class: 'w-full'
---
::

::note
`highlight` prop 改变了 `pill` 变体活动项的样式。尝试一下看看区别。
::

### 尾部图标 (Trailing Icon)

使用 `trailing-icon` prop 来自定义每个项目的尾部 [Icon](/components/icon)。默认为 `i-lucide-chevron-down`。此图标仅在项目有子项时显示。

::tip
你也可以通过在项目对象中使用 `trailingIcon` 属性为特定项目设置图标。
::

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /components/progress
  class: 'w-full justify-center'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 中通过 `ui.icons.chevronDown` 键全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 中通过 `ui.icons.chevronDown` 键全局自定义此图标。
:::
::

### 箭头 (Arrow)

使用 `arrow` prop 在项目有子项时显示 NavigationMenu 内容上的箭头。

::component-code
---
collapse: true
ignore:
  - items
  - arrow
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  arrow: true
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /components/progress
  class: 'w-full justify-center'
---
::

::note
箭头会跟随活动项进行动画。
::

### 内容方向 (Content Orientation)

使用 `content-orientation` prop 更改内容的显示方向。

::warning
此 prop 仅在 `orientation` 为 `horizontal` 时有效。
::

::component-code
---
collapse: true
ignore:
  - items
  - arrow
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  arrow: true
  contentOrientation: 'vertical'
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: Composables
      icon: i-lucide-database
      to: /composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /components/pagination
  class: 'w-full justify-center'
---
::

### 卸载 (Unmount)

使用 `unmount-on-hide` prop 控制内容卸载行为。默认为 `true`。

::component-code
---
collapse: true
ignore:
  - items
  - arrow
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  unmountOnHide: false
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /components/progress
  class: 'w-full justify-center'
---
::

::note
你可以检查 DOM 来查看每个项目的渲染内容。
::

## 示例

### 项中带工具提示 :badge{label="New" class="align-text-top"}

当 orientation 为 `vertical` 且菜单 `collapsed` 时，你可以将 `tooltip` prop 设置为 `true`，以在项目周围显示一个带标签的 [Tooltip](/components/tooltip)。你也可以在每个项目上使用 `tooltip` 属性来覆盖默认工具提示。

你可以全局或在每个项目上传递 [Tooltip](/components/tooltip) 组件的任何属性。

::component-code
---
collapse: true
ignore:
  - items
  - orientation
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
items:
  tooltip:
    - true
    - false
props:
  tooltip: true
  collapsed: true
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /components
        active: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 3.8k
        to: https://github.com/nuxt/ui
        target: _blank
        tooltip:
          text: 'Open on GitHub'
          kbds:
            - 3.8k
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
---
::

### 项中带气泡框 :badge{label="New" class="align-text-top"}

当 orientation 为 `vertical` 且菜单 `collapsed` 时，你可以将 `popover` prop 设置为 `true`，以在项目周围显示一个带子项的 [Popover](/components/popover)。你也可以在每个项目上使用 `popover` 属性来覆盖默认气泡框。

你可以全局或在每个项目上传递 [Popover](/components/popover) 组件的任何属性。

::component-code
---
collapse: true
ignore:
  - items
  - orientation
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
items:
  popover:
    - true
    - false
props:
  popover: true
  collapsed: true
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        popover:
          mode: 'click'
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /components
        active: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 3.8k
        to: https://github.com/nuxt/ui
        target: _blank
        tooltip:
          text: 'Open on GitHub'
          kbds:
            - 3.8k
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
---
::

::tip{to="#with-content-slot"}
你可以在 `vertical` 方向上使用 `#content` 插槽来自定义气泡框的内容。
::

### 控制活动项

你可以使用 `default-value` prop 或 `v-model` 指令以及项目的索引来控制活动项。

::component-example
---
collapse: true
name: 'navigation-menu-model-value-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="1"}、:kbd{value="2"} 或 :kbd{value="3"} 来切换活动项。
::

::tip
你也可以传递所提供项目之一的 `value`。
::

### 带自定义插槽

使用 `slot` 属性自定义特定项目。

你将可以使用以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}
- `#{{ item.slot }}-content`{lang="ts-type"}

::component-example
---
name: 'navigation-menu-custom-slot-example'
---
::

::tip{to="#slots"}
你也可以使用 `#item`, `#item-leading`, `#item-label`, `#item-trailing` 和 `#item-content` 插槽来自定义所有项目。
::

### 带内容插槽

使用 `#item-content` 插槽或 `slot` 属性（`#{{ item.slot }}-content`）来自定义特定项目的内容。

::component-example
---
collapse: true
name: 'navigation-menu-content-slot-example'
---
::

::note
在此示例中，我们在 `viewport` 上添加 `sm:w-(--reka-navigation-menu-viewport-width)` 类以获得动态宽度。这要求在内容的第一个子元素上设置宽度。
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

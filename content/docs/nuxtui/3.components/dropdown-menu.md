---
title: DropdownMenu
description: 点击元素时显示操作的菜单。
category: overlay
links:
  - label: DropdownMenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/DropdownMenu.vue
---

## 用法

在 DropdownMenu 的默认插槽中，使用一个 [Button](/components/button) 或任何其他组件。

### Items

使用 `items` prop，它是一个包含以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `color?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?(e: Event): void`{lang="ts-type"}
- [`onUpdateChecked?(checked: boolean): void`{lang="ts-type"}](#with-checkbox-items)
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

你可以传递 [Link](/components/link#props) 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
你也可以向 `items` prop 传递一个数组的数组，以创建分隔的项目组。
::

::tip
每个项目都可以接受一个 `children` 对象数组，其属性与 `items` prop 相同，以创建嵌套菜单，可以使用 `open`、`defaultOpen` 和 `content` 属性进行控制。
::

### 内容 (Content)

使用 `content` prop 来控制 DropdownMenu 内容的渲染方式，例如它的 `align` 或 `side`。

::component-code
---
prettier: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 箭头 (Arrow)

使用 `arrow` prop 来显示 DropdownMenu 上的箭头。

::component-code
---
prettier: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 尺寸 (Size)

使用 `size` prop 来控制 DropdownMenu 的尺寸。

::component-code
---
prettier: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
`size` prop 不会被代理到 Button，你需要自己设置它。
::

::note
当使用相同的尺寸时，DropdownMenu 项目将与 Button 完全对齐。
::

### 禁用 (Disabled)

使用 `disabled` prop 来禁用 DropdownMenu。

::component-code
---
prettier: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## 示例

### 带复选框项目

你可以使用 `type` 属性，将其设置为 `checkbox`，并使用 `checked` / `onUpdateChecked` 属性来控制项目的选中状态。

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
---
::

::note
为确保项目 `checked` 状态的响应性，建议将 `items` 数组封装在 `computed` 中。
::

### 使用颜色项

你可以使用 `color` 属性用颜色突出显示某些项目。

::component-example
---
name: 'dropdown-menu-color-items-example'
---
::

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'dropdown-menu-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 DropdownMenu。
::

### 使用自定义插槽

使用 `slot` 属性来自定义特定项目。

你将可以使用以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
你也可以使用 `#item`, `#item-leading`, `#item-label` 和 `#item-trailing` 插槽来自定义所有项目。
::

### 提取快捷键

当你有带 `kbds` 属性（显示一些 [Kbd](/components/kbd)）的项目时，你可以轻松地让它们与 [defineShortcuts](/composables/define-shortcuts) 可组合项一起工作。

在 `defineShortcuts` 可组合项内部，有一个 `extractShortcuts` 实用程序，它将递归地从项目中提取快捷键并返回一个对象，你可以将其传递给 `defineShortcuts`。当按下快捷键时，它将自动调用项目的 `select` 函数。

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
在此示例中，:kbd{value="meta"} :kbd{value="E"}、:kbd{value="meta"} :kbd{value="I"} 和 :kbd{value="meta"} :kbd{value="N"} 将触发相应项目的 `select` 函数。
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

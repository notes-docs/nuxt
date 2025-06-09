---
description: 一组每次只显示一个的标签页面板。
category: navigation
links:
  - label: Tabs
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Tabs.vue
---

## 用法

### Items

使用 `items` prop 作为对象数组，对象包含以下属性：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, label?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### 内容 (Content)

将 `content` prop 设置为 `false` 以将 Tabs 转换为仅切换控制，不显示任何内容。默认为 `true`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  content: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### 卸载 (Unmount)

使用 `unmount-on-hide` prop 防止 Tabs 折叠时内容被卸载。默认为 `true`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  unmountOnHide: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

::note
你可以检查 DOM 以查看每个项目的内容正在渲染。
::

### 颜色 (Color)

使用 `color` prop 更改 Tabs 的颜色。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### 变体 (Variant)

使用 `variant` prop 更改 Tabs 的变体。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  variant: link
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### 尺寸 (Size)

使用 `size` prop 更改 Tabs 的尺寸。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  size: md
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改 Tabs 的方向。默认为 `horizontal`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  orientation: vertical
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

## 示例

### 控制活动项目

你可以通过使用 `default-value` prop 或 `v-model` 指令以及项目的索引来控制活动项目。

:component-example{name="tabs-model-value-example"}

### 带内容插槽

使用 `#content` 插槽自定义每个项目的内容。

:component-example{name="tabs-content-slot-example"}

### 带自定义插槽

使用 `slot` 属性自定义特定项目。

你将可以使用以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}

:component-example{name="tabs-custom-slot-example"}

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

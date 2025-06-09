---
title: Timeline
description: 一个显示带有日期、标题、图标或头像的事件序列的组件。
category: data
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Timeline.vue
navigation.badge: Soon
---

## 用法

### Items

使用 `items` prop 作为对象数组，对象包含以下属性：

- `date?: string`{lang="ts-type"}
- `title?: string`{lang="ts-type"}
- `description?: AvatarProps`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, separator?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### 颜色 (Color)

使用 `color` prop 更改时间线中活动项目的颜色。

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  color: neutral
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### 尺寸 (Size)

使用 `size` prop 更改时间线的尺寸。

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  size: xs
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### 方向 (Orientation)

使用 `orientation` prop 更改时间线的方向。默认为 `vertical`。

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  orientation: 'horizontal'
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization.'
      icon: 'i-lucide-check-circle'
  class: 'w-full'
class: 'overflow-x-auto'
---
::

## 示例

### 控制活动项目

你可以通过使用 `default-value` prop 或 `v-model` 指令以及项目的索引来控制活动项目。

:component-example{name="timeline-model-value-example" prettier}

::tip
如果提供了 `value`，你也可以传递其中一个项目的 `value`。
::

### 带交替布局

使用 `ui` prop 创建具有交替布局的时间线。

:component-example{name="timeline-alternating-layout-example" prettier}

### 带自定义插槽

使用 `slot` 属性自定义特定项目。

你将可以使用以下插槽：

- `#{{ item.slot }}-indicator`{lang="ts-type"}
- `#{{ item.slot }}-date`{lang="ts-type"}
- `#{{ item.slot }}-title`{lang="ts-type"}
- `#{{ item.slot }}-description`{lang="ts-type"}

:component-example{name="timeline-custom-slot-example" prettier}

### 带插槽

使用可用插槽创建更复杂的时间线。

:component-example{name="timeline-slots-example" prettier}

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

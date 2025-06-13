---
title: PageLogos
description: 一个在页面中显示徽标或图像的列表。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageLogos.vue
---

## 用法

`PageLogos` 组件提供了一种灵活的方式来在你的页面中显示徽标或图像列表。

### **标题**

使用 `title` 属性设置徽标上方的标题。

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
externalTypes:
props:
  class: 'w-ful'
  title: 'Trusted by the best front-end teams'
  items:
    - 'i-simple-icons-github'
    - 'i-simple-icons-discord'
    - 'i-simple-icons-x'
    - 'i-simple-icons-instagram'
    - 'i-simple-icons-linkedin'
    - 'i-simple-icons-facebook'
---
::

### **数据项**

你可以通过两种方式显示徽标：

1.  使用 `items` 属性提供一个徽标列表。每个项目可以是：
  * 一个图标名称（例如，`i-simple-icons-github`）
  * 一个包含 `src` 和 `alt` 属性的对象，用于图像，这些图像将在 `UAvatar` 组件中使用。
2.  使用默认插槽来完全控制内容。

:::code-group

::component-code{label='使用数据项'}
---
pro: true
prettier: true
ignore:
  - class
  - items
  - title
hide:
  - class
external:
  - items
externalTypes:
props:
  class: 'w-ful'
  title: 'Trusted by the best front-end teams'
  items:
    - 'i-simple-icons-github'
    - 'i-simple-icons-discord'
    - 'i-simple-icons-x'
    - 'i-simple-icons-instagram'
    - 'i-simple-icons-linkedin'
    - 'i-simple-icons-facebook'
---
::

::component-code{label='使用插槽'}
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
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />

props:
  class: 'w-ful'
  title: 'Trusted by the best front-end teams'
---
<UIcon name="i-simple-icons-github" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-x" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0"></UIcon>
::

:::

### **跑马灯**

使用 `marquee` 属性启用徽标的跑马灯效果。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - items
  - marquee
hide:
  - class
external:
  - items
externalTypes:
props:
  class: 'w-ful'
  title: 'Trusted by the best front-end teams'
  marquee: true
  items:
    - 'i-simple-icons-github'
    - 'i-simple-icons-discord'
    - 'i-simple-icons-x'
    - 'i-simple-icons-instagram'
    - 'i-simple-icons-linkedin'
    - 'i-simple-icons-facebook'
---
::

::note
当你使用 `marquee` 模式时，可以通过传递 props 来自定义其行为。更多信息，请查看 `PageMarquee` 组件。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

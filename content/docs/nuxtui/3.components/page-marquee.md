---
title: PageMarquee
description: 一个用于创建无限滚动内容的组件。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageMarquee.vue
---

## 用法

**PageMarquee** 组件允许你用你的内容创建一个无限滚动动画。非常适合展示标志、推荐或任何重复内容，以引人入胜的方式。

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
---
<UIcon name="i-simple-icons-github" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-x" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0"></UIcon>
::

### 悬停暂停

使用 **pause-on-hover** prop 可以在用户悬停在内容上时暂停动画。

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
  pauseOnHover: true
---
<UIcon name="i-simple-icons-github" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-x" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0"></UIcon>
::

### 反向

使用 **reverse** prop 可以反转动画的方向。

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
  reverse: true
---
<UIcon name="i-simple-icons-github" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-x" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0"></UIcon>
::

### 方向

使用 **orientation** prop 可以改变滚动方向。

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
  orientation: 'vertical'
---
<UIcon name="i-simple-icons-github" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-x" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0"></UIcon>
::

### 重复

使用 **repeat** prop 可以指定内容在动画中重复的次数。

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
  repeat: 6
---
<UIcon name="i-simple-icons-github" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-x" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0"></UIcon>
::

### 叠加层

使用 **overlay** prop 可以移除跑马灯边缘的渐变叠加层。

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
  overlay: false
---
<UIcon name="i-simple-icons-github" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-x" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0"></UIcon>
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0"></UIcon>
::

## 示例

### 用户评价

使用 `PageMarquee` 组件为您的用户评价创建无限滚动动画。

::component-example
---
name: 'page-marquee-testimonials-example'
collapse: true
---
::

### 截图

使用 `PageMarquee` 组件为您的截图创建无限滚动动画。

::component-example
---
name: 'page-marquee-screenshots-example'
collapse: true
---
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


---
description: 显示用户信息，包括姓名、描述和头像。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/blob/v3/src/runtime/components/User.vue
---

## 用法

### 姓名

使用 `name` prop 显示用户的姓名。

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
props:
  class: 'px-4'
  name: 'John Doe'
---
::

### 描述

使用 `description` prop 显示用户的描述。

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
props:
  class: 'px-4'
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### 头像

使用 `avatar` prop 显示一个 **Avatar** 组件。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - name
  - description
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar: 
    src: 'https://i.pravatar.cc/150?u=john-doe'
    icon: 'i-lucide-image'
---
::

[显示所有头像属性] TODO

### 徽章

使用 `chip` prop 显示一个 **Chip** 组件。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - name
  - description
  - avatar.src
  - avatar.icon
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
    icon: 'i-lucide-image'
  chip:
    color: 'primary'
    position: 'top-right'
---
::

[显示所有徽章属性] TODO

### 尺寸

使用 `size` prop 更改用户头像和文本的大小。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - name
  - description
  - avatar.src
  - chip
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
  chip: true
  size: 'xl'
---
::

### 方向

使用 `orientation` prop 更改方向。默认为 `horizontal`。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - avatar.src
  - chip
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
  orientation: 'vertical'
---
::

### 链接

您可以传递 **<NuxtLink>** 组件的任何属性，例如 `to`、`target`、`rel` 等。

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - name
  - description
  - avatar.src
hide:
  - class
external:
externalTypes:
props:
  class: 'px-4'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
  to: "https://github.com/nuxt/ui-pro"
  target: '_blank'
---
::

::note
**NuxtLink** 组件将继承您传递给 **User** 组件的所有其他属性。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}


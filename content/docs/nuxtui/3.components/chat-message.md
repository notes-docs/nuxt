---
title: ChatMessage
description: 显示带有图标、头像和动作的聊天消息。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/ChatMessage.vue
navigation.badge: New
---

## 用法 (Usage)

`ChatMessage` 组件渲染一个 `<article>` 元素，用于显示 user 或者 `assistant` 的聊天消息。

::component-example
---
name: 'chat-message-example'
source: false
---
::

::tip
使用 `ChatMessages` 组件显示聊天消息列表。
::

### 内容 (Content)

使用 `content` prop 显示消息内容。

::component-code
---
pro: true
prettier: true
ignore:
hide:
external:
externalTypes:
props:
  content: 'Hello! Tell me more about building AI chatbots with Nuxt UI Pro.'
---
::

### 侧边 (Side)

使用 `side` prop 将消息显示在左侧或右侧。

::component-code
---
pro: true
prettier: true
ignore:
  - content
hide:
external:
externalTypes:
props:
  side: 'right'
  content: 'Hello! Tell me more about building AI chatbots with Nuxt UI Pro.'
---
::

::note
当使用 `ChatMessages` 组件时，`side` prop 对于 `assistant` 消息设置为 `left`，对于 `user` 消息设置为 `right`。
::

### 变体 (Variant)

使用 `variant` prop 更改消息的样式。

::component-code
---
pro: true
prettier: true
ignore:
  - content
hide:
external:
externalTypes:
props:
  variant: 'soft'
  content: 'Hello! Tell me more about building AI chatbots with Nuxt UI Pro.'
---
::

::note
当使用 `ChatMessages` 组件时，`variant` prop 对于 `assistant` 消息设置为 `naked`，对于 `user` 消息设置为 `soft`。
::

### 图标 (Icon)

使用 `icon` prop 在消息旁边显示一个 `Icon` 组件。

::component-code
---
pro: true
prettier: true
ignore:
  - content
  - variant
  - side
hide:
external:
externalTypes:
props:
  icon: "i-lucide-user"
  variant: 'soft'
  side: 'right'
  content: 'Hello! Tell me more about building AI chatbots with Nuxt UI Pro.'
---
::

### 头像 (Avatar)

使用 `avatar` prop 在消息旁边显示一个 [Avatar](https://ui.nuxt.com/components/avatar) 组件。

::component-code
---
pro: true
prettier: true
ignore:
  - content
  - variant
  - side
hide:
external:
externalTypes:
props:
  avatar:
    src: 'https://github.com/benjamincanac.png'
  variant: 'soft'
  side: 'right'
  content: 'Hello! Tell me more about building AI chatbots with Nuxt UI Pro.'
---
::

你也可以使用 `avatar.icon` prop 将图标显示为头像。

::component-code
---
pro: true
prettier: true
ignore:
  - content
hide:
external:
externalTypes:
props:
  avatar:
    icon: 'i-lucide-bot'
  content: 'Nuxt UI Pro offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the useChat composable from Vercel AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
---
::

### 操作 (Actions)

使用 `actions` prop 在消息下方显示操作，这些操作将在鼠标悬停在消息上时显示。

::component-code
---
pro: true
prettier: true
ignore:
  - content
  - actions
hide:
external:
externalTypes:
props:
  actions: 
    - label: 'Copy to clipboard'
      icon: 'i-lucide-copy'
  content: 'Nuxt UI Pro offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the useChat composable from Vercel AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
---
::

## API

### 属性 (Props)

:component-props

### 插槽 (Slots)

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

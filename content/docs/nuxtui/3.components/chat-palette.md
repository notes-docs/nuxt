---
title: ChatPalette
description: 聊天面板用于在覆盖层内创建聊天机器人界面。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/ChatPalette.vue
navigation.badge: New
---

## 用法 (Usage)

`ChatPalette` 组件是一个结构化的布局包装器，它将 `ChatMessages` 组织在可滚动的内容区域中，将 `ChatPrompt` 组织在固定的底部部分，从而为模态框、侧滑抽屉或抽屉式界面创建内聚的聊天机器人界面。

```vue{2,8}
<template>
  <UChatPalette>
    <UChatMessages />

    <template #prompt>
      <UChatPrompt />
    </template>
  </UChatPalette>
</template>
```

## 示例 (Examples)

::note
这些聊天组件设计用于与 **Vercel AI SDK** 的 `useChat` 可组合函数一起使用。
::

### 在模态框内 (Within a Modal)

你可以在 `Modal` 的内容中使用 `ChatPalette` 组件。

::component-example
---
name: 'chat-palette-modal-example'
iframe: true
overflowHidden:  true
class: 'h-[500px]'
collapse: true
---
::

### 在内容搜索中 (Within ContentSearch)

你可以在 `ContentSearch` 的内容中条件性地使用 `ChatPalette` 组件，以便在用户选择项目时显示聊天机器人界面。

::component-example
---
name: 'chat-palette-modal-within-content-search-example'
iframe: true
overflowHidden:  true
class: 'h-[500px]'
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

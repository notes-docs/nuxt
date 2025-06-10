---
title: ChatPrompt
description: 增强的文本区域，用于在 AI 聊天界面中提交提示。
category: form
module: ui-pro
links:
  - label: Textarea  文本区域
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/textarea
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/ChatPrompt.vue
---

## 用法 (Usage)

`ChatPrompt` 组件渲染一个 `<form>` 元素，并扩展了 `Textarea` 组件，因此你可以传递任何属性，例如 `icon`、`placeholder`、`autofocus` 等。

TODO

::note
`ChatPrompt` 处理以下事件：

* 当用户按下 **`↵`** 或点击提交按钮时，表单会 **提交**。
* 当按下 **`⎋`** 时，文本区域会 **失焦** 并发出 `close` 事件。
::

### 变体 (Variant)

使用 `variant` prop 更改提示的样式。默认为 `outline`。

::code-preview

TODO

#code
```vue
<template>
  <UChatPrompt variant="soft" />
</template>
```
::

## 示例 (Examples)

::note{to="https://sdk.vercel.ai/docs/getting-started/nuxt"}
这些聊天组件设计用于与 **Vercel AI SDK** 的 `useChat` 可组合函数一起使用。
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-pro/chat"}
请查看我们 GitHub 上的 AI 聊天模板源代码，了解实际示例。
::

### 在页面内 (Within a page)

在页面中使用 `ChatPrompt` 组件和 `useChat` 可组合函数来显示聊天提示。

传递 `input` prop 以及 `error` prop，以便在发生错误时禁用文本区域。

```vue{4,21,23} [pages/[id].vue]
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const { messages, input, handleSubmit, reload, stop, status, error } = useChat()
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <UChatMessages :messages="messages" :status="status">
          <template #content="{ message }">
            <MDC :value="message.content" :cache-key="message.id" unwrap="p" />
          </template>
        </UChatMessages>
      </UContainer>
    </template>

    <template #footer>
      <UContainer>
        <UChatPrompt v-model="input" :error="error" @submit="handleSubmit">
          <UChatPromptSubmit :status="status" @stop="stop" @reload="reload" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

你也可以将其用作聊天界面的起点。

```vue [pages/index.vue]
<script setup lang="ts">
const input = ref('')
const loading = ref(false)

async function onSubmit() {
  loading.value = true

  const chat = await $fetch('/api/chats', {
    method: 'POST',
    body: { input }
  })

  navigateTo(`/chat/${chat.id}`)
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>今天我能帮到你什么？</h1>

        <UChatPrompt v-model="input" :status="loading ? 'streaming' : 'ready'" @submit="onSubmit">
          <UChatPromptSubmit />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## 主题 (Theme)

:component-theme{pro=true}

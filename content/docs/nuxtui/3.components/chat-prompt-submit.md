---
title: ChatPromptSubmit
description: 一个用于提交聊天提示的按钮，具有自动状态处理功能。
category: element
module: ui-pro
links:
  - label: Button  按钮
    icon: i-simple-icons-nuxt
    to: https://ui.nuxt.com/components/button
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/ChatPromptSubmit.vue
navigation.badge: New
---

## 用法 (Usage)

`ChatPromptSubmit` 组件用于 `ChatPrompt` 组件内部，以提交提示。它自动处理不同的 **状态** 值来控制聊天。

它扩展了 `Button` 组件，因此你可以传递任何属性，例如 `color`、`variant`、`size` 等。

::code-preview

:::u-chat-prompt
:u-chat-prompt-submit
:::

#code
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
你也可以在 `ChatPrompt` 组件的 `footer` 插槽中使用它。
::

### 准备就绪 (Ready)

当状态为 **`ready`** 时，使用 `color`、`variant` 和 `icon` prop 来自定义按钮。默认为：

* `color="primary"`
* `variant="solid"`
* `icon="i-lucide-arrow-up"`

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
items:
  color:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  class: 'max-w-md'
  color: 'primary'
  variant: 'solid'
  icon: 'i-lucide-arrow-up'
---
::

::tip
你可以在 `app.config.ts` 中的 `ui.icons.arrowUp` 键下全局自定义此图标。
::

### 已提交 (Submitted)

当状态为 **`submitted`** 时，使用 `submitted-color`、`submitted-variant` 和 `submitted-icon` prop 来自定义按钮。默认为：

* `submittedColor="neutral"`
* `submittedVariant="subtle"`
* `submittedIcon="i-lucide-square"`

::note
当用户点击按钮时，会发出 `stop` 事件。
::

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - status
hide:
  - class
external:
externalTypes:
items:
  submitted-color:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  submitted-variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  class: 'max-w-md'
  submitted-color: "neutral"
  submitted-variant: "subtle"
  submitted-icon: "i-lucide-square"
  status: "submitted"
---
::

::tip
你可以在 `app.config.ts` 中的 `ui.icons.stop` 键下全局自定义此图标。
::

### 流式传输中 (Streaming)

当状态为 **`streaming`** 时，使用 `streaming-color`、`streaming-variant` 和 `streaming-icon` prop 来自定义按钮。默认为：

* `streamingColor="neutral"`
* `streamingVariant="subtle"`
* `streamingIcon="i-lucide-square"`

::note
当用户点击按钮时，会发出 `stop` 事件。
::

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - status
hide:
  - class
external:
externalTypes:
items:
  streaming-color:
  - primary
  - secondary
  - success
  - warning
  - error
  - neutral
  streaming-variant:
  - solid
  - outline
  - soft
  - subtle
  - ghost
props:
  class: 'max-w-md'
  streaming-color: "neutral"
  streaming-variant: "subtle"
  streaming-icon: "i-lucide-square"
  status: "streaming"
---
::

::tip
你可以在 `app.config.ts` 中的 `ui.icons.stop` 键下全局自定义此图标。
::

### 错误 (Error)

当状态为 **`error`** 时，使用 `error-color`、`error-variant` 和 `error-icon` prop 来自定义按钮。默认为：

* `errorColor="error"`
* `errorVariant="soft"`
* `errorIcon="i-lucide-rotate-ccw"`

::note
当用户点击按钮时，会发出 `reload` 事件。
::

::component-code
---
pro: true
prettier: true
ignore:
  - class
  - status
hide:
  - class
external:
externalTypes:
items:
  error-color:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  error-variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  class: 'max-w-md'
  error-color: "error"
  error-variant: "soft"
  error-icon: "i-lucide-rotate-ccw"
  status: "error"
---
::

::tip
你可以在 `app.config.ts` 中的 `ui.icons.reload` 键下全局自定义此图标。
::

## 示例 (Examples)

::note{to="/docs/getting-started/nuxt"}
这些聊天组件设计用于与 **Vercel AI SDK** 的 `useChat` 可组合函数一起使用。
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-pro/chat"}
请查看我们 GitHub 上的 AI 聊天模板 源代码，了解实际示例。
::

### 在页面内 (Within a page)

在页面中使用 `ChatPromptSubmit` 组件和 `useChat` 可组合函数来显示聊天提示。

传递 `status` prop 并监听 `stop` 和 `reload` 事件以控制聊天。

```vue{4,22} [pages/[id].vue]
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

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## 主题 (Theme)

:component-theme{pro=true}

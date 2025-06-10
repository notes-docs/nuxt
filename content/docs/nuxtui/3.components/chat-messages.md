---
title: chatMessages
description: 显示聊天消息列表，旨在与 Vercel AI SDK 无缝协作。
category: layout
module: ui-pro
links:
  - label: AI SDK
    icon: i-simple-icons-ai
    to: https://sdk.vercel.ai/
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/ChatMessages.vue
---

## 用法 (Usage)

`ChatMessages` 组件通过 **默认插槽** 或 `messages` prop 显示 `ChatMessage` 组件列表。

```vue{2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="tabler:rocket"}
此组件专为 AI 聊天机器人而设计，具有以下功能：

* 加载时 **初始滚动到底部** (`shouldScrollToBottom`)。
* 新消息到达时 **持续向下滚动** (`shouldAutoScroll`)。
* 向上滚动时会出现一个 “自动滚动” 按钮，允许用户跳回最新消息 (`autoScroll`)。
* 助手处理期间显示 **加载指示器** (`status`)。
* 提交的消息将滚动到视口顶部，并且最后一条用户消息的高度会动态调整。
::

### 消息 (Messages)

使用 `messages` prop 显示聊天消息列表。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  }
])
</script>

<template>
  <UChatMessages :messages="messages" />
</template>
```
::


### 状态 (Status)

使用 `status` prop 在助手处理时显示视觉指示器。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  }
])
</script>

<template>
  <UChatMessages status="submitted" :messages="messages" />
</template>
```
::

::note
以下是 `useChat` 可组合函数发送的不同状态的详细信息：

* **`submitted`**: 消息已发送到 API，我们正在等待响应流的开始。
* **`streaming`**: 响应正在从 API 中积极地流式传输，接收数据块。
* **`ready`**: 已收到并处理完整的响应；可以提交新的用户消息。
* **`error`**: API 请求期间发生错误，导致无法成功完成。
::

### 用户 (User)

使用 `user` prop 更改**用户**消息的 [ChatMessage](/ui/components/chat-message) prop。默认为：

* `side`: `'right'`
* `variant`: `'soft'`

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  }
])
</script>

<template>
  <UChatMessages
    :user="{
      side: 'left',
      variant: 'solid',
      avatar: {
        src: 'https://github.com/benjamincanac.png'
      }
    }"
    :messages="messages"
  />
</template>
```
::

### 助手 (Assistant)

使用 `assistant` prop 更改 `assistant` 消息的 [ChatMessage](/ui/components/chat-message) prop。默认为：

* `side`: `'left'`
* `variant`: `'naked'`

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  }
])
</script>

<template>
  <UChatMessages
    :assistant="{
      side: 'left',
      variant: 'outline',
      avatar: {
        icon: 'i-lucide-bot'
      },
      actions: [
        {
          label: '复制到剪贴板',
          icon: 'i-lucide-copy'
        }
      ]
    }"
    :messages="messages"
  />
</template>
```
::


### 自动滚动 (Auto Scroll)

使用 `auto-scroll` prop 自定义或隐藏（`false` 值）在聊天顶部滚动时显示的自动滚动按钮。默认为：

* `color`: `'neutral'`
* `variant`: `'outline'`

你可以传递 [Button](/ui/components/button) 组件的任何属性来自定义它。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
  },
  {
    id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'user',
    content: 'Can you recommend some popular tourist attractions in Kyoto?'
  },
  {
    id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
  }
])
</script>

<template>
  <UChatMessages
    :auto-scroll="{
      color: 'neutral',
      variant: 'outline'
    }"
    :should-scroll-to-bottom="false"
    :messages="messages"
  />
</template>
```
::

### 自动滚动图标 (Auto Scroll Icon)

使用 `auto-scroll-icon` prop 自定义自动滚动按钮的 [Icon](/ui/components/icon)。默认为 `i-lucide-arrow-down`。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    content: 'Hello, how are you?'
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    content: 'I am doing well, thank you for asking! How can I assist you today?'
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    content: 'What is the current weather in Tokyo?'
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
  },
  {
    id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'user',
    content: 'Can you recommend some popular tourist attractions in Kyoto?'
  },
  {
    id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    content:
      'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
  }
])
</script>

<template>
  <UChatMessages
    auto-scroll-icon="i-lucide-chevron-down"
    :should-scroll-to-bottom="false"
    :messages="messages"
  />
</template>
```
::

::tip
你可以在 `app.config.ts` 中的 `ui.icons.arrowDown` 键下全局自定义此图标。
::

### 应该自动滚动 (Should Auto Scroll)

使用 `should-auto-scroll` prop 启用/禁用消息流式传输时的连续自动滚动。默认为 `false`。

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### 应该滚动到底部 (Should Scroll To Bottom)

使用 `should-scroll-to-bottom` prop 启用/禁用组件挂载时自动滚动到底部。默认为 `true`。

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

## 示例 (Examples)

::note{to="https://sdk.vercel.ai/docs/getting-started/nuxt"}
这些聊天组件设计用于与 Vercel AI SDK 的 `useChat` 可组合函数一起使用。
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-pro/chat"}
请查看我们 GitHub 上的 AI 聊天模板 源代码，了解实际示例。
::

### 在页面内 (Within a page)

在页面中使用 `ChatMessages` 组件和 `useChat` 可组合函数来显示聊天消息列表。
传递 `messages` prop 以及 `status` prop，后者将用于自动滚动和指示器显示。

```vue [pages/[id].vue]
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

::note
在此示例中，我们使用 `@nuxtjs/mdc` 的 `MDC` 组件来渲染消息内容。由于 Nuxt UI Pro 提供了预设样式的 Prose 组件，你的内容将自动获得样式。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

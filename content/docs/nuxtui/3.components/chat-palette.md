---
tittle: ChatPalette
description: 聊天面板用于在覆盖层内创建聊天机器人界面。
category: navigation
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/ChatPalette.vue
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

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const { messages, input, handleSubmit, status, error } = useChat()
</script>

<template>
  <UModal open :ui="{ content: 'sm:h-[28rem]' }">
    <template #content>
      <UChatPalette>
        <UChatMessages
          :messages="messages"
          :status="status"
          :user="{ side: 'left', variant: 'naked', avatar: { src: 'https://github.com/benjamincanac.png' } }"
          :assistant="{ icon: 'i-lucide-bot' }"
        >
          <template #content="{ message }">
            <MDC :value="message.content" :cache-key="message.id" unwrap="p" />
          </template>
        </UCatMessages>

        <template #prompt>
          <UChatPrompt
            v-model="input"
            icon="i-lucide-search"
            variant="naked"
            :error="error"
            @submit="handleSubmit"
          />
        </template>
      </UChatPalette>
    </template>
  </UModal>
</template>
```
::

### 在内容搜索中 (Within ContentSearch)

你可以在 `ContentSearch` 的内容中条件性地使用 `ChatPalette` 组件，以便在用户选择项目时显示聊天机器人界面。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const groups = computed(() => [{
  id: 'ai',
  ignoreFilter: true,
  items: [{
    label: searchTerm.value ? `Ask AI for “${searchTerm.value}”` : 'Ask AI',
    icon: 'i-lucide-bot',
    onSelect: (e: any) => {
      e.preventDefault()

      ai.value = true

      if (searchTerm.value) {
        setMessages([{
          id: '1',
          role: 'user',
          content: searchTerm.value
        }])

        reload()
      }
    }
  }]
}])

const ai = ref(false)
const searchTerm = ref('')

const { messages, input, handleSubmit, status, error, reload, setMessages } = useChat()

function onClose(e: Event) {
  e.preventDefault()

  ai.value = false
}
</script>

<template>
  <ClientOnly>
    <LazyUContentSearch v-model:search-term="searchTerm" open :groups="groups">
      <template v-if="ai" #content>
        <UChatPalette>
          <UChatMessages
            :messages="messages"
            :status="status"
            :user="{ side: 'left', variant: 'naked', avatar: { src: 'https://github.com/benjamincanac.png' } }"
            :assistant="{ icon: 'i-lucide-bot' }"
          >
            <template #content="{ message }">
              <MDC :value="message.content" :cache-key="message.id" unwrap="p" />
            </template>
          </UChatMessages>

          <template #prompt>
            <UChatPrompt
              v-model="input"
              icon="i-lucide-search"
              variant="naked"
              :error="error"
              @submit="handleSubmit"
              @close="onClose"
            />
          </template>
        </UChatPalette>
      </template>
    </LazyUContentSearch>
  </ClientOnly>
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

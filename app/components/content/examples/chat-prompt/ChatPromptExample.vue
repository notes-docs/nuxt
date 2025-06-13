<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const { messages, input, handleSubmit, reload, stop, status, error } = useChat()
const { model } = useLLM()
</script>

<template>
  <UContainer>
    <UChatPrompt
      v-model="input"
      :error="error"
      variant="subtle"
      class="sticky bottom-0 [view-transition-name:chat-prompt] rounded-b-none z-10"
      @submit="handleSubmit"
    >
      <UChatPromptSubmit
        :status="status"
        color="neutral"
        @stop="stop"
        @reload="reload"
      />

      <template #footer>
        <ModelSelect v-model="model" />
      </template>
    </UChatPrompt>
  </UContainer>
</template>

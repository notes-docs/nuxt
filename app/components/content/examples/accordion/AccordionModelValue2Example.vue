<template>
  <div>
    <h2>使用 v-model 控制手风琴</h2>
    <p>当前展开项的值: {{ activeAccordionItem }}</p>

    <UAccordion
      v-model="activeAccordionItem"
      :items="accordionItems"
      type="single"
    />

    <UDivider class="my-6" />

    <h2>使用 v-model 控制多个手风琴</h2>
    <p>当前展开项的值 (多选): {{ activeMultipleAccordionItems }}</p>

    <UAccordion
      v-model="activeMultipleAccordionItems"
      :items="accordionItems"
      type="multiple"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AccordionItem } from '@nuxt/ui'

const accordionItems: AccordionItem[] = [
  { label: '服务条款', content: '这里是服务条款的详细内容。', value: 'terms' },
  { label: '隐私政策', content: '这里是隐私政策的详细内容。', value: 'privacy' },
  { label: '联系方式', content: '您可以通过邮箱或电话联系我们。', value: 'contact' }
];

// 单选模式的 v-model
const activeAccordionItem = ref<string | null>('privacy'); // 初始展开 'privacy'

// 多选模式的 v-model
const activeMultipleAccordionItems = ref<string[]>(['terms']); // 初始展开 'terms'
</script>

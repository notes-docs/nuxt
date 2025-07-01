<template>
  <div>
    <h2>使用 @update:modelValue 监听手风琴状态</h2>
    <p>当前展开项: {{ currentActiveItem }}</p>
    <p>上一个操作: {{ lastAction }}</p>

    <UAccordion
      :model-value="currentActiveItem"
      @update:model-value="handleAccordionChange"
      :items="accordionItems"
      type="single"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AccordionItem } from '@nuxt/ui'

const accordionItems: AccordionItem[] = [
  { label: '产品介绍', content: '我们的产品功能强大，操作简便。', value: 'product' },
  { label: '技术支持', content: '遇到任何问题，请联系我们的技术支持团队。', value: 'support' },
  { label: '合作伙伴', content: '期待与您建立长期的合作关系。', value: 'partners' }
];

const currentActiveItem = ref<string | null>('product');
const lastAction = ref<string>('无');

const handleAccordionChange = (newValue: string | string[]) => {
  console.log('手风琴状态改变了！新值:', newValue);

  // 根据新旧值判断是展开还是折叠
  if (Array.isArray(newValue)) { // 多选模式
    if (currentActiveItem.value && !newValue.includes(currentActiveItem.value[0])) { // 假设只关心第一个元素
      lastAction.value = `折叠了: ${currentActiveItem.value[0]}`;
    } else if (newValue.length > (currentActiveItem.value as string[]).length) {
      const newOpened = newValue.filter(val => !(currentActiveItem.value as string[]).includes(val));
      lastAction.value = `展开了: ${newOpened.join(', ')}`;
    } else {
      lastAction.value = '状态更新';
    }
  } else { // 单选模式
    if (newValue === null) {
      lastAction.value = `折叠了: ${currentActiveItem.value}`;
    } else if (currentActiveItem.value === null) {
      lastAction.value = `展开了: ${newValue}`;
    } else {
      lastAction.value = `从 ${currentActiveItem.value} 切换到 ${newValue}`;
    }
  }

  // 更新组件的 active 状态，这是必须的，因为我们没有使用 v-model
  currentActiveItem.value = newValue as string | null;

  // 你可以在这里执行其他逻辑，例如发送分析事件，加载数据等
  if (newValue === 'support') {
    console.log('用户展开了技术支持，准备加载相关文档...');
    // loadSupportDocs();
  }
};
</script>

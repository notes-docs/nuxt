<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items1: AccordionItem[] = [
  {
    label: '什么是 Nuxt UI？',
    icon: 'iconamoon:question-mark-circle-light',
    content: 'Nuxt UI 是一个基于 Vue 3 和 Tailwind CSS 的开源 UI 库，旨在为 Nuxt 应用程序提供可组合、无障碍和高度可定制的 UI 组件。'
  },
  {
    label: '如何开始使用 Nuxt UI？',
    icon: 'lets-icons:arrow-right-light',
    content: '您可以通过在 Nuxt 项目中安装 `@nuxt/ui` 模块并将其添加到 `nuxt.config.ts` 来开始使用。'
  },
  {
    label: 'Nuxt UI 支持哪些主题？',
    icon: 'ph:paint-brush-light',
    content: 'Nuxt UI 提供开箱即用的深色和浅色主题，并且所有组件都可通过 `ui` 属性或 `app.config.ts` 进行高度定制。'
  }
];

const items2: AccordionItem[] = [
  {
    label: '核心原则',
    icon: 'stash:light-bulb-light',
    content: '我们的设计理念是简洁、高效和可扩展性。'
  },
  {
    label: '创新技术',
    icon: 'heroicons-outline:sparkles',
    content: '我们积极探索并应用最新的前端技术。'
  },
  {
    label: '用户体验',
    icon: 'fa6-regular:face-smile',
    content: '始终将用户体验放在首位，致力于提供流畅和直观的界面。'
  }
];

const items3: AccordionItem[] = [
  {
    label: '默认样式项',
    content: '这个项会继承父级 UAccordion 的 UI 样式。'
  },
  {
    label: '定制背景色和文本色',
    content: '这个项有其独特的背景和文本颜色。',
    ui: { // 这个 ui 属性只应用于当前这个 AccordionItem
      item: 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700',
      header: 'bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 hover:!bg-green-300 dark:hover:!bg-green-700', // 注意 ! 用于提高优先级
      content: 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
    }
  },
  {
    label: '定制图标和触发器',
    icon: 'iconamoon:star-light',
    content: '这个项有定制的图标和触发器样式。',
    ui: {
      leadingIcon: 'text-yellow-500', // 仅此项的左侧图标变为黄色
      trigger: 'p-6 font-mono text-purple-700 dark:text-purple-300' // 仅此项的触发器字体和颜色
    }
  }
];
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-6">UAccordion UI 属性示例</h2>

    <div class="space-y-8">
      <div>
        <h3 class="text-xl font-semibold mb-4">示例 1: 基本样式定制</h3>
        <UAccordion
          :items="items1"
          :ui="{
            // root: 'bg-white dark:bg-gray-900 shadow-lg rounded-xl', // 整个手风琴容器的样式
            item: 'border-b border-gray-200 dark:border-gray-700 last:border-b-0', // 每个手风琴项的底部边框
            header: 'hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200', // 头部悬停效果
            trigger: 'p-4 flex items-center justify-between w-full text-left', // 触发器内边距和对齐
            content: 'px-4 pb-4 text-gray-700 dark:text-gray-300' // 内容区域的内边距和文本颜色
          }"
        />
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">示例 2: 深度定制与特定项样式</h3>
        <UAccordion
          :items="items2"
          type="multiple"
          :ui="{
            // 全局样式
            root: 'bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-purple-300 dark:border-purple-700',
            item: 'border-b border-purple-200 dark:border-purple-800 last:border-b-0',
            header: 'bg-purple-50 dark:bg-purple-950 text-purple-800 dark:text-purple-200',
            trigger: 'p-5 font-bold text-lg',
            leadingIcon: 'text-purple-600 dark:text-purple-400',
            trailingIcon: 'text-purple-600 dark:text-purple-400 transition-transform duration-200 ui-expanded:rotate-180',
            label: 'tracking-wide', // 字间距
            content: 'px-5 py-3 bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100'
          }"
        />
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">示例 3: 结合 `item.ui` 定制单个项</h3>
        <UAccordion
          :items="items3"
          :ui="{
            item: 'border-b border-gray-200 dark:border-gray-700 last:border-b-0'
          }"
        />
      </div>
    </div>
  </div>
</template>

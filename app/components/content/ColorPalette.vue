<template>
  <div class="not-prose grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-4">
    <!-- Sticky Header -->
    <div class="sticky top-28 z-9 bg-white lg:top-14 dark:bg-gray-950">
&nbsp;
    </div>
    <div class="sticky top-28 z-9 col-start-2 grid grid-cols-11 justify-items-center gap-1.5 bg-white font-medium text-gray-950 *:rotate-180 *:[writing-mode:vertical-lr] max-sm:py-1 sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb] lg:top-14 dark:bg-gray-950 dark:text-white">
      <div v-for="shade in shades" :key="shade">
        {{ shade }}
      </div>
    </div>

    <!-- Color Rows -->
    <template v-for="[groupName, groupColors] in colorEntries" :key="groupName">
      <p class="font-medium text-gray-950 capitalize sm:pr-12 dark:text-white">
        {{ groupName }}
      </p>
      <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
        <Color
          v-for="(value, shade) in groupColors"
          :key="shade"
          :name="groupName"
          :shade="shade"
          :value="value"
          @copy="handleCopy"
        />
      </div>
    </template>

    <!-- Footer Note -->
    <div class="pt-2 text-center text-gray-500 italic max-sm:hidden sm:col-span-2 md:col-span-1 md:col-start-2 dark:text-gray-400">
      点击复制 OKLCH 值，Shift+click 复制最近的十六进制值。
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Color from './Color.vue'
import themeCSS from 'tailwindcss/theme.css?raw' // 构建时嵌入CSS内容

// 初始颜色数据
const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const colors = ref({})
const colorEntries = ref([])

// 解析CSS颜色变量
const parseColors = () => {
  const colorMap = {}

  themeCSS.split('\n').forEach((line) => {
    if (line.startsWith('  --color-')) {
      const [key, value] = line.split(':').map(p => p.trim().replace(';', ''))
      const match = key.match(/^--color-([a-z]+)-(\d+)$/)

      if (match) {
        const [, group, shade] = match
        if (!colorMap[group]) colorMap[group] = {}
        colorMap[group][shade] = value
      }
    }
  })

  return colorMap
}

// 处理复制事件
const handleCopy = ({ value, shiftKey }) => {
  const text = shiftKey ? findNearestHex(value) : value
  navigator.clipboard.writeText(text)
    .then(() => showFeedback('Copied!'))
    .catch(err => console.error('Copy failed:', err))
}

// 显示反馈（示例实现）
const showFeedback = () => {
  // 实现toast提示或状态更新
}

// 颜色转换逻辑（示例实现）
const findNearestHex = () => {
  // 实际应实现OKLCH到HEX的转换逻辑
  return '#ffffff'
}

// 初始化
onMounted(() => {
  colors.value = parseColors()
  colorEntries.value = Object.entries(colors.value)
})
</script>

<script setup lang="ts">
import { ref, watchEffect, onMounted, onUnmounted } from 'vue'
import { useColorMode } from '#imports'

const props = withDefaults(defineProps<{
  themeStrategy?: 'sync' | 'override'
}>(), {
  themeStrategy: 'sync' // 默认同步主题
})

const iframeRef = ref<HTMLIFrameElement | null>(null)
const mountNode = ref<HTMLElement | null>(null)
const colorMode = useColorMode() // Nuxt 色彩模式管理
const isMounted = ref(false) // 用于区分 SSR/CSR 阶段的关键标志

// 主题同步机制
const applyThemeToIframe = () => {
  if (!isMounted.value || !mountNode.value) return

  const iframeDoc = iframeRef.value?.contentWindow?.document
  if (!iframeDoc) return

  // 修复点2：使用 colorMode.forced 确保同步状态
  const themeClass = props.themeStrategy === 'override'
    ? colorMode.preference
    : colorMode.value

  iframeDoc.documentElement.className = themeClass
  mountNode.value.className = themeClass
}

const cloneStyles = () => {
  if (!isMounted.value) return

  const iframeDoc = iframeRef.value?.contentWindow?.document
  if (!iframeDoc) return

  // 清空可能存在的服务端残留样式
  iframeDoc.head.innerHTML = ''

  // 修复点4：仅克隆客户端有效样式表
  document.querySelectorAll('link[rel="stylesheet"]:not([media="print"]), style:not([media="print"])').forEach((node) => {
    const clone = node.cloneNode(true)
    iframeDoc.head.appendChild(clone)
  })

  const style = iframeDoc.createElement('style')
  style.textContent = `
    html, body {
      background-color: transparent !important;
    }
    @media (prefers-color-scheme: dark) {
      :root.dark {
        color-scheme: dark;
      }
    }
  `
  iframeDoc.head.appendChild(style)
}

const initIframe = () => {
  if (!isMounted.value) return

  cloneStyles()
  mountNode.value = iframeRef.value?.contentWindow?.document?.body || null
  applyThemeToIframe()
}

watchEffect(() => {
  if (!isMounted.value) return
  nextTick(() => applyThemeToIframe())
})

onMounted(() => {
  isMounted.value = true // 标记客户端已挂载
  // iframeRef.value?.addEventListener('load', initIframe)
  // if (iframeRef.value?.contentWindow?.document.readyState === 'complete') {
  //   initIframe() // 处理缓存 iframe 情况
  // }

  // 延迟确保 DOM 完全渲染
  nextTick(() => {
    iframeRef.value?.addEventListener('load', initIframe)
  })
})

onUnmounted(() => {
  iframeRef.value?.removeEventListener('load', initIframe)
  isMounted.value = false
})
</script>

<template>
  <!-- 确保整个 iframe 仅在客户端渲染，避免 SSR 阶段生成不一致的 DOM 结构 -->
  <ClientOnly>
    <div
      :class="[
        themeStrategy === 'override' ? '' : colorMode.value
      ]"
    >
      <iframe
        ref="iframeRef"
        v-bind="$attrs"
        :class="[
          'h-[340px] w-full',
          {
            dark: colorMode.value === 'dark',
            light: colorMode.value === 'light'
          }
        ]"
      >
        <!-- 独立的 Teleport 容器  -->
        <Teleport v-if="mountNode" :to="mountNode">
        <slot :theme="colorMode.preference || colorMode.value"/>
        </Teleport>
      </iframe>
    </div>
  </ClientOnly>
</template>

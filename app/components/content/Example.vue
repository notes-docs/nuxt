<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps({
  resizable: { type: Boolean, default: false },
  padding: { type: Boolean, default: true },
  className: String
})

const isDragging = ref(false)
const containerRef = ref(null)
const constraintsRef = ref(null)
const dragHandleRef = ref(null)

// 拖拽状态管理
const dragX = ref(0)
const startX = ref(0)
const initialWidth = ref(0)

// 容器尺寸跟踪
const { width: containerWidth } = useElementSize(containerRef)

// 计算右侧间距
const marginRight = computed(() => -dragX.value + 'px')

// 拖拽逻辑
const startDrag = (e) => {
  isDragging.value = true
  startX.value = e.clientX
  initialWidth.value = containerWidth.value
  document.documentElement.classList.add('select-none', 'cursor-ew-resize')
}

const doDrag = (e) => {
  if (!isDragging.value) return
  const deltaX = e.clientX - startX.value
  dragX.value = Math.min(Math.max(deltaX, -initialWidth.value + 100), 300) // 限制调整范围
}

const endDrag = () => {
  isDragging.value = false
  document.documentElement.classList.remove('select-none', 'cursor-ew-resize')
}

// 事件监听
onMounted(() => {
  if (props.resizable) {
    window.addEventListener('mousemove', doDrag)
    window.addEventListener('mouseup', endDrag)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', doDrag)
  window.removeEventListener('mouseup', endDrag)
})
</script>

<template>
  <div
    ref="containerRef"
    :class="[
      'group not-prose relative overflow-hidden sm:overflow-visible',
      { 'cursor-ew-resize': isDragging }
    ]"
  >
    <div
      :class="[
        className,
        padding && 'p-8',
        '@container relative overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 dark:inset-ring dark:inset-ring-white/5',
        { 'before:absolute before:inset-0': isDragging }
      ]"
      :style="{ marginRight }"
    >
      <slot />
    </div>

    <div
      v-if="resizable"
      ref="constraintsRef"
      class="pointer-events-none absolute inset-y-0 right-1.5 left-60 max-sm:hidden"
    >
      <div
        ref="dragHandleRef"
        title="Drag to resize"
        :class="[
          'pointer-events-auto absolute top-1/2 right-0 z-50 -mt-6 h-12 w-1.5 rounded-full',
          'bg-slate-950/20 hover:bg-slate-950/40',
          'dark:bg-slate-500 dark:hover:bg-slate-300',
          { 'bg-slate-950/40 dark:bg-slate-300': isDragging }
        ]"
        @mousedown="startDrag"
      />
    </div>
  </div>
</template>

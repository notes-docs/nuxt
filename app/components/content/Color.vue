<template>
  <div class="color-container">
    <button
      :style="{ backgroundColor: `var(${colorVariableName})` }"
      :class="[
        'color-button',
        'aspect-1/1 w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10'
      ]"
      @click.prevent.stop="copyHexToClipboard"
    >
      <Teleport to="body">
        <Transition name="fade">
          <div
            v-if="showTooltip"
            class="color-tooltip"
            :class="tooltipClasses"
          >
            {{ tooltipContent }}
          </div>
        </Transition>
      </Teleport>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  name: String,
  shade: String,
  value: String
})

// 响应式状态
const isShiftPressed = ref(false)
const showTooltip = ref(false)
const tooltipContent = ref('')
const tooltipTimeout = ref(null)

// 计算属性
const colorVariableName = computed(() => `--color-${props.name}-${props.shade}`)
const hexValue = computed(() => hexColors[props.name]?.[props.shade])
const tooltipClasses = computed(() => [
  'pointer-events-none',
  'z-10',
  'flex',
  'translate-y-2',
  'items-center',
  'gap-1',
  'rounded-full',
  'border',
  'border-gray-950',
  'bg-gray-950/90',
  'py-0.5',
  'pr-2',
  'pb-1',
  'pl-3',
  'text-center',
  'font-mono',
  'text-xs/6',
  'font-medium',
  'whitespace-nowrap',
  'text-white',
  'opacity-100',
  'inset-ring',
  'inset-ring-white/10'
])

// 键盘事件处理
const handleKeyEvent = (e) => {
  if (e.key === 'Shift') {
    isShiftPressed.value = e.type === 'keydown'
  }
}

// 生命周期钩子
onMounted(() => {
  window.addEventListener('keydown', handleKeyEvent)
  window.addEventListener('keyup', handleKeyEvent)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyEvent)
  window.removeEventListener('keyup', handleKeyEvent)
})

// 复制逻辑
const copyHexToClipboard = (e) => {
  const originalContent = isShiftPressed.value ? hexValue.value : props.value
  showTooltip.value = true
  tooltipContent.value = originalContent

  navigator.clipboard.writeText(
    e.shiftKey && hexValue.value
      ? hexValue.value
      : props.value
  )

  if (tooltipTimeout.value) clearTimeout(tooltipTimeout.value)
  tooltipTimeout.value = setTimeout(() => {
    showTooltip.value = false
  }, 1300)
}
</script>

<style scoped>
.color-button {
  transition: transform 0.2s ease;
}

.color-button:hover {
  transform: scale(1.1);
}

.color-tooltip {
  position: fixed;
  animation: tooltip-appear 0.3s ease-out;
}

@keyframes tooltip-appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

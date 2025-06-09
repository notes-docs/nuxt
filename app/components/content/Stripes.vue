<template>
  <div
    :class="[
      className,
      borderClasses,
      colorClass,
      'bg-[size:8px_8px] bg-top-left',
      'bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]'
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  border: {
    type: [Boolean, String],
    default: false,
    validator: value => [true, false, 'x', 'y'].includes(value)
  },
  noColor: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

// 边界类处理
const borderClasses = computed(() => {
  if (props.border === true) return 'border'
  if (props.border === 'x') return 'border-x'
  if (props.border === 'y') return 'border-y'
  return ''
})

// 颜色处理
const colorClass = computed(() =>
  !props.noColor
    ? 'text-black/10 dark:text-white/12.5'
    : ''
)
</script>

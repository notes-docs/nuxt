<script setup lang="ts">
// 注意，这里定义为 props 是因为需要在 ComponentExample 组件中使用且可以动态修改
const props = defineProps<{
  title: string
}>()

const toast = useToast()

function showToast() {
  toast.add(props)
}
</script>

<template>
  <UButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>

<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <!--  注意，这里的 open 是 prop 不是子组件传递出来的 v-slot={ open }  -->
  <UTooltip v-model:open="open" text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>

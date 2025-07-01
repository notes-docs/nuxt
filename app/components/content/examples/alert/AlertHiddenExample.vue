<script setup lang="ts">
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<template>
  <!-- 用 v-if 控制组件显示 -->
  <UAlert
    v-if="showAlert"
    title="提示"
    description="这是一个警告提示框"
    color="warning"
    variant="solid"
    close
    @update:open="showAlert = false"
  />
</template>

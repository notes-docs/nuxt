<script setup lang="ts">
const handleAsyncAction = async () => {
  // const data = await fetchData()
  // showToast(`加载完成: ${data.length} 条记录`)
  alert('点击动作按钮')
}
</script>

<template>
  <UAlert
    title="数据同步",
    color="secondary"
    :actions="[
      {
        label: '立即同步',
        loadingIcon: 'i-heroicons-arrow-path',
        onClick: handleAsyncAction, // 注意：在 v-bind 中，事件监听器需要使用 'onEventName' 的驼峰命名约定
        loading: false // 可动态控制加载状态
      }
    ]"
  />
</template>

<script setup lang="ts">
const route = useRoute()

const { data: surround } = await useAsyncData(`${route.path}-surround-temp`, () => {
  return queryCollectionItemSurroundings('ui', route.path, {
    fields: ['description']
  })
})
</script>

<template>
  <UContentSurround :surround="(surround as any)" />
</template>

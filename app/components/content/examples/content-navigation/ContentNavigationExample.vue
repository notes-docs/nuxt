<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation-ui')
</script>

<template>
  <UContentNavigation :navigation="navigation" highlight />
</template>

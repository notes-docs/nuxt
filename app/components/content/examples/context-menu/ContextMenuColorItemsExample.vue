<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui'

const items: ContextMenuItem[][] = [
  [
    {
      label: 'View',
      icon: 'i-lucide-eye'
    },
    {
      label: 'Copy',
      icon: 'i-lucide-copy'
    },
    {
      label: 'Edit',
      icon: 'i-lucide-pencil'
    }
  ],
  [
    {
      label: 'Delete',
      color: 'error' as const,
      icon: 'i-lucide-trash'
    }
  ]
]
</script>

<template>
  <UContextMenu :items="items" :ui="{ content: 'w-48' }">
    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>

<script setup lang="ts">
import theme from '#build/ui/toaster'

const positions = Object.keys(theme.variants.position)
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <UFormField
      label="toaster.position"
      size="sm"
      class="inline-flex ring ring-accented rounded-sm"
      :ui="{
        wrapper: 'bg-elevated/50 rounded-l-sm flex border-r border-accented',
        label: 'text-muted px-2 py-1.5',
        container: 'mt-0'
      }"
    >
      <USelectMenu
        v-model="appConfig.ui.toaster.defaultVariants.position"
        :items="positions"
        color="neutral"
        variant="soft"
        class="rounded-sm rounded-l-none min-w-12"
        :search-input="false"
      />
    </UFormField>
  </div>
</template>

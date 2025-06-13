<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: '首页',
  icon: 'i-lucide-house',
  active: true
}, {
  label: '收件箱',
  icon: 'i-lucide-inbox'
}, {
  label: '联系人',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      open
      toggle-side="right"
    >
      <template #header>
        <LogoPro class="h-5 w-auto" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard" />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

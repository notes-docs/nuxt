<template>
  <UDashboardPanel resizable class="shrink-0 w-full lg:w-(--width) !min-h-96 h-136" :default-size="35" :min-size="20" :max-size="50">
    <template #header>
      <UDashboardNavbar title="Inbox">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <Placeholder class="h-full" />
    </template>
  </UDashboardPanel>
</template>

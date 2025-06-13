<template>
  <UPricingPlan
    title="Solo"
    description="For bootstrappers and indie hackers."
    price="$249"
    :features="[
      'One developer',
      'Unlimited projects',
      'Access to GitHub repository',
      'Unlimited patch & minor updates',
      'Lifetime access'
    ]"
    :button="{
      label: 'Buy now'
    }"
    highlight
    badge="Most popular"
    discount="$199"
    billing-cycle="/month"
  />
</template>

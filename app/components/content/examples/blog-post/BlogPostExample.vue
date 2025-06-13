<script setup lang="ts">
const authors = ref([
  {
    name: 'Anthony Fu',
    description: 'antfu7',
    avatar: {
      src: 'https://github.com/antfu.png'
    },
    to: 'https://github.com/antfu',
    target: '_blank'
  }
])
</script>

<template>
  <UBlogPost
    title="Introducing Nuxt Icon v1"
    description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
    image="https://nuxt.com/assets/blog/nuxt-icon/cover.png"
    date="2024-11-25"
    :authors="authors"
  />
</template>

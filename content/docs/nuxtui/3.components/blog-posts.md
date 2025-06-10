---
title: BlogPosts
description: 以响应式网格布局显示博客文章列表。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/BlogPosts.vue
---

## 用法 (Usage)

BlogPosts 组件提供了一个灵活的布局，通过 **默认插槽** 或 `posts` prop 来显示 [BlogPost](/ui/components/blog-post) 组件列表。

```vue{2,8}
<template>
  <UBlogPosts>
    <UBlogPost
      v-for="(post, index) in posts"
      :key="index"
      v-bind="post"
    />
  </UBlogPosts>
</template>
```

### 文章 (Posts)

使用 `posts` prop，它是一个包含 [BlogPost](/ui/components/blog-post#props) 组件属性的对象数组。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const posts = ref([
  {
    title: 'Nuxt Icon v1',
    description: 'Discover Nuxt Icon v1!',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25'
  },
  {
    title: 'Nuxt 3.14',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04'
  },
  {
    title: 'Nuxt 3.13',
    description: 'Nuxt 3.13 is out!',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22'
  }
])
</script>

<template>
  <UBlogPosts :posts="posts" />
</template>
```
::

### 方向 (Orientation)

使用 `orientation` prop 更改 `BlogPosts` 的方向。默认为 `horizontal`（水平）。

::code-preview

TODO

#code
:::code-collapse
```vue
<script setup lang="ts">
const posts = ref([
  {
    title: 'Nuxt Icon v1',
    description: 'Discover Nuxt Icon v1!',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25'
  },
  {
    title: 'Nuxt 3.14',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04'
  },
  {
    title: 'Nuxt 3.13',
    description: 'Nuxt 3.13 is out!',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22'
  }
])
</script>

<template>
  <UBlogPosts orientation="vertical" :posts="posts" />
</template>
```
:::
::

::tip
当使用 `posts` prop 而非默认插槽时，文章的 `orientation` 会自动反转，`horizontal` 变为 `vertical`，反之亦然。
::

## 示例 (Examples)

::info
虽然这些示例使用了 Nuxt Content，但这些组件可以与任何内容管理系统集成。
::

### 在页面内 (Within a page)

在页面中使用 `BlogPosts` 组件来创建博客页面：

```vue{11-18} [pages/blog/index.vue]
<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryContent('posts').find()) // 已将 queryCollection('posts').all() 更正为 queryContent('posts').find()
</script>

<template>
  <UPage>
    <UPageHero title="Blog" />

    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
            :to="post.path"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
在此示例中，文章是使用 `@nuxt/content` 模块中的 `queryContent` 获取的。
::

::tip
`to` prop 在此被覆盖，因为 `@nuxt/content` 使用 `path` 属性。
::


## API

### 属性 (Props)

:component-props

### 插槽 (Slots)

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

---
title: PageCTA
description: 一个用于在页面中显示行动号召（Call to Action）的区域。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageCTA.vue
---

## 用法

`PageCTA` 组件提供了一种灵活的方式，可以在页面中显示行动号召，并在默认插槽中包含插图。

::code-preview

TODO

#code
```vue
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```
::

::tip
使用 `px-0` 和 `rounded-none` 类可以在移动设备上使 CTA 填满页面边缘。
::

### **标题**

使用 `title` 属性设置 CTA 的标题。

::code-preview

TODO

#code
```vue
<template>
  <UPageCTA title="Trusted and supported by our amazing community" />
</template>
```
::

### **描述**

使用 `description` 属性设置 CTA 的描述。

::code-preview

TODO

#code
```vue
<template>
  <UPageCTA
    title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  />
</template>
```
::

### **链接**

使用 `links` 属性在描述下方显示 `Button` 列表。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    color: 'neutral'
  },
  {
    label: 'Learn more',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageCTA
    title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
    :links="links"
  />
</template>
```
::

### **变体**

使用 `variant` 属性更改 CTA 的样式。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    color: 'neutral'
  },
  {
    label: 'Learn more',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageCTA
    title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
    variant="soft"
    :links="links"
  />
</template>
```
::

::tip
在使用 `solid` 变体时，你可以将 `light` 或 `dark` 类应用于 `links` 插槽以反转颜色。
::

### **方向**

使用 `orientation` 属性更改默认插槽的方向。默认为 `vertical`。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    color: 'neutral'
  },
  {
    label: 'Learn more',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageCTA
    title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
    orientation="horizontal"
    :links="links"
  >
    <img
      src="https://picsum.photos/640/728"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full rounded-lg"
    />
  </UPageCTA>
</template>
```
::

### **反转**

使用 `reverse` 属性反转默认插槽的方向。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    color: 'neutral'
  },
  {
    label: 'Learn more',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageCTA
    title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
    orientation="horizontal"
    reverse
    :links="links"
  >
    <img
      src="https://picsum.photos/640/728"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full rounded-lg"
    />
  </UPageCTA>
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}

---
title: PageMarquee
description: 一个用于创建无限滚动内容的组件。
category: data
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/PageMarquee.vue
---

## 用法

**PageMarquee** 组件允许你用你的内容创建一个无限滚动动画。非常适合展示标志、推荐或任何重复内容，以引人入胜的方式。

::code-preview

TODO

#code
```vue
<template>
  <UPageMarquee>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```
::

### 悬停暂停

使用 **pause-on-hover** prop 可以在用户悬停在内容上时暂停动画。

::code-preview

TODO

#code
```vue
<template>
  <UPageMarquee pause-on-hover>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```
::

### 反向

使用 **reverse** prop 可以反转动画的方向。

::code-preview

TODO

#code
```vue
<template>
  <UPageMarquee reverse>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```
::

### 方向

使用 **orientation** prop 可以改变滚动方向。

::code-preview

TODO

#code
```vue
<template>
  <UPageMarquee orientation="vertical">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```
::

### 重复

使用 **repeat** prop 可以指定内容在动画中重复的次数。

::code-preview

TODO

#code
```vue
<template>
  <UPageMarquee :repeat="6">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```
::

### 叠加层

使用 **overlay** prop 可以移除跑马灯边缘的渐变叠加层。

::code-preview

TODO

#code
```vue
<template>
  <UPageMarquee :overlay="false">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```
::

## 示例

### 用户评价

使用 `PageMarquee` 组件为您的用户评价创建无限滚动动画。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const testimonials = [
  {
    user: {
      name: 'Anthony Bettini',
      description: 'CEO and founder of VulnCheck',
      avatar: {
        src: 'https://media.licdn.com/dms/image/v2/C4E03AQEY3pmXsH8hDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1519741249442?e=1746057600&v=beta&t=dvQfBT9ah03MPNy9cnly30ugreeCdxG4nrxV3lwKAC8',
        loading: 'lazy'
      }
    },
    quote:
      'We were using a SaaS service for the docs site, but were left unfulfilled. We put in the effort to do it in house, with UI Pro and not only did we get complimented by a prospect on our site, but they wanted to know our platform.'
  },
  {
    user: {
      name: 'Yaz Jallad',
      description: 'Founder Ninjaparade Digital',
      avatar: {
        src: 'https://pbs.twimg.com/profile_images/1824690890222485504/lQ7v1AGt_400x400.jpg',
        loading: 'lazy'
      }
    },
    quote:
      "Wow, Nuxt UI Pro is a total game-changer! I'm seriously impressed with the quality, attention to detail, and the insane variety of components you get. It's like hitting the jackpot for any developer. I've saved countless hours that I would've spent stressing over making my apps look good, with amazing accessible UX,  and instead, I've been able to focus on the real deal – building the app itself. It's an instant buy for me, every single time. No second thoughts!"
  },
  {
    user: {
      name: 'Kevin Olson',
      description: 'Founder of Fume.app',
      avatar: {
        src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/acidjazz',
        srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/acidjazz 2x',
        loading: 'lazy'
      }
    },
    quote:
      'Nuxt UI Pro saves 100s of hours of dev and design time while delivering a clean professional look on any device.'
  },
  {
    user: {
      name: 'Michael Hoffmann',
      description: 'Senior Frontend Developer',
      avatar: {
        src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/mokkapps',
        srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/mokkapps 2x',
        loading: 'lazy'
      }
    },
    quote:
      'I decided to replace my custom-built components with a component library and chose Nuxt UI Pro. It only took me a few hours, and the new UI looks more professional. Integrating the library is easy; the components are well-documented and highly customizable. I can only recommend it; this library is my new choice for new SaaS products.'
  },
  {
    user: {
      name: 'Harlan Wilton',
      description: 'Nuxt core team member',
      avatar: {
        src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/harlan-zw',
        srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/harlan-zw 2x',
        loading: 'lazy'
      }
    },
    quote:
      'Nuxt UI Pro is my go to component library. Out-of-the-box it handles all of the UI demands I throw at it while looking great. The customisation is really worth thought out, allowing you to override components in a breeze. Always amazed at the improvements dropped in each update as well, the team is doing an amazing job.'
  },
  {
    user: {
      name: 'Thomas Sanlis',
      description: 'Freelance developer and designer',
      avatar: {
        src: 'https://pbs.twimg.com/profile_images/1374040164180299791/ACw4G3nZ_400x400.jpg',
        loading: 'lazy'
      }
    },
    quote:
      "I jumped at the chance to buy the Nuxt team's new UI kit as soon as I saw it. While I'm already a fan of Nuxt UI, the pro version takes it to a whole new level and lets me paste entire blocks into all my projects, saving me a ton of time."
  },
  {
    user: {
      name: 'Benjamin Code',
      description: 'YouTuber and SaaS builder',
      avatar: {
        src: 'https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg',
        loading: 'lazy'
      }
    },
    quote:
      'Nuxt UI has allowed me to develop my SaaS without any prior mockups. The design quality of their components and the intelligence of the DX meant that I was able to try many different layouts for my application until I found the perfect UX for my users. Nuxt UI is the ui-kit I would have dreamed of building myself, and Nuxt UI Pro makes things even easier when you want to go further with your SaaS. Kudos to the team.'
  },
  {
    user: {
      name: 'Estéban Soubiran',
      description: 'Web developer and UnJS member',
      avatar: {
        src: 'https://pbs.twimg.com/profile_images/1801649350319218689/aS_X_iTm_400x400.jpg',
        loading: 'lazy'
      }
    },
    quote:
      "Nuxt UI Pro is my preferred choice for everything, from a POC to a web platform. It's ready to use out-of-the-box and assists me in crafting pixel-perfect UIs. It saves me a significant amount of time while remaining highly customizable. Give it a try, and you won't be let down."
  }
]
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <UPageMarquee
      pause-on-hover
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UPageMarquee>
    <UPageMarquee
      pause-on-hover
      reverse
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UPageMarquee>
  </div>
</template>
```
::

### 截图

使用 `PageMarquee` 组件为您的截图创建无限滚动动画。

::code-preview

TODO

#code
```html
<template>
  <div class="relative w-full h-[400px] bg-muted overflow-hidden">
    <UPageMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <img
        v-for="i in 4"
        :key="i"
        :src="`/pro/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Pro Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      />
    </UPageMarquee>
    <UPageMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <img
        v-for="i in [5, 6, 7, 8]"
        :key="i"
        :src="`/pro/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Pro Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      />
    </UPageMarquee>
    <UPageMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <img
        v-for="i in [9, 10, 11, 12]"
        :key="i"
        :src="`/pro/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Pro Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      />
    </UPageMarquee>
  </div>
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


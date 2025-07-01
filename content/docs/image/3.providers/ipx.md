---
title: IPX
description: IPX 是 Nuxt Image 内置的自托管图像优化器。
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/image/blob/main/src/runtime/providers/ipx.ts
    size: xs
---

Nuxt Image 内置并预配置了 [unjs/ipx](https://github.com/unjs/ipx) [实例](/docs/image/getting-started/providers#default-provider)，这是一个基于 [lovell/sharp](https://github.com/lovell/sharp) 的开源、自托管图像优化器。

## 额外修饰符

您可以使用 IPX 支持的 [额外修饰符](https://github.com/unjs/ipx/#modifiers)。

**示例:**

```vue
<NuxtImg
  src="/image.png"
  :modifiers="{ grayscale: true, tint: '#00DC82' }"
/>
```

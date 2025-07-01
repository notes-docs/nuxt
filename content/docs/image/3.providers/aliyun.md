---
title: Aliyun
description: Nuxt Image 与阿里云实现原生集成。
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/image/blob/main/src/runtime/providers/aliyun.ts
    size: xs
---

[Aliyun CDN](https://cdn.console.aliyun.com) 与图像模块的集成。

要使用此提供商，您只需指定服务的基 URL (zone)：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    aliyun: {
      baseURL: 'https://that-test.site'
    }
  }
})
```

**示例:**

```vue
<NuxtImg
  provider="aliyun"
  src="/burger.jpeg"
  height="300"
  :modifiers="{ fit: 'contain' }"
/>
```

## 选项

### `baseURL`

默认值: `/`

您的部署域名（zone）。

## 修饰符

**示例:**

```js
{
  resize: {
    fw: 900,
    fh: 200
  },
  rotate: 180,
  bright: 50,
  ...
}
```

更多修饰符配置项，请参见 [Aliyun CDN 文档](https://help.aliyun.com/zh/cdn/user-guide/image-editing)。

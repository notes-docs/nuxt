---
title: 'useServerSeoMeta'
description: useServerSeoMeta composable 允许你将站点的 SEO 元标签定义为一个扁平对象，并提供完整的 TypeScript 支持。
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/unjs/unhead/blob/main/packages/vue/src/composables.ts
    size: xs
---

就像 [`useSeoMeta`](/docs/api/composables/use-seo-meta) 一样，`useServerSeoMeta` composable 允许你将站点的 SEO 元标签定义为一个扁平对象，并提供完整的 TypeScript 支持。

:read-more{to="/docs/api/composables/use-seo-meta"}

在大多数情况下，元数据不需要是响应式的，因为机器人只会扫描初始加载。因此，我们建议使用 [`useServerSeoMeta`](/docs/api/composables/use-server-seo-meta) 作为一个注重性能的工具，它在客户端不会执行任何操作（也不会返回 `head` 对象）。

```vue [app.vue]
<script setup lang="ts">
useServerSeoMeta({
  robots: 'index, follow'
})
</script>
```

参数与 [`useSeoMeta`](/docs/api/composables/use-seo-meta) 完全相同。

:read-more{to="/docs/getting-started/seo-meta"}

::note
在 Nuxt 3 中，`useServerSeoMeta` 和 `useSeoMeta` 都是用于管理 SEO 元标签的组合式函数，但设计目标和适用场景有显著差异。以下是核心区别详解：

---

一、**核心区别对比**

| **特性**               | **`useServerSeoMeta`**                     | **`useSeoMeta`**                          |
|------------------------|--------------------------------------------|-------------------------------------------|
| **执行环境**           | **仅服务端生效**（SSR/SSG）                 | **双端生效**（服务端 + 客户端）            |
| **响应式支持**         | ❌ 不支持（数据仅初始化时生成）              | ✅ 支持（可绑定 `ref`/`reactive` 动态更新） |
| **性能影响**           | ⚡️ 零客户端开销（不注入客户端JS）          | ⚠️ 需维护客户端响应式系统（轻微性能成本）   |
| **适用场景**           | 静态/机器人扫描内容（如 `description`, `og:image`） | 需动态更新的标签（如路由变化时的 `title`） |
| **返回值**             | 服务端返回 `head` 对象，客户端无操作        | 返回可操作的 `head` 对象（客户端可修改）   |

---

二、**参数传递与响应性**
<br><br>
**`useServerSeoMeta`**

- **静态数据传递**：直接传递字面量或计算后的静态值
- **无响应性**：即使传递 `ref`，也不会在客户端更新
  ```vue
  <script setup>
  useServerSeoMeta({
    title: "产品详情", // 静态值
    description: computed(() => product.desc) // ❌ 计算属性无效
  })
  </script>
  ```

**`useSeoMeta`**

- **响应式数据绑定**：支持 `ref`/`reactive`/`computed`
  ```vue
  <script setup>
  const title = ref("默认标题")
  useSeoMeta({
    title, // ✅ 响应式更新
    description: () => dynamicDesc.value // ✅ 函数动态计算
  })
  </script>
  ```

---

三、**性能与渲染行为**

| **维度**               | **`useServerSeoMeta`**                              | **`useSeoMeta`**                          |
|------------------------|----------------------------------------------------|-------------------------------------------|
| **客户端JS体积**       | 无额外代码注入                                    | 增加响应式系统代码（约 1-3KB）            |
| **首屏渲染速度**       | ⚡️ 更快（无客户端水合负担）                       | ⚠️ 需等待客户端状态初始化                |
| **爬虫兼容性**         | ✅ 完整支持（内容在HTML中预渲染）                 | ✅ 支持（但动态更新可能不被爬虫捕获）     |

> 根据 Nuxt 官方建议：**优先使用 `useServerSeoMeta`**，因为爬虫无需响应式数据，且能减少客户端开销。

---

四、**使用场景建议**

1. **必用 `useServerSeoMeta` 的情况**

   - **全局基础标签**（如 `robots`, `viewport`）
   - **Open Graph/Twitter 标签**（`og:title`, `twitter:image`等）
   - **静态页面描述**（如公司介绍页的固定 `description`）

2. **需用 `useSeoMeta` 的情况**

   - **动态标题**（如 `%s - 网站名` 格式的 `titleTemplate`）
   - **用户行为驱动的更新**（如切换语言时更新 `lang` 属性）
   - **客户端状态关联标签**（如基于路由参数的 `canonical` 链接）

---

五、**混合使用最佳实践**
<br><br>
结合两者优势，实现高性能与动态需求的平衡：

```vue
<script setup>
// 静态标签（服务端生成）
useServerSeoMeta({
  robots: "index, follow",
  ogImage: "/default-og.png"
})

// 动态标签（双端生效）
const { data } = await useAsyncData("product", fetchProduct)
useSeoMeta({
  title: () => `${data.value.name} | 商城`,
  description: () => data.value.summary
})
</script>
```
---

六、**常见误区与避坑**

1. **`useServerSeoMeta` 误用响应式数据**
   ```ts
   // ❌ 错误：传递 ref 无效
   const desc = ref("动态描述")
   useServerSeoMeta({ description: desc })
   ```

2. **`useSeoMeta` 的客户端更新延迟**  
   若需即时生效，在修改状态后调用 `useHead` 的 `update` 方法：
   ```ts
   const { seoMeta } = useSeoMeta({ title: "初始标题" })
   seoMeta.title = "新标题" // ✅ 直接更新
   ```

3. **SSG 构建的注意事项**  
   静态生成（`nuxt generate`）时：
  - `useServerSeoMeta` 直接输出到 HTML
  - `useSeoMeta` 的响应式数据**仅取初始值**（需确保异步数据预加载）

---

**总结：选择决策树**

需要设置SEO标签：

* 标签是否需要动态更新？
  * 是
    * 是否依赖客户端状态？
      * 是
        * useSeoMeta + ref/reactive
      * 否
        * useSeoMeta + 静态函数
  * 否
    * useServerSeoMeta

> 核心原则：
> - **静态/爬虫关键内容 → `useServerSeoMeta`**（性能优先）
> - **用户交互驱动内容 → `useSeoMeta`**（动态能力优先）
> - 混合使用时，注意服务端标签优先级高于客户端。
::

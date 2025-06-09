// app/router.options.ts
import type { RouterConfig } from '@nuxt/schema'

// ✅ 使用默认导出
export default {
    // 示例配置
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    },
    // 其他路由配置...
} satisfies RouterConfig

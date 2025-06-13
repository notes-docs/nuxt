// app/router.options.ts

// Vue Router 4 的新路由系统配置
import type { RouterConfig } from '@nuxt/schema'

// 全局存储滚动位置
const scrollPositions = new Map()

export default <RouterConfig> {
  scrollBehavior(to, from, savedPosition) {
    // 调试信息
    console.log(`[Scroll] From: ${from.fullPath}, To: ${to.fullPath}, Saved:`, savedPosition)

    return new Promise((resolve) => {
      setTimeout(() => {
        // 情况1：浏览器历史导航（后退/前进）
        if (savedPosition) {
          return resolve(savedPosition)
        }

        // 情况2：锚点跳转
        if (to.hash) {
          return resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80
          })
        }

        // 情况3：内部路由跳转（NuxtLink）
        const fromPath = from.fullPath
        if (scrollPositions.has(fromPath)) {
          const pos = scrollPositions.get(fromPath)
          scrollPositions.delete(fromPath) // 使用后清除
          return resolve({ left: 0, top: pos })
        }

        // 情况4：特殊路由处理（可选）
        if (to.meta.scrollToTop === false) {
          return resolve(false)
        }

        // 默认行为：滚动到顶部
        resolve({ top: 0 })
      }, 150) // 延迟稍长时间确保渲染完成
    })
  }
}

// 配合全局路由守卫记录位置
// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.$router.beforeEach((to, from) => {
//     if (process.client && from.fullPath !== '/') {
//       scrollPositions.set(from.fullPath, window.scrollY)
//     }
//   })
// })

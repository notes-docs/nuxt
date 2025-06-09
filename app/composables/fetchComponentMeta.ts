import type { ComponentMeta } from 'vue-component-meta'

/**
 * 自定义钩子用于管理组件的元状态
 * 该钩子使用 React 的 useState 钩子来存储和管理组件的元状态
 * 元状态以键值对的形式存储，键为字符串，值为任意类型
 *
 * @returns 返回一个状态对象，包含当前的元状态和更新元状态的方法
 */
const useComponentsMetaState = () => useState<Record<string, any>>('component-meta-state', () => ({}))

/**
 * 异步获取指定组件的元信息（如 props、slots 等）
 *
 * 该函数首先检查状态中是否已存在该组件的元信息，若存在则直接返回；
 * 如果不存在，则发起请求获取，并将结果缓存以避免重复请求。
 * 在服务端渲染时还会自动将对应接口加入 Nitro 预渲染列表。
 *
 * @param name - 组件名称（通常为 PascalCase 格式）
 * @returns 返回一个 Promise，解析后包含组件的元信息对象 { meta: ComponentMeta }
 */
export async function fetchComponentMeta(name: string): Promise<{ meta: ComponentMeta }> {
  // 获取全局状态，用于缓存组件元信息
  const state = useComponentsMetaState()

  // 如果当前属性是一个 Promise（即正在请求中），等待其完成并返回结果
  if (state.value[name]?.then) {
    await state.value[name]
    return state.value[name]
  }

  // 如果已经存在该组件的元信息，直接返回
  if (state.value[name]) {
    return state.value[name]
  }

  // Add to nitro prerender
  // 在服务端渲染（SSR）时，将该 API 接口路径添加到 Nitro 的预渲染队列中
  if (import.meta.server) {
    const event = useRequestEvent()
    // 设置响应头，通知 Nitro 预渲染该组件元信息接口
    event?.node.res.setHeader(
      'x-nitro-prerender',
      [event?.node.res.getHeader('x-nitro-prerender'), `/api/component-meta/${name}.json`].filter(Boolean).join(',')
    )
  }

  // Store promise to avoid multiple calls
  // 将请求封装为 Promise 存入状态中，防止多次重复请求
  state.value[name] = $fetch(`/api/component-meta/${name}.json`).then((meta) => {
    // 请求成功后，将元信息写入状态
    state.value[name] = meta
  }).catch(() => {
    // 请求失败时设置为空对象，避免后续重复请求出错
    state.value[name] = {}
  })

  // 等待请求完成
  await state.value[name]
  // 返回组件的元信息
  return state.value[name]
}

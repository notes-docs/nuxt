/**
 * 使用组件示例状态的自定义钩子函数
 *
 * 此函数通过 `useState` 钩子初始化一个状态对象，该对象是一个记录类型，键为字符串，值为任意类型
 * 状态对象的初始值为空对象，确保在没有设置状态时，状态对象存在且为空
 *
 * @returns 返回一个状态对象和其更新方法的元组
 */
const useComponentExampleState = () => useState<Record<string, any>>('component-example-state', () => ({}))

/**
 * 异步获取组件示例数据的方法
 *
 * @param name - 要获取的组件示例名称（通常为组件的驼峰命名）
 * @returns 返回一个 Promise，解析为从服务器获取的组件示例数据
 */
export async function fetchComponentExample(name: string) {
  // 使用全局状态来缓存组件示例的数据，避免重复请求
  const state = useComponentExampleState()

  // 如果当前属性是一个 Promise，则等待其完成后再返回结果
  if (state.value[name]?.then) {
    await state.value[name]
    return state.value[name]
  }

  // 如果已经存在该组件的状态数据，直接返回缓存的结果
  if (state.value[name]) {
    return state.value[name]
  }

  // Add to nitro prerender
  // 在服务端渲染时，将该 API 请求路径添加到 Nitro 的预渲染列表中
  // 这样在构建时会自动预渲染这个 API 接口，提高首屏加载速度
  if (import.meta.server) {
    const event = useRequestEvent()
    event?.node.res.setHeader(
      'x-nitro-prerender',
      [event?.node.res.getHeader('x-nitro-prerender'), `/api/component-example/${name}.json`].filter(Boolean).join(',')
    )
  }

  // Store promise to avoid multiple calls
  // 将 fetch 请求作为 Promise 存入 state 中，防止重复调用
  state.value[name] = $fetch(`/api/component-example/${name}.json`).then((data) => {
    // 请求成功后，将数据写入状态，供后续使用
    state.value[name] = data
  }).catch(() => {
    // 请求失败时，设置为空对象，避免下次重复请求出错
    state.value[name] = {}
  })

  // 等待请求完成后返回数据
  await state.value[name]
  return state.value[name]
}

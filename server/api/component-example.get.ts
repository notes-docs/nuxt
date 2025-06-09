import { defineEventHandler, createError, appendHeader } from 'h3'
import { pascalCase } from 'scule'

// 忽略 TypeScript 类型检查，因为 #component-example/nitro 是一个自动构建的虚拟模块
// 它在构建时由 Nuxt Nitro 自动生成，包含所有组件示例的预编译数据
// @ts-expect-error - no types available
import components from '#component-example/nitro'

// 定义一个 H3 的事件处理器，用于处理 `/api/component-example/{component}.json` 请求
export default defineEventHandler((event) => {
  // 添加 CORS 头，允许跨域请求
  appendHeader(event, 'Access-Control-Allow-Origin', '*')

  // 从 URL 参数中获取组件名称，并去掉 .json 后缀
  const componentName = (event.context.params?.['component?'] || '').replace(/\.json$/, '')

  // 如果存在组件名称，则尝试查找对应的组件示例数据
  if (componentName) {
    // 将组件名转为 PascalCase 格式，以匹配 components
    const component = components[pascalCase(componentName)]
    // 如果未找到对应组件，抛出 404 错误
    if (!component) {
      throw createError({
        statusMessage: 'Example not found!',
        statusCode: 404
      })
    }
    return component
  }
})

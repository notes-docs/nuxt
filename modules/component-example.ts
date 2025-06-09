import { existsSync, readFileSync } from 'node:fs'
import fsp from 'node:fs/promises'
import { dirname, join } from 'pathe'
import { defineNuxtModule, addTemplate, addServerHandler, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  // 模块元信息，用于标识模块名称
  meta: {
    name: 'component-example'
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    let _configResolved: any
    let components: Record<string, any> // 存储组件示例对象，键为 PascalCase 名称
    const outputPath = join(nuxt.options.buildDir, 'component-example') // 构建输出路径

    /**
     * 如果输出文件不存在，则创建一个空的默认模块文件。
     */
    async function stubOutput() {
      if (existsSync(outputPath + '.mjs')) {
        return
      }
      await updateOutput('export default {}')
    }

    /**
     * 加载指定组件的内容（从文件系统中读取源码）。
     * @param component - 组件名称或组件对象
     */
    async function fetchComponent(component: string | any) {
      if (typeof component === 'string') {
        if (components[component]) {
          component = components[component]
        } else {
          // 查找匹配的组件对象
          component = Object.entries(components).find(
            ([, comp]: any) => comp.filePath === component
          )
          if (!component) {
            return
          }

          component = component[1]
        }
      }

      if (!component?.filePath || !component?.pascalName) {
        return
      }

      // 读取组件文件内容
      const code = await fsp.readFile(component.filePath, 'utf-8')

      // 更新组件数据，保存源码内容
      components[component.pascalName] = {
        code,
        filePath: component.filePath,
        pascalName: component.pascalName
      }
    }

    // 将组件数据转换为 JSON 字符串格式
    const getStringifiedComponents = () => JSON.stringify(components, null, 2)

    // 生成虚拟模块内容（导出所有组件示例）
    const getVirtualModuleContent = () =>
      `export default ${getStringifiedComponents()}`

    /**
     * 将组件数据写入到输出文件中。
     * @param content - 要写入的内容，默认使用当前组件数据
     */
    async function updateOutput(content?: string) {
      const path = outputPath + '.mjs'
      if (!existsSync(dirname(path))) {
        await fsp.mkdir(dirname(path), { recursive: true })
      }
      if (existsSync(path)) {
        await fsp.unlink(path)
      }
      await fsp.writeFile(path, content || getVirtualModuleContent(), 'utf-8')
    }

    /**
     * 批量加载所有组件的源码内容。
     */
    async function fetchComponents() {
      await Promise.all(Object.keys(components).map(fetchComponent))
    }

    /**
     * Hook：当组件被扩展时，筛选并缓存符合条件的组件。
     */
    nuxt.hook('components:extend', async (_components) => {
      components = _components
        .filter(v => v.shortPath.includes('components/content/examples/'))
        .reduce((acc, component) => {
          acc[component.pascalName] = component
          return acc
        }, {} as Record<string, any>)
      await stubOutput()
    })

    // 添加一个模板文件，作为占位符
    addTemplate({
      filename: 'component-example.mjs',
      getContents: () => 'export default {}',
      write: true
    })

    // Vite 插件集成，用于监听构建过程和热更新
    nuxt.hook('vite:extend', (vite: any) => {
      vite.config.plugins = vite.config.plugins || []
      vite.config.plugins.push({
        name: 'component-example',
        enforce: 'post', // 在其他插件之后执行
        async buildStart() {
          if (_configResolved?.build.ssr) {
            return
          }
          await fetchComponents()
          await updateOutput()
        },
        configResolved(config: any) {
          _configResolved = config
        },
        async handleHotUpdate({ file }: { file: any }) {
          // 当某个组件文件热更新时，重新加载该组件内容
          if (
            Object.entries(components).some(
              ([, comp]: any) => comp.filePath === file
            )
          ) {
            await fetchComponent(file)
            await updateOutput()
          }
        }
      })
    })

    // Nitro 配置钩子，注册虚拟模块以供服务端访问
    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.virtual = nitroConfig.virtual || {}
      nitroConfig.virtual['#component-example/nitro'] = () =>
        readFileSync(
          join(nuxt.options.buildDir, '/component-example.mjs'),
          'utf-8'
        )
    })

    // 注册服务器端 API 路由 `/api/component-example/:component?`
    addServerHandler({
      method: 'get',
      route: '/api/component-example/:component?',
      handler: resolver.resolve('../server/api/component-example.get')
    })
  }
})

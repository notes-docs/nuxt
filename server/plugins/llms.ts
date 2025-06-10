import json5 from 'json5'
import { camelCase, kebabCase } from 'scule'
import { visit } from '@nuxt/content/runtime'
import type { H3Event } from 'h3'
import type { PageCollectionItemBase } from '@nuxt/content'
import * as theme from '../../.nuxt/ui'
import * as themePro from '../../.nuxt/ui-pro'
import meta from '#nuxt-component-meta'
// @ts-expect-error - no types available
import components from '#component-example/nitro'

type ComponentAttributes = {
  ':pro'?: string
  ':prose'?: string
  ':props'?: string
  ':external'?: string
  ':externalTypes'?: string
  ':ignore'?: string
  ':hide'?: string
  ':slots'?: string
}

type ThemeConfig = {
  pro: boolean
  prose: boolean
  componentName: string
}

type CodeConfig = {
  pro: boolean
  props: Record<string, unknown>
  external: string[]
  externalTypes: string[]
  ignore: string[]
  hide: string[]
  componentName: string
  slots?: Record<string, string>
}

type Document = {
  title: string
  body: any
}

const parseBoolean = (value?: string): boolean => value === 'true'

/**
 * 获取组件的元数据
 * 该函数尝试通过不同的命名策略来查找和返回组件的元数据
 *
 * @param componentName 组件名称，用于查找元数据
 * @returns 返回一个对象，包含组件的帕斯卡命名、元数据组件名称和找到的元数据对象
 */
function getComponentMeta(componentName: string) {
  const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1)

  // 将组件名称的首字母大写，转换为帕斯卡命名
  const strategies = [
    `U${pascalCaseName}`,
    `Prose${pascalCaseName}`,
    pascalCaseName
  ]

  // 初始化组件元数据变量和最终的元数据组件名称变量
  let componentMeta: any
  let finalMetaComponentName: string = pascalCaseName

  // 遍历策略数组，尝试查找元数据
  for (const nameToTry of strategies) {
    finalMetaComponentName = nameToTry
    // 尝试从元数据中获取当前策略对应的元数据
    const metaAttempt = (meta as Record<string, any>)[nameToTry]?.meta
    // 如果找到元数据，保存并跳出循环
    if (metaAttempt) {
      componentMeta = metaAttempt
      break
    }
  }

  // 如果未找到元数据，输出警告信息
  if (!componentMeta) {
    console.warn(`[getComponentMeta] Metadata not found for ${pascalCaseName} using strategies: U, Prose, or no prefix. Last tried: ${finalMetaComponentName}`)
  }

  // 返回包含组件帕斯卡命名、元数据组件名称和元数据对象的结果
  return {
    pascalCaseName,
    metaComponentName: finalMetaComponentName,
    componentMeta
  }
}

/**
 * 将给定的节点数组中的元素替换为预格式化节点
 * 此函数用于将节点数组中的第一个元素设置为预格式化类型（'pre'），并更新第二个元素为包含语言、代码和可选文件名的对象
 *
 * @param node 节点数组，其中包含要替换的元素
 * @param language 代码的语言类型
 * @param code 预格式化的代码字符串
 * @param filename 可选参数，表示代码对应的文件名
 */
function replaceNodeWithPre(node: any[], language: string, code: string, filename?: string) {
  // 将节点数组的第一个元素设置为预格式化类型
  node[0] = 'pre'
  // 创建并设置包含语言和代码的对象
  node[1] = { language, code }
  // 如果提供了文件名，则添加文件名到对象中
  if (filename) node[1].filename = filename
}

/**
 * 遍历文档并替换特定类型的节点
 * 该函数通过访问文档中的每个节点，并对符合特定类型的节点执行替换操作
 *
 * @param doc 待处理的文档对象
 * @param type 目标节点类型，函数将搜索此类型的节点
 * @param handler 处理函数，当找到目标类型的节点时将调用此函数进行处理
 */
function visitAndReplace(doc: Document, type: string, handler: (node: any[]) => void) {
  // 开始遍历文档的body部分，寻找符合条件的节点
  visit(doc.body, (node) => {
    // 检查当前节点是否为数组类型且第一个元素与目标类型匹配
    if (Array.isArray(node) && node[0] === type) {
      // 调用处理函数对匹配的节点进行处理
      handler(node)
    }
    // 返回true表示继续遍历子节点
    return true
  }, node => node)
}

/**
 * 根据提供的参数生成TypeScript接口代码字符串
 *
 * @param name 接口的名称
 * @param items 接口属性的列表
 * @param itemHandler 一个函数，用于处理每个属性项并返回属性的字符串表示
 * @param description 接口的描述，用于文档说明
 * @returns 返回生成的TypeScript接口代码字符串
 */
function generateTSInterface(
  name: string,
  items: any[],
  itemHandler: (item: any) => string,
  description: string
) {
  // 构建接口定义的起始部分，包括描述和接口名称
  let code = `/**\n * ${description}\n */\ninterface ${name} {\n`
  // 遍历属性列表，使用itemHandler处理每个属性项，并添加到接口代码字符串中
  for (const item of items) {
    code += itemHandler(item)
  }
  // 添加接口定义的结束部分
  code += `}`
  // 返回生成的接口代码字符串
  return code
}

/**
 * 处理属性项并生成相应的TypeScript类型定义字符串
 * 此函数用于根据属性的值生成TypeScript类型定义中的属性字符串，包括属性名、类型、是否必填、描述和默认值等信息
 * @param propValue 属性的值，可能包含name、type、required、description和default等属性
 * @returns 返回生成的TypeScript类型定义字符串
 */
function propItemHandler(propValue: any): string {
  // 如果属性没有名称，则返回空字符串
  if (!propValue?.name) return ''

  // 提取属性的名称、类型、是否必填、描述和默认值
  const propName = propValue.name
  const propType = propValue.type
    ? Array.isArray(propValue.type)
      ? propValue.type.map((t: any) => t.name || t).join(' | ')
      : propValue.type.name || propValue.type
    : 'any'
  const isRequired = propValue.required || false
  const hasDescription = propValue.description && propValue.description.trim().length > 0
  const hasDefault = propValue.default !== undefined

  // 初始化结果字符串
  let result = ''

  // 如果属性有描述或默认值，则生成JSDoc注释
  if (hasDescription || hasDefault) {
    result += `  /**\n`
    if (hasDescription) {
      // 将描述分割成多行并添加到结果中
      const descLines = propValue.description.split(/\r?\n/)
      descLines.forEach((line: string) => {
        result += `   * ${line}\n`
      })
    }
    if (hasDefault) {
      // 处理默认值，将其转换为适当的字符串表示
      let defaultValue = propValue.default
      if (typeof defaultValue === 'string') {
        defaultValue = `"${defaultValue.replace(/"/g, '\\"')}"`
      } else {
        defaultValue = JSON.stringify(defaultValue)
      }
      result += `   * @default ${defaultValue}\n`
    }
    result += `   */\n`
  }
  // 生成属性的类型定义并添加到结果中
  result += `  ${propName}${isRequired ? '' : '?'}: ${propType};\n`
  // 返回生成的字符串
  return result
}

/**
 * 处理插槽项的函数，生成对应的类型定义字符串
 * @param slotValue 插槽的对象，包含插槽的名称和描述等信息
 * @returns 返回生成的类型定义字符串
 */
function slotItemHandler(slotValue: any): string {
  // 如果插槽没有名称，则直接返回空字符串
  if (!slotValue?.name) return ''
  const slotName = slotValue.name
  // 判断插槽是否有描述
  const hasDescription = slotValue.description && slotValue.description.trim().length > 0
  let result = ''
  // 如果有描述，生成描述的注释
  if (hasDescription) {
    result += `  /**\n`
    const descLines = slotValue.description.split(/\r?\n/)
    descLines.forEach((line: string) => {
      result += `   * ${line}\n`
    })
    result += `   */\n`
  }
  // 如果有绑定的数据，生成绑定数据的类型定义
  if (slotValue.bindings && Object.keys(slotValue.bindings).length > 0) {
    let bindingsType = '{\n'
    Object.entries(slotValue.bindings).forEach(([bindingName, bindingValue]: [string, any]) => {
      const bindingType = bindingValue.type || 'any'
      bindingsType += `    ${bindingName}: ${bindingType};\n`
    })
    bindingsType += '  }'
    result += `  ${slotName}(bindings: ${bindingsType}): any;\n`
  } else {
    // 如果没有绑定的数据，生成不带参数的方法定义
    result += `  ${slotName}(): any;\n`
  }
  // 返回生成的类型定义字符串
  return result
}

/**
 * 根据提供的事件对象生成事件处理函数的字符串表示
 * 主要用于生成基于事件数据的类型定义或文档注释
 *
 * @param event 事件对象，可能包含名称、类型和描述属性
 * @returns 返回事件处理函数的字符串表示
 */
function emitItemHandler(event: any): string {
  // 如果事件没有名称，直接返回空字符串，因为名称是必填字段
  if (!event?.name) return ''

  // 初始化负载类型为'void'，如果存在事件类型则会被覆盖
  let payloadType = 'void'
  if (event.type) {
    // 如果类型是数组，则映射每个类型来处理
    payloadType = Array.isArray(event.type)
      ? event.type.map((t: any) => t.name || t).join(' | ') // 将数组中的类型名称转换为字符串并用' | '连接
      : event.type.name || event.type // 如果不是数组，直接获取类型名称或类型本身
  }
  let result = '' // 初始化结果字符串

  // 如果事件有描述，生成文档注释
  if (event.description && event.description.trim().length > 0) {
    result += `  /**\n`
    event.description.split(/\r?\n/).forEach((line: string) => {
      // 将描述按换行分割，并添加到结果中
      result += `   * ${line}\n`
    })
    result += `   */\n`
  }
  // 生成事件处理函数的类型定义并添加到结果中
  result += `  ${event.name}: (payload: ${payloadType}) => void;\n`
  // 返回生成的字符串
  return result
}

/**
 * 生成主题配置函数
 * 此函数根据提供的参数选择适当的主题，并返回指定组件的主题配置
 *
 * @param {Object} config - 主题配置对象
 * @param {boolean} config.pro - 是否使用Pro主题
 * @param {boolean} config.prose - 是否使用Prose风格
 * @param {string} config.componentName - 组件名称，用于获取该组件的具体主题配置
 * @returns {Object} 返回一个对象，包含所选主题下指定组件的主题配置
 */
const generateThemeConfig = ({ pro, prose, componentName }: ThemeConfig) => {
  // 根据是否选择Pro主题和Prose风格，计算出相应的主题
  const computedTheme = pro ? (prose ? themePro.prose : themePro) : theme
  // 根据组件名称，从计算出的主题中获取该组件的主题配置
  const componentTheme = computedTheme[componentName as keyof typeof computedTheme]

  // 根据是否选择Pro主题和Prose风格，构建并返回相应的主题配置对象
  return {
    [pro ? 'uiPro' : 'ui']: prose
      ? { prose: { [componentName]: componentTheme } }
      : { [componentName]: componentTheme }
  }
}

/**
 * 根据配置生成组件代码
 * @param {CodeConfig} config - 生成组件代码的配置对象
 * @returns {string} 生成的组件代码字符串
 */
const generateComponentCode = ({
  pro,
  props,
  external,
  externalTypes,
  hide,
  componentName,
  slots
}: CodeConfig) => {
  // 过滤掉需要隐藏的属性
  const filteredProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !hide.includes(key))
  )

  // 根据配置生成导入语句
  const imports = pro
    ? ''
    : external
        .filter((_, index) => externalTypes[index] && externalTypes[index] !== 'undefined')
        .map((ext, index) => {
          const type = externalTypes[index]?.replace(/[[\]]/g, '')
          return `import type { ${type} } from '@nuxt/${pro ? 'ui-pro' : 'ui'}'`
        })
        .join('\n')

  // 生成items属性的代码
  let itemsCode = ''
  if (props.items) {
    itemsCode = pro
      ? `const items = ref(${json5.stringify(props.items, null, 2)})`
      : `const items = ref<${externalTypes[0]}>(${json5.stringify(props.items, null, 2)})`
    delete filteredProps.items
  }

  // 生成calendar组件的modelValue属性代码
  let calendarValueCode = ''
  if (componentName === 'calendar' && props.modelValue && Array.isArray(props.modelValue)) {
    calendarValueCode = `const value = ref(new CalendarDate(${props.modelValue.join(', ')}))`
  }

  // 生成组件属性字符串
  const propsString = Object.entries(filteredProps)
    .map(([key, value]) => {
      const formattedKey = kebabCase(key)
      if (typeof value === 'string') {
        return `${formattedKey}="${value}"`
      } else if (typeof value === 'number') {
        return `:${formattedKey}="${value}"`
      } else if (typeof value === 'boolean') {
        return value ? formattedKey : `:${formattedKey}="false"`
      }
      return ''
    })
    .filter(Boolean)
    .join(' ')

  // 生成items、modelValue属性和其它属性的代码
  const itemsProp = props.items ? ':items="items"' : ''
  const vModelProp = componentName === 'calendar' && props.modelValue ? 'v-model="value"' : ''
  const allProps = [propsString, itemsProp, vModelProp].filter(Boolean).join(' ')
  const formattedProps = allProps ? ` ${allProps}` : ''

  // 生成<script setup>部分的代码
  let scriptSetup = ''
  if (imports || itemsCode || calendarValueCode) {
    scriptSetup = '<script setup lang="ts">'
    if (imports) scriptSetup += `\n${imports}`
    if (imports && (itemsCode || calendarValueCode)) scriptSetup += '\n'
    if (calendarValueCode) scriptSetup += `\n${calendarValueCode}`
    if (itemsCode) scriptSetup += `\n${itemsCode}`
    scriptSetup += '\n</script>\n\n'
  }

  // 生成组件内容和slot内容的代码
  let componentContent = ''
  let slotContent = ''

  if (slots && Object.keys(slots).length > 0) {
    const defaultSlot = slots.default?.trim()
    if (defaultSlot) {
      const indentedContent = defaultSlot
        .split('\n')
        .map(line => line.trim() ? `    ${line}` : line)
        .join('\n')
      componentContent = `\n${indentedContent}\n  `
    }

    Object.entries(slots).forEach(([slotName, content]) => {
      if (slotName !== 'default' && content?.trim()) {
        const indentedSlotContent = content.trim()
          .split('\n')
          .map(line => line.trim() ? `      ${line}` : line)
          .join('\n')
        slotContent += `\n    <template #${slotName}>\n${indentedSlotContent}\n    </template>`
      }
    })
  }

  // 生成组件的PascalCase名称
  const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1)

  // 生成组件模板代码
  let componentTemplate = ''
  if (componentContent || slotContent) {
    componentTemplate = `<U${pascalCaseName}${formattedProps}>${componentContent}${slotContent}</U${pascalCaseName}>` // Removed space before closing tag
  } else {
    componentTemplate = `<U${pascalCaseName}${formattedProps} />`
  }

  // 返回生成的组件代码字符串
  return `${scriptSetup}<template>
  ${componentTemplate}
</template>`
}

/**
 * 导出一个Nitro插件，用于在Nuxt Content中处理LLM生成的文档
 * 主要功能包括替换特定类型的节点为预格式化代码块，展示组件主题配置、组件代码、属性、插槽、事件等信息
 */
export default defineNitroPlugin((nitroApp) => {
  // 监听'content:llms:generate:document'钩子，处理生成的文档内容
  nitroApp.hooks.hook('content:llms:generate:document', async (_: H3Event, doc: PageCollectionItemBase) => {
    // 将文档标题转换为驼峰命名形式作为组件名称
    const componentName = camelCase(doc.title)

    // 替换'doc'类型节点为预格式化代码块，展示组件主题配置
    visitAndReplace(doc, 'component-theme', (node) => {
      const attributes = node[1] as Record<string, string>
      const mdcSpecificName = attributes?.slug

      const finalComponentName = mdcSpecificName ? camelCase(mdcSpecificName) : componentName

      const pro = parseBoolean(attributes[':pro'])
      const prose = parseBoolean(attributes[':prose'])
      const appConfig = generateThemeConfig({ pro, prose, componentName: finalComponentName })

      replaceNodeWithPre(
        node,
        'ts',
        `export default defineAppConfig(${json5.stringify(appConfig, null, 2)?.replace(/,([ |\t\n]+[}|\])])/g, '$1')})`,
        'app.config.ts'
      )
    })

    // 替换'component-code'类型节点为预格式化代码块，展示组件代码
    visitAndReplace(doc, 'component-code', (node) => {
      const attributes = node[1] as ComponentAttributes
      const pro = parseBoolean(attributes[':pro'])
      const props = attributes[':props'] ? json5.parse(attributes[':props']) : {}
      const external = attributes[':external'] ? json5.parse(attributes[':external']) : []
      const externalTypes = attributes[':externalTypes'] ? json5.parse(attributes[':externalTypes']) : []
      const ignore = attributes[':ignore'] ? json5.parse(attributes[':ignore']) : []
      const hide = attributes[':hide'] ? json5.parse(attributes[':hide']) : []
      const slots = attributes[':slots'] ? json5.parse(attributes[':slots']) : {}

      // 生成组件代码
      const code = generateComponentCode({
        pro,
        props,
        external,
        externalTypes,
        ignore,
        hide,
        componentName,
        slots
      })

      // 替换当前节点为预格式化代码块，展示生成的组件代码
      replaceNodeWithPre(node, 'vue', code)
    })

    // 替换'component-props'类型节点为预格式化代码块，展示组件属性接口定义
    visitAndReplace(doc, 'component-props', (node) => {
      const attributes = node[1] as Record<string, string>
      const mdcSpecificName = attributes?.name
      const isProse = parseBoolean(attributes[':prose'])

      const finalComponentName = mdcSpecificName ? camelCase(mdcSpecificName) : componentName

      const { pascalCaseName, componentMeta } = getComponentMeta(finalComponentName)

      if (!componentMeta?.props) return

      const interfaceName = isProse ? `Prose${pascalCaseName}Props` : `${pascalCaseName}Props`

      const interfaceCode = generateTSInterface(
        interfaceName,
        Object.values(componentMeta.props),
        propItemHandler,
        `Props for the ${isProse ? 'Prose' : ''}${pascalCaseName} component`
      )
      replaceNodeWithPre(node, 'ts', interfaceCode)
    })

    // 替换'component-slots'类型节点为预格式化代码块，展示组件插槽接口定义
    visitAndReplace(doc, 'component-slots', (node) => {
      const { pascalCaseName, componentMeta } = getComponentMeta(componentName)
      if (!componentMeta?.slots) return

      const interfaceCode = generateTSInterface(
        `${pascalCaseName}Slots`,
        Object.values(componentMeta.slots),
        slotItemHandler,
        `Slots for the ${pascalCaseName} component`
      )
      replaceNodeWithPre(node, 'ts', interfaceCode)
    })

    // 替换'component-emits'类型节点为预格式化代码块，展示组件事件接口定义
    visitAndReplace(doc, 'component-emits', (node) => {
      const { pascalCaseName, componentMeta } = getComponentMeta(componentName)
      const hasEvents = componentMeta?.events && Object.keys(componentMeta.events).length > 0

      if (hasEvents) {
        const interfaceCode = generateTSInterface(
          `${pascalCaseName}Emits`,
          Object.values(componentMeta.events),
          emitItemHandler,
          `Emitted events for the ${pascalCaseName} component`
        )
        replaceNodeWithPre(node, 'ts', interfaceCode)
      } else {
        node[0] = 'p'
        node[1] = {}
        node[2] = 'No events available for this component.'
      }
    })

    // 替换'component-example'类型节点为预格式化代码块，展示组件示例代码
    visitAndReplace(doc, 'component-example', (node) => {
      const camelName = camelCase(node[1]['name'])
      const name = camelName.charAt(0).toUpperCase() + camelName.slice(1)
      const code = components[name].code
      replaceNodeWithPre(node, 'vue', code, `${name}.vue`)
    })
  })
})

<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import type { ChipProps } from '@nuxt/ui'
import json5 from 'json5'
import { upperFirst, camelCase, kebabCase } from 'scule'
import { hash } from 'ohash'
import { CalendarDate } from '@internationalized/date'
import * as theme from '#build/ui'
import * as themePro from '#build/ui-pro'
import { get, set } from '#ui/utils'

// 定义一个接口 Cast，用于描述类型转换对象的结构
// 该接口包含两个方法：`get` 和 `template`
interface Cast {
  // `get` 方法用于将输入参数转换为特定类型的值
  get: (args: any) => any
  // `template` 方法用于生成对应的字符串表示，通常用于代码展示
  template: (args: any) => string
}

// 定义类型 CastDateValue，它是一个包含三个数字的元组，分别表示年、月、日
type CastDateValue = [number, number, number]

// 定义一个 `castMap` 对象，其键为字符串类型，值符合 Cast 接口
const castMap: Record<string, Cast> = {
  // 'DateValue' 类型的转换规则：将 [年, 月, 日] 转换为 CalendarDate 实例，并提供模板字符串生成方法
  'DateValue': {
    // 将传入的数组参数转换为 CalendarDate 对象
    get: (args: CastDateValue) => new CalendarDate(...args),
    // 生成对应的字符串表示，用于代码展示
    template: (value: CalendarDate) => {
      return value ? `new CalendarDate(${value.year}, ${value.month}, ${value.day})` : 'null'
    }
  },
  // 'DateValue[]' 类型的转换规则：将多个 [年, 月, 日] 数组转换为 CalendarDate 对象数组
  'DateValue[]': {
    // 将每个日期数组转换为 CalendarDate 对象
    get: (args: CastDateValue[]) => args.map(date => new CalendarDate(...date)),
    // 生成对应的字符串数组表示
    template: (value: CalendarDate[]) => {
      return value ? `[${value.map(date => `new CalendarDate(${date.year}, ${date.month}, ${date.day})`).join(', ')}]` : '[]'
    }
  },
  // 'DateRange' 类型的转换规则：将起始和结束日期转换为包含 start 和 end 的对象
  'DateRange': {
    // 将起始和结束日期分别转换为 CalendarDate 对象
    get: (args: { start: CastDateValue, end: CastDateValue }) => ({ start: new CalendarDate(...args.start), end: new CalendarDate(...args.end) }),
    // 生成对应的字符串表示
    template: (value: { start: CalendarDate, end: CalendarDate }) => {
      if (!value.start || !value.end) {
        return `{ start: null, end: null }`
      }

      return `{ start: new CalendarDate(${value.start.year}, ${value.start.month}, ${value.start.day}), end: new CalendarDate(${value.end.year}, ${value.end.month}, ${value.end.day}) }`
    }
  }
}

// 定义组件的 props，用于接收外部传入的配置参数
const props = defineProps<{
  // 是否使用 pro 主题，默认为 false
  pro?: boolean
  // 是否使用 prose 格式，默认为 false
  prose?: boolean
  // 组件路径前缀，可选
  prefix?: string
  /** 覆盖从路由中获取的 slug 值，可选 */
  slug?: string
  // 自定义 class，支持任意类型
  class?: any
  /** 需要忽略的属性列表（不在选择器中显示） */
  ignore?: string[]
  /** 需要隐藏的属性列表（不在代码和选择器中显示） */
  hide?: string[]
  /** List of props to externalize in script setup 需要在 script setup 中定义的属性列表 */
  external?: string[]
  /** The types of the externalized props 引入定义属性的类型列表 */
  externalTypes?: string[]
  /** 需要通过 v-model 双向绑定的属性列表 */
  model?: string[]
  /** 每个属性对应的值列表，用于生成选项 */
  cast?: { [key: string]: string }
  /** 每个属性对应的插槽内容 */
  items?: { [key: string]: string[] }
  // 动态传递给组件的 props 对象
  props?: { [key: string]: any }
  // 插槽对象，包含 default 和其他命名插槽
  slots?: { [key: string]: any }
  /**
   * 是否使用 Prettier 格式化代码，默认为 false
   * @defaultValue false
   */
  prettier?: boolean
  /**
   * 是否折叠代码块，默认为 false
   * @defaultValue false
   */
  collapse?: boolean
  /**
   * 高亮显示的行号列表
   */
  highlights?: number[]
  /**
   * 是否在容器上添加 overflow-hidden 样式，默认为 false
   */
  overflowHidden?: boolean
}>()

const route = useRoute()
const { $prettier } = useNuxtApp()

const camelName = camelCase(props.slug ?? route.path.split('/').pop() ?? '')
const name = `${props.prose ? 'Prose' : 'U'}${upperFirst(camelName)}`

const component = defineAsyncComponent(() => {
  if (props.pro) {
    if (props.prefix) {
      return import(`#ui-pro/components/${props.prefix}/${upperFirst(camelName)}.vue`)
    }

    if (props.prose) {
      return import(`#ui-pro/components/prose/${upperFirst(camelName)}.vue`)
    }

    return import(`#ui-pro/components/${upperFirst(camelName)}.vue`)
  }

  return import(`#ui/components/${upperFirst(camelName)}.vue`)
})

// 这段代码的作用是将外部传入的 props.props 根据 props.cast 的映射规则转换为组件所需的最终属性值，并确保其响应性。
// 使用 reactive 创建响应式的 componentProps 对象，基于传入的 props.props 和 cast 映射规则
const componentProps = reactive({
  // 将 props.props 中的每个属性根据 cast 规则进行转换或保留原始值
  ...Object.fromEntries(Object.entries(props.props || {}).map(([key, value]) => {
    const cast = props.cast?.[key]

    // 如果指定了 cast 类型但未在 castMap 中定义，则抛出错误
    if (cast && !castMap[cast]) {
      throw new Error(`Unknown cast: ${cast}`)
    }

    // 返回处理后的键值对：如果存在 cast，则使用 castMap.get 转换；否则保留原始值
    return [key, cast ? castMap[cast]!.get(value) : value]
  }))
})

// 创建响应式的 componentEvents 对象，用于处理组件的事件绑定
const componentEvents = reactive({
  // 遍历 props.model 中定义的所有属性，为每个属性生成对应的 `v-model` 更新事件
  // 事件名称，格式为 onUpdate:key
  // 事件回调，更新对应的 componentProps 属性
  ...Object.fromEntries((props.model || []).map(key => [`onUpdate:${key}`, (e: any) => setComponentProp(key, e)])),
  // 如果 componentProps 中存在 modelValue，则为其创建 `onUpdate:modelValue` 事件
  ...(componentProps.modelValue ? { [`onUpdate:modelValue`]: (e: any) => setComponentProp('modelValue', e) } : {})
})

// 获取组件属性值，如果不存在则返回 undefined
function getComponentProp(name: string) {
  return get(componentProps, name) ?? undefined
}

// 设置组件属性值，使用 set 函数更新响应式数据
function setComponentProp(name: string, value: any) {
  set(componentProps, name, value)
}

// 根据 props.pro 和 props.prose 的值选择对应的主题配置
const componentTheme = ((props.pro ? props.prose ? themePro.prose : themePro : theme) as any)[camelName]
// 获取组件的元信息（如 props、slots 等），用于动态生成 UI 和代码示例
const meta = await fetchComponentMeta(name as any)

// 递归遍历对象，将嵌套结构中的所有键路径扁平化为点符号（dot notation）形式
function mapKeys(obj: object, parentKey = ''): any {
  return Object.entries(obj || {}).flatMap(([key, value]: [string, any]) => {
    // 如果值是对象且不是数组，则递归处理该对象
    if (typeof value === 'object' && !Array.isArray(value)) {
      return mapKeys(value, key)
    }

    // 构建完整的键路径（如：parentKey.childKey）
    const fullKey = parentKey ? `${parentKey}.${key}` : key

    // 如果该键未被忽略或隐藏，则保留该键；否则返回 undefined
    // ignore 仅在属性选择器中隐藏指定的属性
    // hide 属性既不会出现在属性选择器中，也不会出现在最终显示代码中
    return !props.ignore?.includes(fullKey) && !props.hide?.includes(fullKey) ? fullKey : undefined
  }).filter(Boolean) // 过滤掉所有 undefined 值
}

// 计算属性 `options`，用于生成 UI 控件中可配置的属性选项列表
const options = computed(() => {
  // 获取扁平化的属性键路径（排除被忽略或隐藏的字段）
  const keys = mapKeys(props.props || {})

  return keys.map((key: string) => {
    // 查找当前组件元信息中与该 key 匹配的 prop 定义
    const prop = meta?.meta?.props?.find((prop: any) => prop.name === key)
    // 获取用户传入的 items 数据（用于枚举值选择）
    const propItems = get(props.items, key, [])

    // 根据优先级构建选项：
    // 1. 用户传入的 items；
    // 2. 布尔类型自动添加 true/false；
    // 3. 主题变体（theme variants）中的可用值。
    const items = propItems.length
      ? propItems.map((item: any) => ({
          value: item,
          label: String(item),
          // 如果是颜色相关的字段，则显示为 chip 标签样式
          chip: key.toLowerCase().endsWith('color') ? { color: item } : undefined
        }))
      : prop?.type === 'boolean' || prop?.type === 'boolean | undefined'
        ? [{ value: true, label: 'true' }, { value: false, label: 'false' }]
        : Object.keys(componentTheme?.variants?.[key] || {}).filter((variant) => {
            return variant !== 'true' && variant !== 'false'
          }).map(variant => ({
            value: variant,
            label: variant,
            chip: key.toLowerCase().endsWith('color') ? { color: variant } : undefined
          }))

    // 返回每个属性的配置项，供 UI 控件使用
    return {
      name: key, // 属性名
      label: key, // 显示标签
      type: props?.cast?.[key] ?? prop?.type, // 类型（可能经过 cast 转换）
      items // 可选项列表
    }
  })
})

// 计算属性 `code`，用于动态生成组件的示例代码
const code = computed(() => {
  let code = ''

  // 如果是 prose 模式，使用 MDC 格式生成代码块
  if (props.prose) {
    code += `\`\`\`mdc
::${camelName}`

    // 过滤掉隐藏或空值的 props，并以 key="value" 的形式拼接为字符串
    const proseProps = Object.entries(componentProps).map(([key, value]) => {
      if (value === undefined || value === null || value === '' || props.hide?.includes(key)) {
        return
      }

      return `${key}="${value}"`
    }).filter(Boolean).join(' ')

    // 如果有有效的 props，则添加到组件标签中
    if (proseProps.length) {
      code += `{${proseProps}}`
    }

    // 添加默认插槽内容
    code += `
${props.slots?.default}
::
\`\`\``

    return code
  }

  // 如果启用了折叠功能，则包裹在 ::code-collapse 中
  if (props.collapse) {
    code += `::code-collapse
`
  }

  // 开始 Vue 模板代码块，支持行号高亮
  code += `\`\`\`vue${props.highlights?.length ? ` {${props.highlights.join('-')}}` : ''}`

  // 如果需要外化 props 到 script setup 中
  if (props.external?.length) {
    code += `
<script setup lang="ts">
`
    // 如果指定了 externalTypes，则先导入类型定义
    if (props.externalTypes?.length) {
      const removeArrayBrackets = (type: string): string => type.endsWith('[]') ? removeArrayBrackets(type.slice(0, -2)) : type

      const types = props.externalTypes.map(type => removeArrayBrackets(type))
      code += `import type { ${types.join(', ')} } from '@nuxt/ui${props.pro ? '-pro' : ''}'

`
    }

    // 遍历 external 中的每个 prop，生成对应的 ref 声明
    for (const [i, key] of props.external.entries()) {
      const cast = props.cast?.[key]
      const value = cast ? castMap[cast]!.template(componentProps[key]) : json5.stringify(componentProps[key], null, 2)?.replace(/,([ |\t\n]+[}|\]])/g, '$1')
      const type = props.externalTypes?.[i] ? `<${props.externalTypes[i]}>` : ''

      code += `const ${key === 'modelValue' ? 'value' : key} = ref${type}(${value})
`
    }
    code += `<\/script>
`
  }

  // 开始模板部分
  code += `
<template>
  <${name}`

  // 遍历 componentProps，生成对应的绑定属性
  for (const [key, value] of Object.entries(componentProps)) {
    if (key === 'modelValue') {
      code += ` v-model="value"`
      continue
    }

    if (props.model?.includes(key)) {
      code += ` v-model:${key}="${key}"`
      continue
    }

    // 忽略 undefined、null、空字符串和被 hide 的字段
    if (value === undefined || value === null || value === '' || props.hide?.includes(key)) {
      continue
    }

    const prop = meta?.meta?.props?.find((prop: any) => prop.name === key)
    const propDefault = prop && (prop.default ?? prop.tags?.find(tag => tag.name === 'defaultValue')?.text ?? componentTheme?.defaultVariants?.[prop.name])
    const name = kebabCase(key)

    // 处理布尔值：如果值与默认值一致则省略
    if (typeof value === 'boolean') {
      if (value && (propDefault === 'true' || propDefault === '`true`' || propDefault === true)) {
        continue
      }
      if (!value && (!propDefault || propDefault === 'false' || propDefault === '`false`' || propDefault === false)) {
        continue
      }

      code += value ? ` ${name}` : ` :${name}="false"`
      // 处理对象类型：使用 JSON.stringify 转换为字符串表示
    } else if (typeof value === 'object') {
      const parsedValue = !props.external?.includes(key) ? json5.stringify(value, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1') : key

      code += ` :${name}="${parsedValue}"`
    } else { // 其他类型处理：数字不加冒号，其他加冒号
      if (propDefault === value) {
        continue
      }

      code += ` ${typeof value === 'number' ? ':' : ''}${name}="${value}"`
    }
  }

  // 处理插槽内容
  if (props.slots) {
    code += `>`
    for (const [key, value] of Object.entries(props.slots)) {
      if (key === 'default') {
        code += props.slots.default
      } else {
        code += `
  <template #${key}>
    ${value}
  </template>\n`
      }
    }
    // 如果有多个插槽，添加换行后闭合标签
    code += (Object.keys(props.slots).length > 1 ? '\n' : '') + `</${name}>`
  } else {
    code += ' />'
  }
  code += `\n</template>
\`\`\`
`

  // 如果启用 collapse，闭合代码块
  if (props.collapse) {
    code += `
::`
  }

  return code
})

// 使用 `useAsyncData` 异步加载并处理 Markdown AST 数据
// 缓存键，基于组件名、props 和 slots 的哈希值生成唯一标识
const { data: ast } = await useAsyncData(`component-code-${name}-${hash({ props: componentProps, slots: props.slots })}`, async () => {
  // 如果未启用 prettier 格式化，则直接解析当前生成的代码为 Markdown AST
  if (!props.prettier) {
    return parseMarkdown(code.value)
  }

  let formatted = ''
  try {
    // 使用 Prettier 对代码进行格式化，保持良好的可读性
    formatted = await $prettier.format(code.value, {
      trailingComma: 'none', // 不添加尾随逗号
      semi: false, // 不添加分号
      singleQuote: true, // 使用单引号
      printWidth: 100 // 每行最大宽度为 100 字符
    })
  } catch {
    // 如果格式化失败，回退到原始代码
    formatted = code.value
  }

  // 将格式化后的代码解析为 Markdown AST
  return parseMarkdown(formatted)
}, { watch: [code] }) // 监听依赖项变化（此处监听的是 code 的变化）
</script>

<template>
  <div class="my-5">
    <div class="relative">
      <div v-if="options.length" class="flex flex-wrap items-center gap-2.5 border border-muted border-b-0 relative rounded-t-md px-4 py-2.5 overflow-x-auto">
        <template v-for="option in options" :key="option.name">
          <UFormField
            :label="option.label"
            size="sm"
            class="inline-flex ring ring-accented rounded-sm"
            :ui="{
              wrapper: 'bg-elevated/50 rounded-l-sm flex border-r border-accented',
              label: 'text-muted px-2 py-1.5',
              container: 'mt-0'
            }"
          >
            <USelect
              v-if="option.items?.length"
              :model-value="getComponentProp(option.name)"
              :items="option.items"
              value-key="value"
              color="neutral"
              variant="soft"
              class="rounded-sm rounded-l-none min-w-12"
              :class="[option.name.toLowerCase().endsWith('color') && 'pl-6']"
              :ui="{ itemLeadingChip: 'size-2' }"
              @update:model-value="setComponentProp(option.name, $event)"
            >
              <template v-if="option.name.toLowerCase().endsWith('color')" #leading="{ modelValue, ui }">
                <UChip
                  v-if="modelValue"
                  inset
                  standalone
                  :color="(modelValue as any)"
                  :size="(ui.itemLeadingChipSize() as ChipProps['size'])"
                  class="size-2"
                />
              </template>
            </USelect>
            <UInput
              v-else
              :type="option.type?.includes('number') && typeof getComponentProp(option.name) === 'number' ? 'number' : 'text'"
              :model-value="getComponentProp(option.name)"
              color="neutral"
              variant="soft"
              :ui="{ base: 'rounded-sm rounded-l-none min-w-12' }"
              @update:model-value="setComponentProp(option.name, $event)"
            />
          </UFormField>
        </template>
      </div>

      <div v-if="component" class="flex justify-center border border-b-0 border-muted relative p-4 z-[1]" :class="[!options.length && 'rounded-t-md', props.class, { 'overflow-hidden': props.overflowHidden }]">
        <component :is="component" v-bind="{ ...componentProps, ...componentEvents }">
          <template v-for="slot in Object.keys(slots || {})" :key="slot" #[slot]>
            <slot :name="slot" mdc-unwrap="p">
              {{ slots?.[slot] }}
            </slot>
          </template>
        </component>
      </div>
    </div>
    <!-- 格式化显示源码 -->
    <MDCRenderer v-if="ast" :body="ast.body" :data="ast.data" class="[&_pre]:!rounded-t-none [&_div.my-5]:!mt-0" />
  </div>
</template>

<script setup lang="ts">
import type { ChipProps } from '@nuxt/ui'
import { camelCase } from 'scule'
import { useElementSize } from '@vueuse/core'
import { get, set } from '#ui/utils'

// 定义组件的 props，用于接收外部传入的配置参数
// 定义了 ComponentExample 组件的所有输入属性（props），包括控制展示、样式、布局、数据等
const props = withDefaults(defineProps<{
  // 组件名称（必填），用于动态加载示例和渲染组件
  name: string
  // 自定义 class，支持任意类型
  class?: any
  /**
   * 是否在 iframe 中渲染组件，可以是一个布尔值或一个对象以传递额外属性
   * @defaultValue false
   */
  iframe?: boolean | { [key: string]: any }
  /**
   * 是否在移动设备尺寸的 iframe 视口中显示组件
   * @defaultValue false
   */
  iframeMobile?: boolean
  /**
   * 动态传递给组件的 props 对象。
   */
  props?: { [key: string]: any }
  /**
   * 是否使用 Prettier 格式化代码
   * @defaultValue false
   */
  prettier?: boolean
  /**
   * 是否折叠代码块
   * @defaultValue false
   */
  collapse?: boolean
  /**
   * 是否显示预览区域。
   * 如果为 false，则显示文件名。
   * @defaultValue true
   */
  preview?: boolean
  /**
   * 是否显示源码部分
   * @defaultValue true
   */
  source?: boolean
  /**
   * 一组可变的 props 配置，用于绑定到组件上。
   * 每个选项可以包含：
   * - alias: 别名（可选）
   * - name: 属性名（必填）
   * - label: 显示标签
   * - items: 可选项列表
   * - default: 默认值
   * - multiple: 是否支持多选
   */
  options?: Array<{
    alias?: string
    name: string
    label: string
    items?: any[]
    default: any
    multiple?: boolean
  }>
  /**
   * 要高亮显示的代码行号列表
   */
  highlights?: number[]
  /**
   * 是否在容器上添加 overflow-hidden 样式
   */
  overflowHidden?: boolean
}>(), {
  // 设置默认值
  preview: true, // 默认显示预览
  source: true // 默认显示源码
})

// 定义组件插槽类型，用于 TypeScript 类型推断
const slots = defineSlots<{
  // `options` 插槽：用于自定义渲染属性配置控件区域
  options(props?: {}): any
  // `code` 插槽：用于自定义渲染代码展示区域
  code(props?: {}): any
}>()

// 创建一个 ref 来引用 DOM 元素，用于获取其尺寸
const el = ref<HTMLElement | null>(null)

// 使用 $prettier 插件来进行代码格式化（来自 NuxtApp）
const { $prettier } = useNuxtApp()

// 使用 vueuse 的 useElementSize 获取 el 元素的宽度
const { width } = useElementSize(el)

// 将组件名转换为驼峰命名格式，用于动态加载对应组件
const camelName = camelCase(props.name)

// 异步获取当前组件对应的示例代码和元信息
const data = await fetchComponentExample(camelName)

// 使用 reactive 创建响应式的 componentProps 对象，基于 props.props 初始化
const componentProps = reactive({ ...(props.props || {}) })

// 计算属性 `code`，用于生成组件示例的代码块字符串
const code = computed(() => {
  let code = ''

  // 如果启用了折叠功能，则添加 `::code-collapse` 开始标签
  if (props.collapse) {
    // 开始 Vue 代码块，支持自定义文件名和行号高亮
    code += `::code-collapse
`
  }

  // 插入实际的组件示例源码内容
  code += `\`\`\`vue ${props.preview ? '' : ` [${data.pascalName}.vue]`}${props.highlights?.length ? `{${props.highlights.join('-')}}` : ''}
${data?.code ?? ''}
\`\`\``

  // 如果启用 collapse，闭合代码块
  if (props.collapse) {
    code += `
::`
  }

  return code
})

// 使用 `useAsyncData` 异步加载并处理 Markdown AST 数据
const { data: ast } = await useAsyncData(`component-example-${camelName}`, async () => {
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

// 初始化 `optionsValues`，用于存储用户通过 UI 控件修改的组件属性值
const optionsValues = ref(props.options?.reduce((acc, option) => {
  // 如果选项中包含 name，则在 acc 中设置默认值（使用 alias 或 name 作为键）
  if (option.name) {
    acc[option.alias || option.name] = option.default
  }

  // 如果该选项是颜色相关的，并且提供了 items，则将其转换为带 chip 的格式
  if (option.name.toLowerCase().endsWith('color') && option.items?.length) {
    option.items = option.items.map((item: any) => ({
      label: item,
      value: item,
      chip: { color: item } // 渲染为 Chip 组件时显示对应颜色
    }))
  }
  return acc
}, {} as Record<string, any>) || {})

// 计算属性
const urlSearchParams = computed(() => {
  const params = {
    ...optionsValues.value, // 用户交互修改的配置项
    ...componentProps  // 外部传入的组件 props
  }

  // 如果未启用 iframeMobile，则添加当前容器宽度参数
  if (!props.iframeMobile) {
    params.width = Math.round(width.value).toString()
  }

  // 返回 URL 编码后的查询字符串
  return new URLSearchParams(params).toString()
})
</script>

<template>
  <div ref="el" class="my-5">
    <template v-if="preview">
      <div class="border border-muted relative z-[1]" :class="[{ 'border-b-0 rounded-t-md': props.source, 'rounded-md': !props.source, 'overflow-hidden': props.overflowHidden }]">
        <div v-if="props.options?.length || !!slots.options" class="flex gap-4 p-4 border-b border-muted">
          <slot name="options" />

          <UFormField
            v-for="option in props.options"
            :key="option.name"
            :label="option.label"
            :name="option.name"
            size="sm"
            class="inline-flex ring ring-accented rounded-sm"
            :ui="{
              wrapper: 'bg-elevated/50 rounded-l-sm flex border-r border-accented',
              label: 'text-muted px-2 py-1.5',
              container: 'mt-0'
            }"
          >
            <USelectMenu
              v-if="option.items?.length"
              :model-value="get(optionsValues, option.name)"
              :items="option.items"
              :search-input="false"
              :value-key="option.name.toLowerCase().endsWith('color') ? 'value' : undefined"
              color="neutral"
              variant="soft"
              class="rounded-sm rounded-l-none min-w-12"
              :multiple="option.multiple"
              :class="[option.name.toLowerCase().endsWith('color') && 'pl-6']"
              :ui="{ itemLeadingChip: 'size-2' }"
              @update:model-value="set(optionsValues, option.name, $event)"
            >
              <template v-if="option.name.toLowerCase().endsWith('color')" #leading="{ modelValue, ui }">
                <UChip
                  inset
                  standalone
                  :color="(modelValue as any)"
                  :size="(ui.itemLeadingChipSize() as ChipProps['size'])"
                  class="size-2"
                />
              </template>
            </USelectMenu>
            <UInput
              v-else
              :model-value="get(optionsValues, option.name)"
              color="neutral"
              variant="soft"
              :ui="{ base: 'rounded-sm rounded-l-none min-w-12' }"
              @update:model-value="set(optionsValues, option.name, $event)"
            />
          </UFormField>
        </div>

        <iframe
          v-if="iframe"
          v-bind="typeof iframe === 'object' ? iframe : {}"
          :src="`/examples/${name}?${urlSearchParams}`"
          class="relative w-full"
          :class="[props.class, !iframeMobile && 'lg:left-1/2 lg:-translate-x-1/2 lg:w-[1024px]']"
        />
        <div v-else class="flex justify-center p-4" :class="props.class">
          <component :is="camelName" v-bind="{ ...componentProps, ...optionsValues }" />
        </div>
      </div>
    </template>

    <template v-if="props.source">
      <div v-if="!!slots.code" class="[&_pre]:!rounded-t-none [&_div.my-5]:!mt-0">
        <slot name="code" />
      </div>
      <MDCRenderer v-else-if="ast" :body="ast.body" :data="ast.data" class="[&_pre]:!rounded-t-none [&_div.my-5]:!mt-0" />
    </template>
  </div>
</template>

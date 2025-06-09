<script setup lang="ts">
import { upperFirst, camelCase, kebabCase } from 'scule'
import type { ComponentMeta } from 'vue-component-meta'
import * as theme from '#build/ui'
import * as themePro from '#build/ui-pro'

// 定义 props，并设置默认值
const props = withDefaults(defineProps<{
  name?: string // 组件名称（可选）
  ignore?: string[] // 需要忽略的 prop 名称列表（可选）
  pro?: boolean // 是否使用专业版组件（可选）
  prose?: boolean // 是否使用文档风格组件（可选）
}>(), {
  ignore: () => [
    'activeClass',
    'inactiveClass',
    'exactActiveClass',
    'ariaCurrentValue',
    'href',
    'rel',
    'noRel',
    'prefetch',
    'prefetchOn',
    'noPrefetch',
    'prefetchedClass',
    'replace',
    'exact',
    'exactQuery',
    'exactHash',
    'external',
    'onClick',
    'viewTransition'
  ]
})

// 获取当前路由信息
const route = useRoute()
// 根据路径或传入的 name 属性生成驼峰命名格式的组件名
const camelName = camelCase(props.name ?? route.path.split('/').pop() ?? '')
// 构造组件的类名：如果为 prose 模式，则添加 Prose 前缀；否则添加 U 前缀
const componentName = props.prose ? `Prose${upperFirst(camelName)}` : `U${upperFirst(camelName)}`

// 根据是否启用 pro 模式和 prose 模式选择对应的主题配置
const componentTheme = ((props.pro ? props.prose ? themePro.prose : themePro : theme) as any)[camelName]
// 异步获取组件的元数据
const meta = await fetchComponentMeta(componentName as any)

// 处理组件的 props 元数据，过滤掉需要忽略的 props，并处理默认值和类型
const metaProps: ComputedRef<ComponentMeta['props']> = computed(() => {
  if (!meta?.meta?.props?.length) {
    return []
  }

  return meta.meta.props.filter((prop) => {
    return !props.ignore?.includes(prop.name)
  }).map((prop) => {
    // 如果 prop 存在默认值，则进行格式化处理
    if (prop.default) {
      prop.default = prop.default.replace(' as never', '').replace(/^"(.*)"$/, '\'$1\'')
    } else {
      // 尝试从 tags 或 defaultVariants 中获取默认值
      const tag = prop.tags?.find(tag => tag.name === 'defaultValue')?.text
      if (tag) {
        prop.default = tag
      } else if (componentTheme?.defaultVariants?.[prop.name]) {
        prop.default = typeof componentTheme?.defaultVariants?.[prop.name] === 'string' ? `'${componentTheme?.defaultVariants?.[prop.name]}'` : componentTheme?.defaultVariants?.[prop.name]
      }
    }

    // 如果是枚举类型，则将枚举值拼接成联合类型
    // @ts-expect-error - Type is not correct
    prop.type = !prop.type.startsWith('boolean') && prop.schema?.kind === 'enum' && Object.keys(prop.schema.schema)?.length ? Object.values(prop.schema.schema).map(schema => schema?.type ? schema.type : schema).join(' | ') : prop.type
    return prop
  }).sort((a, b) => {
    // 对 props 进行排序：优先显示 'as'，其次是 'ui'
    if (a.name === 'as') {
      return -1
    }

    if (b.name === 'as') {
      return 1
    }

    if (a.name === 'ui') {
      return 1
    }

    if (b.name === 'ui') {
      return -1
    }

    return 0
  })
})
</script>

<template>
  <!-- 使用表格展示组件的 props -->
  <ProseTable>
    <ProseThead>
      <ProseTr>
        <ProseTh>
          Prop
        </ProseTh>
        <ProseTh>
          Default
        </ProseTh>
        <ProseTh>
          Type
        </ProseTh>
      </ProseTr>
    </ProseThead>
    <ProseTbody>
      <!-- 遍历 metaProps，展示每个 prop 的详细信息 -->
      <ProseTr v-for="prop in metaProps" :key="prop.name">
        <ProseTd>
          <ProseCode>
            {{ prop.name }}
          </ProseCode>
        </ProseTd>
        <ProseTd>
          <HighlightInlineType v-if="prop.default" :type="prop.default" />
        </ProseTd>
        <ProseTd>
          <HighlightInlineType v-if="prop.type" :type="prop.type" />

          <!-- 显示 prop 描述 -->
          <MDC v-if="prop.description" :value="prop.description" class="text-toned mt-1" :cache-key="`${kebabCase(route.path)}-${prop.name}-description`" />

          <!-- 显示 prop 相关链接 -->
          <ComponentPropsLinks v-if="prop.tags?.length" :prop="prop" />

          <!-- 显示 prop 的 schema 结构 -->
          <ComponentPropsSchema v-if="prop.schema" :prop="prop" :ignore="ignore" />
        </ProseTd>
      </ProseTr>
    </ProseTbody>
  </ProseTable>
</template>

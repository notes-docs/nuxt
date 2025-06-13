<script setup lang="ts">
import json5 from 'json5'
import { camelCase } from 'scule'
import { hash } from 'ohash'
import * as theme from '#build/ui'
import * as themePro from '#build/ui-pro'

// 定义组件 props
const props = defineProps<{
  pro?: boolean // 是否使用 Pro 版本
  prose?: boolean // 是否是富文本样式
  slug?: string // 页面路径标识
  extra?: string[] // 额外需要包含的主题字段
}>()

// 获取当前路由和共享数据中的 framework（框架）
const route = useRoute()
const { framework } = useSharedData()

// 从路径中提取组件名称
const name = props.slug ?? route.path.split('/').pop() ?? ''
const camelName = camelCase(name) // 转换为驼峰命名

// 控制是否隐藏 compoundVariants 中的某些颜色变体
const strippedCompoundVariants = ref(false)

// 根据 props 判断使用哪个主题
const computedTheme = computed(() => props.pro ? props.prose ? themePro.prose : themePro : theme)

// 处理主题配置，过滤掉非 primary 和 neutral 的颜色变体
const strippedTheme = computed(() => {
  const strippedTheme = {
    ...(computedTheme.value as any)[camelName]
  }

  if (strippedTheme?.compoundVariants) {
    strippedTheme.compoundVariants = strippedTheme.compoundVariants.filter((compoundVariant: any) => {
      if (compoundVariant.color) {
        if (!['primary', 'neutral'].includes(compoundVariant.color)) {
          strippedCompoundVariants.value = true

          return false
        }
      }

      if (compoundVariant.highlightColor) {
        if (!['primary', 'neutral'].includes(compoundVariant.highlightColor)) {
          strippedCompoundVariants.value = true

          return false
        }
      }

      if (compoundVariant.loadingColor) {
        if (!['primary', 'neutral'].includes(compoundVariant.loadingColor)) {
          strippedCompoundVariants.value = true

          return false
        }
      }

      return true
    })
  }

  return strippedTheme
})

// 构建最终要导出的组件主题对象
const component = computed(() => {
  const baseKey = props.pro ? 'uiPro' : 'ui'

  const content = props.prose
    ? { prose: { [camelName]: strippedTheme.value } }
    : { [camelName]: strippedTheme.value }

  if (props.extra?.length) {
    props.extra.forEach((extra) => {
      const target = props.prose ? content.prose! : content
      target[extra as keyof typeof target] = computedTheme.value[extra as keyof typeof computedTheme.value]
    })
  }

  return {
    [baseKey]: content
  }
})

// 构建 GitHub 源码链接
const themeLink = computed(() => {
  const repo = props.pro ? 'ui-pro' : 'ui'
  const slug = name.startsWith('content') ? `content/${name}` : name

  return `https://github.com/nuxt/${repo}/blob/v3/src/theme/${slug}.ts`
})

// 异步加载并生成 Markdown AST（抽象语法树），用于展示代码块和说明
const { data: ast } = await useAsyncData(`component-theme-${camelName}-${hash({ props })}`, async () => {
  const md = `
::code-collapse{class="nuxt-only"}

\`\`\`ts [app.config.ts]
export default defineAppConfig(${json5.stringify(component.value, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1')})
\`\`\`\

::

::code-collapse{class="vue-only ui-only"}

\`\`\`ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui(${json5.stringify(component.value, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1')
      .split('\n')
      .map((line, i) => i === 0 ? line : `    ${line}`)
      .join('\n')})
  ]
})
\`\`\`

::

::code-collapse{class="vue-only ui-pro-only"}

\`\`\`ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uiPro from '@nuxt/ui-pro/vite'

export default defineConfig({
  plugins: [
    vue(),
    uiPro(${json5.stringify(component.value, null, 2).replace(/,([ |\t\n]+[}|\])])/g, '$1')
      .split('\n')
      .map((line, i) => i === 0 ? line : `    ${line}`)
      .join('\n')})
  ]
})
\`\`\`

::

${strippedCompoundVariants.value
  ? `
::callout{icon="i-simple-icons-github" to="${themeLink.value}" title="Compound variants"}
为了可读性，\`compoundVariants\` 中的某些颜色被省略。请查看 GitHub 上的源代码。
::`
  : ''}
`

  return parseMarkdown(md)
}, { watch: [framework] })
</script>

<template>
  <MDCRenderer v-if="ast" :body="ast.body" :data="ast.data" />
</template>

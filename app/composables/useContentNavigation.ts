import type { ContentNavigationItem } from '@nuxt/content'

/**
 * 处理导航项
 *
 * 此函数的目的是根据提供的导航项及其可选的父导航项来生成或修改导航项结构
 * 它会根据条件来决定是展平导航项的子项还是生成一个新的导航项结构
 *
 * @param item 当前要处理的导航项
 * @param parent 可选的父导航项，用于继承某些属性
 * @returns 返回处理后的导航项结构，如果当前项有子项且子项被展平，则返回展平后的数组，否则返回新的导航项对象
 */
function processNavigationItem(item: ContentNavigationItem, parent?: ContentNavigationItem): any {
  // 如果当前导航项有阴影（shadow），则递归处理其子项，并将结果展平
  if (item.shadow) {
    return item.children?.flatMap(child => processNavigationItem(child, item))
  }

  // 生成新的导航项结构，继承或修改必要的属性
  return {
    ...item,
    // 如果父导航项的标题存在且不为'Pro'，则使用父导航项的标题，否则保留当前导航项的标题
    title: parent?.title && parent.title !== 'Pro' ? parent.title : item.title,
    // 如果父导航项有徽章标志，则使用父导航项的，否则保留当前导航项的
    badge: parent?.badge || item.badge,
    // 构造类名数组，根据当前导航项的框架和模块属性生成，并过滤掉无效值
    class: [item.framework && `${item.framework}-only`, item.module && `${item.module}-only`].filter(Boolean),
    // 如果当前导航项有子项，则递归处理子项，否则不设置子项
    children: item.children?.length ? item.children?.flatMap(child => processNavigationItem(child)) : undefined
  }
}

/**
 * 处理导航项图标
 * 根据导航项的路径和模块类型来选择合适的图标
 * @param item 导航项对象，包含导航项的相关信息如路径(path)和模块(module)
 * @returns 返回一个带有适当图标的导航项对象
 */
function processNavigationItemIcon(item: ContentNavigationItem) {
  // 初始化图标为导航项原始的图标
  let icon = item.icon

  // 如果导航项路径以'/ui/components'开头，则根据模块类型选择图标
  if (item.path.startsWith('/ui/components')) {
    icon = item.module === 'ui-pro' ? 'i-lucide-panels-top-left' : 'i-lucide-box'
  }
  // 如果导航项路径以'/ui/composables'开头，则使用'square-function'图标
  if (item.path.startsWith('/ui/composables')) {
    icon = 'i-lucide-square-function'
  }

  // 返回一个新的导航项对象，带有更新后的图标
  return {
    ...item,
    icon
  }
}

/**
 * 自定义钩子用于处理内容导航
 * 此钩子对导航项进行处理，根据当前的框架和模块状态进行过滤和映射
 *
 * @param navigation 导航项的引用，可能未定义
 * @returns 返回一个对象，包含处理后的导航项和过滤后的导航项
 */
export const useContentNavigation = (navigation: Ref<ContentNavigationItem[] | undefined>) => {
  // 获取当前的框架和模块状态
  const { framework, module } = useSharedData()

  // 计算属性，对导航项进行映射处理
  const mappedNavigation = computed(() => navigation.value?.map(item => processNavigationItem(item)))

  // 计算属性，对映射后的导航项进行过滤和再次映射处理
  const filteredNavigation = computed(() => mappedNavigation.value?.map((item) => {
    // 复制当前导航项并处理其子项
    return {
      ...item,
      children: item.children?.filter((child: any) => {
        // 过滤条件：根据路径、框架和模块状态决定是否保留子项
        if (child.path.startsWith('/ui/components')) {
          return true
        }

        if (child.framework && child.framework !== framework.value) {
          return false
        }
        if (child.module && child.module !== module.value) {
          return false
        }
        return true
      })?.map(processNavigationItemIcon)
    }
  }))

  // 返回处理后的导航数据，包括映射后的和过滤后的导航项
  return {
    // 对映射后的导航项移除子项的图标信息
    mappedNavigation: computed(() => mappedNavigation.value[0].children?.map(item => ({
      ...item,
      children: item.children?.map((child: any) => ({ ...child, icon: undefined }))
    }))),
    filteredNavigation
  }
}

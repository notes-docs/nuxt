import type { BlogArticle } from '~/types'

// 定义一个用于获取博客文章数据的组合函数 `useBlog`
export const useBlog = () => {
  // 使用 useAsyncData 获取博客文章列表，缓存 key 为 'blog'
  const { data: articles, refresh } = useAsyncData<BlogArticle[]>('blog', async () => {
    // 查询名为 'blog' 的内容集合，筛选 markdown 文件（extension = md）
    return queryCollection('blog')
      .where('extension', '=', 'md')
      /* .select('title', 'date', 'image', 'description', 'path', 'authors', 'category') */
      .order('date', 'DESC') // 按照日期降序排列
      .all() // 获取所有符合条件的数据
      .then(res => res.filter(article => article.path !== '/blog')) // 过滤掉路径为 '/blog' 的默认页面
  }, { default: () => [] }) // 默认值为空数组

  // 定义 fetchList 函数，用于在数据为空时手动刷新加载
  async function fetchList() {
    if (!articles.value?.length) {
      return refresh() // 如果没有数据，则重新请求
    }
  }

  // 返回组合式 API 的公开部分
  return {
    articles, // 博客文章列表
    // featuredArticle,
    fetchList // 手动刷新方法
  }
}

import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// 定义一个 Image 对象结构，用于描述图片的相关属性
const Image = z.object({
  src: z.string(), // 图片的路径（必填）
  alt: z.string(), // 图片的替代文本（必填）
  width: z.number().optional(), // 图片的宽度（可选）
  height: z.number().optional() // 图片的高度（可选）
})

// 定义一个 DualModeImage 对象结构，用于描述支持亮色和暗色模式的图片属性
const DualModeImage = z.object({
  // 亮色模式下的图片路径（使用媒体编辑器输入）
  light: z.string().editor({ input: 'media' }),
  // 暗色模式下的图片路径（使用媒体编辑器输入）
  dark: z.string().editor({ input: 'media' }),
  // 图片的宽度（可选）
  width: z.number().optional(),
  // 图片的高度（可选）
  height: z.number().optional(),
  // 图片的替代文本（可选）
  alt: z.string().optional()
})

// 定义一个 Link 对象结构，用于描述链接的基本属性
const Link = z.object({
  // 链接显示的文本标签（必填）
  label: z.string(),
  // 链接的目标地址（必填）
  to: z.string(),
  // 链接的图标（可选）
  icon: z.string().optional()
})

// 定义一个 Button 对象结构，用于描述按钮的各种属性
const Button = z.object({
  // 按钮显示的文本标签（必填）
  label: z.string(),
  // 按钮的前置图标（可选）
  icon: z.string().optional(),
  // 按钮的后置图标（可选）
  trailingIcon: z.string().optional(),
  // 按钮跳转的目标地址（可选）
  to: z.string().optional(),
  // 按钮的颜色主题（可选），支持 primary、neutral、success、warning、error、info
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  // 按钮的尺寸（可选），支持 xs、sm、md、lg、xl
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  // 按钮的样式变体（可选），支持 solid、outline、subtle、soft、ghost、link
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  // 按钮的唯一标识 ID（可选）
  id: z.string().optional(),
  // 链接打开的方式（可选），支持 _blank（新窗口）或 _self（当前窗口）
  target: z.enum(['_blank', '_self']).optional()
})

// 定义一个 BaseSection 对象结构，用于描述包含标题和描述的基础区块属性
const BaseSection = z.object({
  // 区块的标题（必填）
  title: z.string(),
  // 区块的描述文本（必填）
  description: z.string()
})

// 定义一个 Author 对象结构，用于描述作者的相关信息
const Author = z.object({
  // 作者的姓名（必填）
  name: z.string(),
  // 作者的描述信息（可选）
  description: z.string().optional(),
  // 作者的用户名（可选）
  username: z.string().optional(),
  // 作者的 Twitter 链接（可选）
  twitter: z.string().optional(),
  // 作者主页或其他链接地址（可选）
  to: z.string().optional(),
  // 作者的头像，使用 Image 结构定义（可选）
  avatar: Image.optional()
})

// 定义一个 Testimonial 对象结构，用于描述推荐语及其作者信息
const Testimonial = z.object({
  quote: z.string(), // 推荐语的内容（必填）
  author: Author // 推荐人的信息，引用 Author 结构（必填）
})

// 定义一个 PageFeature 对象结构，用于描述页面功能项的属性
const PageFeature = z.object({
  // 功能项的标题（必填）
  title: z.string(),
  // 功能项的描述文本（必填）
  description: z.string(),
  // 功能项的图标，使用图标编辑器输入（必填）
  icon: z.string().editor({ input: 'icon' }),
  // 功能项链接的目标地址（可选）
  to: z.string().optional(),
  // 链接打开的方式（可选），支持 _blank（新窗口）或 _self（当前窗口）
  target: z.enum(['_blank', '_self']).optional(),
  // 标识该功能是否即将推出（可选）
  soon: z.boolean().optional()
})

// 定义一个 PageSection 对象结构，用于描述页面区块的属性，继承自 BaseSection
const PageSection = BaseSection.extend({
  // 区块内包含的一组按钮链接，使用 Button 结构（必填）
  links: z.array(Button),
  // 区块内包含的一组功能项，使用 PageFeature 结构（必填）
  features: z.array(PageFeature),
  // 区块展示的图片，支持亮色和暗色模式，使用 DualModeImage 结构（必填）
  image: DualModeImage,
  // 可选的 CTA（Call To Action）对象，用于定义区块底部的操作按钮相关信息
  cta: z.object({
    // CTA 的标题（必填）
    title: z.string(),
    // CTA 按钮显示的标签文本（必填）
    label: z.string(),
    // CTA 按钮跳转的目标地址（必填）
    to: z.string(),
    // CTA 按钮使用的图标名称（必填）
    icon: z.string()
  }).optional()
})

// 定义一个 PageHero 对象结构，用于描述页面头部区块（Hero）的属性，继承自 BaseSection
const PageHero = BaseSection.extend({
  // 可选的图片对象，支持亮色和暗色模式，使用 DualModeImage 结构
  image: DualModeImage.optional(),
  // 可选的 head 对象，用于定义页面头部额外的标题与描述信息
  head: z.object({
    // 可选的标题
    title: z.string().optional(),
    // 可选的描述文本
    description: z.string().optional()
  }).optional(),
  // 可选的 headline 对象，用于展示带图标的标签链接
  headline: z.object({
    // 标签文本（必填）
    label: z.string(),
    // 跳转地址（必填）
    to: z.string(),
    // 可选的图标名称，使用图标编辑器输入
    icon: z.string().optional().editor({ input: 'icon' })
  }).optional(),
  // 可选的一组按钮链接，使用 Button 结构
  links: z.array(Button).optional(),
  // 可选的 CTA（Call To Action）链接，使用 Link 结构
  cta: Link.optional()
})

// 定义一个 Template 对象结构，用于描述模板的相关属性
const Template = z.object({
  // 模板名称（必填）
  name: z.string(),
  // 模板的唯一标识 slug（必填）
  slug: z.string(),
  // 模板的描述信息（必填）
  description: z.string(),
  // 模板的仓库地址（可选）
  repo: z.string().optional(),
  // 模板的演示地址，必须是有效的 URL（必填）
  demo: z.string().url(),
  // 模板的购买地址，必须是有效的 URL（可选）
  purchase: z.string().url().optional(),
  // 模板的标签，支持 Premium、Freemium、Free（可选）
  featured: z.boolean().optional(),
  // 模板的标签，支持 Premium、Freemium、Free（可选）
  badge: z.enum(['Premium', 'Freemium', 'Free']).optional(),
  // 模板截图的 URL 地址（可选）
  screenshotUrl: z.string().url().optional(),
  // 截图相关配置选项，定义截图生成时的延迟时间（单位：毫秒，必填）
  screenshotOptions: z.object({
    delay: z.number()
  }).optional()
})

// 定义一个 ShowcaseItem 对象结构，用于描述展示项的相关属性
const ShowcaseItem = z.object({
  // 展示项的名称（可选）
  name: z.string().optional(),
  // 展示项的链接地址（可选）
  url: z.string().optional(),
  // 展示项的域名主机名（可选）
  hostname: z.string().optional(),
  // 展示项截图的 URL 地址（可选）
  screenshotUrl: z.string().optional(),
  // 截图相关配置选项，定义截图生成时的延迟时间（单位：毫秒，可选）
  screenshotOptions: z.object({
    delay: z.number()
  }).optional()
})

// 定义一个 Ui 对象结构，用于描述 UI 组件或页面的相关属性
const Ui = z.object({
  // UI 的分类，支持 layout、form、element、navigation、data、overlay（可选）
  category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay']).optional(),
  // 使用的前端框架名称（可选）
  framework: z.string().optional(),
  // 所属模块名称（可选）
  module: z.string().optional(),
  // 导航相关信息，包含可选的标题
  navigation: z.object({
    title: z.string().optional()
  }),
  // 一组链接对象数组，用于导航或展示
  links: z.array(z.object({
    // 链接显示的标签文本（必填）
    label: z.string(),
    // 链接图标名称（必填）
    icon: z.string(),
    // 可选的头像信息，包含图片路径和替代文本
    avatar: z.object({
      src: z.string(), // 头像图片路径（可选）
      alt: z.string() // 头像替代文本（可选）
    }).optional(),
    // 链接跳转的目标地址（必填）
    to: z.string(),
    // 链接打开方式，如 _blank 或 _self（可选）
    target: z.string().optional()
  }))
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'data',
      source: 'index.yml',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          cta: Link.extend({
            icon: z.string()
          }),
          tabs: z.array(z.object({
            title: z.string(),
            icon: z.string(),
            content: z.string()
          }))
        }),
        logos: z.object({
          title: z.string(),
          companies: z.array(DualModeImage)
        }),
        features: PageSection,
        foundation: PageSection.extend({
          items: z.array(z.object({
            id: z.string(),
            title: z.string(),
            description: z.string(),
            logo: z.string(),
            color: z.string(),
            gradient: z.string(),
            link: Link
          }))
        }),
        modules: PageSection,
        testimonial: Testimonial,
        deploy: PageSection,
        contributors: PageSection,
        stats: PageSection.extend({
          community: BaseSection,
          x: z.number(),
          discord: z.string(),
          cta: Button
        }),
        support: PageSection.extend({
          companies: z.array(Image.pick({ src: true, alt: true }))
        }),
        sponsors: PageSection.extend({
          cta: Button
        })
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: [
        {
          include: 'docs/**/*.{yml,md}',
          exclude: ['docs/nuxtui/**'] // 排除nuxtui目录
        }
      ],
      schema: z.object({
        titleTemplate: z.string().optional(),
        links: z.array(Button).optional()
      })
    }),
    ui: defineCollection({
      type: 'page',
      source: {
        include: 'docs/nuxtui/**/*.{yml,md}',
        prefix: '/ui' // 注意：这里前缀应该以斜杠开头，表示绝对路径
      },
      schema: Ui
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*',
      schema: z.object({
        image: z.string().editor({ input: 'media' }),
        authors: z.array(Author),
        date: z.string().date(),
        draft: z.boolean().optional(),
        category: z.enum(['Release', 'Tutorial', 'Announcement', 'Article']),
        tags: z.array(z.string())
      })
    }),
    landing: defineCollection({
      type: 'page',
      source: [
        { include: 'blog.yml' }
      ],
      schema: PageHero
    })
  }
})

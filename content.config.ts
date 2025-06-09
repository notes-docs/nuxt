import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const Image = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional()
})

const DualModeImage = z.object({
  light: z.string().editor({ input: 'media' }),
  dark: z.string().editor({ input: 'media' }),
  width: z.number().optional(),
  height: z.number().optional(),
  alt: z.string().optional()
})

const Link = z.object({
  label: z.string(),
  to: z.string(),
  icon: z.string().optional()
})

const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const BaseSection = z.object({
  title: z.string(),
  description: z.string()
})

const Author = z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  to: z.string().optional(),
  avatar: Image.optional()
})

const Testimonial = z.object({
  quote: z.string(),
  author: Author
})

const PageFeature = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().editor({ input: 'icon' }),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional(),
  soon: z.boolean().optional()
})

const PageSection = BaseSection.extend({
  links: z.array(Button),
  features: z.array(PageFeature),
  image: DualModeImage,
  cta: z.object({
    title: z.string(),
    label: z.string(),
    to: z.string(),
    icon: z.string()
  }).optional()
})

const PageHero = BaseSection.extend({
  image: DualModeImage.optional(),
  head: z.object({
    title: z.string().optional(),
    description: z.string().optional()
  }).optional(),
  headline: z.object({
    label: z.string(),
    to: z.string(),
    icon: z.string().optional().editor({ input: 'icon' })
  }).optional(),
  links: z.array(Button).optional(),
  cta: Link.optional()
})

const Template = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  repo: z.string().optional(),
  demo: z.string().url(),
  purchase: z.string().url().optional(),
  featured: z.boolean().optional(),
  badge: z.enum(['Premium', 'Freemium', 'Free']).optional(),
  screenshotUrl: z.string().url().optional(),
  screenshotOptions: z.object({
    delay: z.number()
  }).optional()
})

const ShowcaseItem = z.object({
  name: z.string().optional(),
  url: z.string().optional(),
  hostname: z.string().optional(),
  screenshotUrl: z.string().optional(),
  screenshotOptions: z.object({
    delay: z.number()
  }).optional()
})

const Ui = z.object({
  category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay']).optional(),
  framework: z.string().optional(),
  module: z.string().optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    to: z.string(),
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

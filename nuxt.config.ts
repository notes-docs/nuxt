// https://nuxt.com/docs/api/configuration/nuxt-config
import { parseMdc } from './helpers/mdc-parser.mjs'
import { createResolver } from 'nuxt/kit'
import commonjs from 'vite-plugin-commonjs'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    'nuxt-content-twoslash',
    '@nuxt/content',
    'nuxt-component-meta',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'nuxt-og-image',
    'motion-v/nuxt',
    (_, nuxt) => {
      nuxt.hook('components:dirs', (dirs) => {
        dirs.unshift({ path: resolve('./app/components/content/examples'), pathPrefix: false, prefix: '', global: true })
      })
    },
    '@nuxtjs/sitemap'
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'material-theme-palenight'
          },
          preload: ['sql', 'diff', 'ini']
        }
      }
    },
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  mdc: {
    components: {
      prose: true // 启用内置的 Prose 组件映射
    },
    highlight: {
      noApiRoute: false
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'important']
    }
  },
  build: {
    transpile: [
      '@nuxt/ui'
    ]
  },
  routeRules: {
    // Redirects
    '/docs': { redirect: '/docs/nuxt/getting-started/introduction', prerender: false },
    '/docs/nuxt/getting-started': { redirect: '/docs/nuxt/getting-started/introduction', prerender: false },
    '/docs/tailwindcss/getting-started': { redirect: '/docs/tailwindcss/getting-started/installation', prerender: false },
    '/docs/nuxt/guide/concepts': { redirect: '/docs/nuxt/guide/concepts/auto-imports', prerender: false },
    '/docs/nuxt/guide/directory-structure': { redirect: '/docs/nuxt/guide/directory-structure/app', prerender: false },
    '/docs/nuxt/guide/going-further': { redirect: '/docs/nuxt/guide/going-further/experimental-features', prerender: false },
    '/docs/nuxt/guide/going-further/edge-release-channel': { redirect: '/docs/nuxt/guide/going-further/nightly-release-channel', prerender: false },
    '/docs/nuxt/bridge': { redirect: '/docs/nuxt/bridge/overview', prerender: false },
    '/docs/nuxt/migration': { redirect: '/docs/nuxt/migration/overview', prerender: false },
    '/docs/nuxt/api/components': { redirect: '/docs/nuxt/api/components/client-only', prerender: false },
    '/docs/nuxt/api/composables': { redirect: '/docs/nuxt/api/composables/use-app-config', prerender: false },
    '/docs/nuxt/api/utils': { redirect: '/docs/nuxt/api/utils/dollarfetch', prerender: false },
    '/docs/nuxt/api/kit': { redirect: '/docs/nuxt/api/kit/modules', prerender: false },
    '/docs/nuxt/api/commands': { redirect: '/docs/nuxt/api/commands/dev', prerender: false },
    '/docs/nuxt/api/advanced': { redirect: '/docs/nuxt/api/advanced/hooks', prerender: false },
    '/docs/nuxt/api/configuration/nuxt-config': { redirect: '/docs/nuxt/api/nuxt-config', prerender: false },
    '/docs/nuxt/examples': { redirect: '/docs/nuxt/examples/hello-world', prerender: false },
    '/docs/nuxt/examples/features': { redirect: '/docs/nuxt/examples/features/auto-imports', prerender: false },
    '/docs/nuxt/examples/routing': { redirect: '/docs/nuxt/examples/routing/middleware', prerender: false },
    '/docs/nuxt/examples/advanced': { redirect: '/docs/nuxt/examples/advanced/config-extends', prerender: false },
    '/docs/nuxt/examples/experimental': { redirect: '/docs/nuxt/examples/experimental/wasm', prerender: false },
    '/docs/nuxt/community': { redirect: '/docs/nuxt/community/getting-help', prerender: false },
    '/docs/nuxt/community/nuxt-community': { redirect: '/docs/nuxt/community/getting-help', prerender: false },
    '/docs/nuxt/guide/recipes': { redirect: '/docs/nuxt/guide/recipes/custom-routing', prerender: false },
    '/docs/nuxt/guide/best-practices': { redirect: '/docs/nuxt/guide/best-practices/performance', prerender: false },
    '/docs/nuxt/guide/going-further/custom-routing': { redirect: '/docs/nuxt/guide/recipes/custom-routing', prerender: false }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    minify: true, // 压缩 JS 代码
    sourceMap: false, // 禁用 Source Map
    externals: {
      external: ['better-sqlite3']
    }
  },
  vite: {
    plugins: [
      {
        name: 'debug-plugin',
        configureServer(server) {
          console.log('Vite 插件列表:', server.config.plugins.map(p => p.name))
        }
      },
      commonjs({
        filter(id) {
          return id.includes('node_modules/debug')
        }
      })
    ],
    build: {
      sourcemap: false
    },
    optimizeDeps: {
      // prevents reloading page when navigating between components
      include: ['@internationalized/date', '@vueuse/shared', '@vueuse/integrations/useFuse', '@tanstack/vue-table', 'reka-ui', 'reka-ui/namespaced', 'embla-carousel-vue', 'embla-carousel-autoplay', 'embla-carousel-auto-scroll', 'embla-carousel-auto-height', 'embla-carousel-class-names', 'embla-carousel-fade', 'embla-carousel-wheel-gestures', 'colortranslator', 'tailwindcss/colors', 'tailwind-variants', 'ufo', 'zod', 'vaul-vue', 'scule', 'motion-v', 'json5', 'ohash', 'shiki-transformer-color-highlight']
    }
  },
  typescript: {
    strict: false
  },
  debug: true,
  hooks: {
    'content:file:afterParse': async ({ file, content }) => {
      if (file.id === 'index/index.yml') {
        // @ts-expect-error -- TODO: fix this
        for (const tab of content.hero.tabs) {
          tab.content = await parseMdc(tab.content)
        }
        // @ts-expect-error -- TODO: fix this
        delete content.meta.body
      }
    }
  },
  componentMeta: {
    exclude: [
      '@nuxt/content',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxtjs/color-mode',
      '@nuxtjs/mdc',
      '@nuxtjs/plausible',
      'nuxt/dist',
      'nuxt-og-image',
      resolve('./app/components'),
      process.env.NUXT_UI_PRO_PATH ? resolve(process.env.NUXT_UI_PRO_PATH, 'docs', 'app', 'components') : '.c12'
    ],
    metaFields: {
      type: false,
      props: true,
      slots: true,
      events: true,
      exposed: false
    }
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },
  fonts: {
    providers: {
      google: false,
      googleicons: false
    }
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons')
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    },
    provider: 'iconify'
  },
  // image: {
    // format: ['webp', 'jpeg', 'jpg', 'png', 'svg'],
    // provider: 'cloudflare',
    // cloudflare: {
    //   baseURL: process.env.NODE_ENV === 'production' ? 'https://www.yx618.com' : 'http://localhost:3000' // 默认值
    // },
    // ipx: {
    //   baseURL: 'https://ipx.nuxt.com'
    // }
  // },
  twoslash: {
    floatingVueOptions: {
      classMarkdown: 'prose prose-primary dark:prose-invert'
    },
    // Skip Twoslash in dev to improve performance. Turn this on when you want to explicitly test twoslash in dev.
    enableInDev: true,
    // Do not throw when twoslash fails, the typecheck should be down in github.com/nuxt/nuxt's CI
    throws: true
  },
  postcss: {
    plugins: {
      'postcss-nested': {}, // 处理嵌套规则
      'autoprefixer': {}
    }
  }
})

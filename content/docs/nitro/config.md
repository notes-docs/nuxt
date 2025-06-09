---
title: 配置
description: 
navigation.icon: i-lucide-cog
---

:read-more{title="指南 > 配置" to="/docs/nitro/guide/configuration"}

## 通用

* `preset`

  使用 `preset` 选项或 `NITRO_PRESET` 环境变量来定义自定义的 **生产** 预设。

  开发模式的预设始终是 `nitro_dev`，生产构建独立 Node.js 服务器的默认预设是 `node_server`。

  当未设置 `preset` 选项并在已知环境中运行时，将自动检测预设。

* `logLevel`

  默认值：`3` (检测到测试环境时为 `1`)

  日志详细级别。请参阅 **unjs/consola** 了解更多信息。

* `runtimeConfig`

  默认值：`{ nitro: { ... }, ...yourOptions }`

  服务器运行时配置。

  **注意：** `nitro` 命名空间是保留的。

* `compatibilityDate`

  部署提供商引入了新的功能，Nitro 预设可以利用这些功能，但其中一些需要显式启用。

  将其设置为最新测试日期（`YY-MM-DD` 格式）以利用最新的预设功能。

  如果未提供此配置，Nitro 将继续使用当前 (v2.9) 预设行为并显示警告。


## 功能

* `experimental`

  默认值：`{}`

  启用实验性功能。

* `openAPI`

  启用 `/_scalar`、`/_swagger` 和 `/_openapi.json` 端点。

  默认值：`false`

  要在您的路由上定义 OpenAPI 规范，请查看 **`defineRouteMeta`**。

  您可以在根级别传递一个对象来修改您的 OpenAPI 规范：

    ```typescript
    openAPI: {
      meta: {
        title: '我的酷项目',
        description: '这可能会成为下一个大热门。',
        version: '1.0'
      }
    }
    ```

  这些路由在生产环境中默认禁用。要启用它们，请使用 `production` 键。`"runtime"` 允许使用中间件，`"prerender"` 最有效，因为 JSON 响应是常量。

    ```typescript
    openAPI: {
        // 重要：如果需要，请务必保护 OpenAPI 路由！
        production: "runtime", // 或 "prerender"
    }
    ```

  如果您想自定义 Scalar 集成，您可以 **传递一个配置对象** 如下：

    ```typescript
    openAPI: {
      ui: {
        scalar: {
          theme: 'purple'
        }
      }
    }
    ```

  或者如果您想自定义端点：

    ```typescript
    openAPI: {
      route: "/_docs/openapi.json",
      ui: {
        scalar: {
          route: "/_docs/scalar"
        },
        swagger: {
          route: "/_docs/swagger"
        }
      }
    }
    ```

* `wasm`

  启用 WASM 支持

* `legacyExternals`

  启用时，将使用旧版（不稳定）实验性 rollup externals 算法。

* `future`

  默认值：`{}`

  等待主要版本发布的新功能，以避免破坏性更改。

* `nativeSWR`

  对于 Netlify 和 Vercel 预设，使用内置 SWR 功能（使用缓存层和存储）而不是回退到 ISR 行为。

* `storage`

  默认值：`{}`

  存储配置，请参阅 **存储层** 部分了解更多信息。

* `timing`

  默认值：`false`

  启用计时信息：

  * Nitro 启动时间日志
  * HTTP 响应中的 `Server-Timing` 头

* `renderer`

  主渲染器的路径（文件应默认导出一个事件处理程序）

* `serveStatic`

  类型：`boolean` | `'node'` | `'deno'`

  默认值：取决于使用的部署预设。

  在生产环境中提供 `public/` 资产。

  **注意：** 强烈建议您的边缘 CDN (Nginx, Apache, Cloud) 提供 `.output/public/` 目录，而不是启用压缩和更高层次的缓存。

* `noPublicDir`

  默认值：`false`

  如果启用，禁用 `.output/public` 目录创建。跳过复制 `public/` 目录并禁用预渲染。

* `publicAssets`

  在开发中提供服务并在生产中打包的公共资产目录。

  如果检测到 `public/` 目录，它将默认添加，但您也可以自行添加更多。

  可以使用 `maxAge` 选项为资产设置 `Cache-Control` 头：

    ```typescript
    publicAssets: [
      {
        baseURL: "images",
        dir: "public/images",
        maxAge: 60 * 60 * 24 * 7, // 7 天
      },
    ],
    ```

  上述配置会在 `public/images/` 文件夹下的资产中生成以下头：

  `cache-control: public, max-age=604800, immutable`

  `dir` 选项是您的文件在文件系统中的位置；`baseURL` 选项是它们在提供服务/打包时可访问的文件夹。

* `compressPublicAssets`

  默认值：`{ gzip: false, brotli: false }`

  如果启用，Nitro 将为支持类型的公共资产和大于 1024 字节的预渲染路由生成预压缩（gzip 和/或 brotli）版本到公共目录。使用最佳压缩级别。使用此选项，您可以在不使用 CDN 的情况下支持零开销的资产压缩。

  可压缩 MIME 类型列表：

  * `application/dash+xml`
  * `application/eot`
  * `application/font`
  * `application/font-sfnt`
  * `application/javascript`
  * `application/json`
  * `application/opentype`
  * `application/otf`
  * `application/pdf`
  * `application/pkcs7-mime`
  * `application/protobuf`
  * `application/rss+xml`
  * `application/truetype`
  * `application/ttf`
  * `application/vnd.apple.mpegurl`
  * `application/vnd.mapbox-vector-tile`
  * `application/vnd.ms-fontobject`
  * `application/wasm`
  * `application/xhtml+xml`
  * `application/xml`
  * `application/x-font-opentype`
  * `application/x-font-truetype`
  * `application/x-font-ttf`
  * `application/x-httpd-cgi`
  * `application/x-javascript`
  * `application/x-mpegurl`
  * `application/x-opentype`
  * `application/x-otf`
  * `application/x-perl`
  * `application/x-ttf`
  * `font/eot`
  * `font/opentype`
  * `font/otf`
  * `font/ttf`
  * `image/svg+xml`
  * `text/css`
  * `text/csv`
  * `text/html`
  * `text/javascript`
  * `text/js`
  * `text/plain`
  * `text/richtext`
  * `text/tab-separated-values`
  * `text/xml`
  * `text/x-component`
  * `text/x-java-source`
  * `text/x-script`
  * `vnd.apple.mpegurl`

* `serverAssets`

  资产可以在服务器逻辑中访问并在生产中打包。**了解更多**。

* `devServer`

  默认值：`{ watch: [] }`

  开发服务器选项。您可以使用 `watch` 来使开发服务器在指定路径中的任何文件更改时重新加载。

* `watchOptions`

  开发模式的观察选项。请参阅 **chokidar** 了解更多信息。

* `imports`

  自动导入选项。请参阅 **unjs/unimport** 了解更多信息。

* `plugins`

  默认值：`[]`

  Nitro 插件路径数组。它们将在第一次初始化时按顺序执行。

  请注意，Nitro 会自动注册 `plugins/` 目录中的插件，**了解更多**。

* `virtual`

  默认值：`{}`

  从动态虚拟导入名称到其内容或返回其内容的（异步）函数的映射。


## 路由

* `baseURL`

  默认值：`/`（如果提供，则为 `NITRO_APP_BASE_URL` 环境变量）

  服务器的主基本 URL。

* `apiBaseURL`

  默认值：`/api`

  更改默认的 API 基本 URL 前缀。

* `handlers`

  服务器处理程序和路由。

  如果存在 `server/routes/`、`server/api/` 或 `server/middleware/` 目录，它们将自动添加到处理程序数组中。

* `devHandlers`

  常规处理程序指的是要由 rollup 导入和转换的处理程序的路径。

  在某些情况下，我们希望直接通过编程方式提供处理程序实例。

  我们可以使用 `devHandlers`，但请注意，它们**仅在开发模式下可用**，**不在生产构建中**。

  例如：

    ```typescript
    import { defineEventHandler } from 'h3'
    
    export default defineNitroConfig({
      devHandlers: [
        {
          route: '/',
          handler: defineEventHandler((event) => {
           console.log(event)
          })
        }
      ]
    })
    ```

  请注意，`defineEventHandler` 是 `h3` 库中的一个辅助函数。

* `devProxy`

  开发服务器的代理配置。

  您可以使用此选项覆盖开发服务器路由并代理请求。

    ```javascript
    {
      devProxy: {
        '/proxy/test': 'http://localhost:3001',
        '/proxy/example': { target: 'https://example.com', changeOrigin: true }
      }
    }
    ```

  请参阅 **unjs/httpxy** 了解所有可用的目标选项。

* `errorHandler`

  自定义运行时错误处理程序的路径。替换 nitro 的内置错误页面。错误处理程序会获得一个 `H3Error` 和 `H3Event`。如果处理程序返回一个 Promise，它将被等待。处理程序应发送自己的响应。下面是一个使用 h3 函数返回纯文本响应的示例。

  示例：

  `nitro.config`
  `error.ts`
    ```typescript
    export default defineNitroConfig({
      errorHandler: "~/error",
    });
    ```

* `routeRules`

  🧪 实验性！

  路由选项。它是从路由模式（遵循 **unjs/radix3**）到路由选项的映射。

  当设置 `cache` 选项时，匹配模式的处理程序将自动用 `defineCachedEventHandler` 包装。

  请参阅 **缓存 API** 了解所有可用的缓存选项。

  `swr: true|number` 是 `cache: { swr: true, maxAge: number }` 的快捷方式

  示例：

    ```typescript
    routeRules: {
      '/blog/**': { swr: true },
      '/blog/**': { swr: 600 },
      '/blog/**': { static: true },
      '/blog/**': { cache: { /* 缓存选项*/ } },
      '/assets/**': { headers: { 'cache-control': 's-maxage=0' } },
      '/api/v1/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
      '/old-page': { redirect: '/new-page' }, // 使用状态码 307 (Temporary Redirect)
      '/old-page2': { redirect: { to:'/new-page2', statusCode: 301 } },
      '/old-page/**': { redirect: '/new-page/**' },
      '/proxy/example': { proxy: 'https://example.com' },
      '/proxy/**': { proxy: '/api/**' },
    }
    ```

* `prerender`

  默认值：

    ```json
    {
      autoSubfolderIndex: true,
      concurrency: 1,
      interval: 0,
      failOnError: false,
      crawlLinks: false,
      ignore: [],
      routes: [],
      retry: 3,
      retryDelay: 500
    }
    ```

  预渲染选项。任何指定的路由将在构建期间获取并作为静态资产复制到 `.output/public` 目录。

  任何以 `ignore` 中列出的前缀开头或匹配正则表达式或函数的路由（字符串）都将被忽略。

  如果 `crawlLinks` 选项设置为 `true`，nitro 默认从 `/` 开始（或 `routes` 数组中的所有路由），并为 HTML 页面提取 `<a>` 标签并也对其进行预渲染。

  您可以将 `failOnError` 选项设置为 `true`，以便在 Nitro 无法预渲染路由时停止 CI。

  `interval` 和 `concurrency` 选项允许您控制预渲染的速度，如果调用外部 API 可能会有助于避免达到某些速率限制。

  设置 `autoSubfolderIndex` 允许您控制如何在 `.output/public` 目录中生成文件：

    ```
    # autoSubfolderIndex: true (默认)
    /about -> .output/public/about/index.html
    # autoSubfolderIndex: false
    /about -> .output/public/about.html
    ```

  此选项在您的托管提供商未提供关于尾随斜杠的选项时很有用。

  预渲染器将尝试渲染页面 3 次，每次延迟 500 毫秒。使用 `retry` 和 `retryDelay` 来更改此行为。


## 目录

* `workspaceDir`

  项目工作区根目录。

  当未设置 `workspaceDir` 选项时，工作区（例如 pnpm 工作区）目录会自动检测。

* `rootDir`

  项目主目录。

* `srcDir`

  默认值：（与 `rootDir` 相同）

  项目源目录。与 `rootDir` 相同，除非另有指定。`api`、`routes`、`plugins`、`utils`、`public`、`middleware`、`assets` 和 `tasks` 文件夹的根目录。

* `scanDirs`

  默认值：（空数组时为源目录）

  要扫描和自动注册文件的目录列表，例如 API 路由。

* `apiDir`

  默认值：`api`

  定义用于扫描 API 路由处理程序的另一个目录。

* `routesDir`

  默认值：`routes`

  定义用于扫描路由处理程序的另一个目录。

* `buildDir`

  默认值：`.nitro`

  nitro 生成构建相关文件的临时工作目录。

* `output`

  默认值：`{ dir: '.output', serverDir: '.output/server', publicDir: '.output/public' }`

  生产捆绑包的输出目录。


## 高级

* `dev`

  默认值：开发为 `true`，生产为 `false`。

  ⚠️ **注意！** 这是一个高级配置。如果配置不当可能会出错。

* `typescript`

  默认值：`{ generateTsConfig: true }`

* `nodeModulesDirs`

  ⚠️ **注意！** 这是一个高级配置。如果配置不当可能会出错。

  解析模块时要搜索的其他 `node_modules`。默认情况下会添加用户目录。

* `hooks`

  ⚠️ **注意！** 这是一个高级配置。如果配置不当可能会出错。

  nitro 钩子。请参阅 **unjs/hookable** 了解更多信息。

* `commands`

  ⚠️ **注意！** 这是一个高级配置。如果配置不当可能会出错。

  预览和部署命令提示通常由部署预设填充。

* `devErrorHandler`

  ⚠️ **注意！** 这是一个高级配置。如果配置不当可能会出错。

  用于开发错误的自定义错误处理函数。


## Rollup

* `rollupConfig`

  附加的 rollup 配置。

* `entry`

  Rollup 入口。

* `unenv`

  **unjs/unenv** 预设的选项。

* `alias`

  Rollup 别名选项。

* `minify`

  默认值：`false`

  缩小捆绑包。

* `inlineDynamicImports`

  避免创建块。

* `sourceMap`

  启用源映射生成。请参阅 **选项**。

  默认值：`true`

* `node`

  指定构建是否用于 Node.js。如果设置为 `false`，nitro 会尝试使用 **unjs/unenv** 模拟 Node.js 依赖项并调整其行为。

* `analyze`

  如果启用，将在构建后使用 **rollup-plugin-visualizer** 分析服务器捆绑包。您也可以传递自定义选项。

* `moduleSideEffects`

  默认值：`['unenv/polyfill/', 'node-fetch-native/polyfill']`

  Rollup 特定的选项。指定具有副作用的模块导入。

* `replace`

  Rollup 特定的选项。

* `commonJS`

  Rollup 特定的选项。指定 rollup CommonJS 插件的其他配置。


## 预设选项

* `firebase`

  Firebase Functions 预设的选项。请参阅 **预设文档**。

* `vercel`

  Vercel 预设的选项。请参阅 **预设文档**。

* `cloudflare`

  Cloudflare 预设的选项。请参阅 **预设文档**。

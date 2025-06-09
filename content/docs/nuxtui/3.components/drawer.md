---
description: 一个可以平滑地滑入和滑出屏幕的抽屉。
category: overlay
links:
  - label: Drawer
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Drawer.vue
---

## 用法

在 Drawer 的默认插槽中，使用一个 [Button](/components/button) 或任何其他组件。

然后，使用 `#content` 插槽添加当 Drawer 打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

你也可以使用 `#header`{lang="ts-type"}、`#body`{lang="ts-type"} 和 `#footer`{lang="ts-type"} 插槽来自定义 Drawer 的内容。

### 标题 (Title)

使用 `title` prop 来设置 Drawer 标题。

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 描述 (Description)

使用 `description` prop 来设置 Drawer 标题的描述。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 方向 (Direction)

使用 `direction` prop 来控制 Drawer 的方向。默认为 `bottom`。

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### 内嵌 (Inset)

使用 `inset` prop 使 Drawer 从边缘内嵌。

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### 句柄 (Handle)

使用 `handle` prop 来控制 Drawer 是否有句柄。默认为 `true`。

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 仅句柄 (Handle Only)

使用 `handle-only` prop 仅允许通过句柄拖动 Drawer。

::component-code
---
prettier: true
props:
  handleOnly: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 覆盖层 (Overlay)

使用 `overlay` prop 来控制 Drawer 是否有覆盖层。默认为 `true`。

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 缩放背景 (Scale background)

使用 `should-scale-background` prop 在 Drawer 打开时缩放背景，创建视觉深度效果。你可以将 `set-background-color-on-scale` prop 设置为 `false` 以防止更改背景颜色。

::component-code
---
prettier: true
props:
  shouldScaleBackground: true
  setBackgroundColorOnScale: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
确保在应用程序的父元素上添加 `data-vaul-drawer-wrapper` 指令才能使其工作。

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## 示例

### 控制打开状态

你可以通过使用 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
In this example, leveraging [`defineShortcuts`](/composables/define-shortcuts), you can toggle the Drawer by pressing :kbd{value="O"}.
::

::tip
This allows you to move the trigger outside of the Drawer or remove it entirely.
::

### 禁用 dismissal

将 `dismissible` prop 设置为 `false` 以防止 Drawer 在点击外部或按下 Escape 键时关闭。

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

::note
在此示例中，`header` 插槽用于添加一个关闭按钮，这并非默认行为。
::

### 使用交互式背景

将 `overlay` 和 `modal` props 设置为 `false`，同时设置 `dismissible` prop，可以使 Drawer 的背景可交互而不会关闭 Drawer。

::component-example
---
prettier: true
name: 'drawer-modal-example'
---
::

### 响应式抽屉

你可以例如在桌面端渲染一个 [Modal](/components/modal) 组件，在移动端渲染一个 Drawer。

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### 使用页脚插槽

使用 `#footer` 插槽在 Drawer 主体后添加内容。

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### 使用命令面板

你可以在 Drawer 的内容中使用 [CommandPalette](/components/command-palette) 组件。

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

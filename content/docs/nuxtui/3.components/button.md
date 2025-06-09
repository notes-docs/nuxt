---
description: 一个可以作为链接或触发动作的按钮元素。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Button.vue
---

## 用法

### 标签(Label)

使用默认插槽来设置按钮的标签。

::component-code
---
slots:
  default: Button
---
::

你也可以使用 `label` prop 来达到同样的效果。

::component-code
---
props:
  label: Button
---
::

### 颜色(Color)

使用 `color` prop 来改变按钮的颜色。

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### 变体(Variant)

使用 `variant` prop 来改变按钮的变体。

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### 尺寸(Size)

使用 `size` prop 来改变按钮的尺寸。

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### 图标(Icon)

使用 `icon` prop 在按钮内部显示一个 [Icon](/components/icon)。

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Button
---
::

使用 `leading` 和 `trailing` props 来设置图标位置，或者使用 `leading-icon` 和 `trailing-icon` props 为每个位置设置不同的图标。

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

`label` 作为 prop 或插槽是可选的，所以你可以将按钮用作纯图标按钮。

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### 头像(Avatar)

使用 `avatar` prop 在按钮内部显示一个 [Avatar](/components/avatar)。

::component-code
---
prettier: true
props:
  avatar:
    src: 'https://github.com/nuxt.png'
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Button
---
::

`label` 作为 prop 或插槽是可选的，所以你可以将按钮用作纯头像按钮。

::component-code
---
prettier: true
props:
  avatar:
    src: 'https://github.com/nuxt.png'
  size: md
  color: neutral
  variant: outline
---
::

### 链接(Link)

你可以传递 [Link](/components/link#props) 组件的任何属性，例如 `to`、`target` 等。

::component-code
---
ignore:
  - target
props:
  to: https://github.com/nuxt/ui
  target: _blank
slots:
  default: Button
---
::

当按钮是链接或使用 `active` prop 时，你可以使用 `active-color` 和 `active-variant` props 来定制活跃状态。

::component-code
---
prettier: true
ignore:
  - color
  - variant
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  active: true
  color: neutral
  variant: outline
  activeColor: primary
  activeVariant: solid
slots:
  default: |

    Button
---

Button
::

你也可以使用 `active-class` 和 `inactive-class` props 来定制活跃状态。

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
---

Button
::

::tip
你可以在 `app.config.ts` 文件中的 `ui.button.variants.active` 键下全局配置这些样式。

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

### 加载中(Loading)

使用 `loading` prop 来显示加载图标并禁用按钮。

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
Button
::

使用 `loading-auto` prop 在 `@click` promise 待处理时自动显示加载图标。

:component-example{name="button-loading-auto-example"}

这也适用于 [Form](/components/form) 组件。

:component-example{name="button-loading-auto-form-example"}

### 加载图标(Loading Icon)

使用 `loading-icon` prop 来自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
Button
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
你可以在 `app.config.ts` 文件中的 `ui.icons.loading` 键下全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
你可以在 `vite.config.ts` 文件中的 `ui.icons.loading` 键下全局自定义此图标。
:::
::

### 禁用(Disabled)

使用 `disabled` prop 来禁用按钮。

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

Button
::

## 示例

### `class` prop

使用 `class` prop 来覆盖按钮的基础样式。

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### `ui` prop

使用 `ui` prop 来覆盖按钮的插槽样式。

::component-code
---
prettier: true
ignore:
  - ui
  - color
  - variant
  - icon
props:
  icon: i-lucide-rocket
  color: neutral
  variant: outline
  ui:
    leadingIcon: 'text-primary'
slots:
  default: |

    Button
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v3/src/runtime/components/Link.vue#L13"}
`Button` 组件扩展了 `Link` 组件。在 GitHub 上查看源代码。
::

### Slots

:component-slots

### Emits

在 `Button` 组件中，`onClick` prop 被设计得非常灵活：

```typescript
onClick?: ((event: MouseEvent) => void | Promise<void>) | Array<((event: MouseEvent) => void | Promise<void>)>
```

这意味着 `onClick` prop 可以接受：

- 单个函数：最常见的用法，当点击按钮时执行一个函数。
- 函数数组：当点击按钮时，按顺序执行多个函数。

更重要的是，这些函数可以返回 `void` (没有返回值) 或者是 `Promise<void>` (一个 `Promise`)。当返回 `Promise` 时，组件内部的 `loadingAuto` 机制会非常有用。

`onClick` prop 的使用场景

1. 简单的点击事件 (返回 `void`)

这是最基础的用法，点击按钮后立即执行一个动作。

```vue
<template>
  <div class="space-y-4">
    <UButton label="普通点击" :on-click="handleClick" />
    <UButton label="内联点击" :on-click="() => alert('你点击了内联按钮!')" />
  </div>
</template>

<script setup lang="ts">
const handleClick = (event: MouseEvent) => {
  console.log('按钮被点击了！', event);
  alert('你点击了普通点击按钮！');
};
</script>
```

2. 执行异步操作 (返回 `Promise<void>`)

当你的点击事件涉及到异步操作（例如 API 调用、数据加载、等待动画完成等）时，`onClick` 可以返回一个 `Promise`。配合 `loadingAuto` prop，这会提供非常好的用户体验。

```vue
<template>
  <div class="space-y-4">
    <UButton
      label="保存数据"
      icon="i-heroicons-light-cloud-arrow-up"
      :loading-auto="true"
      :on-click="saveData"
    />
    <UButton
      label="加载内容"
      icon="i-heroicons-light-arrow-path"
      :loading-auto="true"
      :on-click="loadContent"
    />
  </div>
</template>

<script setup lang="ts">
const saveData = async (event: MouseEvent) => {
  console.log('开始保存数据...', event);
  await new Promise(resolve => setTimeout(resolve, 2500)); // 模拟异步 API 调用
  console.log('数据保存成功！');
  alert('数据已保存！');
};

const loadContent = async () => {
  console.log('开始加载内容...');
  await new Promise(resolve => setTimeout(resolve, 1500)); // 模拟异步内容加载
  console.log('内容加载完成！');
  alert('内容已加载！');
};
</script>
```

解释：

- `saveData` 和 `loadContent` 都是 `async` 函数，它们返回一个 `Promise`。
- 当你将 `loadingAuto` 设置为 `true` 时：
  - 当 `onClick` 函数开始执行时（即 `Promise` 处于 pending 状态），按钮会自动进入加载状态（显示加载图标，禁用按钮）。
  - 当 `Promise` 解决 (resolved) 或拒绝 (rejected) 时，按钮会自动退出加载状态。
- 这种模式非常适合表单提交、数据更新等异步操作。

3. 执行多个操作 (函数数组)

如果你希望点击一个按钮能触发一系列独立的动作，你可以传递一个函数数组。

```vue
<template>
  <div class="space-y-4">
    <UButton
      label="执行多步操作"
      icon="i-heroicons-light-play"
      :loading-auto="true"
      :on-click="[step1, step2, step3]"
    />
  </div>
</template>

<script setup lang="ts">
const step1 = async () => {
  console.log('执行第一步：验证用户...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('第一步完成。');
};

const step2 = async (event: MouseEvent) => {
  console.log('执行第二步：处理数据...', event);
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('第二步完成。');
};

const step3 = async () => {
  console.log('执行第三步：通知结果...');
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('所有步骤完成！');
  alert('多步操作已完成！');
};
</script>
```

解释：

- 当 `onClick` 是一个函数数组时，组件内部的 `onClickWrapper` 会使用 `Promise.all` 来等待所有函数执行完毕。
- 这意味着：
  - 如果任何一个函数是异步的 (`async` 函数或返回 `Promise`)，按钮会进入加载状态。
  - 只有当所有函数（无论同步还是异步）都执行完毕后，按钮才会退出加载状态。
- 这种用法适用于需要按顺序执行一系列独立任务的场景。

::note
- 参数传递：onClick 接收的函数都会自动获得 MouseEvent 对象作为第一个参数。
- 优先级：如果你同时使用了 onClick 和 @click (Vue 原生事件监听器)，两者都会触发。onClick 是 Nuxt UI 按钮组件特有的 prop，通常建议优先使用它，尤其是在需要利用 loadingAuto 等高级功能时。
- 类型安全：由于 ButtonProps 中对 onClick 进行了类型定义，TypeScript 会帮助你确保传入的函数符合预期。
<br><br>
通过这种设计，UButton 组件的 onClick prop 提供了极大的灵活性，能够轻松处理简单的点击事件、复杂的异步操作，甚至是多步任务流，同时保持了良好的用户体验，尤其是在结合 loadingAuto prop 使用时。
::

## Theme

:component-theme

---
description: 用于吸引用户注意力的提示框。
category: element
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Alert.vue
---

## 用法

### 标题 (Title)

使用 `title` 属性设置提示框的标题。

::component-code
---
props:
  title: 'Heads up!'
---
::

### 描述 (Description)

使用 `description` 属性设置提示框的描述。

::component-code
---
prettier: true
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
---
::

### 图标 (Icon)

使用 `icon` 属性显示一个 [Icon](/components/icon)。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色。
  icon: 'i-lucide-terminal'
---
::

### 头像 (Avatar)

使用 `avatar` 属性显示一个 [Avatar](/components/avatar)。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: '您可以在应用配置中更改主色。'
  avatar.src: 'https://github.com/nuxt.png'
---
::

### 颜色 (Color)

使用 `color` 属性更改提示框的颜色。

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色(primary)。
  icon: 'i-lucide-terminal'
---
::

### 变体 (Variant)

使用 `variant` 属性更改提示框的变体。

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  variant: subtle
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色(primary)。
  icon: 'i-lucide-terminal'
---
::

### 关闭 (Close)

使用 `close` 属性显示一个 [Button](/components/button) 来关闭提示框。

::tip
点击关闭按钮时，将发出 `update:open` 事件。
::

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色(primary)。
  color: neutral
  variant: outline
  close: true
---
::

您可以传递 [Button](/components/button) 组件的任何属性来定制它。

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close.color
  - close.variant
  - color
  - variant
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色。
  color: neutral
  variant: outline
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
---
::

### 关闭图标 (Close Icon)

使用 `close-icon` 属性自定义关闭按钮的 [Icon](/components/icon)。默认为 `i-lucide-x`。

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色。
  color: neutral
  variant: outline
  close: true
  closeIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/getting-started/icons/nuxt#theme"}
您可以在 `app.config.ts` 中的 `ui.icons.close` 键下全局自定义此图标。
:::

#vue
:::tip{to="/getting-started/icons/vue#theme"}
您可以在 `vite.config.ts` 中的 `ui.icons.close` 键下全局自定义此图标。
:::
::

### 操作 (Actions)

使用 `actions` 属性向提示框添加一些 [Button](/components/button) 操作。

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色。
  color: neutral
  variant: outline
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

### 方向 (Orientation)

使用 `orientation` 属性更改提示框的方向。

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色。
  color: neutral
  variant: outline
  orientation: horizontal
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

## 示例

### `actions` prop

`actions` 接受一个 按钮配置对象数组，每个对象支持 `UButton` 的所有属性：

```vue
<script setup lang="ts">
const handleAsyncAction = async () => {
  const data = await fetchData()
  showToast(`加载完成: ${data.length} 条记录`)
}
</script>

<template>
  <UAlert
    title="数据同步"
    :actions="[
      { 
        label: '立即同步', 
        loadingIcon: 'i-heroicons-arrow-path',
        onClick: handleAsyncAction, // 注意：在 v-bind 中，事件监听器需要使用 'onEventName' 的驼峰命名约定
        loading: false // 可动态控制加载状态
      }
    ]"
  />
</template>
```

### `class` prop

使用 `class` prop 覆盖提示框的基本样式。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色。
  class: 'rounded-none'
---
::

### `ui` prop

使用 `ui` prop 覆盖提示框插槽的样式。

::component-code
---
prettier: true
ignore:
  - ui
  - title
  - description
  - icon
props:
  title: 'Heads up!'
  description: 您可以在应用配置中更改主色。
  icon: i-lucide-rocket
  ui:
    icon: 'size-11'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

#### 使用示例

```vue
<script setup lang="ts">
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<template>
  <!-- 用 v-if 控制组件显示 -->
  <Alert
    v-if="showAlert"
    title="提示"
    description="这是一个警告提示框"
    color="warning"
    variant="solid"
    close
    @update:open="showAlert = false"
  />
</template>
```

## Theme

:component-theme

根据 `Alert.vue` 的 `ui` 计算结果进行配置

`Alert.vue` 的 `ui` 计算属性接收以下四个参数来计算变体：

- `color: props.color`
- `variant: props.variant`
- `orientation: props.orientation`
- `title: !!props.title || !!slots.title` (这是一个布尔值)

这意味着你可以在 `app.config.ts` 中为 `UAlert` 组件配置这些 `prop` 对应的 `variants`。



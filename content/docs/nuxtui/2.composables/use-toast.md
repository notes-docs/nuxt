---
title: useToast
description: 一个用于在您的应用中显示 toast 通知消息的可组合项。
---

## 用法

使用自动导入的 `useToast` 可组合项来显示 [Toast](/components/toast) 通知消息。

```vue
<script setup lang="ts">
const toast = useToast()
</script>
```

- `useToast` 可组合项使用 Nuxt 的 `useState` 来管理 toast 状态，确保在您的应用程序中具有响应性。
- 最多同时显示 5 个 toast 消息。当添加的新 toast 消息超出此限制时，最旧的 toast 消息将自动移除。
- 移除 toast 消息时，会在实际从状态中移除前有 200 毫秒的延迟，以便进行退出动画。

::warning
请务必使用 [`App`](/components/app) 组件包裹您的应用，该组件使用我们的 [`Toaster`](https://github.com/nuxt/ui/blob/v3/src/runtime/components/Toaster.vue) 组件，而 Toaster 组件又使用了 Reka UI 的 [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) 组件。
::

::tip{to="/components/toast"}
了解如何在 **Toast** 组件文档中自定义 toast 消息的外观和行为。
::

## API

### `add(toast: Partial<Toast>): Toast`

添加新的 toast 通知消息。

- 参数:
  - `toast`: 一个部分 `Toast` 对象，具有以下属性：
    - `id` (可选): toast 的唯一标识符。如果未提供，将使用时间戳。
    - `open` (可选): toast 是否打开。默认为 true。
    - `Toast` 接口中的其他属性。
- 返回：已添加的完整 `Toast` 对象。

```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

### `update(id: string | number, toast: Partial<Toast>)`

更新现有的 toast 通知消息。

- 参数:
  - `id`: 要更新的 toast 的唯一标识符。
  - `toast`: 包含要更新属性的部分 `Toast` 对象。

```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

### `remove(id: string | number)`

移除 toast 通知消息。

- 参数:
  - `id`: 要移除的 toast 的唯一标识符。

```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

### `clear()`

移除所有 toast 通知消息。

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

### `toasts`

- 类型: `Ref<Toast[]>`
- 描述：一个包含所有当前 toast 通知消息的响应式数组。

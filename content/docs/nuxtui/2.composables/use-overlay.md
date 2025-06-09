---
title: useOverlay
description: 一个用于程序化控制覆盖层的可组合项。
---

## 用法

使用自动导入的 `useOverlay` 可组合项来程序化控制 [Modal](/components/modal) 和 [Slideover](/components/slideover) 组件。

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

async function openModal() {
  modal.open()
}
</script>
```

- `useOverlay` 可组合项是使用 `createSharedComposable` 创建的，确保在整个应用程序中共享相同的覆盖层状态。

::note
为了从覆盖层返回一个值，可以 `await overlay.open().instance.result`。然而，为此，**覆盖层组件必须发出一个 `close` 事件**。详见下面的示例。
::

## API

### `create(component: T, options: OverlayOptions): OverlayInstance`

创建一个覆盖层，并返回一个工厂实例。

- 参数:
  - `component`: 覆盖层组件。
  - `options`:
    - `defaultOpen?: boolean` 创建后立即打开覆盖层。默认为 `false`。
    - `props?: ComponentProps`: 要传递给渲染组件的可选 props 对象。
    - `destroyOnClose?: boolean` 关闭时从内存中移除覆盖层。默认为 `false`。

### `open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`

通过 `id` 打开一个覆盖层。

- 参数:
  - `id`: 覆盖层的标识符。
  - `props`: 要传递给渲染组件的可选 props 对象。

### `close(id: symbol, value?: any): void`

通过 `id` 关闭一个覆盖层。

- 参数:
  - `id`: 覆盖层的标识符。
  - `value`: 用于解析覆盖层 Promise 的值。

### `patch(id: symbol, props: ComponentProps<T>): void`

通过 `id` 更新一个覆盖层。

- 参数:
  - `id`: 覆盖层的标识符。
  - `props`: 要在渲染组件上更新的 props 对象。

### `unmount(id: symbol): void`

通过 `id` 从 DOM 中移除一个覆盖层。

- 参数:
  - `id`: 覆盖层的标识符。

### `isOpen(id: symbol): boolean`

使用 `id` 检查覆盖层是否打开。

- 参数:
  - `id`: 覆盖层的标识符。

### `overlays: Overlay[]`

所有已创建覆盖层的内存列表。

## Instance API

### `open(props?: ComponentProps<T>): Promise<OpenedOverlay<T>>`

打开覆盖层。

- 参数:
  - `props`: 要传递给渲染组件的可选 props 对象。

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

function openModal() {
  modal.open({
    title: 'Welcome'
  })
}
</script>
```

### `close(value?: any): void`

关闭覆盖层。

- 参数:
  - `value`: 用于解析覆盖层 Promise 的值。

### `patch(props: ComponentProps<T>)`

更新覆盖层的 props。

- 参数:
  - `props`: 要在渲染组件上更新的 props 对象。

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample, {
  title: 'Welcome'
})

function openModal() {
  modal.open()
}

function updateModalTitle() {
  modal.patch({ title: 'Updated Title' })
}
</script>
```

## 示例

这是一个如何使用 `useOverlay` 可组合项的完整示例：

```vue
<script setup lang="ts">
import { ModalA, ModalB, SlideoverA } from '#components'

const overlay = useOverlay()

// Create with default props
const modalA = overlay.create(ModalA, { title: 'Welcome' })
const modalB = overlay.create(ModalB)

const slideoverA = overlay.create(SlideoverA)

const openModalA = () => {
  // Open modalA, but override the title prop
  modalA.open({ title: 'Hello' })
}

const openModalB = async () => {
  // Open modalB, and wait for its result
  const modalBInstance = modalB.open()

  const input = await modalBInstance.result

  // Pass the result from modalB to the slideover, and open it
  slideoverA.open({ input })
}
</script>

<template>
  <button @click="openModalA">Open Modal</button>
</template>
```

在此示例中，我们使用 `useOverlay` 可组合项来控制多个模态框和抽屉。

## 注意事项

### Provide / Inject

当程序化打开覆盖层（例如模态框、抽屉等）时，覆盖层组件只能访问包含 `UApp` 的组件（通常是 `app.vue` 或布局组件）注入的值。这是因为覆盖层是由 `UApp` 组件挂载在页面上下文之外的。

因此，在页面或父组件中使用 `provide()` 不受直接支持。要将提供的值传递给覆盖层，建议的方法是使用 props 代替：

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const providedValue = inject('valueProvidedInPage')

const modal = overlay.create(LazyModalExample, {
  props: {
    providedValue,
    otherData: someValue
  }
})
</script>
```

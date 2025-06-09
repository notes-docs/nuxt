---
title: defineShortcuts
description: 一个用于在您的应用中定义键盘快捷键的可组合项。
---

## Usage

使用自动导入的 `defineShortcuts` 可组合项来定义键盘快捷键。

```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  meta_k: () => {
    open.value = !open.value
  }
})
</script>
```

- 快捷键会自动针对非 macOS 平台进行调整，将 `meta` 转换为 `ctrl`。
- 该可组合项使用 VueUse 的 [`useEventListener`](https://vueuse.org/core/useEventListener/) 来处理键盘按下事件。
- 有关可用快捷键的完整列表，请参阅 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) API 文档。请注意，键应以小写形式书写。

::tip{to="/components/kbd"}
了解如何在 **Kbd** 组件文档中显示组件中的快捷键。
::

## API

### `defineShortcuts(config: ShortcutsConfig, options?: ShortcutsOptions)`

为您的应用程序定义键盘快捷键。

- `config`: 一个对象，其中键是快捷键定义，值是处理函数或快捷键配置对象。
- `options`: 快捷键行为的可选配置。
  - `chainDelay`: 连续按键之间的时间延迟，以将其视为链式快捷键。默认为 `250`。

#### 快捷键定义

快捷键使用以下格式定义：

- 单键：`'a'`、`'b'`、`'1'`、`'?'` 等。
- 组合键：使用 `_` 分隔键，例如 `'meta_k'`、`'ctrl_shift_f'`
- 键序列：使用 `-` 定义序列，例如 `'g-d'`

#### 修饰键

- `meta`: 在 macOS 上表示 `⌘ Command`，在其他平台上表示 `Ctrl`
- `ctrl`: 在所有平台上表示 `Ctrl`
- `shift`: 当需要 Shift 时用于字母键

#### 特殊键

- `escape`: 按下 Esc 键时触发
- `enter`: 按下 Enter 键时触发
- `arrowleft`、`arrowright`、`arrowup`、`arrowdown`: 按下相应的箭头键时触发

#### 快捷键配置

每个快捷键都可以定义为函数或具有以下属性的对象：

```ts
interface ShortcutConfig {
  handler: () => void
  usingInput?: boolean | string
}
```

- `handler`: 快捷键触发时执行的函数
- `usingInput`:
  - `false` (默认): 快捷键仅在没有输入焦点时触发
  - `true`: 即使有任何输入焦点，快捷键也会触发
  - `string`: 快捷键仅在指定名称（通过名称）的输入框获得焦点时触发

## 示例

### 基本用法

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### 处理输入焦点

`usingInput` 选项允许您指定快捷键仅在特定输入获得焦点时触发。

```vue
<template>
  <UInput v-model="query" name="queryInput" />
</template>

<script setup lang="ts">
const query = ref('')

defineShortcuts({
  enter: {
    usingInput: 'queryInput',
    handler: () => performSearch()
  },
  escape: {
    usingInput: true,
    handler: () => clearSearch()
  }
})
</script>
```

### 从菜单项中提取快捷键

`extractShortcuts` 工具可用于从菜单项中自动定义快捷键：

```vue
<script setup lang="ts">
const items = [{
  label: 'Save',
  icon: 'i-lucide-file-down',
  kbds: ['meta', 'S'],
  onSelect() {
    save()
  }
}, {
  label: 'Copy',
  icon: 'i-lucide-copy',
  kbds: ['meta', 'C'],
  onSelect() {
    copy()
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

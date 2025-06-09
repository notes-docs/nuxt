---
title: forced-color-adjust
description: 用于选择性开启或关闭强制颜色模式的工具。
---

## 快速参考

| 类名                         | 样式                   |
| :--------------------------- | :--------------------- |
| **Class** | **Styles** |
| `forced-color-adjust-auto`   | `forced-color-adjust: auto;` |
| `forced-color-adjust-none`   | `forced-color-adjust: none;` |

## 示例

### 退出强制颜色模式

使用 `forced-color-adjust-none` 工具类使元素不遵守强制颜色模式所强制的颜色。这在强制使用有限的调色板会降低可用性时很有用。

::BaseFigure{hint="尝试在您的开发者工具中模拟 `forced-colors: active` 以查看变化"}
:::example
<div
  class="mx-auto max-w-sm overflow-clip rounded-lg border border-transparent bg-white shadow dark:border-white/10 dark:bg-white/5"
>
  <div class="aspect-h-3 aspect-w-3 overflow-hidden">
    <img
      src="/tailwindcss/t-shirt.jpg"
      alt="Two each of gray, white, and black shirts laying flat."
      class="h-full w-full object-cover object-center"
    />
  </div>
  <div class="grid grid-cols-[1fr_auto] items-center gap-4 p-4">
    <div>
      <p class="font-medium text-gray-900 dark:text-white">Basic Tee</p>
      <p class="text-sm font-medium text-gray-900 dark:text-white">$35</p>
    </div>
    <fieldset>
      <legend class="sr-only">Choose a color</legend>
      <div class="grid grid-flow-col items-center gap-3 forced-color-adjust-none">
        <label
          class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-0 focus:outline-none has-checked:ring-1 has-checked:ring-gray-400 has-checked:ring-offset-1"
        >
          <input
            type="radio"
            name="color-choice"
            value="White"
            class="sr-only"
            aria-labelledby="color-choice-0-label"
          />
          <span id="color-choice-0-label" class="sr-only">
            White
          </span>
          <span
            aria-hidden="true"
            class="size-6 rounded-full border border-black/10 bg-white dark:border-white/10"
          ></span>
        </label>
        <label
          class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-0 focus:outline-none has-checked:ring-1 has-checked:ring-gray-400 has-checked:ring-offset-1"
        >
          <input
            type="radio"
            checked
            name="color-choice"
            value="Gray"
            class="sr-only"
          />
          <span id="color-choice-1-label" class="sr-only">
            Gray
          </span>
          <span
            aria-hidden="true"
            class="size-6 rounded-full border border-black/10 bg-gray-200 dark:border-white/10"
          ></span>
        </label>
        <label
          class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-0 focus:outline-none has-checked:ring-1 has-checked:ring-gray-900 has-checked:ring-offset-1"
        >
          <input
            type="radio"
            name="color-choice"
            value="Black"
            class="sr-only"
            aria-labelledby="color-choice-2-label"
          />
          <span id="color-choice-2-label" class="sr-only">
            Black
          </span>
          <span
            aria-hidden="true"
            class="size-6 rounded-full border border-black/10 bg-gray-900 dark:border-white/10"
          ></span>
        </label>
      </div>
    </fieldset>
  </div>
</div>
:::

```html
<form>
  <img src="/img/shirt.jpg" />
  <div>
    <h3>基础T恤</h3>
    <h3>$35</h3>
    <fieldset>
      <legend class="sr-only">选择颜色</legend>
      <div class="forced-color-adjust-none ...">
        <label>
          <input class="sr-only" type="radio" name="color-choice" value="White" />
          <span class="sr-only">白色</span>
          <span class="size-6 rounded-full border border-black/10 bg-white"></span>
        </label>
        </div>
    </fieldset>
  </div>
</form>
```
::

您还可以使用 [强制颜色变体](https://tailwindcss.com/docs/hover-focus-and-other-states%23forced-colors) 来在用户启用强制颜色模式时有条件地添加样式。

### 恢复强制颜色模式

使用 `forced-color-adjust-auto` 工具类使元素遵守强制颜色模式所强制的颜色：

```html
<form>
  <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">
    <legend>选择颜色:</legend>
    <select class="hidden lg:block">
      <option value="White">白色</option>
      <option value="Gray">灰色</option>
      <option value="Black">黑色</option>
    </select>
    <div class="lg:hidden">
      <label>
        <input class="sr-only" type="radio" name="color-choice" value="White" />
        </label>
      </div>
  </fieldset>
</form>
```

如果您想撤销 `forced-color-adjust-none` 工具类，例如在更大的屏幕尺寸上，这会很有用。

### 响应式设计

在 `forced-color-adjust` 工具类前加上像 `md:` 这样的断点变体，以便只在**中等**屏幕尺寸及以上应用该工具类：

```html
<div class="forced-color-adjust-none md:forced-color-adjust-auto ...">
  <!-- ... -->
</div>
```

在 [变体文档](https://tailwindcss.com/docs/hover-focus-and-other-states%23variants) 中了解更多关于使用变体的信息。


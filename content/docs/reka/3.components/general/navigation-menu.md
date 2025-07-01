---
title: Navigation Menu
description: 用于导航网站的链接集合。
---

::component-example
---
name: 'reka-navigation-menu-example'
collapse: true
---
::

## 功能特点

* 可控或不可控。
* 灵活的布局结构，支持 Tab 焦点管理。
* 支持子菜单。
* 可选的活动项指示器。
* 完整的键盘导航。
* 暴露 CSS 变量以实现高级动画。
* 支持自定义时间。

## 安装

从命令行安装组件。

::code-group
```bash [npm]
$ npm add reka-ui
```
```bash [pnpm]
$ pnpm add reka-ui
```
```bash [yarn]
$ yarn add reka-ui
```
```bash [bun]
$ bun add reka-ui
```
::

## 结构

导入所有部分并将其组合在一起。

```html
<script setup lang="ts">
  import {
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuSub,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from 'reka-ui'
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger />
        <NavigationMenuContent>
          <NavigationMenuLink />
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink />
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger />
        <NavigationMenuContent>
          <NavigationMenuSub>
            <NavigationMenuList />
            <NavigationMenuViewport />
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuIndicator />
    </NavigationMenuList>
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
```

## API 参考

### Root

包含导航菜单的所有部分。

| 属性                   | 默认值       | 类型                       | 描述                                                                                              |
| ---------------------- | ------------ | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`                   | `'nav'`      | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`              | `false`      | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `defaultValue`         |              | `string`                   | 首次渲染时应激活的菜单项的值。当您不需要控制值状态时使用。                                        |
| `delayDuration`        | `200`        | `number`                   | 指针进入触发器到工具提示打开的持续时间。                                                            |
| `dir`                  |              | `'ltr' \| 'rtl'`           | 组合框（如果适用）的阅读方向。如果省略，则从 `ConfigProvider` 全局继承或假定为从左到右 (LTR) 阅读模式。 |
| `disableClickTrigger`  | `false`      | `boolean`                  | 如果为 `true`，菜单无法通过点击触发器打开。                                                       |
| `disableHoverTrigger`  | `false`      | `boolean`                  | 如果为 `true`，菜单无法通过悬停触发器打开。                                                       |
| `disablePointerLeaveClose` | `false`      | `boolean`                  | 如果为 `true`，菜单在指针离开事件期间不会关闭。                                                   |
| `modelValue`           |              | `string`                   | 要激活的菜单项的受控值。可用作 `v-model`。                                                       |
| `orientation`          | `'horizontal'` | `'vertical' \| 'horizontal'` | 菜单的方向。                                                                                      |
| `skipDelayDuration`    | `300`        | `number`                   | 用户在不再次产生延迟的情况下进入另一个触发器所需的时间。                                          |
| `unmountOnHide`        | `true`       | `boolean`                  | 当为 `true` 时，元素将在关闭状态下卸载。                                                          |

**触发事件 (Emit)**

| Payload          | 描述                           |
| ---------------- | ------------------------------ |
| `[value: string]` | 值改变时调用的事件处理程序。     |

**插槽 (默认)**

| Payload        | 描述             |
| -------------- | ---------------- |
| `modelValue`   | 当前输入值       |

**数据属性**

| 属性              | 值                       |
| ----------------- | ------------------------ |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Sub

表示一个子菜单。嵌套时用它代替根部分来创建子菜单。

| 属性           | 默认值       | 类型                       | 描述                                                                                              |
| -------------- | ------------ | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `as`           | `'div'`      | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`      | `false`      | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `defaultValue` |              | `string`                   | 首次渲染时应激活的菜单项的值。当您不需要控制值状态时使用。                                        |
| `modelValue`   |              | `string`                   | 要激活的子菜单项的受控值。可用作 `v-model`。                                                     |
| `orientation`  | `'horizontal'` | `'vertical' \| 'horizontal'` | 菜单的方向。                                                                                      |

**触发事件 (Emit)**

| Payload          | 描述                           |
| ---------------- | ------------------------------ |
| `[value: string]` | 值改变时调用的事件处理程序。     |

**插槽 (默认)**

| Payload        | 描述             |
| -------------- | ---------------- |
| `modelValue`   | 当前输入值       |

**数据属性**

| 属性              | 值                       |
| ----------------- | ------------------------ |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### List

包含顶级菜单项。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'ul'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**数据属性**

| 属性              | 值                       |
| ----------------- | ------------------------ |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### Item

一个顶级菜单项，包含链接或触发器和内容的组合。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'li'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `value`   |        | `string`             | 当导航菜单受控时，将项目与活动值关联的唯一值。当不受控时，此 prop 会自动管理。 |

### Trigger

切换内容的按钮。

| 属性      | 默认值   | 类型                 | 描述                                                                                              |
| --------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`      | `'button'` | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`    | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disabled` | `false`    | `boolean`            | 当为 `true` 时，阻止用户与项目交互。                                                             |

**数据属性**

| 属性           | 值                 |
| -------------- | ------------------ |
| `[data-state]` | `"open" \| "closed"` |
| `[data-disabled]` | 禁用时存在           |

### Content

包含与每个触发器相关联的内容。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性                   | 默认值 | 类型                 | 描述                                                                                              |
| ---------------------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`                   | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`              | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `disableOutsidePointerEvents` | `false`  | `boolean`            | 当为 `true` 时，`DismissableLayer` 外部的悬停/焦点/点击交互将被禁用。用户需要两次点击外部元素才能与其交互：一次关闭 `DismissableLayer`，再次触发元素。 |
| `forceMount`           | `false`  | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |

**触发事件 (Emit)**

| Payload                 | 描述                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| `[event: KeyboardEvent]` | Escape 键按下时调用的事件处理程序。可以阻止。                         |
| `[event: FocusOutsideEvent]` | 焦点移出 `DismissableLayer` 时调用的事件处理程序。可以阻止。        |
| `[event: PointerDownOutsideEvent \| FocusOutsideEvent]` | 当 `DismissableLayer` 外部发生交互时调用的事件处理程序。具体来说，当 `pointerdown` 事件发生在外部或焦点移出时。可以阻止。 |
| `[event: PointerDownOutsideEvent]` | 当 `pointerdown` 事件发生在 `DismissableLayer` 外部时调用的事件处理程序。可以阻止。 |

**数据属性**

| 属性              | 值                                         |
| ----------------- | ------------------------------------------ |
| `[data-state]`    | `"open" \| "closed"`                       |
| `[data-motion]`   | `"to-start" \| "to-end" \| "from-start" \| "from-end"` |
| `[data-orientation]` | `"vertical" \| "horizontal"`               |

### Link

一个导航链接。

| 属性      | 默认值 | 类型                 | 描述                                                                                              |
| --------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `active`  | `false`  | `boolean`            | 用于标识链接为当前活动页面。                                                                      |
| `as`      | `'a'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild` | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |

**触发事件 (Emit)**

| Payload                                     | 描述                                                                |
| ------------------------------------------- | ------------------------------------------------------------------- |
| `[payload: CustomEvent<{ originalEvent: Event; }>]` | 用户选择链接（通过鼠标或键盘）时调用的事件处理程序。在此处理程序中调用 `event.preventDefault` 将阻止在选择该链接时关闭导航菜单。 |

**数据属性**

| 属性           | 值         |
| -------------- | ---------- |
| `[data-active]` | 活动时存在 |

### Indicator

一个可选的指示器元素，渲染在列表下方，用于突出显示当前活动的触发器。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性         | 默认值 | 类型                 | 描述                                                                                              |
| ------------ | ------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| `as`         | `'div'`  | `AsTag \| Component` | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`  | `boolean`            | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` | `false`  | `boolean`            | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |

**数据属性**

| 属性           | 值                        |
| -------------- | ------------------------- |
| `[data-state]` | `"visible" \| "hidden"`   |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

**CSS 变量**

| 变量                                   | 描述         |
| -------------------------------------- | ------------ |
| `--reka-navigation-menu-indicator-size`    | 指示器的大小 |
| `--reka-navigation-menu-indicator-position` | 指示器的位置 |

### Viewport

一个可选的视口元素，用于在列表之外渲染活动内容。

**提示**
使用 `Presence` 组件构建 - 支持任何[动画技术](animation techniques)，同时保持对存在（presence）触发事件的访问。

| 属性         | 默认值   | 类型                       | 描述                                                                                              |
| ------------ | -------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `align`      | `'center'` | `'start' \| 'center' \| 'end'` | 视口对齐方式，用于 CSS 变量 (`--reka-navigation-menu-viewport-left`, `--reka-navigation-menu-viewport-top`)。 |
| `as`         | `'div'`  | `AsTag \| Component`       | 此组件应渲染为的元素或组件。可以通过 `asChild` 覆盖。                                             |
| `asChild`    | `false`  | `boolean`                  | 将默认渲染的元素更改为作为子元素传递的元素，合并它们的 props 和行为。有关详细信息，请阅读我们的[组合指南](https://www.google.com/search?q=Composition)。 |
| `forceMount` | `false`  | `boolean`                  | 当需要更多控制时，用于强制挂载。在与 Vue 动画库控制动画时很有用。         |

**数据属性**

| 属性           | 值                        |
| -------------- | ------------------------- |
| `[data-state]` | `"visible" \| "hidden"`   |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

**CSS 变量**

| 变量                                   | 描述                                   |
| -------------------------------------- | -------------------------------------- |
| `--reka-navigation-menu-viewport-width`  | 视口可见/隐藏时的宽度，根据活动内容计算 |
| `--reka-navigation-menu-viewport-height` | 视口可见/隐藏时的高度，根据活动内容计算 |

## 示例

### 垂直方向

您可以使用 `orientation` prop 创建一个垂直菜单。

```html
<script setup lang="ts">
  import {
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuSub,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from 'reka-ui'
</script>

<template>
  <NavigationMenuRoot orientation="vertical">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>Item Two content</NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
```

### 灵活布局

当您需要额外控制 `Content` 渲染位置时，请使用 `Viewport` 部分。当您的设计需要调整 DOM 结构或需要灵活性以实现[高级动画](advanced animation)时，这会很有帮助。Tab 焦点将自动保持。

```html
<script setup lang="ts">
  import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from 'reka-ui'
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>Item two content</NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
```

### 带指示器

您可以使用可选的 `Indicator` 部分来突出显示当前活动的 `Trigger`，这在您想要提供动画视觉提示（例如箭头或高亮）来伴随 `Viewport` 时很有用。

```html
<script setup lang="ts">
  import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from 'reka-ui'
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>Item two content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuIndicator class="NavigationMenuIndicator" />
    </NavigationMenuList>
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
```

```css
/* styles.css */
.NavigationMenuIndicator {
  background-color: grey;
  position: absolute;
  transition: width, transform, 250ms ease;
}

.NavigationMenuIndicator[data-orientation="horizontal"] {
  left: 0;
  height: 3px;
  transform: translateX(var(--reka-navigation-menu-indicator-position));
  width: var(--reka-navigation-menu-indicator-size);
}
```

### 带子菜单

通过嵌套您的 `NavigationMenu` 并使用 `Sub` 部分代替其 `Root` 来创建子菜单。子菜单与 `Root` 导航菜单的工作方式不同，它们类似于 `Tabs`，即始终应有一个项目处于活动状态，因此请务必分配并设置 `defaultValue`。

```html
<script setup lang="ts">
  import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuSub,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from 'reka-ui'
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuSub default-value="sub1">
            <NavigationMenuList>
              <NavigationMenuItem value="sub1">
                <NavigationMenuTrigger>Sub item one</NavigationMenuTrigger>
                <NavigationMenuContent> Sub item one content </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value="sub2">
                <NavigationMenuTrigger>Sub item two</NavigationMenuTrigger>
                <NavigationMenuContent> Sub item two content </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
```

### 带客户端路由

如果您需要使用路由包提供的 `RouterLink` 组件，我们建议在 `NavigationMenuLink` 上添加 `asChild="true"` 或设置 `as="RouterLink"`。这将确保保持可访问性和一致的键盘控制：

```html
<script setup lang="ts">
  import { NavigationMenuItem, NavigationMenuList, NavigationMenuRoot } from 'reka-ui'

  // RouterLink should be injected by default if using `vue-router`
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <RouterLink to="/">
            Home
          </RouterLink>
          <NavigationMenuLink />
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          :as="RouterLink"
          to="/about"
        >
          About
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
```

### 高级动画

我们暴露了 `--reka-navigation-menu-viewport-[width|height]` 和 `data-motion['from-start'|'to-start'|'from-end'|'to-end']` 属性，允许您根据进入/退出方向动画 `Viewport` 大小和 `Content` 位置。
将这些与 `position: absolute;` 结合使用，可以创建在项目之间移动时平滑重叠的动画效果。

```html
<script setup lang="ts">
  import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from 'reka-ui'
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent class="NavigationMenuContent">
          Item one content
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent class="NavigationMenuContent">
          Item two content
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport class="NavigationMenuViewport" />
  </NavigationMenuRoot>
</template>
```

```css
/* styles.css */
.NavigationMenuContent {
  position: absolute;
  top: 0;
  left: 0;
  animation-duration: 250ms;
  animation-timing-function: ease;
}

.NavigationMenuContent[data-motion="from-start"] {
  animation-name: enterFromLeft;
}

.NavigationMenuContent[data-motion="from-end"] {
  animation-name: enterFromRight;
}

.NavigationMenuContent[data-motion="to-start"] {
  animation-name: exitToLeft;
}

.NavigationMenuContent[data-motion="to-end"] {
  animation-name: exitToRight;
}

.NavigationMenuViewport {
  position: relative;
  width: var(--reka-navigation-menu-viewport-width);
  height: var(--reka-navigation-menu-viewport-height);
  transition: width, height, 250ms ease;
}

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}
```

## 可访问性

遵循 [导航](https://www.google.com/search?q=navigation) 角色要求。

### 与菜单栏的区别

`NavigationMenu` 不应与 `menubar` 混淆，尽管此原语在口语中也使用“菜单”一词来指代一组导航链接，但它不使用 WAI-ARIA `menu` 角色。这是因为 `menu` 和 `menubars` 的行为更像桌面应用程序窗口中最常见的原生操作系统菜单，因此它们具有复杂的功能，如复合焦点管理和首字符导航。
这些功能通常被认为对于网站导航[不必要](unnecessary for website https://www.google.com/search?q=navigation)，最坏情况是会混淆熟悉既定网站模式的用户。
有关更多信息，请参阅 W3C [披露导航菜单](Disclosure Navigation Menu) 示例。

### 链接使用和 `aria-current`

在菜单中，所有导航链接都必须使用 `NavigationMenuLink`，这不仅适用于主列表，也适用于通过 `NavigationMenuContent` 渲染的任何内容。这将确保一致的键盘交互和可访问性，同时还可以访问 `active` prop 以设置 `aria-current` 和活动样式。有关与第三方路由组件一起使用的更多信息，请参阅[此示例](this example)。

### 键盘交互

| 按键        | 描述                                                           |
| ----------- | -------------------------------------------------------------- |
| `Space`     | 当焦点在 `NavigationMenuTrigger` 上时，打开内容。              |
| `Enter`     | 当焦点在 `NavigationMenuTrigger` 上时，打开内容。              |
| `Tab`       | 将焦点移动到下一个可聚焦元素。                                 |
| `ArrowDown` | 当 `horizontal` 且焦点在打开的 `NavigationMenuTrigger` 上时，将焦点移入 `NavigationMenuContent`。将焦点移到下一个 `NavigationMenuTrigger` 或 `NavigationMenuLink`。 |
| `ArrowUp`   | 将焦点移到上一个 `NavigationMenuTrigger` 或 `NavigationMenuLink`。 |
| `ArrowRight` | 当 `vertical` 且焦点在打开的 `NavigationMenuTrigger` 上时，将焦点移入其 `NavigationMenuContent`。将焦点移到下一个/上一个 `NavigationMenuTrigger` 或 `NavigationMenuLink`。 |
| `ArrowLeft` | 当 `vertical` 且焦点在打开的 `NavigationMenuTrigger` 上时，将焦点移入其 `NavigationMenuContent`。将焦点移到下一个/上一个 `NavigationMenuTrigger` 或 `NavigationMenuLink`。 |
| `Home`      | 将焦点移到第一个/最后一个 `NavigationMenu.Trigger` 或 `NavigationMenu.Link`。 |
| `End`       | 将焦点移到第一个/最后一个 `NavigationMenu.Trigger` 或 `NavigationMenu.Link`。 |
| `Esc`       | 关闭打开的 `NavigationMenu.Content` 并将焦点移至其 `NavigationMenu.Trigger`。 |

---
title: FormField
description: 一个用于表单元素的包装器，提供验证和错误处理。
category: form
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/FormField.vue
---

## 用法

使用 FormField 包装任何表单组件。在 [Form](/components/form) 中使用时，它提供验证和错误处理。

### 标签

使用 `label` prop 为表单控件设置标签。

::component-code
---
prettier: true
props:
  label: Email
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

::note
如果没有提供 `id`，标签的 `for` 属性和表单控件将与一个唯一的 `id` 相关联。
::

当使用 `required` prop 时，标签旁边会添加一个星号。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  required: true
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### 描述

使用 `description` prop 在标签下方提供额外信息。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  description: We'll never share your email with anyone else.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### 提示 (Hint)

使用 `hint` prop 在标签旁边显示提示消息。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  hint: Optional
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### 帮助 (Help)

使用 `help` prop 在表单控件下方显示帮助消息。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  help: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### 错误 (Error)

使用 `error` prop 在表单控件下方显示错误消息。当与 `help` prop 一起使用时，`error` prop 具有优先权。

在 [Form](/components/form) 内部使用时，当发生验证错误时，此属性会自动设置。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  error: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

::tip{to="/getting-started/theme#colors"}
这会将表单控件的 `color` 设置为 `error`。你可以在 `app.config.ts` 中全局更改它。
::

### 尺寸 (Size)

使用 `size` prop 更改 FormField 的尺寸，`size` 会代理到表单控件。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - hint
  - help
props:
  label: Email
  description: We'll never share your email with anyone else.
  hint: Optional
  help: Please enter a valid email address.
  size: xl
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

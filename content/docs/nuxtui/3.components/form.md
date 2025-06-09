---
description: 一个内置验证和提交处理的表单组件。
category: form
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/tree/v3/src/runtime/components/Form.vue
---

## 用法

使用 Form 组件可以通过 [Valibot](https://github.com/fabian-hiller/valibot), [Zod](https://github.com/colinhacks/zod), [Yup](https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi), [Superstruct](https://github.com/ianstormtaylor/superstruct) 等验证库或你自己的验证逻辑来验证表单数据。

它与 [FormField](/components/form-field) 组件配合使用，可自动显示表单元素周围的错误消息。

### 模式验证 (Schema Validation)

它需要两个 props：

- `state` - 一个包含表单状态的响应式对象。
- `schema` - 任何 [Standard Schema](https://standardschema.dev/) 或来自 [Yup](https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi) 或 [Superstruct](https://github.com/ianstormtaylor/superstruct) 的模式。

::warning
默认 **不包含验证库**，请确保你 **安装了所需的验证库**。
::

::tabs{class="gap-0"}
  ::component-example{label="Valibot"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Zod"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Yup"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Joi"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Superstruct"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

错误会根据 `name` 或 `error-pattern` prop 直接报告给 [FormField](/components/form-field) 组件。这意味着你的模式中为 `email` 属性定义的验证规则将应用于 `<FormField name="email">`{lang="vue"}。

嵌套验证规则使用点符号处理。例如，像 `{ user: z.object({ email: z.string() }) }`{lang="ts"} 这样的规则将应用于 `<FormField name="user.email">`{lang="vue"}。

### 自定义验证 (Custom Validation)

使用 `validate` prop 来应用你自己的验证逻辑。

验证函数必须返回一个错误列表，其中包含以下属性：

- `message` - 要显示的错误消息。
- `name` - 要发送错误的 `FormField` 的 `name`。

::tip
它可以与 `schema` prop 一起使用，以处理复杂的用例。
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

### 输入事件 (Input Events)

当输入发出 `input`、`change` 或 `blur` 事件时，Form 组件会自动触发验证。

- `input` 上的验证发生在你输入时。
- `change` 上的验证发生在你提交值时。
- `blur` 上的验证发生在输入失去焦点时。

你可以使用 `validate-on` prop 控制何时进行验证。

::component-example{label="Default"}
---
source: false
name: 'form-example-elements'
options:
  - name: 'validate-on'
    label: 'validate-on'
    items:
    - 'input'
    - 'change'
    - 'blur'
    default:
    - 'input'
    - 'change'
    - 'blur'
    multiple: true
---
::

::tip
你可以使用 [`useFormField`](/composables/use-form-field) 可组合项在自己的组件中实现这一点。
::

### 错误事件 (Error Event)

你可以监听 `@error` 事件来处理错误。此事件在表单提交时触发，并包含一个 `FormError` 对象数组，其中包含以下字段：

- `id` - 输入的 `id`。
- `name` - `FormField` 的 `name`
- `message` - 要显示的错误消息。

以下是一个示例，它在表单提交后将焦点设置在第一个有错误的输入元素上：

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

### 嵌套表单 (Nesting Forms)

嵌套表单组件允许你更有效地管理复杂的数据结构，例如列表或条件字段。

例如，它可以用于根据用户输入动态添加字段：
::component-example
---
collapse: true
name: 'form-example-nested'
---
::

Or to validate list inputs:
::component-example
---
collapse: true
name: 'form-example-nested-list'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

你可以使用 [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) 访问类型化的组件实例。

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

这将允许你访问以下内容：

| Name | Type |
| ---- | ---- |
| `submit()`{lang="ts-type"} | `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers form submission.</p> |
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"} | `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers form validation. Will raise any errors unless `opts.silent` is set to true.</p> |
| `clear(path?: keyof T)`{lang="ts-type"} | `void` <br> <div class="text-toned mt-1"><p>Clears form errors associated with a specific path. If no path is provided, clears all form errors.</p> |
| `getErrors(path?: keyof T)`{lang="ts-type"} | `FormError[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Retrieves form errors associated with a specific path. If no path is provided, returns all form errors.</p></div> |
| `setErrors(errors: FormError[], name?: keyof T)`{lang="ts-type"} | `void` <br> <div class="text-toned mt-1"><p>Sets form errors for a given path. If no path is provided, overrides all errors.</p> |
| `errors`{lang="ts-type"} | `Ref<FormError[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>A reference to the array containing validation errors. Use this to access or manipulate the error information.</p> |
| `disabled`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} |
| `dirty`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} `true` if at least one form field has been updated by the user.|
| `dirtyFields`{lang="ts-type"} | `DeepReadonly<Set<keyof T>>`{lang="ts-type"} Tracks fields that have been modified by the user. |
| `touchedFields`{lang="ts-type"} | `DeepReadonly<Set<keyof T>>`{lang="ts-type"} Tracks fields that the user interacted with. |
| `blurredFields`{lang="ts-type"} | `DeepReadonly<Set<keyof T>>`{lang="ts-type"} Tracks fields blurred by the user. |

## Theme

:component-theme

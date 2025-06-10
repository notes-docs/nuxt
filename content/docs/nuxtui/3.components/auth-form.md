---
title: AuthForm
description: 一个可自定义的表单，用于创建登录、注册或密码重置表单。
category: form
module: ui-pro
links:
  - label: Form
    icon: i-custom-nuxt
    to: https://ui.nuxt.com/components/form
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/AuthForm.vue
---

## 用法

`AuthForm` 组件构建于 [Form](/ui/components/form) 组件之上，可用于你的页面或包裹在 [PageCard](/ui/components/page-card) 中。

表单将根据 `fields` prop 自行构建，状态将在内部处理。你可以将传递给 [FormField](/ui/components/form-field#props) 或 [Input](/ui/components/input#props) 的所有 prop 传递给每个字段。

::code-preview

TODO

#code
:::code-collapse
```vue
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password'
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox' as const
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Login"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        @submit="onSubmit"
      />
    </UPageCard>
  </div>
</template>
```
:::
::

### 标题 (Title)

使用 `title` prop 设置表单的标题。

::code-preview

TODO

#code

```vue

<script setup lang="ts">
  const fields = ref([
    {
      name: 'email',
      type: 'text',
      label: 'Email'
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password'
    }
  ])
</script>

<template>
  <UAuthForm class="max-w-md" title="Login" :fields="fields" />
</template>
```
::

### 描述 (Description)

使用 `description` prop 设置表单的描述。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Login"
    description="Enter your credentials to access your account."
    :fields="fields"
  />
</template>
```
::

### 图标 (Icon)

使用 `icon` prop 设置表单的图标。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Login"
    description="Enter your credentials to access your account."
    icon="i-lucide-user"
    :fields="fields"
  />
</template>
```

::

### 授权提供商 (Providers)

使用 `providers` prop 为表单添加授权提供商。

你可以传递 `Button` 组件的任何属性，例如 `variant`、`color`、`to` 等。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
const providers = ref([
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'subtle'
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    color: 'neutral',
    variant: 'subtle'
  }
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Login"
    description="Enter your credentials to access your account."
    icon="i-lucide-user"
    :providers="providers"
    :fields="fields"
  />
</template>
```

::

### 分隔符 (Separator)

使用 `separator` prop 自定义授权提供商和字段之间的 [Separator](/ui/components/separator)。默认为 `or`。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const providers = ref([
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'subtle'
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    color: 'neutral',
    variant: 'subtle'
  }
])
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Login"
    description="Enter your credentials to access your account."
    icon="i-lucide-user"
    :providers="providers"
    :fields="fields"
    separator="Providers"
  />
</template>
```
::


你可以传递 [Separator](/ui/components/separator#props) 组件的任何属性来自定义它。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const providers = ref([
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'subtle'
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    color: 'neutral',
    variant: 'subtle'
  }
])
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Login"
    description="Enter your credentials to access your account."
    icon="i-lucide-user"
    :providers="providers"
    :fields="fields"
    :separator="{
      icon: 'i-lucide-user'
    }"
  />
</template>
```

::

### 提交 (Submit)

使用 `submit` prop 更改表单的提交按钮。

你可以传递 [Button](/ui/components/button) 组件的任何属性，例如 `variant`、`color`、`to` 等。

::code-preview

TODO

#code

```vue
<script setup lang="ts">
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Login"
    description="Enter your credentials to access your account."
    icon="i-lucide-user"
    :fields="fields"
    :submit="{
      label: 'Submit',
      color: 'error',
      variant: 'subtle'
    }"
  />
</template>
```

::

## 示例 (Examples)

### 在页面内 (Within a page)

你可以将 `AuthForm` 组件包裹在 [PageCard](/ui/components/page-card) 组件中，例如在 `login.vue` 页面中显示。

::code-preview

TODO

#code
:::code-collapse
```vue
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password'
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox' as const
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Welcome back!"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #description>
          Don't have an account? <ULink to="#" class="text-primary font-medium">Sign up</ULink>.
        </template>
        <template #password-hint>
          <ULink to="#" class="text-primary font-medium" tabindex="-1">Forgot password?</ULink>
        </template>
        <template #validation>
          <UAlert color="error" icon="i-lucide-info" title="Error signing in" />
        </template>
        <template #footer>
          By signing in, you agree to our <ULink to="#" class="text-primary font-medium">Terms of Service</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
```
:::
::

### OTP / 2FA 示例 (OTP / 2FA Example)

你可以通过在 `fields` 数组中使用 `otp` 类型来添加一次性密码 (OTP) 字段，用于两因素认证。`otp` 属性允许你传递 [PinInput](/ui/components/pin-input#api) 组件支持的任何 prop。

::code-preview

TODO

#code
```vue
<script setup lang="ts">
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  },
  {
    name: 'otp',
    type: 'otp',
    otp: {
      length: 6,
      placeholder: '●'
    }
  }
])
</script>

<template>
  <UAuthForm class="max-w-md" title="Login with 2FA" :fields="fields" />
</template>
```
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

### 暴露 (Expose)

你可以使用 `useTemplateRef` 访问类型化的组件实例（暴露 `formRef` 和 `state`）。例如，在单独的表单（例如“重置”表单）中，你可以这样做：

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

这使你可以访问以下（暴露的）属性：

| 名称 | 类型 | 描述 |
|---|---|---|
| `formRef` | `Ref<HTMLFormElement \| null>` | 对底层 HTML 表单元素的引用。 |
| `state` | `Reactive<FormStateType>` | 表单的响应式状态。 |


## 主题 (Theme)

:component-theme{pro=true}

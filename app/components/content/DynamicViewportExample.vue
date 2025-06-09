<template>
  <Example class="relative overflow-hidden">
    <div class="relative grid justify-items-center">
      <Stripes
        ref="parentEl"
        :style="{
          width: `${viewport.width}px`,
          height: `${viewport.lvh}px`
        }"
        class="no-scrollbar relative overflow-y-scroll overscroll-none rounded-lg border border-slate-300 text-center text-xs dark:border-slate-700"
      >
        <div
          v-motion="navBarMotion"
          class="absolute w-full snap-start overflow-hidden"
        >
          <div class="grid h-[48px] w-full grid-cols-[auto_1fr_auto] items-center justify-start gap-4 rounded-t-lg border-b border-slate-300 bg-slate-100 px-3 dark:border-slate-600 dark:bg-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="h-5 w-5 text-slate-600 dark:text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <div class="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-slate-600 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-400">
              tailwindcss.com
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="h-5 w-5 text-slate-600 dark:text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
          <div
            v-motion="contentMotion"
            class="pointer-events-none h-full w-full p-[7px]"
          >
            <div
              :class="[
                colorStyles,
                'grid h-full w-full grid-rows-[1fr_auto_1fr] content-center items-center justify-items-center gap-5 self-center overflow-hidden rounded-md py-4 font-mono font-bold text-slate-50'
              ]"
            >
              <div class="grid h-full grid-rows-[1px_1fr] justify-items-center">
                <div class="h-full w-[12px] bg-white/60" />
                <div class="h-full w-[1.5px] bg-white/40" />
              </div>
              <p>h-{{ unit }}</p>

              <div class="grid h-full grid-rows-[1fr_1px] justify-items-center">
                <div class="h-full w-[1.5px] bg-white/40" />
                <div class="h-full w-[12px] bg-white/60" />
              </div>
            </div>
          </div>
        </div>
      </Stripes>

      <div
        v-if="unit === 'lvh'"
        v-motion="indicatorMotion"
        :class="[
          colorStyles,
          'absolute right-0 left-0 mx-auto rounded-b-md opacity-20'
        ]"
        :style="{ width: `${viewport.width - 16}px` }"
      />
    </div>

    <!-- 背景网格和边框 -->
    <div
      style="background-position: 10px 10px"
      class="bg-grid-slate-100 dark:bg-grid-slate-700/25 pointer-events-none absolute inset-0 z-[-1] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
    />
    <div class="pointer-events-none absolute inset-0 z-[-1] rounded-xl border border-black/5 dark:border-white/5" />
  </Example>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useScroll } from '@vueuse/core'

const props = defineProps({
  unit: {
    type: String,
    default: 'dvh'
  },
  colorStyles: {
    type: String,
    default: 'dark:bg-blue-500 bg-blue-500 border border-blue-400'
  }
})

const viewport = {
  lvh: 491,
  svh: 443,
  navBarHeight: 48,
  width: 300,
  padding: 5
}

const transition = {
  duration: 300,
  easing: 'linear',
  type: 'tween'
}

const hidden = ref(false)
const parentEl = ref(null)

// 滚动监听
const { y: scrollY } = useScroll(parentEl)

watch(scrollY, (newY, oldY) => {
  if (oldY !== undefined) {
    hidden.value = newY > oldY
  }
})

// 导航栏动画配置
const navBarMotion = computed(() => ({
  initial: {
    y: 0,
    height: `${viewport.lvh}px`
  },
  enter: {
    y: hidden.value ? `-${viewport.navBarHeight - 2}px` : 0,
    height: hidden.value
      ? `${viewport.lvh + viewport.navBarHeight - 1}px`
      : `${viewport.lvh}px`,
    transition
  }
}))

// 内容区域动画配置
const contentMotion = computed(() => ({
  initial: {
    maxHeight: `${props.unit === 'lvh' ? viewport.lvh : viewport.svh - 2}px`
  },
  enter: {
    maxHeight: hidden.value
      ? `${props.unit === 'svh' ? viewport.svh : viewport.lvh - 1}px`
      : `${props.unit === 'lvh' ? viewport.lvh : viewport.svh - 2}px`,
    transition: {
      ...transition,
      delay: props.unit === 'dvh' ? 400 : 0
    }
  }
}))

// 底部指示器动画配置
const indicatorMotion = computed(() => ({
  initial: {
    bottom: `-${viewport.navBarHeight}px`,
    height: `${viewport.navBarHeight}px`
  },
  enter: {
    bottom: hidden.value ? '5px' : `-${viewport.navBarHeight}px`,
    height: hidden.value ? '0px' : `${viewport.navBarHeight}px`,
    transition
  }
}))
</script>

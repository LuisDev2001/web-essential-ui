<script setup lang="ts">
  import { computed } from 'vue'

  export interface Props {
    rounded?: boolean
    outlined?: boolean
    size: 'sm' | 'md' | 'lg'
  }

  const {
    rounded = false,
    outlined = false,
    size = 'md'
  } = defineProps<Props>()

  const emit = defineEmits<{
    click: [event: Event]
  }>()

  const sizeClasses = computed(() => {
    const classes = {
      sm: 'py-3 px-5 text-sm',
      md: 'py-4 px-7 text-base',
      lg: 'py-4 px-9 text-lg'
    }
    return classes[size]
  })

  defineOptions({
    inheritAttrs: false
  })
</script>

<template>
  <button
    class="text-neutral-50 rounded-md"
    v-bind="$attrs"
    :class="[
      sizeClasses,
      {'rounded-[37px]': rounded},
      !outlined ? 'bg-blue-500' : 'bg-transparent border border-blue-500'
    ]"
    @click="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import EIcon from './EIcon.ce.vue'

  export interface Props {
    variant: 'success' | 'warning' | 'error' | 'info'
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    close: [event: Event]
  }>()

  const setVariant = computed(() => {
    const variant = {
      success: 'bg-green-100 text-green-500 border-green-500',
      warning: 'bg-yellow-100 text-yellow-500 border-yellow-500',
      error: 'bg-red-100 text-red-500 border-red-500',
      info: 'bg-blue-100 text-blue-500 border-blue-500',
    }

    return variant[props.variant]
  })
</script>

<template>
  <div class="border p-5" :class="setVariant">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <EIcon icon="mdi:home" size="24" />
        <slot></slot>
      </div>
      
      <button @click="emit('close', $event)">
        <EIcon
          icon="mdi:close-circle-outline"
          size="24"
        />
      </button>
    </div>
  </div>
</template>



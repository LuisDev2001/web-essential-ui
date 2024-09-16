<script setup lang="ts">
  import 'iconify-icon'

  export interface Props {
    icon: string
    size?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: '16',
  })
</script>

<template>
  <iconify-icon
    :icon="props.icon"
    :width="props.size"
    :height="props.size"
  />
</template>

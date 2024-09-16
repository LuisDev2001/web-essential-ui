<script setup lang="ts">
  import { useId } from 'vue'

  export interface Props {
    label?: string
    value?: string
    disabled?: boolean
  }

  const props = defineProps<Props>()

  const modelValue = defineModel<string[] | number[] | boolean>({ required: true })

  const id = useId()
</script>

<template>
  <div class="flex items-center space-x-2">
    <input
      type="checkbox"
      :id="id"
      class="form-checkbox h-4 w-4 rounded text-blue-500 border-blue-500"
      :class="[
        disabled && 'bg-gray-400 border-0'
      ]"
      :value="props.value"
      :disabled="props.disabled"
      v-model="modelValue"
    >
    <label
      v-if="props.label"
      :for="id"
      class="text-gray-700"
    >
      {{ props.label }}
    </label>
  </div>
</template>



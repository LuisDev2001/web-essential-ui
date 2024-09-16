<script setup lang="ts">
  import {
    defineProps,
    useId,
    defineModel
  } from 'vue'

  const props = defineProps<{
    label?: string
    value: string
    disabled?: boolean
  }>()

  const modelValue = defineModel<string>({ required: true })

  const id = useId()
</script>

<template>
  <div class="flex items-center space-x-2">
    <input
      type="radio"
      :id="id"
      class="form-radio h-4 w-4 text-blue-500 border-blue-500"
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
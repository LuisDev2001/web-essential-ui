<script setup lang="ts">
  export interface Props {
    placeholder?: string
    disabled?: boolean
  }

  const props = defineProps<Props>()

  const modelValue = defineModel<string>({ required: true })
</script>

<template>
  <input
    type="text"
    class="form-input py-3 px-4 rounded border border-gray-400 outline-none focus:border-blue-500 placeholder:text-sm placeholder:text-gray-400"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    v-model="modelValue"
  />
</template>

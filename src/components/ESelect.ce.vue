<script setup lang="ts" generic="T">
  import { useTemplateRef, ref } from 'vue'
  import {
    useFloating,
    offset,
    flip,
    shift,
  } from '@floating-ui/vue'
  import EIcon from './EIcon.ce.vue'
  
  export interface Props<T> {
    items: T[],
    itemText?: string
    itemValue?: string
  }

  const props = withDefaults(defineProps<Props<T>>(), {
    itemText: 'name'
  })

  const isOpen = ref(false)
  const modelValue = defineModel<string>({ required: true })
  const selectedOption = ref<string | null>(null)

  const reference = useTemplateRef<HTMLDivElement>('reference')
  const floating = useTemplateRef<HTMLDivElement>('floating')

  const { floatingStyles } = useFloating(reference, floating, {
    middleware: [
      offset(5),
      flip(),
      shift()
    ],
    strategy: 'absolute',
    placement: 'bottom',
    open: isOpen.value,
  })

  const handleChange = (item: T) => {
    if (props.itemValue) {
      modelValue.value = typeof item === 'object' && item !== null ? (item as Record<string, any>)[props.itemValue] : item as unknown as string
    } else {
      modelValue.value = typeof item === 'object' && item !== null ? (item as Record<string, any>)[props.itemText] : item as unknown as string
    }
    selectedOption.value = typeof item === 'object' && item !== null ? (item as Record<string, any>)[props.itemText] : item as unknown as string
    isOpen.value = false
  }
</script>

<template>
  <div class="relative">
    <div
      ref="reference"
      class="w-full border border-gray-400 rounded py-3 px-4 cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <div class="flex items-center justify-between text-sm">
        {{ selectedOption || 'Seleccione una opción' }}
        <EIcon :icon="!isOpen ? 'mdi:chevron-down' : 'mdi:chevron-up'" size="18" />
      </div>
    </div>
    <div
      v-if="isOpen"
      ref="floating"
      class="border border-gray-400 w-full bg-white z-10"
      :style="floatingStyles"
    >
      <ul class="text-gray-500">
        <li
          v-for="(item, index) in props.items"
          :key="`option-${index}`"
          class="py-1.5 px-4 cursor-pointer hover:bg-blue-200"
          :class="[
            modelValue === (typeof item === 'object' && item !== null ? (item as Record<string, any>)[props.itemText] : item) ? 'bg-blue-200' : ''
          ]"
          @click="handleChange(item)"
        >
          {{ typeof item === 'object' && item !== null ? (item as Record<string, any>)[props.itemText] : item }}
        </li>
      </ul>
    </div>
  </div>
</template>

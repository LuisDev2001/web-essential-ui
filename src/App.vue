<script setup lang="ts">
  import { ref } from 'vue'
  import EButton from './components/EButton.ce.vue'
  import EAlert from './components/EAlert.ce.vue'
  import ERadio from './components/ERadio.ce.vue'
  import ECheckbox from './components/ECheckbox.ce.vue'

  const colorSelected = ref('')
  const termsAndConditions = ref(false)
  const fruitList = ref<string[]>([])
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Vue 3 + Vite + TypeScript</h1>
    <p class="text-lg text-gray-600">Vue 3 + Vite + TypeScript + Composition API + ESLint + Prettier</p>
    <EButton size="md">
      Hola mundo
    </EButton>
    <div class="flex flex-col gap-4 w-96 mx-auto">
      <EAlert variant="success">
        Williamsburg carles vegan helvetica.
      </EAlert>
      <EAlert variant="error">
        Williamsburg carles vegan helvetica.
      </EAlert>
      <EAlert variant="info">
        Williamsburg carles vegan helvetica.
      </EAlert>
      <EAlert variant="warning">
        Williamsburg carles vegan helvetica.
      </EAlert>

      <ERadio v-model="colorSelected" label="rojo" value="rojo"></ERadio>
      <ERadio v-model="colorSelected" label="verde" value="verde"></ERadio>
      <ERadio v-model="colorSelected" label="amarillo" value="amarillo" disabled></ERadio>

      {{ colorSelected }}

      <ECheckbox v-model="termsAndConditions" label="Terminos y condiciones"></ECheckbox>
      {{ termsAndConditions }}

      <ECheckbox v-model="fruitList" value="pera" label="Pera"></ECheckbox>
      <ECheckbox v-model="fruitList" value="manzana" label="Manzana" ></ECheckbox>
      <ECheckbox v-model="fruitList" value="platano" label="Platano" ></ECheckbox>

      {{ fruitList }}
    </div>
  </div>
</template>

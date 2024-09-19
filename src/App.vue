<script setup lang="ts">
  import { ref } from 'vue'
  import EButton from './components/EButton.ce.vue'
  import EAlert from './components/EAlert.ce.vue'
  import ERadio from './components/ERadio.ce.vue'
  import ECheckbox from './components/ECheckbox.ce.vue'
  import EInput from './components/EInput.ce.vue'
  import ESelect from './components/ESelect.ce.vue'
  import ETable from './components/ETable.ce.vue'

  const colorSelected = ref('')
  const termsAndConditions = ref(false)
  const fruitList = ref<string[]>([])
  const textInput = ref('')
  // const selectInput = ref('')

  const itemTextList = ref(['item 1', 'item 2', 'item 3', 'item 4', 'item 5'])
  const countryList = ref([
    { name: 'Perú', code: 'pe' },
    { name: 'Colombia', code: 'co' },
    { name: 'Chile', code: 'cl' },
    { name: 'Argentina', code: 'ar' },
    { name: 'Ecuador', code: 'ec' },
  ])

  const selectOne = ref('')
  const selectTwo = ref('')

  const headers = ['Product name', 'Color', 'Category', 'Price', 'Actions']
  const rows = [
  { 'Product name': 'Apple MacBook Pro 17"', 'Color': 'Silver', 'Category': 'Laptop', 'Price': '$2999' },
  { 'Product name': 'Microsoft Surface Pro', 'Color': 'White', 'Category': 'Laptop PC', 'Price': '$1999' },
  { 'Product name': 'Magic Mouse 2', 'Color': 'Black', 'Category': 'Accessories', 'Price': '$99' }
]
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

      <EInput v-model="textInput" placeholder="message" />
      {{ textInput }}

      <ESelect v-model="selectOne" :items="itemTextList"></ESelect>
      {{ selectOne }}
      <ESelect
        v-model="selectTwo"
        :items="countryList"
        item-text="name"
        item-value="code"
      ></ESelect>
      {{ selectTwo }}

    </div>
    <ETable :headers="headers" :rows="rows">
      <template #actions>
        <button>Edit</button>
      </template>
    </ETable>
  </div>
</template>

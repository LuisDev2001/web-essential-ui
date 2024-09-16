<script setup lang="ts">
  import EButton from './components/EButton.ce.vue'
  import EAlert from './components/EAlert.ce.vue';
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
    </div>
  </div>
</template>

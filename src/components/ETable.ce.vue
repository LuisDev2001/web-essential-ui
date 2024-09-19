<script setup lang="ts" generic="T extends Record<string, any>">
  const props = defineProps<{
    headers: string[],
    rows: Array<T>
  }>()
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th v-for="header in props.headers" :key="header" scope="col" class="px-6 py-3">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in props.rows" :key="index" class="bg-white border-b hover:bg-gray-50">
          <th v-for="header in props.headers" :key="header" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            <slot :name="header.toLowerCase()" :row="row">{{ row[header] }}</slot>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
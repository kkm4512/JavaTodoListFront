<template>
  <div
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
  <ul>
      <li v-for="(name,i) of names" :key="name">
          {{ name }} - {{ passwords[i] }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  names: string[];
  passwords: string[];
}>();
</script>

<style scoped></style>

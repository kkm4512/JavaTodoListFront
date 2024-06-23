<template>
  <div class="flex justify-center">
    <ul class="border-2 border-blue-500">
      <li class="border-2 border-black">
        Id : {{ props.id }}
      </li>
      <li class="border-2 border-black">
        Name : {{ props.name }}
      </li>
      <li class="border-2 border-black">
        Password : {{ props.password }}
      </li>
      <li class="border-2 border-black">
        NickName : {{ props.nickname }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: Number,
  name: String,
  password: String,
  nickname: String,
});
</script>

<style scoped></style>

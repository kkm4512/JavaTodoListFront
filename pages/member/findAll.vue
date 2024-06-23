<template>
  <div class="flex justify-center">
      <Card :names="names" :passwords="passwords"/>
  </div>
</template>

<script setup lang="ts">
import { HttpMethod } from "~/types/HttpMethod";
import type { Member } from "~/types/MemberType";
import type { Board } from "~/types/boardType";
definePageMeta({
  middleware: "user",
});
const names = ref<string[]>([]);
const passwords = ref<string[]>([]);

const response = await memberFetch<Member[]>("findAll", HttpMethod.GET);
if (response) 
for ( let i=0; i<response.length; i++ ) {
  names.value.push(response[i].name);
  passwords.value.push(response[i].password);
}
</script>

<style lang="scss" scoped></style>

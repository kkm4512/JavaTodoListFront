<template>
  <div class="container">
    <BoardCards :boards="res" />
  </div>
</template>

<script setup lang="ts">
import { HttpMethod } from "~/types/HttpMethod";
import type { Board } from "~/types/boardType";

const res = ref<Board[]>([]);
const response = await boardFetch<Board[]>("findAll", HttpMethod.GET);
if (response) {
  res.value = response;
}

</script>

<style></style>

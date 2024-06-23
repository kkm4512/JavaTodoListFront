<template>
  <div class="container">
    <BoardCards :boards="res" @board-removed="handleBoardRemoved" />
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

function handleBoardRemoved(id:string){
  res.value = res.value.filter( board => board.id !== id );
}

</script>

<style></style>

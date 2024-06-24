<template>
  <div class="container">
    <div v-for="board in res" :key="board.id" class="flex w-full justify-center mb-5">
      <BoardCards :board="board" :open="isModalOpen" @board-removed="handleBoardRemoved" @update-open="updateBoard"/>
  </div>
  </div>
</template>

<script setup lang="ts">
import { HttpMethod } from "~/types/HttpMethod";
import type { Board } from "~/types/boardType";

const res = ref<Board[]>([]);
const isModalOpen = ref<boolean>(false);
const response = await boardFetch<Board[]>("findAll", HttpMethod.GET);
if (response) {
  res.value = response;
}

function handleBoardRemoved(id:string){
  res.value = res.value.filter( board => board.id !== id );
}

function updateBoard(updateBoard:Board){
  const idx = res.value.findIndex( e =>  e.id ===  updateBoard.id );
  res.value[idx] = {...updateBoard}
}

</script>

<style></style>

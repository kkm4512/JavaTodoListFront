<template>
  <div class="flex w-full justify-center mb-5">
    <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 truncate">
      <div class="flex justify-between">
        <svg-icon @click="updateBoard(board)" type="mdi" :path="paths.update" class="mr-auto cursor-pointer mb-5"></svg-icon>
        <svg-icon @click="removeBoard(board.id)" type="mdi" :path="paths.x" class="cursor-pointer ml-auto"></svg-icon>
      </div>
      <div class="text-lg mb-2">제목 : {{ board.title }}</div>
      <ul>
        <li v-for="(des, i) in board.descriptions" :key="i">내용 : {{ des }}</li>
      </ul>
      <UpdateModal v-if="isModalOpen" :board="board" :open="isModalOpen" @update-board="updateBoardInfo"/>
    </a>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlphaX } from "@mdi/js";
import { HttpMethod } from "~/types/HttpMethod";
import type { Board } from "~/types/boardType";
import { mdiUpdate } from "@mdi/js";
import UpdateModal from "./updateModal.vue";

const paths = ref({
  x: mdiAlphaX,
  update: mdiUpdate,
});

const isModalOpen = ref<boolean>(false);

defineComponent({
  components: {
    SvgIcon,
  },
});

const props = defineProps<{
  board: Board;
  open: boolean;
}>();

const emit = defineEmits(["board-removed","update-open"]);

async function removeBoard(id: string) {
  const res = await boardFetch(`removeBoard/${id}`, HttpMethod.GET);
  if (res) {
    emit("board-removed", id);
  }
}

function updateBoard(board:Board){
  isModalOpen.value = !isModalOpen.value
}

function updateBoardInfo(updateBoard:Board){
  emit("update-open",updateBoard)
  isModalOpen.value = !isModalOpen.value
  
}
</script>

<style scoped>
.truncate {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

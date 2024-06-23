<template>
  <div
    v-for="board in boards"
    :key="board.id"
    class="flex w-full justify-center mb-5"
  >
    <a
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <svg-icon @click="removeBoard(board.id)" type="mdi" :path="path" class="cursor-pointer ml-auto"></svg-icon>
      <div class="text-lg mb-2">제목 : {{ board.title }}</div>
      <ul>
        <li v-for="(des, i) in board.descriptions" :key="i">
          내용 : {{ des }}
        </li>
      </ul>
    </a>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlphaX } from "@mdi/js";
import { HttpMethod } from "~/types/HttpMethod";
import type { Board } from "~/types/boardType";

const path = ref(mdiAlphaX);

defineComponent({
  components: {
    SvgIcon,
  },
});

const props = defineProps<{
  boards: Board[];
}>();

const { data: boards, refresh } = useAsyncData<Board[]>('findAll', async () => {
  const response = await fetch('http://localhost:8080/api/board/findAll', {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch boards');
  }
  return response.json();
});

async function deleteBoard(id: string) {
  const success = await removeBoard(id);
  if (success) {
    refresh(); // 데이터 갱신을 위해 API 호출 다시 수행
  }
}

async function removeBoard(id: string): Promise<boolean> {
  const res = await boardFetch<boolean>(`removeBoard/${id}`, HttpMethod.GET);
  if (res) {
    return true;
  } else {
    alert('해당 게시물의 삭제에 실패 하였습니다');
    return false;
  }
}
</script>

<style scoped></style>

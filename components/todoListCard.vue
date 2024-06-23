<template>
  <div
    class="mb-6 flex-col flex justify-center items-center border-2 border-blue-300 rounded-xl"
  >
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
      >title</label
    >
    <input
      v-model="title"
      type="text"
      class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <div
      v-for="(des, i) in descriptions"
      :key="i"
      class="flex-col flex justify-center items-center w-full"
    >
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >description</label
      >
      <textarea
        v-model="descriptions[i]"
        class="mb-10 block w-1/2 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <button
      v-if="descriptions.length !== 5"
      @click="addDescription"
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      +
    </button>
  </div>
  <button type="button" @click="sendDatas" class=" ml-[93%] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
    Send
  </button>
</template>

<script setup lang="ts">
import { HttpMethod } from '~/types/HttpMethod';
const descriptions = ref<string[]>([""]);
const title = ref<string>("");
interface Todos {
  title: string;
  descriptions: string[];
}



const todos = ref<Todos>({
  title: "",
  descriptions: descriptions.value,
});

watchEffect( () => {
  todos.value.title = title.value,
  todos.value.descriptions = descriptions.value
} )


function addDescription() {
  descriptions.value.push("");
}

async function sendDatas(){
  const res = await boardFetch<boolean>("add",HttpMethod.POST,todos.value)
  if (res) redirected(res,"/","addBoard")
}
</script>

<style scoped></style>

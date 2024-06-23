<template>
  <div class="mb-6 w-full flex flex-col items-center border-2 border-blue-300 rounded-xl">
    <label class="block mb-2 font-medium text-gray-900 dark:text-white text-lg">
      (수정시킬 ) ID :
    </label>
    <input
      v-model="id"
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />

    <label
      class="block mb-2 font-medium text-gray-900 dark:text-white text-lg mt-10"
    >
      (수정시킬 정보) NAME :
    </label>
    <input
      v-model="name"
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />

    <label
      class="block mb-2 font-medium text-gray-900 dark:text-white text-lg mt-10"
    >
      (수정시킬 정보) PASSWORD :
    </label>
    <input
      v-model="password"
      type="password"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />

    <label
      class="block mb-2 font-medium text-gray-900 dark:text-white text-lg mt-10"
    >
      (수정시킬 정보) NICKNAME :
    </label>
    <input
      v-model="nickname"
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <button
      @click="update"
      type="button"
      class="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Update!
    </button>
  </div>
</template>

<script setup lang="ts">
import { HttpMethod } from '~/types/HttpMethod';

const id = ref<string>();
const name = ref<string>();
const password = ref<string>();
const nickname = ref<string>();

const userInfo = reactive({
  id: id.value ? parseInt(id.value) : id.value,
  name: name.value,
  password: password.value,
  nickname: nickname.value,
});

watchEffect(() => {
  userInfo.id = id.value ? parseInt(id.value) : id.value;
  userInfo.name = name.value;
  userInfo.password = password.value;
  userInfo.nickname = nickname.value;
})

async function update(){
  console.log(userInfo)
  const res = await memberFetch("updateMember",HttpMethod.PUT,userInfo);
  console.log(res)
}
</script>

<style scoped></style>

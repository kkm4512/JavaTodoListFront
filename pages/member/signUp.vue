<template>
  <div
    class="container flex flex-col items-center space-y-[2rem] justify-center h-screen"
  >
    <div
      class="flex flex-col items-center border-2 border-blue-300 w-[50%] h-[50%] rounded-lg"
    >
      <div class="w-full max-w-md mt-10">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >name</label
        >
        <input
          v-model="userInfo.name"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name"
          required
        />
      </div>

      <div class="w-full max-w-md mt-10">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >password</label
        >
        <input
          v-model="userInfo.password"
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          required
        />
      </div>

      <div class="w-full max-w-md mt-10">
        <label
          for="nickname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >nickname</label
        >
        <input
          v-model="userInfo.nickname"        
          type="text"
          id="nickname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="nickname"
          required
        />
      </div>
      <button @click="sendUserInfo" class="border-2 border-black
      rounded-lg h-1/6 mt-[2.5rem] w-1/2 hover:bg-blue-800"
      >전송</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HttpMethod } from "~/types/HttpMethod";
import type { Member } from '~/types/MemberType';
const router = useRouter();


const userInfo = reactive<Member>({
  name:"",
  password:"",
  nickname:"",
});

async function sendUserInfo():Promise<void> {
    const res = await memberFetch<boolean>("signUp",HttpMethod.POST,userInfo)  
    if (res) redirected(res,"/","signUp");    
}


</script>

<style lang="scss" scoped></style>

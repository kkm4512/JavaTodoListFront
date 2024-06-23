<template>
  <div>
    <Inputs v-model="userInfo" :showNickname="false" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { HttpMethod } from "~/types/HttpMethod";
import type { LoginMember } from "~/types/MemberType";
import { useUserStore } from "~/stores/userStore";
const router = useRouter();
const userStore = useUserStore();

const userInfo = reactive({
  name: "",
  password: "",
  nickname:"",
});

async function handleSubmit(loginMember:LoginMember) {
  const res = await memberFetch<boolean>("login",HttpMethod.POST,loginMember)
  if (res) {
    userStore.setUserName(loginMember);
    redirected(res,"/","login");
  }
}
</script>

<style lang="scss" scoped>

</style>
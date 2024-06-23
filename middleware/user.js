import { useUserStore } from "~/stores/userStore"

export default defineNuxtRouteMiddleware((to,from) => {
  const userStore = useUserStore();

  if (!userStore.getUserName) {
    alert("로그인후 이용해주세요")
    return navigateTo("/member/login")
  }
})
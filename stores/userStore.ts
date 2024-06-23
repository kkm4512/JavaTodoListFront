import { defineStore } from "pinia";
import type { LoginMember } from "~/types/MemberType";

export const useUserStore = defineStore('useStore', {
  state:() => ({
    name : "",
  }),
  getters: {
    getUserName: (state) => state.name,
  }, 
  actions: {
    setUserName(userInfo:LoginMember){
      this.name = userInfo.name
    }
  },
  persist: {
    storage: persistedState.localStorage,
  }
})
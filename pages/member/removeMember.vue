<template>
  <Search placeHolder="Remove User Id" @submitClicked="handleSubmitClicked" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "user",
});

function handleSubmitClicked(res: boolean) {
  if (res)
    alert("요청하신 회원은 정상적으로 삭제처리 되었습니다.")
    redirected(res,"/","removeMember");
}
</script>

<style lang="scss" scoped></style>

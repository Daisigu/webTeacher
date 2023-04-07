<template>
  <div>student cabinet</div>
</template>

<script setup>
import { useLoginStore } from "~~/store/login";

const router = useRouter();
const loginStore = useLoginStore();
onMounted(() => {
  nextTick(() => {
    loginStore.role == "teacher" ? router.push("/teacher-cabinet") : 0;
  });
});
</script>

<style scoped></style>


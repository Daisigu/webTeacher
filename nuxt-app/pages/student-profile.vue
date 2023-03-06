<template>
  <div>student cabinet</div>
</template>

<script setup>
import { useAuthStore } from "~~/store/useAuth";

const router = useRouter();
const authStore = useAuthStore();
onMounted(() => {
  nextTick(() => {
    authStore.role == "teacher" ? router.push("/teacher-cabinet") : 0;
  });
});
</script>

<style  scoped></style>

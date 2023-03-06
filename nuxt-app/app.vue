<template>
  <div>
    <NuxtLayout :name="authStore.layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useAuthStore } from "~~/store/useAuth";
const authStore = useAuthStore();
</script>

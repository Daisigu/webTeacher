<template>
  <div>
    <NuxtLayout :name="authStore.layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useLoginStore } from "~~/store/login";
const authStore = useLoginStore();
</script>

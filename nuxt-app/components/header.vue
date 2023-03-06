<template>
  <header class="header">
    <div class="container">
      <div class="flex-wrapper">
        <div>
          <span>
            
            <NuxtLink to="/">Главная </NuxtLink>
          </span>
          role: {{ authStore.role }}
        </div>

        <div>
          <span v-if="authStore.isAuth">
            <NuxtLink to="/student-profile">Личный кабинет </NuxtLink>
          </span>
          <span v-if="!authStore.isAuth">
            <NuxtLink @click="setLoggedIn" to="/teacher-cabinet"
              >Войти
            </NuxtLink>
          </span>
          <span v-if="authStore.isAuth">
            <NuxtLink @click="logout" to="/login">Выйти </NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from "~~/store/useAuth";
const authStore = useAuthStore();
const auth_token = useCookie("auth_token");
const router = useRouter();
const { setLoggedIn } = useAuthStore();
const logout = () => {
  authStore.setLoggedOut();
  router.push("/login");
  auth_token.value = "";
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #424242;
  padding: 0.5rem 1rem;
}
.header > ul {
  display: flex;
  list-style: none;
}

.flex-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-wrapper > div > span {
  margin-right: 1rem;
  color: white;
}
a{
    color: white;
}
a:hover{
    color: rgb(137, 137, 137);
}
</style>

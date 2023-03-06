<template>
  <div class="login container" @click="test">
    <div class="login-content col">
      <form
        @input="errors = ''"
        @submit.prevent="login"
        class="login-form col-lg-3 col-sm-12"
      >
        <a-input
          class="xl"
          v-model:value="loginForm.login"
          type="login"
          required
          placeholder="Логин"
        />
        <a-input
          class="xl"
          v-model:value="loginForm.password"
          type="password"
          required
          placeholder="Пароль"
        />
        <a-button class="col-12" @click="login" type="primary">Войти</a-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~~/store/useAuth";
const router = useRouter();
const { setLoggedIn, setTeacherLoggedIn } = useAuthStore();
const auth_token = useCookie("auth_token");
const loginForm = reactive({
  login: "Bogd228",
  password: "1",
});
const loading = reactive({
  login: false,
});
const login = async () => {
  if (loginForm.login === "Bogd228") {
    setTeacherLoggedIn();
    auth_token.value = { login: loginForm.login, role: "teacher" };
  } else {
    setLoggedIn();
    auth_token.value = { login: loginForm.login, role: "student" };
  }
  router.push("/");
};
</script>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-logo {
  width: 300px;
  margin-bottom: 1rem;
}

.login-form,
.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form > * {
  margin-bottom: 1rem;
}

.error {
  color: var(--red);
}
</style>

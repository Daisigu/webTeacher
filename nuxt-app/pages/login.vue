<template>
  <div class="login container" @click="test">
    <div class="login-content col">
      <a-form class="col-xl-3">
        <a-form-item v-bind="validateInfos.login">
          <a-input placeholder="Логин" v-model:value="loginForm.login" />
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input placeholder="Пароль" v-model:value="loginForm.password" />
        </a-form-item>
        <a-form-item>
          <a-button
            :disabled="!loginFormIsValid"
            class="col-12"
            type="primary"
            @click.prevent="login"
            >Войти</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from "~~/store/login";
const router = useRouter();
import { Form } from "ant-design-vue";

const useForm = Form.useForm;
const { setLoggedIn, setTeacherLoggedIn } = useLoginStore();
const auth_token = useCookie("auth_token");
const loginForm = reactive({
  login: "",
  password: "",
});
const loading = reactive({
  login: false,
});
const loginFormIsValid = ref(false);
const { resetFields, validate, validateInfos } = useForm(
  loginForm,
  reactive({
    login: [
      {
        required: true,
        message: "Пожалуйста, введите логин",
      },
    ],
    password: [
      {
        required: true,
        message: "Пожалуйста, введите пароль",
      },
    ],
  })
);

const loginValidate = async () => {
  try {
    await validate();
    loginFormIsValid.value = true;
  } catch (e) {
    loginFormIsValid.value = false;
  }
};
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

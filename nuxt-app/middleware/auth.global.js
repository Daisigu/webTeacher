import { useLoginStore } from "~~/store/login";

export default defineNuxtRouteMiddleware((to, from) => {
  if (useCookie("auth_token").value) {
    const token = useCookie("auth_token");
    const authStore = useLoginStore();
    if (token.value.login) {
      if (token.value.login === "Bogd228") authStore.setTeacherLoggedIn();
      else {
        authStore.setLoggedIn();
      }
    } else {
      authStore.setLoggedOut();
      if (to.fullPath != "/login") {
        return navigateTo("/login");
      }
    }
  } else {
    if (to.fullPath != "/login") {
      return navigateTo("/login");
    }
  }
});

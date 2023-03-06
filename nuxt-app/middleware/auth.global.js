import { useAuthStore } from "~~/store/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("auth_token");
  const authStore = useAuthStore();

  if (token.value.login) {
    if (token.value.login === "Bogd228")
      authStore.setTeacherLoggedIn();
    else {
      authStore.setLoggedIn();
    }
  } else {
    authStore.setLoggedOut();
    if (to.fullPath != "/login") {
      return navigateTo("/login");
    }
  }
});

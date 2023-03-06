import { useAuthStore } from "~~/store/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("auth_token");
  const authStore = useAuthStore();
  if (token.value) {
    authStore.setLoggedIn();
  } else {
    authStore.setLoggedOut();
    if (to.fullPath != "/login") {
      return navigateTo("/login");
    }
  }
});

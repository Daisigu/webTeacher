import { defineStore } from "pinia";
import { ref, Ref } from "vue";

export const useLoginStore = defineStore("LoginStore", () => {
  const layout: Ref<string> = ref("");
  const isAuth: Ref<boolean> = ref(false);
  const role: Ref<string> = ref("student");
  const setLoggedIn = () => {
    console.log("setLoggedIn");
    isAuth.value = true;
    layout.value = "default";
    role.value = "student";
  };
  const setLoggedOut = () => {
    console.log("setLoggedOut");
    isAuth.value = false;
    layout.value = "login";
    role.value = "student";
  };
  const setTeacherLoggedIn = () => {
    console.log("setTeacherLoggedIn");
    isAuth.value = true;
    layout.value = "default";
    role.value = "teacher";
  };

  return {
    layout,
    isAuth,
    role,
    setLoggedIn,
    setLoggedOut,
    setTeacherLoggedIn,
  };
});

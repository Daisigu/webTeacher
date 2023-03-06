import { defineStore } from "pinia";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    isAuth: false,
    layout: "login",
    role: "student",
  }),
  actions: {
    setLoggedIn() {
      this.isAuth = true;
      this.layout = "default";
      this.role = "student";
    },
    setLoggedOut() {
      this.isAuth = false;
      this.layout = "login";
      this.role = "student";
    },
    setTeacherLoggedIn() {
      this.isAuth = true;
      this.layout = "default";
      this.role = "teacher";
    },
  },
});

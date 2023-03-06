// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/reset.css", "~/assets/bootstrap-grid.min.css"],
  modules: ["@pinia/nuxt"],
  plugins: ["@/plugins/antd"],
});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  stylelint: {
    // TODO: Figure out how to work with stylelint and customize the rules
    failOnError: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_colors.scss";',
        },
      },
    },
  },
})

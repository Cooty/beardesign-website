// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  // stylelint: {
  //   // TODO: Figure out how to work with stylelint and customize the rules
  //   failOnError: false,
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/config/_config.scss" as *;',
        },
      },
    },
  },
})

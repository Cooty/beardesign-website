// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  // stylelint: {
  //   // TODO: Figure out how to work with stylelint and customize the rules
  //   failOnError: false,
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/config/_config.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    sanityToken: process.env.SANITY_TOKEN,
    public: {
      sanityProjectId: process.env.SANITY_PROJECT_ID,
      sanityDatasetName: process.env.SANITY_DATASET_NAME,
      test: '',
    },
  },
})

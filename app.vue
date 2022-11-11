<template>
  <LayoutAppBar />
  <NuxtPage />
  <LayoutFooter />
</template>

<script lang='ts' setup>
import '~/assets/styles/app.scss'

const appConfig = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} ${appConfig.titleSeparator} ${appConfig.title}` : appConfig.title;
  },
  meta: [
    { name: 'description', content: appConfig.description },
    { name: 'keywords', content: appConfig.keywords },
    { name: 'theme-color', content: appConfig.themeColor },
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      media: 'all',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,800;1,400;1,800&display=swap',
    },
    {
      rel: 'stylesheet',
      media: 'all',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap',
    }
  ]

});
</script>

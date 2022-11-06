<template>
  <LayoutHeader />
  <LayoutMain>
    <NuxtPage />
  </LayoutMain>
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
      media: 'print',
      onload: 'this.media=\'all\'',
      crossorigin: '',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,600;1,700,1,800;0,300;0,400;0,500;1,600;1,700,1,800&display=swap',
    },
    {
      rel: 'stylesheet',
      media: 'print',
      onload: 'this.media=\'all\'',
      crossorigin: '',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap',
    }
  ]

});
</script>

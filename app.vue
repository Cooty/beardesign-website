<template>
  <LayoutAppBar />
  <NuxtPage />
  <LayoutFooter />
</template>

<script lang='ts' setup>
import { TitleTemplate } from '@unhead/schema';
import '~/assets/styles/app.scss'
import { BDAppConfig } from './app.config';
import Themes from './types/Themes.type';

const appConfig = useAppConfig() as BDAppConfig
const theme = useTheme()

onMounted(() => {
  const savedTheme = localStorage.getItem('_bd-theme') as Themes

  if (savedTheme) {
    theme.value = JSON.parse(savedTheme)
  }
})

useHead({
  titleTemplate: ((titleChunk) => {
    return titleChunk ? `${titleChunk} ${appConfig.titleSeparator} ${appConfig.title}` : appConfig.title;
  }) as TitleTemplate,
  bodyAttrs: () => ({
    class: theme
  }),
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
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,800;1,400;1,500;1,800&display=swap',
    },
    {
      rel: 'stylesheet',
      media: 'all',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap',
    }
  ]

});
</script>

<style lang="scss">
.page {

  &-enter-active,
  &-leave-active {
    transition: all 0.4s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    // filter: blur(1rem);
  }
}
</style>
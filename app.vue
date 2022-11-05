<template>
  <LayoutHeader />
  <LayoutMain>
    <NuxtPage />
  </LayoutMain>
  <LayoutFooter />
</template>

<script lang="ts" setup>
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
  ]

});
</script>

<template>
  <Carousel v-if="!pendingFeaturedTech && !errorFeaturedTech && featuredTech && featuredTech.length"
    :label="work?.body.children[4].children[0].value">
    <CarouselItemCardLogo v-for="tech in featuredTech" :key="tech.id" :name="tech.name" :image="tech.logo.src"
      :image-width="tech.logo.width" :image-height="tech.logo.height" :link="tech.link" />
  </Carousel>
</template>

<script lang="ts" setup>
const { data: featuredTech, pending: pendingFeaturedTech, error: errorFeaturedTech } = await useFetch('/api/technology?isFeatured=true')
const { data: work } = await useAsyncData('homeWork', () => queryContent('home', '_work').findOne())
</script>
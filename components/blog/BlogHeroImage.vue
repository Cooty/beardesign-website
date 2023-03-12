<template>
  <header class="hero-image">
    <img :srcset="`${props.xsImageUrl} 768w, ${props.mdImageUrl} 1000w`" sizes="(min-width: 768px) 1000px, 768px"
      :src="props.xsImageUrl" :alt="props.alt" class="hero-image-main-image" loading="eager" decoding="async" />
    <div :style="{ backgroundImage: `url(${props.backgroundImageUrl})` }" class="hero-image-background-image"></div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  xsImageUrl: string,
  mdImageUrl: string,
  backgroundImageUrl: string,
  alt: string,
}>()
</script>

<style lang="scss" scoped>
.hero-image {
  position: relative;
  overflow: hidden;
  margin-bottom: calc(var(--content-section-v-gutter) / 2 * -1);

  @media screen and (min-width: $md) {
    padding: var(--wrapper-gutter);
  }

  @media screen and (min-width: $bp-navigation) {
    padding: var(--bd-size-gutter);
  }

  &-main-image {
    display: block;
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 768px;
    margin-right: auto;
    margin-left: auto;
    aspect-ratio: 16 / 9;

    @media screen and (min-width: $md) {
      border-radius: $default-radius;
      box-shadow: $default-box-shadow;
      aspect-ratio: 2 / 1;
    }

    @media screen and (min-width: $bp-navigation) {
      max-width: 1000px;
    }
  }

  &-background-image {
    display: none;

    @media screen and (min-width: $md) {
      display: block;
      position: absolute;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(50px);
    }
  }
}
</style>
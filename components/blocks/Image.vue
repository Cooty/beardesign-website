<template>
  <figure class="cms-image">
    <picture>
      <source media="(min-width: 769px)" :srcset="mdImageUrl" />
      <img :src="xsImageUrl" :alt="props.alt || props.caption || ''" loading="lazy" decoding="async" />
    </picture>
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
import useSanityImageUrl from '~~/composables/sanity-image-url-builder';

const props = defineProps<{
  caption?: string,
  alt?: string,
  asset: {
    _ref: string,
    _type: string
  }
}>()

const xsImageUrl = useSanityImageUrl(props.asset).width(768).fit('max').url()
const mdImageUrl = useSanityImageUrl(props.asset).width(1000).fit('max').url()
</script>

<style scoped lang="scss">
.cms-image {
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  &,
  img {
    max-width: 100%;
  }

  img {
    border-radius: $default-radius;
    margin: 0 auto;
    display: block;
  }

  >figcaption {
    font-family: $header-font-stack;
    color: var(--bd-theme-card-secondary-text-color);
    display: block;
    text-align: center;
    margin-top: 0.6rem;
  }
}
</style>
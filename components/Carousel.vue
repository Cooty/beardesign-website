<template>
  <ClientOnly>
    <Splide :options="options" :aria-label="props.label">
      <slot />
    </Splide>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Splide, Options } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const defaultOptions = {
  rewind: false,
  loop: false,
  pagination: false,
  type: 'slide',
  perPage: 3,
  gap: '1rem',
  arrows: false,
  perMove: 2,
  drag: 'free',
  snap: true,
  lazyLoad: 'nearby',
  mediaQuery: 'min',
  breakpoints: {
    480: {
      perPage: 4
    },
    768: {
      perPage: 5
    },
    992: {
      perPage: 6,
      arrows: true,
      padding: '10px'
    },
    1200: {
      perPage: 8,
    }
  }
} as Options

const props = defineProps<{
  label: string,
  splideOptions?: Options
}>()

let options: Options;

if (props.splideOptions) {
  options = { ...defaultOptions, ...props.splideOptions }
} else {
  options = defaultOptions
}
</script>

<style scoped lang="scss">
.splide {
  width: 100%;

  & :deep(.splide__track) {
    @media screen and (max-width: 991px) {
      padding-left: 10px !important;
      padding-right: 2rem !important;
    }
  }

  & :deep(.splide__arrow) {
    background-color: var(--bd-theme-carousel-arrow-bg);
    transition: all $default-transition-duration $default-easing;
  }

  & :deep(.splide__arrow svg) {
    fill: var(--bd-theme-carousel-arrow-color);
  }

  & :deep(.splide__arrow--next) {
    right: 0
  }

  & :deep(.splide__arrow--prev) {
    left: 0
  }

  &:not(.is-overflow) :deep(.splide__arrows) {
    display: none;
  }

  &:not(.is-overflow) :deep(.splide__list) {
    justify-content: center;
  }
}
</style>
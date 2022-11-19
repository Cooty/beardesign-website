<template>
  <ClientOnly>
    <Splide v-if="props.items && props.items.length" :options="splideOptions" :aria-label="props.label">
      <SplideSlide v-for="item in props.items" :key="item.id">
        <UiCard :href="item.link ? item.link : null" class="logo-carousel-item" :full-height="true">
          <img :data-splide-lazy="item.image" :alt="item.name ? item.name : ''" width="100" height="100" class="img" />
          <small v-if="item.name" class="label">{{ item.name }}</small>
        </UiCard>
      </SplideSlide>
    </Splide>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Splide, SplideSlide, Options } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

interface Logo {
  id: string,
  image: string,
  name?: string,
  link?: string
}

const props = defineProps<{
  label: string,
  items?: Logo[]
}>()

const splideOptions = {
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
</script>

<style scoped lang="scss">
.splide {
  width: 100%;

  &__slide {
    padding: 10px 0; // offset for cards' shadow
  }

  & :deep(.splide__track) {
    @media screen and (max-width: 991px) {
      padding-left: 10px !important;
      padding-right: 2rem !important;
    }
  }

  & :deep(.splide__arrow) {
    background-color: var(--bd-theme-carousel-arrow-bg);
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

.label {
  font-family: $header-font-stack;
  font-weight: 400;
  display: block;
  text-align: center;
  margin-top: $gutter-base;
  font-size: 0.6rem;

  @media screen and (min-width: $lg) {
    font-size: 0.8rem;
  }
}

.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
  height: 40px;
}

.logo-carousel-item :deep(.card-body) {
  padding: 0.6rem;
}
</style>
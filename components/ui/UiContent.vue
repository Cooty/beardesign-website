<template>
  <div class="content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/config/mixins';

.content {
  hyphens: auto;

  :deep(p),
  :deep(li:not(.splide__slide)) {
    line-height: 1.5;
  }

  :deep(>*:last-child) {
    margin-bottom: 0;
  }

  :deep(ol),
  :deep(ul:not(.splide__list)) {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    margin-top: 1.5rem;
  }

  :deep(li:not(.splide__list)) {
    @include fluid-font();

    &:not(:last-child) {
      margin-bottom: 0.5em;
    }
  }

  :deep(a) {
    text-decoration: underline;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  :deep(img),
  :deep(svg),
  :deep(iframe),
  :deep(object),
  :deep(embed),
  :deep(video) {
    max-width: 100%;
  }
}
</style>
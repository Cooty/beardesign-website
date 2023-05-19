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

  :deep(.embed:not(:last-child)),
  :deep(.code:not(:last-child)),
  :deep(blockquote:not(:last-child)) {
    margin-bottom: 1.5rem;
  }

  :deep(blockquote) {
    --border-size: 4px;
    margin-right: 0;
    margin-top: 0;
    margin-left: 1rem;
    position: relative;
    font-style: italic;
    font-family: $header-font-stack;
    padding: 0 0 0 calc(1rem + var(--border-size));
    @include fluid-font();

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: var(--border-size);
      border-radius: $default-radius;
      background-color: var(--bd-theme-secondary-text-color);
    }
  }
}
</style>
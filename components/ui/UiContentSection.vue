<template>
  <div class="content-section">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.content-section {
  padding-top: var(--content-section-v-gutter);
  padding-bottom: var(--content-section-v-gutter);
}
</style>
<template>
  <aside class="post-meta">
    <slot />
  </aside>
</template>

<style lang="scss" scoped>
.post-meta {
  display: flex;
  flex-direction: row;
  gap: $sm-gutter;
  color: var(--bd-theme-secondary-text-color);
}

h1+.post-meta {
  margin-bottom: 1.38rem;
}
</style>
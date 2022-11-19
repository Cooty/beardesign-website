<template>
    <aside class="tags">
        <slot />
    </aside>
</template>

<style lang="scss" scoped>
.tags {
    --gap: #{$gutter-base};

    @media screen and (min-width: $lg) {
        --gap: #{$gutter-base * 2};
    }

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
}
</style>
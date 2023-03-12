<template>
    <component :is="props.as" class="wrapper" :class="{ narrow }">
        <slot />
    </component>
</template>

<script lang="ts" setup>
type AllowedTags = 'div' | 'section' | 'main' | 'ul' | 'ol' | 'dl' | 'article'

const props = withDefaults(defineProps<{
    as?: AllowedTags,
    narrow?: boolean
}>(), { as: 'div', narrow: false })
</script>

<style scoped lang="scss">
.wrapper {
    width: 100%;
    padding-left: var(--wrapper-gutter);
    padding-right: var(--wrapper-gutter);
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: $md) {
        max-width: 80%;
    }

    @media screen and (min-width: $bp-navigation) {
        max-width: $wrapper-max-width;
        padding-left: var(--bd-size-gutter);
        padding-right: var(--bd-size-gutter);
    }

    &:not(.narrow) {
        @media screen and (min-width: $xl) {
            max-width: 1460px;
        }
    }
}
</style>
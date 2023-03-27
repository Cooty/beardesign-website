<template>
    <li class="logo-grid-item">
        <img v-if="!props.link" :src="props.src" :alt="props.alt" :style="inlineStyles" class="img" loading="lazy"
            decoding="async" />
        <nuxt-link v-else :to="props.link" target="_blank">
            <img :src="props.src" :alt="props.alt" :style="inlineStyles" class="img" loading="lazy" decoding="async" />
        </nuxt-link>
    </li>
</template>

<script setup lang="ts">
const props = defineProps<{
    link?: string
    src: string,
    width: number,
    height: number,
    alt: string
}>()

const inlineStyles = {
    aspectRatio: `${props.width} / ${props.height}`,
}
</script>

<style scoped lang="scss">
.logo-grid-item {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: calc(50% - var(--grid-gap) * 2);
    flex: 0 0 calc(50% - var(--grid-gap) * 2);

    @media screen and (min-width: $sm) {
        max-width: calc(33.3333% - var(--grid-gap) * 2);
        flex: 0 0 calc(33.3333% - var(--grid-gap) * 2);
    }

    @media screen and (min-width: $md) {
        max-width: none;
        flex: 0 0 auto;
    }
}

.img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;

    @media screen and (min-width: $md) {
        height: 60px;
    }
}
</style>
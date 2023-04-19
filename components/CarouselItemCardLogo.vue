<template>
    <CarouselCard :link="props.link" :external="true">
        <img :src="props.image" loading="lazy" :alt="props.name ? props.name : ''"
            :style="{ aspectRatio: `${props.imageWidth} / ${props.imageHeight}` }" class="img" />
        <small v-if="props.name" class="label">{{ props.name }}</small>
    </CarouselCard>
</template>

<script setup lang="ts">
const props = defineProps<{
    link?: string,
    name?: string,
    image: string,
    imageWidth: number,
    imageHeight: number,
}>()

</script>

<style scoped lang="scss">
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
    width: auto;
    max-width: 100%;
    height: 40px;
}

.logo-carousel-item :deep(.card-body) {
    padding: 0.6rem;
}
</style>
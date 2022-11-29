<template>
    <CarouselCard :link="props.link">
        <img :data-splide-lazy="props.image" :alt="props.name ? props.name : ''" width="100" height="100" class="img" />
        <small v-if="props.name" class="label">{{ props.name }}</small>
    </CarouselCard>
</template>

<script setup lang="ts">
const props = defineProps<{
    link?: string,
    name?: string,
    image: string,
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
    width: 40px;
    height: 40px;
}

.logo-carousel-item :deep(.card-body) {
    padding: 0.6rem;
}
</style>
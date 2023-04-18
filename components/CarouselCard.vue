<template>
    <SplideSlide>
        <UiCard :href="props.link ? props.link : undefined" :full-height="true" :max-width="'none'"
            :external="props.external">
            <slot />
        </UiCard>
    </SplideSlide>
</template>

<script setup lang="ts">
import { SplideSlide } from '@splidejs/vue-splide'

const props = defineProps<{
    link?: string,
    external?: boolean
}>()

</script>

<style scoped lang="scss">
.splide {
    &__slide {
        padding: 10px 0; // offset for cards' shadow
    }
}
</style>
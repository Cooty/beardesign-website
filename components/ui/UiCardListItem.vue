<template>
    <UiCard as="li" class="card-list-item" :href="props.href" :max-width="'none'">
        <template v-if="slots.header" #header>
            <slot name="header" />
        </template>
        <slot />
        <template v-if="slots.footer" #footer>
            <slot name="footer" />
        </template>
    </UiCard>
</template>

<script setup lang="ts">
const props = defineProps<{ href?: string }>()
const slots = useSlots()
</script>

<style scoped lang="scss">
.card-list-item {
    --image-offset: 1rem;
    --image-width: 200px;
    --image-height: 150px;

    @media screen and (min-width: $lg) {
        --image-width: 300px;
        --image-height: 225px;
    }

    &:not([class~="no-image"]) {
        @media screen and (min-width: $md) {
            margin-top: var(--image-offset);
            padding-left: var(--image-width);
        }

        & :deep(.card-body) {
            min-height: var(--image-height);
        }

    }

    flex-direction: row;
    flex-direction: column;
    position: relative;
    overflow: visible;

    & :deep(.card-header) {
        display: none;

        @media screen and (min-width: $md) {
            display: block;
            padding-top: 0;
            position: absolute;
            height: auto;
            top: calc(var(--image-offset) * -1);
            left: calc(var(--image-offset) * -1);
        }
    }

    & :deep(.card-header>*) {
        position: static;
    }

    & :deep(.card-header>img) {
        @media screen and (min-width: $md) {
            display: block;
            max-width: var(--image-width);
            max-height: var(--image-height);
            object-fit: cover;
            object-position: center center;
        }
    }
}
</style>
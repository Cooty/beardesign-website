<template>
    <i class="icon" :class="`icon-${props.size}`">
        <slot />
    </i>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    size: 's' | 'm' | 'l' | 'xl'
}>(), {
    size: 's'
})
</script>

<style scoped lang="scss">
.icon {
    display: inline-flex;
    align-items: center;
    overflow: hidden;

    > :deep(svg) {
        width: 100%;
        height: auto;
    }

    > :deep(svg path) {
        fill: currentColor;
    }

    &-s {
        width: $gutter-base * 4;
    }

    &-m {
        width: $gutter-base * 6;
    }

    &-l {
        width: $gutter-base * 8;
    }

    &-xl {
        width: $gutter-base * 12;
    }
}
</style>
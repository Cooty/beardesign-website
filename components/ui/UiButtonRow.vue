<template>
    <component :is="props.as" class="button-row">
        <slot />
    </component>
</template>

<script setup lang="ts">
type AllowedTags = 'li' | 'div' | 'footer' | 'aside'

const props = withDefaults(defineProps<{
    as?: AllowedTags,
}>(), {
    as: 'div',
})

</script>

<style scoped lang="scss">
.button-row {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: var(--card-padding);
}
</style>
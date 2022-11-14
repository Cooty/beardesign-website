<template>
    <component :is="props.as" :class="typoClassName">
        <slot />
    </component>
</template>

<script setup lang="ts">
type AllowedTags = 'div' | 'p'
const props = withDefaults(defineProps<{
    as?: AllowedTags
}>(), { as: 'p' })
const typoClassName = computed(() => props.as !== 'p' ? 'p lead' : 'lead')
</script>

<style scoped>
.lead {
    font-size: 1.4rem;
    line-height: 1.3;
}
</style>
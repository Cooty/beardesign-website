<template>
    <component :is="props.as" class="card">
        <nuxt-link v-if="props.href" :to="props.href" class="ard-anchor" />
    </component>
</template>

<script setup lang="ts">
type AllowedTags = 'div' | 'article'
const props = withDefaults(defineProps<{
    as?: AllowedTags
    href?: string,
    external?: never
}>(), {
    as: 'article'
})
</script>

<style lang="sass" scoped>

</style>
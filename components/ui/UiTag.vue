<template>
    <component v-if="props.as !== 'a'" :is="props.as" class="tag" :class="`tag-${props.type}`">
        #{{ props.text }}
    </component>
    <NuxtLink v-else class="tag" :class="`tag-${props.type}`">
        #{{ props.text }}
    </NuxtLink>
</template>

<script setup lang="ts">
type AllowedTags = 'span' | 'a'

const props = withDefaults(defineProps<{
    as?: AllowedTags,
    text: string,
    type?: string
}>(), {
    as: 'a',
})
</script>

<style scoped lang="scss">
.tag {
    --padding: #{$gutter-base};

    @media screen and (min-width: $lg) {
        --padding: #{$gutter-base * 2};
    }

    display: inline-block;
    padding: var(--padding);
    border-radius: $default-radius;
    font-family: $header-font-stack;
    font-size: 0.8rem;
    background: var(--bd-theme-tag-default-bg);

    &-react {
        background-color: #232730;
        color: #1b9eca;
    }
}
</style>
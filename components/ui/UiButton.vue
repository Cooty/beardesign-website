<template>
    <component v-if="props.as !== 'a'" :is="props.as" class="btn" :class="settingClasses">
        <slot />
    </component>
    <NuxtLink v-else class="btn" :class="settingClasses">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
type AllowedTags = 'button' | 'a'
type Sizes = 'm' | 'l'
type Backgrounds = 'white'
const props = withDefaults(defineProps<{
    as?: AllowedTags
    size?: Sizes
    bg?: Backgrounds
}>(), {
    as: 'button',
    size: 'm'
})

const settingClasses = computed(() => {
    return `${props.size ? props.size : ''} ${props.bg ? props.bg : ''}`
})
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    border: 0;
    appearance: none;
    font-family: $header-font-stack;
    font-weight: 500;
    border-radius: $default-radius;
    color: $almost-white;
    width: auto;
    background: linear-gradient(45deg,
        #{$sky-blue},
        #{$sea-blue});
    box-shadow: 0 2px 8px rgba(0, 0, 0, .3);
    text-shadow: 1px 1px rgba(0, 0, 0, .2);
    transition: all #{$default-transition-duration} #{$default-easing};
    text-align: center;
    cursor: pointer;

    &:hover,
    &:focus {
        transform: translate3d(0, -3px, 0);
        background: linear-gradient(45deg,
            #{$sea-blue},
            #{$sky-blue});
    }
}

.white {
    color: $sky-blue;
    text-shadow: none;

    &,
    &:hover,
    &:focus {
        background: white;
    }
}

.m {
    font-size: 1rem;
    padding: $gutter-base * 2 $gutter-base * 3;
}

.l {
    font-size: 1.4rem;
    padding: $gutter-base * 2 $gutter-base * 8;
}
</style>
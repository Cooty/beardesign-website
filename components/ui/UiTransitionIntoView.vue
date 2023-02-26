<template>
    <div class="transition" :class="props.animation" v-transition>
        <slot />
    </div>
</template>

<script lang="ts" setup>
type AnimationClassNames = 'fade-in-and-move-up'

const props = withDefaults(defineProps<{
    animation?: AnimationClassNames,
    delay?: string
}>(), {
    animation: 'fade-in-and-move-up',
    delay: '0.5s'
})

const { delay } = props;
</script>

<style scoped lang="scss">
.transition {
    transition: all $default-transition-duration $default-easing;
}

.fade-in-and-move-up {
    opacity: 0;
    transform: translate3d(0, 0.8rem, 0);
    transition-delay: v-bind(delay);

    &.entered {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    @media (prefers-reduced-motion) {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
</style>
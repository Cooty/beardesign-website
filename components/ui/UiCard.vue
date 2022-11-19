<template>
    <component :is="props.as" class="card" :class="fullHeightClassName" :tabindex="props.href ? 0 : null">
        <header v-if="slots.header" class="card-header">
            <slot name="header" />
        </header>
        <div class="card-body">
            <slot />
        </div>
        <footer v-if="slots.footer" class="card-footer">
            <slot name="footer" />
        </footer>
        <nuxt-link v-if="props.href" :to="props.href" class="card-anchor" />
    </component>
</template>

<script setup lang="ts">
type AllowedTags = 'div' | 'article'
const props = withDefaults(defineProps<{
    as?: AllowedTags
    href?: string,
    external?: boolean,
    fullHeight?: boolean,
}>(), {
    as: 'article',
    external: false,
    fullHeight: false
})

const slots = useSlots()

const fullHeightClassName = computed(() => props.fullHeight ? 'card-full-height' : '')
</script>

<style lang="scss" scoped>
@use "sass:math";

.card {
    --padding: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: $default-radius;
    background-color: var(--bd-theme-card-bg);
    max-width: 400px;
    display: flex;
    width: 100%;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: all #{$default-transition-duration} #{$default-easing};

    &-body {
        flex: 1;
        padding: var(--padding);

        :where(h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) {
            margin-top: 0;
        }
    }

    &-header {
        height: 0;
        overflow: hidden;
        padding-top: #{math.div(9, 16) * 100}#{'%'};
        border-radius: $default-radius;
        position: relative;

        :deep(>*) {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        :where(img, video, iframe, svg) {
            max-width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
        }

    }

    &[tabindex="0"] {

        &:hover,
        &:focus {
            transform: translate3d(0, -3px, 0);
        }
    }

    &-full-height {
        height: 100%;
    }

    &-footer {
        padding: var(--padding);
    }

    &-anchor {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
</style>
<template>
    <component v-if="props.as !== 'a'" :is="props.as" class="tag" :class="`tag-${props.type}`">
        #{{ props.text }}
    </component>
    <NuxtLink v-else class="tag" :class="`tag-${props.type} tag-link`" :to="to">
        #{{ props.text }}
    </NuxtLink>
</template>

<script setup lang="ts">
type AllowedTags = 'span' | 'a'

const props = withDefaults(defineProps<{
    as?: AllowedTags,
    text: string,
    type?: string,
    to?: string,
}>(), {
    as: 'a',
})
</script>

<style scoped lang="scss">
.tag {
    --bd-tag-padding: #{$gutter-base};
    --bd-react-background-color: #{$react-blue};
    --bd-react-text-color: #{$react-dark-blue};
    --bd-vue-background-color: #{$vue-green};
    --bd-vue-text-color: #{$vue-dark-green};
    --bd-php-background-color: #{$php-purple};
    --bd-php-text-color: #{$php-white};
    --bd-javascript-background-color: #{$javascript-yellow};
    --bd-javascript-text-color: #{$javascript-dark-grey};
    --bd-typescript-background-color: #{$typescript-blue};
    --bd-typescript-text-color: #{$typescript-white};
    --bd-symfony-background-color: #{$symfony-black};
    --bd-symfony-text-color: #{$symfony-white};
    --bd-leafletjs-background-color: #{$leafletjs-green};
    --bd-leafletjs-text-color: #{$leafletjs-grey};
    --bd-nodejs-background-color: #{$nodejs-green};
    --bd-nodejs-text-color: #{$nodejs-grey};

    .dark & {
        --bd-leafletjs-background-color: #{$leafletjs-grey};
        --bd-leafletjs-text-color: #{$leafletjs-green};
        --bd-symfony-background-color: #{$symfony-white};
        --bd-symfony-text-color: #{$symfony-black};
    }

    @media screen and (min-width: $lg) {
        --padding: #{$gutter-base * 2};
    }

    display: inline-block;
    padding: var(--bd-tag-padding);
    border-radius: $default-radius;
    font-family: $header-font-stack;
    font-size: 0.8rem;
    background: var(--bd-theme-tag-default-bg);
    color: var(--bd-theme-text-color);

    &-link {

        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }

    &-react {
        background-color: var(--bd-react-background-color);
        color: var(--bd-react-text-color);
    }

    &-vue {
        background-color: var(--bd-vue-background-color);
        color: var(--bd-vue-text-color);
    }

    &-php {
        background-color: var(--bd-php-background-color);
        color: var(--bd-php-text-color);
    }

    &-javascript {
        background-color: var(--bd-javascript-background-color);
        color: var(--bd-javascript-text-color);
    }

    &-typescript {
        background-color: var(--bd-typescript-background-color);
        color: var(--bd-typescript-text-color);
    }

    &-symfony {
        background-color: var(--bd-symfony-background-color);
        color: var(--bd-symfony-text-color);
    }

    &-leafletjs {
        background-color: var(--bd-leafletjs-background-color);
        color: var(--bd-leafletjs-text-color);
    }

    &-nodejs {
        background-color: var(--bd-nodejs-background-color);
        color: var(--bd-nodejs-text-color);
    }
}
</style>
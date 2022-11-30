<template>
    <CarouselCard>
        <header class="header">
            <img :src="$props.image" :alt="props.name" class="img" />
            <div class="meta">
                <template v-if="!props.link">
                    {{ props.name }}
                </template>
                <NuxtLink v-else :to="props.link" target="_blank" class="no-visited">
                    {{ props.name }}&nbsp;
                </NuxtLink>
                <span class="org" v-if="props.organization">
                    @&nbsp;{{ props.organization }}
                </span>
            </div>
        </header>
        <p class="em">
            {{ text }}
        </p>
    </CarouselCard>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string,
    image: string,
    title: string,
    text: string,
    link?: string,
    organization?: string,
}>()
</script>

<style scoped lang="scss">
.header {
    --img-width: 60px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--bd-theme-card-separator-color);
    padding-bottom: var(--card-padding);
    margin-bottom: var(--card-padding);
    font-family: $header-font-stack;

    & .meta {
        margin-left: $gutter-base * 2;

        a {
            font-size: 1.2rem;
            font-weight: 500;
        }

    }

    & .img {
        display: block;
        flex: 0;
        width: var(--img-width);
        border-radius: 100%;
    }
}

.org {
    display: block;
    color: var(--bd-theme-card-secondary-text-color);

    @media screen and (min-width: $xl) {
        display: inline;
    }
}
</style>
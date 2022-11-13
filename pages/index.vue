<template>
    <LayoutMain>
        <UiSection id="about">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h1>About me</h1>
            </UiWrapper>
        </UiSection>
        <UiSection id="work">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h2 class="h1">Things's I've made</h2>
            </UiWrapper>
        </UiSection>
        <UiSection id="blog">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h2 class="h1">Things I write about</h2>
            </UiWrapper>
        </UiSection>
        <UiSection id="referrals">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h2 class="h1">Some nice things people said about me</h2>
                <h3 class="h2">Organizations who I worked with</h3>
            </UiWrapper>
        </UiSection>
    </LayoutMain>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('home', 'meta').find());

useHead({
    title: data.value[0].title,
    htmlAttrs: () => ({
        class: 'bd-page-home'
    }),
})
</script>

<style lang="scss">
.bd-page-home {
    scroll-snap-type: y mandatory;
}

.bd-home-page-full-height {
    min-height: calc(100vh - #{$v-gutter * 4});
    display: flex;
    flex-direction: column;
}
</style>
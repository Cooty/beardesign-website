<template>
    <LayoutMain>
        <UiSection class="bd-home-page-bg-about" id="about">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h1>About me</h1>
            </UiWrapper>
        </UiSection>
        <UiSection class="bd-home-page-bg-work" id="work">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h2 class="h1">Things's I've made</h2>
            </UiWrapper>
        </UiSection>
        <UiSection class="bd-home-page-bg-blog" id="blog">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h2 class="h1">Things I write about</h2>
            </UiWrapper>
        </UiSection>
        <UiSection class="bd-home-page-bg-referrals" id="referrals">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <h2 class="h1">Some nice things people said about me</h2>
                <h3 class="h2">Organizations who I worked with</h3>
            </UiWrapper>
        </UiSection>
    </LayoutMain>
</template>

<script lang="ts" setup>
useHead({
    title: 'Tamás Kuti',
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

.bd-home-page-bg-about {
    background: var(--bd-about-gradient);
}

.bd-home-page-bg-work {
    background: var(--bd-work-gradient);
}

.bd-home-page-bg-blog {
    background: var(--bd-blog-gradient);
}

.bd-home-page-bg-referrals {
    background: var(--bd-referrals-gradient);
}
</style>
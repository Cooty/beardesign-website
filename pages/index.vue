<template>
    <LayoutMain>
        <UiSection id="about">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle sectionName="about">About me</UiTitle>
            </UiWrapper>
        </UiSection>
        <UiSection id="work">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="work">Things's I've made</UiTitle>
            </UiWrapper>
        </UiSection>
        <UiSection id="blog">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="blog">Things I write about</UiTitle>
            </UiWrapper>
        </UiSection>
        <UiSection id="referrals">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="referrals">Some nice things people said about me
                </UiTitle>
                <UiTitle :priority="2">Organizations who I worked with</UiTitle>
            </UiWrapper>
        </UiSection>
    </LayoutMain>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('home', 'meta').findOne());

useHead({
    title: data.value.title,
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
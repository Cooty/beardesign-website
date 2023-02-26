<template>
    <UiSection id="about" class="gradient-bg">
        <UiWrapper as="article" class="bd-home-page-full-height bd-home-page-full-height--centered">
            <UiTransitionIntoView delay="0">
                <UiTitle style="color: white;">
                    {{ about?.title }}
                </UiTitle>
            </UiTransitionIntoView>

            <UiTransitionIntoView delay="0.3s">
                <UiLead class="bd-home-page-lead bd-mw-800" style="color: white;">
                    {{ about?.description }}
                </UiLead>
            </UiTransitionIntoView>

            <UiTransitionIntoView delay="0.6s">
                <UiButton as="a" size="l" to="/about" bg="white">
                    {{ about?.body.children[2].children[0].value }}
                </UiButton>
            </UiTransitionIntoView>
        </UiWrapper>
    </UiSection>
</template>

<script setup lang="ts">
const { data: about } = await useAsyncData('homeAbout', () => queryContent('home', '_about').findOne())
</script>

<style lang="scss" scoped>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.gradient-bg {
    background: linear-gradient(45deg, #{$purple}, #{$sky-blue}, #{$orange}, #{$redish-brown});
    background-size: 300% 300%;
    animation: gradient 8s ease infinite;
    height: 100vh;
}
</style>
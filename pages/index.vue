<template>
    <div>
        <UiSection style="background: red;" id="about">
            <h1>About me</h1>
        </UiSection>
        <UiSection style="background: yellow;" id="work">
            <h2 class="h1">Things's I've made</h2>
        </UiSection>
        <UiSection style="background: cornflowerblue;" id="blog">
            <h2 class="h1">Things I write about</h2>
        </UiSection>
        <UiSection style="background: coral;" id="referrals">
            <h2 class="h1">Some nice things people said about me</h2>
            <h3 class="h2">Organizations who I worked with</h3>
        </UiSection>
    </div>
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
</style>
<template>
    <LayoutMain>
        <HomeAbout />
        <HomeWork />
        <HomeBlog />
        <HomeReferrals />
    </LayoutMain>
</template>

<script lang="ts" setup>
const { data: meta } = await useAsyncData('home', () => queryContent('home', '_meta').findOne())

useHead({
    title: meta?.value?.title,
})
</script>

<style lang="scss">
.bd-home-page {

    &-full-height {
        min-height: calc(100vh - #{$v-gutter * 4});
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &-full-height--centered {
        justify-content: center;
    }

    &-lead {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
}
</style>
<template>
    <header class="header">
        <a href="#main-content" class="sr-only">Skip to main content</a>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/work">Work</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
    </header>
</template>

<script lang="ts">
export default {
    name: 'LayoutHeader'
}
</script>

<style lang="scss" scoped>
.header {
    outline: 1px solid blue;
    scroll-snap-align: start;
}
</style>
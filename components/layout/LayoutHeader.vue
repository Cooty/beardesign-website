<template>
    <header class="header">
        <a href="#main-content" class="sr-only">Skip to main content</a>
        Header goes here!
        <NuxtLink to="/">Home</NuxtLink>
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
}
</style>
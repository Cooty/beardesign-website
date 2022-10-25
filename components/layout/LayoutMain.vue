<template>
    <main class="main" id="main-content">
        <slot />
    </main>
</template>

<script lang="ts">
export default {
    name: 'LayoutMain'
}
</script>

<style lang="scss" scoped>
.main {
    outline: 1px solid salmon;
}
</style>
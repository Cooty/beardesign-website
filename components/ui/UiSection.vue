<template>
    <section class="section">
        <slot />
    </section>
</template>

<script lang="ts">
export default {
    name: 'UiSection'
}
</script>

<style scoped lang="scss">
.section {
    min-height: 100vh;
    padding-top: $v-gutter * 2;
    padding-bottom: $v-gutter * 2;
    scroll-snap-align: start;
}
</style>
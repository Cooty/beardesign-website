<template>
    <ul class="logo-grid">
        <slot />
    </ul>
</template>

<style scoped lang="scss">
.logo-grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: var(--grid-gap);
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
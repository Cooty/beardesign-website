<template>
    <li class="grid-item">
        <slot />
    </li>
</template>

<style lang="scss" scoped>
.grid-item {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
}
</style>
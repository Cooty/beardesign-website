<template>
    <ul class="grid">
        <slot />
    </ul>
</template>

<style scoped lang="scss">
.grid {
    list-style: none;
    justify-items: center;
    padding: 0;
    margin: 0;
    display: grid;
    list-style-type: none;
    grid-auto-columns: -webkit-max-content;
    grid-auto-columns: max-content;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;

    @media screen and (min-width: $md) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (min-width: $lg) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media screen and (min-width: $xl) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>
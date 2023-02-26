<template>
    <ul class="card-list">
        <slot />
    </ul>
</template>

<style scoped lang="scss">
.card-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2.5rem;
    margin: 0 auto 0 auto;
    list-style: none;
    padding: 0;
}
</style>
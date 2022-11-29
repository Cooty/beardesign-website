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
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    margin: 0;
    list-style: none;
}
</style>
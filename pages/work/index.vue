<template>
    <div>
        <h1>
            This here is the Portfolio's index page
        </h1>
        <ol>
            <li>
                <NuxtLink to="/work/takenaka-access-control">Access Control system for a major construction company
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/work/takenaka-worker-db">Health and safety compliance system for a major construction
                    company</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/work/k-monitor-agrar">EU agricultural funds tracker for anti-corruption NGO</NuxtLink>
            </li>
        </ol>
    </div>
</template>

<script setup>
useHead({
    title: 'Portfolio',
    meta: [
        { name: 'description', content: 'A collection of websites and applications that I\'ve worked on.' }
    ]
})
</script>

<style lang="scss" scoped>

</style>
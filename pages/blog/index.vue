<template>
    <LayoutMain>
        <h1>
            This here is the Blog's index page
        </h1>
        <ol>
            <li>
                <NuxtLink to="/blog/first-post">First post</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog/second-post">Second post</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog/third-post">Third post</NuxtLink>
            </li>
        </ol>
    </LayoutMain>
</template>

<script setup>
useHead({
    title: 'Blog',
    meta: [
        { name: 'description', content: 'This is where I write about web development, technology, JavaScript and other schenanigans' }
    ]
})
</script>

<style lang="scss" scoped>

</style>
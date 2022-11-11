<template>
    <LayoutMain>
        <h1>
            This here is a blog post
        </h1>
        <p>
            The slug is: <code>{{ slug }}</code>
        </p>
    </LayoutMain>
</template>

<script setup lang="ts">
const slug = ref<string>('')
const route = useRoute()

slug.value = route.params.slug as string

useHead({
    title: slug,
    meta: [
        { name: 'description', content: 'Some description from the DB' }
    ]
})
</script>

<style lang="scss" scoped>

</style>
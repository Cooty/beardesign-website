<template>
    <div>
        <h1>
            This here is a portfolio item
        </h1>
        <p>
            The slug is: <code>{{ slug }}</code>
        </p>
    </div>
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
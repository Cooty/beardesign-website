<template>
    <div>
        <h1>
            This here is a blog post
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
</script>

<style lang="scss" scoped>

</style>
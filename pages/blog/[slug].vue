<template>
    <LayoutMain>
        <UiWrapper as="article" class="content-section" narrow>
            <UiTitle :priority="1" sectionName="blog">
                This here is a blog post
            </UiTitle>
            <div class="content">
                <p>
                    The slug is: <code>{{ slug }}</code>
                </p>
            </div>
        </UiWrapper>
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
@import "@/assets/styles/content-section";
</style>
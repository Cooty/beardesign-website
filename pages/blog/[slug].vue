<template>
    <LayoutMain>
        <BlogHeroImage xs-image-url="https://picsum.photos/id/16/768/432"
            md-image-url="https://picsum.photos/id/16/1000/500" background-image-url="https://picsum.photos/id/16/200/113"
            alt="" />
        <UiWrapper as="article" narrow>
            <ui-content-section>
                <UiTitle :priority="1" sectionName="blog">
                    This here is a blog post
                </UiTitle>
                <UiPostMeta>
                    <BlogPostDate datetime="2018-07-07T20:00:00" formatted-date="July 7th 2018" />
                </UiPostMeta>
                <ui-content>
                    <p>
                        The slug is: <code>{{ slug }}</code>
                    </p>
                </ui-content>
                <UiTags class="bd-mt-2">
                    <UiTag v-for="tag in DUMMY_TAGS" :key="tag.name" :text="tag.name" :type="tag.slug" as="a"
                        :to="`/blog/tag/${tag.slug}`" />
                </UiTags>
            </ui-content-section>
        </UiWrapper>
    </LayoutMain>
</template>

<script setup lang="ts">
const slug = ref<string>('')
const route = useRoute()

slug.value = route.params.slug as string

const DUMMY_TAGS = [
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Symfony', slug: 'symfony' },
    { name: 'Leaflet.js', slug: 'leafletjs' },
    { name: 'React', slug: 'react' },
    { name: 'PHP', slug: 'php' },
    { name: 'Vue', slug: 'vue' },
    { name: 'Node.js', slug: 'nodejs' },
]

useHead({
    title: slug,
    meta: [
        { name: 'description', content: 'Some description from the DB' }
    ]
})
</script>
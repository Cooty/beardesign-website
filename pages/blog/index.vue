<template>
    <layout-main>
        <ui-wrapper as="article" narrow>
            <ui-content-section>
                <ui-title :priority="1" sectionName="blog">
                    {{ blog?.title }}
                </ui-title>

                <ui-card-list v-if="!pending && !error && blogPosts?.length">
                    <ui-card-list-item v-for="blogPost in blogPosts" :key="blogPost.id" :href="`/blog/${blogPost.slug}`"
                        :class="!blogPost.image || !blogPost.image.src ? 'no-image' : undefined" :title="blogPost.title">
                        <template v-if="blogPost.image && blogPost.image.src" #header>
                            <img :src="`${blogPost.image.src}?w=300&h=225`"
                                :alt="blogPost.image.alt ? blogPost.image.alt : blogPost.title" />
                        </template>
                        <ui-title :priority="2" :appearance="6">
                            <nuxt-link :to="`/blog/${blogPost.slug}`" class="no-visited">
                                {{ blogPost.title }}
                            </nuxt-link>
                        </ui-title>
                        <p v-if="blogPost.excerpt" class="small">
                            {{ blogPost.excerpt }}
                        </p>
                        <template v-if="blogPost.tags && blogPost.tags.length" #footer>
                            <ui-tags>
                                <UiTag v-for="tag in blogPost.tags" :key="tag.name" :text="tag.name" :type="tag.slug"
                                    as="span" />
                            </ui-tags>
                        </template>
                    </ui-card-list-item>
                </ui-card-list>
            </ui-content-section>
        </ui-wrapper>
    </layout-main>
</template>

<script setup lang="ts">
const { data: blog } = await useAsyncData('blogIndex', () => queryContent('_blog').findOne())

useHead({
    title: blog?.value?.title,
    meta: [
        { name: 'description', content: blog?.value?.description }
    ]
})

// TODO: Add pagination to API call and to the UI
const { data: blogPosts, pending, error } = await useFetch('/api/blog')
</script>

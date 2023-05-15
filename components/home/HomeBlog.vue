<template>
    <ui-section id="blog">
        <ui-wrapper as="article" class="bd-home-page-full-height" narrow>
            <ui-title :priority="2" :appearance="1" sectionName="blog">{{ blog?.title }}</ui-title>
            <ui-card-list v-if="!pending && !error && blogPosts?.length">
                <ui-card-list-item v-for="blogPost in blogPosts" :key="blogPost.id" :href="`/blog/${blogPost.slug}`"
                    :class="!blogPost.image || !blogPost.image.src ? 'no-image' : undefined" :title="blogPost.title">
                    <template v-if="blogPost.image && blogPost.image.src" #header>
                        <img :src="`${blogPost.image.src}?w=300&h=225`"
                            :alt="blogPost.image.alt ? blogPost.image.alt : blogPost.title" />
                    </template>
                    <ui-title :priority="3" :appearance="6">
                        <nuxt-link :to="`/blog/${blogPost.slug}`" class="no-visited">
                            {{ blogPost.title }}
                        </nuxt-link>
                    </ui-title>
                    <p v-if="blogPost.excerpt" class="small">
                        {{ blogPost.excerpt }}
                    </p>
                    <template v-if="blogPost.tags && blogPost.tags.length" #footer>
                        <UiTags>
                            <UiTag v-for="tag in blogPost.tags" :key="tag.name" :text="tag.name" :type="tag.slug"
                                as="span" />
                        </UiTags>
                    </template>
                </ui-card-list-item>
                <ui-button-row as="li">
                    <ui-button as="a" size="l" to="/blog">
                        {{ blog?.description }}
                    </ui-button>
                </ui-button-row>
            </ui-card-list>
        </ui-wrapper>
    </ui-section>
</template>

<script setup lang="ts">
const { data: blog } = await useAsyncData('homeBlog', () => queryContent('blog', '_home-teaser').findOne())
const { data: blogPosts, pending, error } = await useFetch('/api/blog?to=3')
</script>
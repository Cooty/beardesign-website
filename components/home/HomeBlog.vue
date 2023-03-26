<template>
    <UiSection id="blog">
        <UiWrapper as="article" class="bd-home-page-full-height" narrow>
            <UiTitle :priority="2" :appearance="1" sectionName="blog">{{ blog?.title }}</UiTitle>
            <UiCardList v-if="DUMMY_BLOG_POSTS && DUMMY_BLOG_POSTS.length">
                <UiCardListItem v-for="blogPost in DUMMY_BLOG_POSTS" :key="blogPost.id" :href="`/blog/${blogPost.slug}`"
                    :class="!blogPost.image ? 'no-image' : undefined" :title="blogPost.title">
                    <template v-if="blogPost.image" #header>
                        <img :src="blogPost.image" :alt="blogPost.title" />
                    </template>
                    <UiTitle :priority="3" :appearance="6">
                        <NuxtLink :to="`/blog/${blogPost.slug}`" class="no-visited">
                            {{ blogPost.title }}
                        </NuxtLink>
                    </UiTitle>
                    <p class="small">
                        {{ blogPost.description }}
                    </p>
                    <template v-if="blogPost.tags && blogPost.tags.length" #footer>
                        <UiTags>
                            <UiTag v-for="tag in blogPost.tags" :key="tag.name" :text="tag.name" :type="tag.slug"
                                as="span" />
                        </UiTags>
                    </template>
                </UiCardListItem>
                <UiButtonRow as="li">
                    <UiButton as="a" size="l" to="/blog">
                        {{ blog?.description }}
                    </UiButton>
                </UiButtonRow>
            </UiCardList>
        </UiWrapper>
    </UiSection>
</template>

<script setup lang="ts">
const { data: blog } = await useAsyncData('homeBlog', () => queryContent('blog', '_home-teaser').findOne())

const DUMMY_BLOG_POSTS = [
    {
        id: 'b1',
        title: 'My first blog post',
        slug: 'my-first-blog',
        image: 'https://via.placeholder.com/300x225',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'JavaScript', slug: 'javascript' },
            { name: 'Python', slug: 'python' },
        ]
    },
    {
        id: 'b2',
        title: 'My second blog post',
        slug: 'my-second-blog',
        image: 'https://via.placeholder.com/300x225',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'JavaScript', slug: 'javascript' },
            { name: 'Python', slug: 'python' },
            { name: 'Java', slug: 'java' },
        ]
    },
    {
        id: 'b3',
        title: 'My third blog post has no image',
        slug: 'my-third-blog',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'CSS', slug: 'css' },
            { name: 'Accessibility', slug: 'accessibility' },
        ]
    },
    {
        id: 'b4',
        title: 'My fourth blog post',
        slug: 'my-fourth-blog',
        image: 'https://via.placeholder.com/300x225',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'HTML', slug: 'html' },
            { name: 'Node.js', slug: 'node-js' },
        ]
    }
]
</script>
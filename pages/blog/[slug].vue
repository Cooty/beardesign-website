<template>
    <layout-main>
        <template v-if="!pending && !error">
            <blog-hero-image v-if="blogPost[0].image && blogPost[0].image.src"
                :xs-image-url="`${blogPost[0].image.src}?w=768&h=432&fit=max`"
                :md-image-url="`${blogPost[0].image.src}?w=1000&h=500&fit=max`"
                :background-image-url="blogPost[0].image.lqip" :alt="blogPost[0].image.alt || blogPost[0].title" />
            <ui-wrapper as="article" narrow>
                <ui-content-section>
                    <ui-title :priority="1" sectionName="blog" class="main-title">
                        {{ blogPost[0].title }}
                    </ui-title>
                    <ui-post-meta>
                        <blog-post-date :datetime="blogPost[0].publicationDate"
                            :formatted-date="formattedPublicationDate" />
                    </ui-post-meta>
                    <ui-tags class="bd-mb-2" v-if="blogPost[0].tags">
                        <ui-tag v-for="tag in blogPost[0].tags" :key="tag.name" :text="tag.name" :type="tag.slug" as="a"
                            :to="`/blog/tag/${tag.slug}`" />
                    </ui-tags>
                    <ui-content>
                        <sanity-blocks :blocks="blocks" :serializers="serializers" />
                    </ui-content>
                </ui-content-section>
            </ui-wrapper>
        </template>
    </layout-main>
</template>

<script setup lang="ts">
import { SanityBlocks } from 'sanity-blocks-vue-component'
import { Serializers } from 'sanity-blocks-vue-component/dist/types'
import Embed from '~~/components/blocks/Embed.vue'
import CodeBlock from '~~/components/blocks/CodeBlock.vue'

const slug = ref<string>('')
const route = useRoute()

slug.value = route.params.slug as string

const { data: blogPost, pending, error } = await useFetch(`/api/blog/${slug.value}`)
const blocks = blogPost.value[0].content
const formattedPublicationDate = computed(() => {
    const date = new Date(blogPost.value[0].publicationDate)
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    return dateTimeFormat.format(date)
})

const serializers = {
    types: {
        embed: Embed,
        codeBlock: CodeBlock
    },
    styles: {
        blockquote: 'blockquote',
    },
    marks: {
        code: 'code'
    }
} as unknown as Partial<Serializers>

useHead({
    title: blogPost.value[0].title,
    meta: [
        { name: 'description', content: blogPost.value[0].excerpt }
    ]
})
</script>
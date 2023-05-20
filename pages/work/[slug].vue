<template>
    <layout-main>
        <ui-wrapper as="article" class="content-section" narrow>
            <ui-content-section>
                <template v-if="!error && !pending && data && data[0]">
                    <ui-title :priority="1" section-name="work" class="main-title">
                        {{ data[0].title }}
                    </ui-title>
                    <ui-tags v-if="data[0].tags && data[0].tags.length" class="bd-mb-2">
                        <ui-tag v-for="tag in data[0].tags" :key="tag.name" :text="tag.name" :type="tag.slug" as="span" />
                    </ui-tags>
                    <div v-if="data[0].websiteLink || data[0].articleLink || data[0].repositoryLink"
                        class="link-container bd-mb-2">
                        <nuxt-link v-if="data[0].websiteLink" :to="data[0].websiteLink" target="_blank">
                            <ui-icon-wrapper size="s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                                    <path
                                        d="M480 976q-84 0-157-31.5T196 859q-54-54-85-127.5T80 574q0-84 31-156.5T196 291q54-54 127-84.5T480 176q84 0 157 30.5T764 291q54 54 85 126.5T880 574q0 84-31 157.5T764 859q-54 54-127 85.5T480 976Zm0-58q35-36 58.5-82.5T577 725H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395 906Zm171-1q72-23 129.5-69T788 725H639q-13 54-30.5 98T566 905ZM152 665h159q-3-27-3.5-48.5T307 574q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152 665Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820 574q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648 665Zm-10-239h150q-33-69-90.5-115T565 246q25 37 42.5 80T638 426Zm-254 0h194q-11-53-37-102.5T480 236q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z" />
                                </svg>
                            </ui-icon-wrapper>
                            Website
                        </nuxt-link>
                        <nuxt-link v-if="data[0].repositoryLink" :to="data[0].repositoryLink" target="_blank">
                            <ui-icon-wrapper size="s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z" />
                                </svg>
                            </ui-icon-wrapper>
                            Code repository
                        </nuxt-link>
                        <nuxt-link v-if="data[0].articleLink" :to="data[0].articleLink" target="_blank">
                            <ui-icon-wrapper size="s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                                </svg>
                            </ui-icon-wrapper>
                            Case study
                        </nuxt-link>
                    </div>
                    <template v-if="data[0].technologies">
                        <ui-transition-into-view>
                            <ui-title :priority="3" section-name="work" class="bd-text-center">
                                Technologies used in the project
                            </ui-title>
                        </ui-transition-into-view>
                        <ui-transition-into-view>
                            <logo-grid class="bd-mb-2">
                                <carousel-item-card-logo v-for="tech in data[0].technologies" :key="tech.id"
                                    :name="tech.name" :image="tech.logo.src" :image-width="tech.logo.width"
                                    :image-height="tech.logo.height" :link="tech.website" />
                            </logo-grid>
                        </ui-transition-into-view>
                    </template>
                    <template v-if="blocks">
                        <ui-transition-into-view>
                            <ui-content>
                                <sanity-blocks :blocks="blocks" :serializers="serializers" />
                            </ui-content>
                        </ui-transition-into-view>
                    </template>
                </template>
            </ui-content-section>
        </ui-wrapper>
    </layout-main>
</template>

<script setup lang="ts">
import { SanityBlocks } from 'sanity-blocks-vue-component'
import serializers from '~~/components/blocks/block-serializers'
const slug = ref<string>('')
const route = useRoute()

slug.value = route.params.slug as string
const { data, pending, error } = await useFetch(`/api/portfolio-item/${slug.value}`)
const blocks = data.value[0].description

useHead({
    title: `${data.value[0].title}`,
    meta: [
        { name: 'description', content: data.value[0].metaDescription || '' }
    ]
})
</script>

<style lang="scss" scoped>
.link-container {
    margin-top: -1rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    font-family: $header-font-stack;

    a {
        display: inline-flex;
        align-items: center;
        gap: $gutter-base;
        color: var(--bd-theme-secondary-text-color);
        text-decoration: underline;

        &:hover,
        &:focus {
            text-decoration: none;
        }

    }
}
</style>
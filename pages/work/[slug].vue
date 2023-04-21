<template>
    <layout-main>
        <ui-wrapper as="article" class="content-section" narrow>
            <ui-content-section>
                <template v-if="!error && !pending && data && data[0]">
                    <ui-title :priority="1" section-name="work">
                        {{ data[0].title }}
                    </ui-title>
                    <ui-tags v-if="data[0].tags && data[0].tags.length" class="bd-mb-2">
                        <ui-tag v-for="tag in data[0].tags" :key="tag.name" :text="tag.name" :type="tag.slug" as="span" />
                    </ui-tags>
                    <div v-if="blocks" class="content">
                        <sanity-blocks :blocks="blocks" />
                    </div>
                    <template v-if="data[0].technologies">
                        <ui-transition-into-view>
                            <ui-title :priority="3" section-name="work" class="bd-text-center">
                                Technologies used in the project
                            </ui-title>
                        </ui-transition-into-view>
                        <ui-transition-into-view>
                            <logo-grid>
                                <carousel-item-card-logo v-for="tech in data[0].technologies" :key="tech.id"
                                    :name="tech.name" :image="tech.logo.src" :image-width="tech.logo.width"
                                    :image-height="tech.logo.height" :link="tech.website" />
                            </logo-grid>
                        </ui-transition-into-view>
                    </template>
                </template>
            </ui-content-section>
        </ui-wrapper>
    </layout-main>
</template>

<script setup lang="ts">
import { SanityBlocks } from 'sanity-blocks-vue-component';
const slug = ref<string>('')
const route = useRoute()

slug.value = route.params.slug as string
const { data, pending, error } = await useFetch(`/api/portfolio-item/${slug.value}`)
const blocks = data.value[0].description

useHead({
    title: data.value[0].title,
    meta: [
        { name: 'description', content: 'Some description from the DB' }
    ]
})
</script>
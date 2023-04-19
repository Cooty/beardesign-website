<template>
    <LayoutMain>
        <UiWrapper as="section" class="content-section">
            <UiTitle :priority="1" sectionName="work">
                {{ work?.title }}
            </UiTitle>

            <UiTransitionIntoView>
                <UiGrid>
                    <UiGridItem v-for="workItem in portfolio" :key="workItem.title">
                        <UiCard :href="`/work/${workItem.slug}`" :full-height="true" :title="workItem.title">
                            <template v-if="workItem.image" #header>
                                <img :src="workItem.image" :alt="workItem.title" />
                            </template>
                            <UiTitle :priority="2" :appearance="6">
                                <NuxtLink :to="`/work/${workItem.slug}`" class="no-visited">
                                    {{ workItem.title }}
                                </NuxtLink>
                            </UiTitle>
                            <template v-if="workItem.tags" #footer>
                                <UiTags>
                                    <UiTag v-for="tag in workItem.tags" :key="tag.name" :text="tag.name" :type="tag.slug"
                                        as="span" />
                                </UiTags>
                            </template>
                        </UiCard>
                    </UiGridItem>
                </UiGrid>
            </UiTransitionIntoView>
        </UiWrapper>
    </LayoutMain>
</template>

<script setup lang="ts">
const { data: work } = await useAsyncData('workIndex', () => queryContent('_work').findOne())

useHead({
    title: work?.value?.title,
    meta: [
        { name: 'description', content: work?.value?.description }
    ]
})

// TODO: Add pagination, https://www.sanity.io/docs/paginating-with-groq
const { data: portfolio, pending: pendingPortfolio, error: errorPortfolio } = await useFetch('/api/portfolio-item')

</script>

<style lang="scss" scoped>
@import "@/assets/styles/content-section";
</style>
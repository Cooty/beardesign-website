<template>
    <LayoutMain>
        <UiWrapper as="section">
            <ui-content-section>
                <ui-title :priority="1" sectionName="work" class="main-title">
                    {{ work?.title }}
                </ui-title>

                <UiTransitionIntoView>
                    <UiGrid>
                        <UiGridItem v-for="workItem in portfolio" :key="workItem.title">
                            <UiCard :href="`/work/${workItem.slug}`" :full-height="true" :title="workItem.title">
                                <UiTitle :priority="2" :appearance="6">
                                    <NuxtLink :to="`/work/${workItem.slug}`" class="no-visited">
                                        {{ workItem.title }}
                                    </NuxtLink>
                                </UiTitle>
                                <template v-if="workItem.tags" #footer>
                                    <UiTags>
                                        <UiTag v-for="tag in workItem.tags" :key="tag.name" :text="tag.name"
                                            :type="tag.slug" as="span" />
                                    </UiTags>
                                </template>
                            </UiCard>
                        </UiGridItem>
                    </UiGrid>
                </UiTransitionIntoView>
            </ui-content-section>
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
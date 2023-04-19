<template>
    <UiSection id="work">
        <UiWrapper as="article" class="bd-home-page-full-height">
            <UiTransitionIntoView>
                <UiTitle :priority="2" :appearance="1" sectionName="work">
                    {{ work?.title }}
                </UiTitle>
            </UiTransitionIntoView>

            <UiTransitionIntoView>
                <UiLead class="bd-home-page-lead bd-mw-800">
                    {{ work?.description }}
                </UiLead>
            </UiTransitionIntoView>

            <UiTransitionIntoView>
                <UiGrid>
                    <UiGridItem v-for="workItem in featuredPortfolioItems" :key="workItem.id">
                        <UiCard :href="`/work/${workItem.slug}`" :full-height="true" :title="workItem.title">
                            <template v-if="workItem.image" #header>
                                <img :src="workItem.image" :alt="workItem.title" />
                            </template>
                            <UiTitle :priority="3" :appearance="6">
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
                    <UiGridItem>
                        <UiCard :full-height="true" class="more-card work-more-bg">
                            <UiButton as="a" size="l" to="/work">
                                {{ work?.body.children[2].children[0].value }}
                            </UiButton>
                        </UiCard>
                    </UiGridItem>
                </UiGrid>
            </UiTransitionIntoView>

            <UiTransitionIntoView>
                <h2 class="bd-mw-800 bd-mt-2">
                    {{ work?.body.children[3].children[0].value }}
                </h2>
            </UiTransitionIntoView>

            <technology-carousel />

        </UiWrapper>
    </UiSection>
</template>

<script setup lang="ts">
const { data: work } = await useAsyncData('homeWork', () => queryContent('home', '_work').findOne())
// TODO: Get only the first page, https://www.sanity.io/docs/paginating-with-groq
const { data: portfolio, pending: pendingPortfolio, error: errorPortfolio } = await useFetch('/api/portfolio-item')

const featuredPortfolioItems = computed(() => {
    if (errorPortfolio.value || pendingPortfolio.value || !portfolio.value || !portfolio.value.length) {
        return []
    }

    return portfolio.value.splice(0, 5)
})

</script>

<style lang="scss" scoped>
.more-card :deep(.card-body) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.work-more-bg {
    background: var(--bd-theme-work-bg-color);
}
</style>
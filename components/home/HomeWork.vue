<template>
    <ui-section id="work">
        <ui-wrapper as="article" class="bd-home-page-full-height">
            <ui-transition-into-view>
                <ui-title :priority="2" :appearance="1" sectionName="work">
                    {{ work?.title }}
                </ui-title>
            </ui-transition-into-view>

            <ui-transition-into-view>
                <ui-lead class="bd-home-page-lead bd-mw-800">
                    {{ work?.description }}
                </ui-lead>
            </ui-transition-into-view>

            <ui-transition-into-view>
                <ui-grid>
                    <ui-gridItem v-if="!pendingPortfolio && !errorPortfolio" v-for="portfolioItem in portfolio"
                        :key="portfolioItem.id">
                        <ui-card :href="`/work/${portfolioItem.slug}`" :full-height="true" :title="portfolioItem.title">
                            <ui-title :priority="3" :appearance="6">
                                <nuxt-link :to="`/work/${portfolioItem.slug}`" class="no-visited">
                                    {{ portfolioItem.title }}
                                </nuxt-link>
                            </ui-title>
                            <template v-if="portfolioItem.tags" #footer>
                                <ui-tags>
                                    <ui-tag v-for="tag in portfolioItem.tags" :key="tag.name" :text="tag.name"
                                        :type="tag.slug" as="span" />
                                </ui-tags>
                            </template>
                        </ui-card>
                    </ui-gridItem>
                    <ui-gridItem>
                        <ui-card :full-height="true" class="more-card work-more-bg">
                            <ui-button as="a" size="l" to="/work">
                                {{ work?.body.children[2].children[0].value }}
                            </ui-button>
                        </ui-card>
                    </ui-gridItem>
                </ui-grid>
            </ui-transition-into-view>

            <ui-transition-into-view>
                <h2 class="bd-mw-800 bd-mt-2 bd-mb-1">
                    {{ work?.body.children[3].children[0].value }}
                </h2>
            </ui-transition-into-view>

            <technology-carousel />

        </ui-wrapper>
    </ui-section>
</template>

<script setup lang="ts">
const { data: work } = await useAsyncData('homeWork', () => queryContent('home', '_work').findOne())
// TODO: Get only the first page, https://www.sanity.io/docs/paginating-with-groq
const { data: portfolio, pending: pendingPortfolio, error: errorPortfolio } = await useFetch('/api/portfolio-item?to=5')
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
    background: var(--bd-theme-work-bg-color) !important;
}
</style>
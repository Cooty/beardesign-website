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
                    <UiGridItem v-for="workItem in DUMMY_WORK_ITEMS" :key="workItem.title">
                        <UiCard :href="`/work/${workItem.slug}`" :full-height="true" :title="workItem.title">
                            <template v-if="workItem.image" #header>
                                <img :src="workItem.image" :alt="workItem.title" />
                            </template>
                            <UiTitle :priority="3" :appearance="6">
                                <NuxtLink :to="`/work/${workItem.slug}`" class="no-visited">
                                    {{ workItem.title }}
                                </NuxtLink>
                            </UiTitle>
                            <p class="small">
                                {{ workItem.description }}
                            </p>
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

const DUMMY_WORK_ITEMS = [
    {
        title: 'Some work item #1',
        description: 'Short description for that work item',
        slug: 'some-work-item-1',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'TypeScript', slug: 'type-script' },
            { name: 'Vue.js', slug: 'vue' },
            { name: 'SPA', slug: 'spa' },
        ]
    },
    {
        title: 'Some work item #2',
        description: 'Short description for that work item',
        slug: 'some-work-item-2',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'TypeScript', slug: 'type-script' },
            { name: 'React', slug: 'react' },
            { name: 'SPA', slug: 'spa' },
        ]
    },
    {
        title: 'Some work item #3',
        description: 'Short description for that work item',
        slug: 'some-work-item-3',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'TypeScript', slug: 'type-script' },
            { name: 'vanilla JS', slug: 'vanilla' },
            { name: 'Symfony', slug: 'symfony' },
            { name: 'devOps', slug: 'dev-ops' },
        ]
    },
    {
        title: 'Some work item #4',
        description: 'Short description for that work item',
        slug: 'some-work-item-4',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'vanilla JS', slug: 'vanilla' },
            { name: 'WordPress', slug: 'wordpress' },
            { name: 'SCSS', slug: 'scss' },
        ]
    },
    {
        title: 'Some work item #5',
        description: 'Short description for that work item',
        slug: 'some-work-item-5',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'vanilla JS', slug: 'vanilla' },
            { name: 'WordPress', slug: 'wordpress' },
            { name: 'SCSS', slug: 'scss' },
        ]
    }
]

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
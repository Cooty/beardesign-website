<template>
    <LayoutMain>
        <UiSection id="about">
            <UiWrapper as="article" class="bd-home-page-full-height bd-home-page-full-height--centered">
                <UiTitle sectionName="about">
                    {{ about.title }}
                </UiTitle>
                <UiLead class="bd-hp-lead bd-mw-800">
                    {{ about.description }}
                </UiLead>
                <div>
                    <UiButton as="a" size="l" to="/about">
                        {{ about.body.children[2].children[0].value }}
                    </UiButton>
                </div>
            </UiWrapper>
        </UiSection>
        <UiSection id="work">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="work">
                    {{ work.title }}
                </UiTitle>
                <UiLead class="bd-hp-lead bd-mw-800">
                    {{ work.description }}
                </UiLead>
                <UiGrid>
                    <li class="bd-p-0">1</li>
                    <li class="bd-p-0">2</li>
                    <li class="bd-p-0">3</li>
                    <li class="bd-p-0">4</li>
                </UiGrid>
                <div class="bd-mt-2">
                    <UiButton as="a" size="l" to="/work">
                        {{ work.body.children[2].children[0].value }}
                    </UiButton>
                </div>
            </UiWrapper>
        </UiSection>
        <UiSection id="blog">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="blog">Things I write about</UiTitle>
            </UiWrapper>
        </UiSection>
        <UiSection id="referrals">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="referrals">Some nice things people said about me
                </UiTitle>
                <UiTitle :priority="2">Organizations who I worked with</UiTitle>
            </UiWrapper>
        </UiSection>
    </LayoutMain>
</template>

<script lang="ts" setup>
const { data: meta } = await useAsyncData('home', () => queryContent('home', '_meta').findOne());
const { data: about } = await useAsyncData('homeAbout', () => queryContent('home', '_about').findOne());
const { data: work } = await useAsyncData('homeWork', () => queryContent('home', '_work').findOne());

useHead({
    title: meta.value.title,
    htmlAttrs: () => ({
        class: 'bd-page-home'
    }),
})
</script>

<style lang="scss">
.bd-page-home {
    scroll-snap-type: y mandatory;
}

.bd-home-page-full-height {
    min-height: calc(100vh - #{$v-gutter * 4});
    display: flex;
    flex-direction: column;
}

.bd-home-page-full-height--centered {
    justify-content: center;
}

.bd-hp-lead {
    margin-top: 1rem;
    margin-bottom: 2rem;
}
</style>
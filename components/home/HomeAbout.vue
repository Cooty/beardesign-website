<template>
    <UiSection id="about">
        <UiWrapper as="article" class="bd-home-page-full-height bd-home-page-full-height--centered">
            <UiTitle sectionName="about">
                {{ about?.title }}
            </UiTitle>
            <UiLead class="bd-home-page-lead bd-mw-800">
                {{ about?.description }}
            </UiLead>
            <div>
                <UiButton as="a" size="l" to="/about">
                    {{ about?.body.children[2].children[0].value }}
                </UiButton>
            </div>
        </UiWrapper>
    </UiSection>
</template>

<script setup lang="ts">
const { data: about } = await useAsyncData('homeAbout', () => queryContent('home', '_about').findOne())
</script>
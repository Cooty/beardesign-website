<template>
    <LayoutMain>
        <UiWrapper as="article" class="content-section" narrow>
            <div class="content">
                <ContentDoc />
            </div>
        </UiWrapper>
    </LayoutMain>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/config/breakpoints' as b;
@import "@/assets/styles/content-section";
@import "@/assets/styles/content";

:deep(.content ul) {
    column-count: 2;
    column-gap: 1rem;

    @media screen and (min-width: #{b.$xl}) {
        column-count: 3;
    }
}
</style>

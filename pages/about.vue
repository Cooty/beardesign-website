<template>
    <layout-main>
        <ui-wrapper as="article" narrow>
            <ui-content-section>
                <ui-content class="about">
                    <content-doc />
                </ui-content>
            </ui-content-section>
        </ui-wrapper>
    </layout-main>
</template>

<style lang="scss" scoped>
.about {
    :deep(.profile-image) {
        --size: 180px;
        --gutter: 1rem;
        display: block;
        border-radius: 100%;
        width: var(--size);
        height: var(--size);
        margin: 0 auto var(--gutter) auto;

        @media screen and (min-width: #{$sm}) {
            float: left;
            margin: 0 var(--gutter) 0 0;
        }

        @media screen and (min-width: #{$lg}) {
            --size: 240px;
        }
    }
}
</style>
<template>
    <carousel-card>
        <header class="header">
            <template v-if="!props.link">
                <img v-if="props.image" :src="`${props.image}?w=${imageSize}&h=${imageSize}`" :alt="props.name" class="img"
                    loading="lazy" decoding="async" :width="imageSizeDisplayed" :height="imageSizeDisplayed" />
                <span v-else class="img">
                    <ui-icon-wrapper class="no-image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                            <path
                                d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z" />
                        </svg>
                    </ui-icon-wrapper>
                </span>
            </template>
            <nuxt-link v-else :to="props.link" target="_blank">
                <img v-if="props.image" :src="`${props.image}?w=${imageSize}&h=${imageSize}`" :alt="props.name" class="img"
                    loading="lazy" decoding="async" :width="imageSizeDisplayed" :height="imageSizeDisplayed" />
                <span v-else class="img">
                    <ui-icon-wrapper class="no-image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                            <path
                                d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z" />
                        </svg>
                    </ui-icon-wrapper>
                </span>
            </nuxt-link>
            <div class="meta">
                <template v-if="!props.link">
                    {{ props.name }}&nbsp;
                </template>
                <nuxt-link v-else :to="props.link" target="_blank" class="no-visited">
                    {{ props.name }}&nbsp;
                </nuxt-link>
                <span class="org" v-if="props.organization || props.title">
                    <template v-if="props.organization && props.title">
                        <span class="nowrap">{{ props.title }}</span> <span class="nowrap">@&nbsp;{{ props.organization
                        }}</span>
                    </template>
                    <template v-if="!props.organization && props.title">
                        {{ props.title }}
                    </template>
                </span>
            </div>
        </header>
        <ui-word-cutter class="em" :text="props.text" :max-word-count="maxWordCount" :read-more-text="'read more'"
            @read-more="readMoreHandler" />
        <template v-if="isTextCropped">
            <Teleport to="body">
                <ui-modal :show="showModal" @close="closeModalHandler">
                    <template #body>
                        <p>
                            {{ props.text }}
                        </p>
                    </template>
                    <template #footer>
                        <div :style="{ display: 'flex', justifyContent: 'flex-end', width: '100%' }">
                            <ui-button @click="closeModalHandler">
                                Close
                            </ui-button>
                        </div>
                    </template>
                </ui-modal>
            </Teleport>
        </template>
    </carousel-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string,
    image?: string,
    title?: string,
    text: string,
    link?: string,
    organization?: string,
}>()

const imageSize = 120
const imageSizeDisplayed = imageSize / 2
const maxWordCount = 54
const showModal = ref<boolean>(false)

const isTextCropped = computed(() => props.text.split(" ").length >= maxWordCount)

function readMoreHandler() {
    showModal.value = true
}

function closeModalHandler() {
    showModal.value = false
}
</script>

<style scoped lang="scss">
.header {
    --img-width: 60px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--bd-theme-card-separator-color);
    padding-bottom: var(--card-padding);
    margin-bottom: var(--card-padding);
    font-family: $header-font-stack;

    & .meta {
        margin-left: $gutter-base * 2;

        a {
            font-size: 1.2rem;
            font-weight: 500;
        }

    }

    & .img {
        display: block;
        flex: 0;
        width: var(--img-width);
        border-radius: 100%;
        aspect-ratio: 1 / 1;
        color: var(--bd-theme-card-secondary-text-color);

        > :deep(.no-image) {
            width: var(--img-width);
        }
    }
}

.org {
    display: block;
    color: var(--bd-theme-card-secondary-text-color);
}
</style>
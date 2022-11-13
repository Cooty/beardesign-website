<template>
    <component :is="`h${props.priority}`" :class="[appearanceClassName, props.sectionName]">
        <slot />
    </component>
</template>

<script setup lang="ts">
type Priorities = 1 | 2 | 3 | 4 | 5 | 6
type SectionNames = 'about' | 'work' | 'blog' | 'referrals'

const props = withDefaults(defineProps<{
    priority?: Priorities,
    appearance?: Priorities,
    sectionName?: SectionNames
}>(), { priority: 1 });
const appearanceClassName = computed<string>(
    () => props.appearance ? `h${props.appearance}` : '')
</script>

<style scoped lang="scss">
.about,
.blog,
.work,
.referrals {
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about {
    color: var(--bd-theme-about-heading-color);
    background-image: var(--bd-theme-about-gradient);
}

.work {
    color: var(--bd-theme-work-heading-color);
    background-image: var(--bd-theme-work-gradient);
}

.blog {
    color: var(--bd-theme-blog-heading-color);
    background-image: var(--bd-theme-blog-gradient);
}

.referrals {
    color: var(--bd-theme-referrals-heading-color);
    background-image: var(--bd-theme-referrals-gradient);
}
</style>
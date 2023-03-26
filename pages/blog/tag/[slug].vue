<template>
  <LayoutMain>
    <UiWrapper as="section" class="content-section">
      <UiTitle :priority="1" sectionName="blog">
        Some tag
      </UiTitle>
      The slug is: <code>{{ slug }}</code>
    </UiWrapper>
  </LayoutMain>
</template>

<script setup lang="ts">
const slug = ref<string>('')
const route = useRoute()

slug.value = route.params.slug as string
</script>

<style lang="scss" scoped>
@import "@/assets/styles/content-section";
</style>
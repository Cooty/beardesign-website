<template>
  <LayoutMain>
    <UiWrapper as="section">
      <ui-content-section>
        <UiTitle :priority="1" sectionName="blog">
          Some tag
        </UiTitle>
        The slug is: <code>{{ slug }}</code>
      </ui-content-section>
    </UiWrapper>
  </LayoutMain>
</template>

<script setup lang="ts">
const slug = ref<string>('')
const route = useRoute()

slug.value = route.params.slug as string
</script>
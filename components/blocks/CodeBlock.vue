<template>
  <ClientOnly>
    <HighCode class="code" :codeValue="props.code" :scrollStyleBool="true" maxWidth="100%" width="100%"
      :theme="theme == 'dark' ? 'light' : 'dark'" :lang="props.language" />
  </ClientOnly>
</template>

<script setup lang="ts">
// @ts-ignore
import { HighCode } from 'vue-highlight-code'
import 'vue-highlight-code/dist/style.css';

const theme = useTheme()

const props = defineProps<{
  code: string,
  language: string
}>()
</script>

<style lang="scss" scoped>
:deep(.TL),
:deep(.cb_copy) {
  font-family: $header-font-stack;
}

// this should work by default but it doesn't...
// https://github.com/F-one-1/vue-highlight-code?ref=vuejsexamples.com#component-props
:deep(.code_area pre) {
  overflow-y: auto;
  width: 100%;

  scrollbar-width: thin;
  @include custom-scrollbars(#{$gutter-base * 2},
    rgba($almost-white, 0.8),
    $asphalt-grey,
    $default-radius );
}
</style>
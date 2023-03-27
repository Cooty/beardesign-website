<template>
  <component :is="props.as" @click="isMoreThenMaxWords && $emit('readMore')">
    <template v-if="isMoreThenMaxWords">
      {{ croppedText }}&hellip;&nbsp;<span class="a">{{ props.readMoreText }}</span>
    </template>
    <template v-else>
      {{ props.text }}
    </template>
  </component>
</template>

<script lang="ts" setup>
type AllowedTags = 'div' | 'article' | 'p'

const props = withDefaults(defineProps<{
  as?: AllowedTags
  text: string,
  maxWordCount: number,
  readMoreText: string,
}>(), {
  as: 'article',
})

const words = props.text.split(" ")
const isMoreThenMaxWords = computed(() => words.length >= props.maxWordCount)

console.log(words)
console.log(words.length)
console.log(isMoreThenMaxWords.value)

let croppedText = ''

if (isMoreThenMaxWords) {
  croppedText = words.slice(0, props.maxWordCount).join(" ")
} 
</script>

<style lang="scss" scoped></style>
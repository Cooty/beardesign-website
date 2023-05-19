<template>
  <template v-if="url">
    <div class="embed aspect-ratio-16-9">
      <iframe :src="embedUrl" loading="lazy" frameborder="0" allowfullscreen title="Embedded content" />
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

interface EmbedProps {
  url: string
}

export default defineComponent({
  name: 'Embed',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(props: EmbedProps) {
    const embedUrl = computed(() => {
      const urlObject = new URL(props.url)
      let embedUrl = props.url

      if (urlObject.hostname.includes('youtube.com')) {
        const videoId = urlObject.searchParams.get('v')
        embedUrl = `https://www.youtube.com/embed/${videoId}`
      }

      return embedUrl
    })

    return { embedUrl, props }
  }
})
</script>

<style lang="scss" scoped>
.aspect-ratio-16-9 {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  >iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

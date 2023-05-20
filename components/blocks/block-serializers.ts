import { Serializers } from 'sanity-blocks-vue-component/dist/types'
import Embed from '~~/components/blocks/Embed.vue'
import CodeBlock from '~~/components/blocks/CodeBlock.vue'
import Image from '~~/components/blocks/Image.vue'

const serializers = {
  types: {
    embed: Embed,
    codeBlock: CodeBlock,
    image: Image,
  },
  styles: {
    blockquote: 'blockquote',
  },
  marks: {
    code: 'code',
    'strike-through': 'del',
  },
} as unknown as Partial<Serializers>

export default serializers

import Tag from './Tag.interface'
import Image from './Image.interface'

interface BlogPostTeaser {
  id: string
  slug: string
  title: string
  excerpt?: string
  tags?: Tag[]
  image?: Image
}

export default BlogPostTeaser

import Tag from './Tag.interface'

interface PortfolioItemTeaser {
  id: string
  title: string
  slug: string
  tags?: Tag[]
}

export default PortfolioItemTeaser

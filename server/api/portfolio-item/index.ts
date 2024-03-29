import useSanityClient from '~~/composables/sanity-client'
import PortfolioItemTeaser from '~~/interfaces/PortfolioItemTeaser.interface'

export default defineEventHandler(
  async (event): Promise<PortfolioItemTeaser[]> => {
    const query = getQuery(event)
    const sanityClient = useSanityClient()
    // TODO: Add proper pagination, https://www.sanity.io/docs/paginating-with-groq
    const from = query.from || 0
    const to = query.to || 100

    try {
      const query = `*[_type == 'portfolioItem' && !(_id in path('drafts.**'))]
                    | order(orderOfAppearance asc) [${from}...${to}]
                    {
                      'id': _id,
                      title,
                      'slug': slug.current,
                      'tags': tags[]->{name, 'slug': slug.current}
                    }
                  `

      const response = await sanityClient.fetch(query)

      return response
    } catch (e) {
      throw e
    }
  }
)

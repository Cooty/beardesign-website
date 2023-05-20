import useSanityClient from '~~/composables/sanity-client'
import Technology from '~~/interfaces/Technology.interface'

export default defineEventHandler(async (event): Promise<Technology[]> => {
  const query = getQuery(event)
  const isFeaturedFilter = query.isFeatured ? ' && isFeatured == true' : ''
  const featuredOrdering = query.isFeatured
    ? ' | order(orderOfAppearance asc)'
    : ''

  try {
    const sanityClient = useSanityClient()
    const query = `*[_type == 'technology' && !(_id in path('drafts.**')) ${isFeaturedFilter}]
                    ${featuredOrdering}
                    {
                      'id': _id,
                      name,
                      'link': website,
                      'logo': {
                        'width': logo.asset->metadata.dimensions.width,
                        'height': logo.asset->metadata.dimensions.height,
                        'src': logo.asset->url
                      }
                    }
                  `

    const response = await sanityClient.fetch(query)

    return response
  } catch (e) {
    throw e
  }
})

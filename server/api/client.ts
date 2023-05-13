import sanityClient from '~~/lib/sanity-client'
import Client from '~~/interfaces/Client.interface'

export default defineEventHandler(async (event): Promise<Client[]> => {
  const query = getQuery(event)
  const isFeaturedFilter = query.isFeatured ? ' && isFeatured == true' : ''
  const featuredOrdering = query.isFeatured
    ? ' | order(orderOfAppearance asc)'
    : ''

  try {
    const query = `*[_type == 'client' && !(_id in path('drafts.**')) ${isFeaturedFilter}]
                    ${featuredOrdering}
                    {
                      'id': _id, 
                      'name': organization->name,
                      'link': organization->link,
                      'logo': {
                        'width': organization->logo.asset->metadata.dimensions.width,
                        'height': organization->logo.asset->metadata.dimensions.height,
                        'src': organization->logo.asset->url
                      }
                    }
                  `
    const response = await sanityClient.fetch(query)

    return response
  } catch (e) {
    throw e
  }
})

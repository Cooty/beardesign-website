import sanityClient from '~~/lib/sanity-client'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const isFeaturedFilter = query.isFeatured ? ' && isFeatured == true' : ''
  const featuredOrdering = query.isFeatured
    ? ' | order(orderOfAppearance asc)'
    : ''

  try {
    const query = `*[_type == 'client'${isFeaturedFilter}]
                    ${featuredOrdering}
                    {
                      'id': _id, 
                      'name': organization->name,
                      'link': organization->link,
                      'logo': {
                        'width': organization->logo.asset->metadata.dimensions.width,
                        'height': organization->logo.asset->metadata.dimensions.height,
                        'image': organization->logo.asset->url
                      }
                    }
                  `
    const response = await sanityClient.fetch(query)

    return response
  } catch (e) {
    throw e
  }
})

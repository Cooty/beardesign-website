import useSanityClient from '~~/composables/sanity-client'

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event)
  const { slug } = params
  const sanityClient = useSanityClient()
  try {
    const query = `*[_type == 'blogPost' && slug.current == $slug && !(_id in path('drafts.**'))]
                    {
                      title,
                      publicationDate,
                      excerpt,
                      content,
                      'tags': tags[]->{name, 'slug': slug.current},
                      'image': {
                        coverImage != null => {
                          'width': coverImage.asset->metadata.dimensions.width,
                          'height': coverImage.asset->metadata.dimensions.height,
                          'src': coverImage.asset->url,
                          'alt': coverImage.caption,
                          'lqip': coverImage.asset->metadata.lqip
                        }
                      }
                    }
                  `

    const response = await sanityClient.fetch(query, { slug })

    return response
  } catch (e) {
    throw e
  }
})

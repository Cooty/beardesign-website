import useSanityClient from '~~/composables/sanity-client'
import BlogPostTeaser from '~~/interfaces/BlogPostTeaser.interface'

export default defineEventHandler(async (event): Promise<BlogPostTeaser[]> => {
  const query = getQuery(event)
  const sanityClient = useSanityClient()
  // TODO: Add proper pagination, https://www.sanity.io/docs/paginating-with-groq
  const from = query.from || 0
  const to = query.to || 100
  try {
    const query = `*[_type == 'blogPost' && !(_id in path('drafts.**'))]
                    | order(publicationDate asc) [${from}...${to}]
                    {
                      'id': _id,
                      title,
                      excerpt,
                      'slug': slug.current,
                      'tags': tags[]->{name, 'slug': slug.current},
                      'image': {
                        coverImage != null => {
                          'width': coverImage.asset->metadata.dimensions.width,
                          'height': coverImage.asset->metadata.dimensions.height,
                          'src': coverImage.asset->url,
                          'alt': coverImage.caption
                        }
                      }
                    }
                  `

    const response = await sanityClient.fetch(query)

    return response
  } catch (e) {
    throw e
  }
})

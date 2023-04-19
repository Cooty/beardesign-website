import sanityClient from '~~/lib/sanity-client'

export default defineEventHandler(async () => {
  // TODO: Add pagination, https://www.sanity.io/docs/paginating-with-groq
  try {
    const query = `*[_type == 'portfolioItem']
                    | order(orderOfAppearance asc)
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
})

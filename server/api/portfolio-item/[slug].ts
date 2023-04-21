import sanityClient from '~~/lib/sanity-client'

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event)
  const { slug } = params
  try {
    const query = `*[_type == 'portfolioItem' && slug.current == $slug]
                    {
                      title,
                      websiteLink,
                      articleLink,
                      repositoryLink,
                      'tags': tags[]->{name, 'slug': slug.current},
                      'technologies': technologies[]->{name, website, 'logo': {
                        'src': logo.asset->url,
                        'width': logo.asset->metadata.dimensions.width,
                        'height': logo.asset->metadata.dimensions.height,
                      }},
                      description,
                    }
                  `

    const response = await sanityClient.fetch(query, { slug })

    return response
  } catch (e) {
    throw e
  }
})
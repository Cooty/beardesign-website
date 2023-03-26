import sanityClient from '~~/lib/sanity-client'
import Referral from '~~/interfaces/Referral.interface'

export default defineEventHandler(async (): Promise<Referral[]> => {
  try {
    const query = `*[_type == 'referral'] | 
                    order(orderOfAppearance asc)
                    {
                      'id': _id, 
                      text, 
                      'from': {
                        'name': from->name,
                        'title': from->jobTitle,
                        'organization': from->organization->name,
                        'link': from->link,
                        'image': from->image.asset->url
                      }, 
                    }
                  `
    const response = await sanityClient.fetch(query)

    return response
  } catch (e) {
    throw e
  }
})

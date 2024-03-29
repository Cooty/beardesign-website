import useSanityClient from '~~/composables/sanity-client'
import Referral from '~~/interfaces/Referral.interface'

export default defineEventHandler(async (): Promise<Referral[]> => {
  try {
    const sanityClient = useSanityClient()

    const query = `*[_type == 'referral' && !(_id in path('drafts.**'))] | 
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

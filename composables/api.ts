// import { useSanityClient } from '@/composables/sanity-client'
import { createClient } from '@sanity/client'

// const client = useSanityClient()

export async function useGetReferrals() {
  const config = useRuntimeConfig()
  console.log(config.public.sanityProjectId)
  console.log(config.public.sanityDatasetName)

  const client = createClient({
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDatasetName,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2023-03-24',
  })

  const fields = `
    _id,
    name: from->name,
    avatar: from->image.asset->url,
    text,
  `

  return await client.fetch(`*[_type == 'referral']{${fields}}`)
}

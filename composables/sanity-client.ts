import { createClient } from '@sanity/client'

function useSanityClient() {
  const runtimeConfig = useRuntimeConfig()

  return createClient({
    projectId: runtimeConfig.public.sanityProjectId,
    dataset: runtimeConfig.public.sanityDatasetName,
    token: runtimeConfig.sanityToken,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2023-03-24',
  })
}

export default useSanityClient

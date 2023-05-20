import useSanityClient from './sanity-client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

function useSanityImageUrl(source: SanityImageSource) {
  const sanityClient = useSanityClient()
  const builder = imageUrlBuilder(sanityClient)

  return builder.image(source)
}

export default useSanityImageUrl

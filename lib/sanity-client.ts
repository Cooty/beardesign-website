import { createClient } from '@sanity/client'

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  token: process.env.SANITY_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-03-24',
})

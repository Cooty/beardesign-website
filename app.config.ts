import { title, description, keywords } from './content/global/_meta.json'

export interface BDAppConfig {
  title?: string
  titleSeparator?: string
  description?: string
  keywords?: string
  themeColor?: string
}

export default defineAppConfig<BDAppConfig>({
  title,
  titleSeparator: '•',
  description,
  keywords,
  themeColor: '#b9b9b9',
})

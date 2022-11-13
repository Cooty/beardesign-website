import Themes from '~~/types/Themes.type'

export const useTheme = () => useState<Themes>('theme', () => 'dark')

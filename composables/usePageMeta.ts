export function usePageMeta() {
  const { t } = useI18n()
  const route = useRoute()

  const getPageTitle = (pageKey: string) => {
    return t('nuxtSiteConfig.titles.' + pageKey)
  }

  const getPageDescription = (pageKey: string) => {
    return t('nuxtSiteConfig.descriptions.' + pageKey)
  }

  return {
    getPageTitle,
    getPageDescription,
  }
}

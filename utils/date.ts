export const formatDate = (date: Date, locale: string) => {
  const dateLocale = locale === 'ua' ? 'uk-UA' : 'en-US'

  return new Intl.DateTimeFormat(dateLocale, {
    month: 'long',
    year: 'numeric',
  }).format(date)
}

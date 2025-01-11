export const formatDate = (date: Date, locale: string) => {
  const dateLocale = locale === 'ua' ? 'uk-UA' : 'en-US'

  const formattedDate = new Intl.DateTimeFormat(dateLocale, {
    month: 'long',
    year: 'numeric',
  }).format(date)

  return locale === 'ua' ? capitalizeFirstLetter(formattedDate) : formattedDate
}

export const formatTimelinePeriod = (
  start: Date,
  end: Date | undefined,
  locale: string
) => {
  const { t } = useI18n()

  const startDate = formatDate(start, locale)
  if (!end) return `${startDate} - ${t('experience.present')}`
  return `${startDate} - ${formatDate(end, locale)}`
}

import { useDateFormat } from '@vueuse/core'

export const formatDate = (date: Date, locale: string) => {
  const dateLocale = locale === 'ua' ? 'uk-UA' : 'en-US'
  const formatter = useDateFormat(date, 'MMMM YYYY', { locales: dateLocale })
  return locale === 'ua'
    ? capitalizeFirstLetter(formatter.value)
    : formatter.value
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

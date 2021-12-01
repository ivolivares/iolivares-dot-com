export const daysTo = (date) => {
  const today = Date.now()
  const difference = date.getTime() - today
  return Math.ceil(difference / (1000 * 3600 * 24))
}

export const isFutureDate = (date) => {
  const today = Date.now()
  return (date.getTime() > today)
}

export const isToday = (date) => {
  const today = Date.now()
  return (date.getTime() === today)
}

export const formatDate = (date, locale) => {
  const languageMapper = {
    es: 'es-ES',
    en: 'en-US',
  }

  return new Intl.DateTimeFormat(languageMapper[locale], { dateStyle: 'medium' }).format(date)
}

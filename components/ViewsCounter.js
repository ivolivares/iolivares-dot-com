import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import useSWR from 'swr'

import { fetcher } from '@io/lib/fetcher'

export default function ViewsCounter({ slug }) {
  const { t } = useTranslation('common')
  const viewsEndpoint = `/api/views/${slug}`
  const { data } = useSWR(viewsEndpoint, fetcher)
  const views = new Number(data?.total)
  
  useEffect(() => {
    const registerView = async () => {
      await fetcher(viewsEndpoint, {
        method: 'POST',
      })
    }

    registerView()
  }, [viewsEndpoint])

  return (
    <span>{`${views > 0 ? views.toLocaleString() : '–––'} ${t('views-counter')}`}</span>
  )
}

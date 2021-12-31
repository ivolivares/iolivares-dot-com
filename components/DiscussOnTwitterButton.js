import { useTranslation } from 'next-i18next'
import ExternalLink from '@io/components/ExternalLink'

export default function DiscussOnTwitterButton({ linkToFollow }) {
  const { t } = useTranslation('common')

  return (
    <ExternalLink href={`https://twitter.com/search?q=${encodeURIComponent(linkToFollow)}`}>
      {t('discuss-on-twitter')}
    </ExternalLink>
  )
}
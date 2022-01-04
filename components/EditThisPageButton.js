import { useTranslation } from 'next-i18next'
import ExternalLink from '@io/components/ExternalLink'

export default function EditThisPageButton({ fileToEdit }) {
  const { t } = useTranslation('common')

  return (
    <ExternalLink
      href={`https://github.com/ivolivares/iolivares-dot-com/edit/main${fileToEdit}`}
    >
      {t('edit-this-page')}
    </ExternalLink>
  )
}
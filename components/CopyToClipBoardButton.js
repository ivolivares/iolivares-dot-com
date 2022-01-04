import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

export default function CopyToClipBoardButton({ link }) {
  const { t } = useTranslation('common')
  const [wasCopied, setCopied] = useState(false)

  async function handleCopy(event) {
    event.preventDefault()
    if (!wasCopied) {
      const shareURL = event.currentTarget.getAttribute('data-href')
      await navigator?.clipboard?.writeText(shareURL)
      setCopied(true)
      setTimeout(() => setCopied(false), 5000)
    }
  }

  return (<button
    id="copy-to-clipboard"
    title={t('share-to-clipboard')}
    aria-label={t('share-to-clipboard-a11y')}
    className="relative"
    data-href={link}
    onClick={(e) => handleCopy(e)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
    {wasCopied && (
      <span className="absolute -bottom-8 right-0 w-max	text-xs py-1 px-2 bg-gray-600 dark:bg-gray-800 text-gray-50">
        {t('share-to-clipboard-done')}
      </span>
    )}
  </button>)
}
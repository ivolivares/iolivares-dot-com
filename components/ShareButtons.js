/* eslint-disable max-len */
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import Metadata from '@io/data/metadata'

export default function ShareButtons({ shareLink, titleLink, summaryLink, size = "22" }) {
  const { t } = useTranslation('common')

  const facebookLink = (url) => `http://facebook.com/sharer/sharer.php?u=` + encodeURIComponent(url)
  const twitterLink = (url) => `https://twitter.com/intent/tweet?url=` + encodeURIComponent(url)
  const linkedinLink = (url, summary, title, source) => (
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}&source=${encodeURIComponent(source)}`
  )
  const emailLink = (url, subject) => (
    `mailto:?url=${encodeURIComponent(url)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(url)}`
  )

  const handleShare = (event) => {
    event.preventDefault()
    const shareURL = event.currentTarget.getAttribute('data-href')

    return window.open(
      shareURL,
      '',
      'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
    )
  }

  return <ul className="flex flex-nowrap justify-center items-center flex-row list-none">
    <li className="mx-2">
      <button
        data-href={facebookLink(shareLink)}
        onClick={handleShare}
        title={t('share-on-facebook')}
        aria-label={t('share-on-facebook-a11y')}
      >
        <Image
          src={`/static/images/icons/facebook.png`}
          alt="Facebook"
          width={size}
          height={size}
          className="grayscale hover:grayscale-0 dark:filter dark:brightness-0 dark:invert dark:hover:opacity-80"
        />
      </button>
    </li>
    <li className="mx-2">
      <button
        data-href={twitterLink(shareLink)}
        onClick={handleShare}
        title={t('share-on-twitter')}
        aria-label={t('share-on-twitter-a11y')}
      >
        <Image
          src={`/static/images/icons/twitter.png`}
          alt="Twitter"
          width={size}
          height={size}
          className="grayscale hover:grayscale-0 dark:filter dark:brightness-0 dark:invert dark:hover:opacity-80"
        />
      </button>
    </li>
    <li className="mx-2">
      <button
        data-href={linkedinLink(shareLink, summaryLink, titleLink, Metadata.NAME)}
        onClick={handleShare}
        title={t('share-on-linkedin')}
        aria-label={t('share-on-linkedin-a11y')}
      >
        <Image
          src={`/static/images/icons/linkedin.png`}
          alt="LinkedIn"
          width={size}
          height={size}
          className="grayscale hover:grayscale-0 dark:filter dark:brightness-0 dark:invert dark:hover:opacity-80"
        />
      </button>
    </li>
    <li className="mx-2 text-gray-800 dark:text-gray-50 hover:opacity-75">
      <a
        href={emailLink(shareLink, titleLink)}
        title={t('share-on-email')}
        aria-label={t('share-on-email-a11y')}
      >
        <Image
          src={`/static/images/icons/email.png`}
          alt="Mail"
          width={size + 2}
          height={size + 2}
          className="grayscale hover:grayscale-0 dark:filter dark:brightness-0 dark:invert dark:hover:opacity-80"
        />
      </a>
    </li>
    {/* TODO: To be implemented */}
    {/* <li className="ml-2 text-gray-800 dark:text-gray-50 hover:opacity-75">
      <button
        title={t('share-to-clipboard')}
        aria-label={t('share-to-clipboard-a11y')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
    </li> */}
  </ul>
}
/* eslint-disable max-len */
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import Metadata from '@io/data/metadata.json'
import CopyToClipBoardButton from '@io/components/CopyToClipBoardButton'
import ShareOnSocialMediaButton from '@io/components/ShareOnSocialMediaButton'

export default function ShareButtons({ shareLink, titleLink, summaryLink, size = "22" }) {
  const { t } = useTranslation('common')

  return <ul className="flex flex-nowrap justify-center items-center flex-row list-none">
    <li className="mx-2">
      <ShareOnSocialMediaButton
        link={shareLink}
        buttonTitle={t('share-on-facebook')}
        buttonLabel={t('share-on-facebook-a11y')}
        name="facebook"
        size={size}
      />
    </li>
    <li className="mx-2">
      <ShareOnSocialMediaButton
        link={shareLink}
        buttonTitle={t('share-on-twitter')}
        buttonLabel={t('share-on-twitter-a11y')}
        name="twitter"
        size={size}
      />
    </li>
    <li className="mx-2">
      <ShareOnSocialMediaButton
        link={shareLink}
        title={titleLink}
        summary={summaryLink}
        source={Metadata.NAME}
        buttonTitle={t('share-on-linkedin')}
        buttonLabel={t('share-on-linkedin-a11y')}
        name="linkedin"
        size={size}
      />
    </li>
    <li className="mx-2 text-gray-800 dark:text-gray-50 hover:opacity-75">
      <a
        href={`mailto:?url=${encodeURIComponent(shareLink)}&subject=${encodeURIComponent(summaryLink)}&body=${encodeURIComponent(shareLink)}`}
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
    <li className="ml-2 text-gray-800 dark:text-gray-50 hover:opacity-75">
      <CopyToClipBoardButton link={shareLink} />
    </li>
  </ul>
}
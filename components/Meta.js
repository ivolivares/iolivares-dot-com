import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import Metadata from '@io/data/metadata'
import { defaultLang } from '@io/lib/supportedLangs'

export default function Meta(props) {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { title, summary, publishedTime, type, image, image_alt } = props

  const meta = {
    name: Metadata.NAME,
    title: title || Metadata.DEFAULT_TITLE,
    description: summary || Metadata.DESCRIPTION,
    image: image || Metadata.OPENGRAPH.IMAGE,
    image_sm: Metadata.OPENGRAPH.IMAGE_SMALL,
    image_alt: image_alt || Metadata.OPENGRAPH.IMAGE_ALT,
    tw_user: Metadata.OPENGRAPH.TWITTER_USER,
    type: type || 'website',
    canonical: `${Metadata.URL}${router.locale !== defaultLang ? '/' + router.locale : ''}${router.asPath}`,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.canonical} />
        <meta name="description" content={meta.description} />
        <meta name="robots" content="follow, index" />
        <meta name="googlebot" content="follow, index" />
        <meta name="author" content={meta.name} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.image_alt} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="882" />
        <meta property="og:image" content={meta.image_sm} />
        <meta property="og:image:alt" content={meta.image_alt} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        {publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.tw_user} />
        <meta name="twitter:creator" content={meta.tw_user} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {/* Debug screens */}
      <div className="border-2 w-full h-10 pt-1 bg-red-400 border-red-400 text-primary-50 text-center">
        <span className="hidden xs:inline-block">XS ·</span>
        <span className="hidden sm:inline-block mx-1">SM ·</span>
        <span className="hidden md:inline-block mx-1">MD ·</span>
        <span className="hidden lg:inline-block mx-1">LG ·</span>
        <span className="hidden xl:inline-block mx-1">XL ·</span>
        <span className="hidden 2xl:inline-block">2XL</span>
      </div>

      {/* Skip to content A11Y feature */}
      <div className="w-full max-w-5xl relative flex mx-auto">
        <a className="skip-to-content" href="#main-content">
          {t('skip-content')}
        </a>
      </div>
    </>
  )
}

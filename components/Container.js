import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import Header from '@io/components/Header'
import Footer from '@io/components/Footer'

import Metadata from '@io/data/metadata'

export default function Container(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const { t } = useTranslation('common')
  const meta = {
    title: Metadata.DEFAULT_TITLE,
    description: Metadata.DESCRIPTION,
    image: Metadata.OPENGRAPH.IMAGE,
    type: 'website',
    canonical: `${Metadata.URL}${router.locale !== 'en' ? '/' + router.locale : ''}${router.asPath}`,
    ...customMeta
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={Metadata.NAME} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={Metadata.OPENGRAPH.TWITTER_USER} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="container mx-auto flex flex-col justify-center px-8">
        <a className="sr-only sr-only-focusable" href="#main-content" tabIndex="1">
          {t('skip-content')}
        </a>
      </div>
      <Header />
      <main
        id="main-content"
        className="container pt-20 pb-10 px-44 mx-auto flex flex-col justify-center px-8 w-full m-4 mx-auto shadow-xl bg-white dark:bg-gray-700 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-20"
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

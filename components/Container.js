import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import Header from '@io/components/Header'
import Footer from '@io/components/Footer'

import Metadata from '@io/data/metadata'

export default function Container(props) {
  const { children, classNames, ...customMeta } = props
  const router = useRouter()
  const { t } = useTranslation('common')
  const meta = {
    title: Metadata.DEFAULT_TITLE,
    description: Metadata.DESCRIPTION,
    image_lg: Metadata.OPENGRAPH.IMAGE_LG,
    image_lg2: Metadata.OPENGRAPH.IMAGE_LG2,
    image_sm: Metadata.OPENGRAPH.IMAGE_SM,
    type: 'website',
    canonical: `${Metadata.URL}${router.locale !== 'en' ? '/' + router.locale : ''}${router.asPath}`,
    ...customMeta
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.canonical} />
        <meta name="description" content={meta.description} />
        <meta name="robots" content="follow, index" />
        <meta name="description" content="follow, index" />
        <meta name="author" content={Metadata.NAME} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={Metadata.NAME} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="image" property="og:image" content={meta.image_lg} />
        <meta property="og:image:alt" content={Metadata.OPENGRAPH.IMAGE_ALT} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="image" property="og:image" content={meta.image_lg2} />
        <meta property="og:image:alt" content={Metadata.OPENGRAPH.IMAGE_ALT} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta name="image" property="og:image" content={meta.image_sm} />
        <meta property="og:image:alt" content={Metadata.OPENGRAPH.IMAGE_ALT} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={Metadata.OPENGRAPH.TWITTER_USER} />
        <meta name="twitter:creator" content={Metadata.OPENGRAPH.TWITTER_USER} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image_lg} />
      </Head>

      {/* Debug screens */}
      {/* <div className="border-2 border-dashed w-full h-10 pt-1 border-red-400 text-center">
        <span className="hidden sm:inline-block">SM ·</span>
        <span className="hidden md:inline-block"> MD ·</span>
        <span className="hidden lg:inline-block"> LG ·</span>
        <span className="hidden xl:inline-block"> XL ·</span>
        <span className="hidden 2xl:inline-block"> 2XL</span>
      </div> */}

      {/* Skip to content A11Y feature */}
      <div className="container relative flex mx-auto">
        <a
          className="absolute -top-36 focus-visible:top-36 left-3 z-10 focus:outline-none focus-visible:ring-2 focus-visible:primary-700 text-gray-800 dark:text-gray-50"
          href="#main-content"
          tabIndex="1"
        >
          {t('skip-content')}
        </a>
      </div>

      <Header />
      <main
        id="main-content"
        className={classNames ? classNames : 'lg:container pb-10 px-5 sm:px-10 lg:px-20 xl:px-35 2xl:px-40 mx-auto sm:mt-4 mb-4 flex flex-col justify-center w-full mx-auto shadow-xl bg-white dark:bg-gray-700 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-20'}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

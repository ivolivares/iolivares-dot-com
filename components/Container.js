import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '@io/components/Header'
import Footer from '@io/components/Footer'

import Metadata from '@io/data/metadata'

export default function Container(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: Metadata.DEFAULT_TITLE,
    description: Metadata.DESCRIPTION,
    image: Metadata.OPENGRAPH.IMAGE,
    type: 'website',
    canonical: `${Metadata.URL}${router.locale !== 'en' ? '/' + router.locale : ''}${router.asPath}`,
    ...customMeta
  }

  return (
    <div className="bg-indigo-50 dark:bg-gray-800">
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
      <main
        id="main-content"
        className="container mx-auto flex flex-col justify-center bg-indigo-50 dark:bg-gray-800 px-8"
      >
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

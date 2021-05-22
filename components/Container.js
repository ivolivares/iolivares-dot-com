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
    ...customMeta
  }

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://iolivares.com${router.asPath}`} />
        <link rel="canonical" href={`https://iolivares.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Iván Olivares Rojas" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ivolivares" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Header />
      <main
        id="main-content"
        className="flex flex-col justify-center bg-white dark:bg-black px-8"
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}

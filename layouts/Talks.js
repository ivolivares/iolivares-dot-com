import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import ExternalLink from 'components/ExternalLink'
import Meta from 'components/Meta'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function TalksLayout({ children }) {
  const { frontMatter } = children.props
  const { tagline } = frontMatter
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  return (
    <>
      <Meta {...frontMatter} />
      <Header />
      <main
        id="main-content"
        className="flex flex-col justify-center w-full mx-auto max-w-5xl pb-10 sm:mt-4 mb-4 px-5 xl:px-0"
      >
        <section className="flex flex-col">
          <h1 className="pt-10 xs:pt-5 sm:pt-2 mb-8 title-font text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
            <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-green-500">
              {tagline}
            </span>
          </h1>
          {children}
        </section>
        <div className="text-right text-sm mt-5">
          <ExternalLink
            href={`https://github.com/ivolivares/iolivares-dot-com/edit/main/data/talks.${locale}.mdx`}
          >
            {t('edit-this-page')}
          </ExternalLink>
        </div>
      </main>
      <Footer />
    </>
  )
}

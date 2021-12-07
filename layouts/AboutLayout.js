import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import ExternalLink from '@io/components/ExternalLink'
import Meta from '@io/components/Meta'
import Header from '@io/components/Header'
import Footer from '@io/components/Footer'

const AboutLayout = ({ children, frontMatter }) => {
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
        <article className="flex flex-col">
          <div className="prose dark:prose-dark">
            <h1 className="pt-10 xs:pt-5 sm:pt-2 mb-8 title-font text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
              <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-green-500">
                {tagline}
              </span>
            </h1>
            {children}
          </div>
        </article>
        <div className="text-right text-sm mt-5">
          <ExternalLink
            href={`https://github.com/ivolivares/iolivares-dot-com/edit/main/data/about.${locale}.mdx`}
          >
            {t('edit-this-page')}
          </ExternalLink>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AboutLayout
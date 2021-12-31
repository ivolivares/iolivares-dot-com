import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import Meta from '@io/components/Meta'
import Header from '@io/components/Header'
import Footer from '@io/components/Footer'
import EditThisPageButton from '@io/components/EditThisPageButton'

const MDXLayout = ({ children, frontMatter, slug }) => {
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
          <div className="prose dark:prose-dark">
            <h1 className="pt-10 xs:pt-5 sm:pt-2 mb-8 title-font text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
              <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-green-500">
                {tagline}
              </span>
            </h1>
            {children}
          </div>
        </section>
        <div className="text-right text-sm mt-5">
          <EditThisPageButton fileToEdit={`/data/pages/${slug}.${locale}.mdx`} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MDXLayout
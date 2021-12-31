import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import ExternalLink from '@io/components/ExternalLink'
import Meta from '@io/components/Meta'
import Metadata from '@io/data/metadata'
import Header from '@io/components/Header'
import Footer from '@io/components/Footer'
import ShareButtons from '@io/components/ShareButtons'
import DiscussOnTwitterButton from '@io/components/DiscussOnTwitterButton'
import EditThisPageButton from '@io/components/EditThisPageButton'
import avatar from '@io/images/me.jpg'
import Link from 'next/link'

const ArticleLayout = ({ children, frontMatter, slug }) => {
  const { locale } = useRouter()
  const { t } = useTranslation('articles')

  const articleMeta = {
    title: `${frontMatter.title} | ${Metadata.NAME}`,
    summary: frontMatter.summary,
    publishedTime: new Date(frontMatter.publishedAt).toISOString(),
    image: frontMatter.image,
    ...({image_alt: frontMatter.image_alt} ?? {}),
    type: 'article',
  }

  const canonicalURL = `${Metadata.URL}/${frontMatter.slug}`

  return (
    <>
      <Meta {...articleMeta} />
      <Header />
      <main
        id="main-content"
        className="flex flex-col justify-center"
      >
        <header className="mt-0">
          {frontMatter.image && (
            <picture className="relative flex h-[80vh] w-full object-cover object-center">
              <Image
                src={frontMatter.image}
                alt={frontMatter.image_alt || frontMatter.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcv25dPQAGqwKM8LHLdAAAAABJRU5ErkJggg=="
                priority
              />
            </picture>
          )}
          <div className="article-heading">
            <h1 className="pt-5 text-center text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tighter text-gray-800 dark:text-gray-100">
              {frontMatter.title}
            </h1>
            <h2 className="pt-4 mb-10 text-center text-base font-light text-gray-800 dark:text-gray-100">
              {frontMatter.summary}
            </h2>
            <div className="article-info flex flex-col sm:flex-row justify-between items-center w-full mt-2">
              <div className="flex items-center">
                <Image
                  alt={Metadata.NAME}
                  height={24}
                  width={24}
                  src={avatar}
                  className="rounded-full"
                />
                <div className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-2">
                  {frontMatter.author ?? `${Metadata.NAME} / `}
                  <time dateTime={frontMatter.publishedAt}>
                    {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                  </time>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-200 min-w-32 mt-2 sm:mt-0">
                {frontMatter.readingTime.text}
                {/* {` • `} */}
                {/* <ViewCounter slug={frontMatter.slug} /> */}
              </div>
              <div className="mt-2 sm:mt-0">
                <ShareButtons
                  shareLink={canonicalURL}
                  summaryLink={frontMatter.summary}
                  titleLink={frontMatter.title}
                  size={20}
                />
              </div>
          </div>
          </div>
        </header>
        <section className="article-container w-full px-5 mt-10 mx-auto">
          <article className="flex flex-col article-content prose dark:prose-dark">
            {children}
          </article>
        </section>
        <footer className="article-footer flex flex-col sm:flex-row justify-between items-center sm:items-start mt-5 border-t border-gray-400 dark:border-gray-500">
          <div className="text-left mt-5">
            <ShareButtons
              shareLink={canonicalURL}
              summaryLink={frontMatter.summary}
              titleLink={frontMatter.title}
              size={18}
            />
          </div>
          <div className="mt-5 text-right text-sm">
            <DiscussOnTwitterButton linkToFollow={canonicalURL} />
            {` · `}
            <EditThisPageButton fileToEdit={`/data/articles/${slug}.${locale}.mdx`} />
          </div>
        </footer>
        <div className="article-footer bg-gray-100 dark:bg-gray-800 my-8 px-6 py-6">
          <Link href="/articles">
            <a className="group hover:opacity-95">
              <h2 className="text-2xl sm:text-4xl text-gray-800 dark:text-gray-50 font-bold">
                <span className="w-6 sm:w-12">👨‍💻 </span>
                <span>{t('articles-footer-title')}</span>
              </h2>
              <p className="pl-6 sm:pl-12 my-2 text-base text-gray-700 dark:text-gray-50">
                {t('articles-footer-subtitle')}
              </p>
              <p className="pl-6 sm:pl-12 flex flex-row items-center group-hover:underline">
                <span>{t('articles-footer-cta')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ArticleLayout
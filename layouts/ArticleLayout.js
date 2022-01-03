import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import parseISO from 'date-fns/parseISO'

import { formatDate } from '@io/lib/dates'
import Meta from '@io/components/Meta'
import Metadata from '@io/data/metadata.json'
import Header from '@io/components/Header'
import Footer from '@io/components/Footer'
import ShareButtons from '@io/components/ShareButtons'
import DiscussOnTwitterButton from '@io/components/DiscussOnTwitterButton'
import EditThisPageButton from '@io/components/EditThisPageButton'
import LikeButton from '@io/components/LikeButton'
import ViewsCounter from '@io/components/ViewsCounter'
import avatar from '@io/images/me.jpg'

const ArticleLayout = ({ children, frontMatter, slug }) => {
  const { locale } = useRouter()
  const { t } = useTranslation('articles')

  const canonicalURL = `${Metadata.URL}/${frontMatter.slug}`

  const articleMeta = {
    title: `${frontMatter.title ?? ''} | ${Metadata.NAME}`,
    summary: frontMatter.summary ?? '',
    publishedTime: new Date(frontMatter.publishedAt ?? (new Date())).toISOString(),
    image: frontMatter.image ?? '',
    ...({image_alt: frontMatter.image_alt} ?? {}),
    type: 'article',
  }

  // This validation avoid fails when failover is called
  const isValidArticle = (artProps) => (
    artProps.title && artProps.summary && artProps.publishedAt
  )

  return (
    <>
      <Meta {...articleMeta} />
      <Header />
      <main
        id="main-content"
        className="flex flex-col justify-center"
      >
        {isValidArticle(frontMatter) && (
          <header>
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
                    alt={frontMatter.author ?? Metadata.NAME}
                    height={24}
                    width={24}
                    src={avatar}
                    className="rounded-full"
                  />
                  <div className="text-sm text-gray-700 dark:text-gray-200 ml-2">
                    <span className="font-medium">
                      {frontMatter.author ?? `${Metadata.NAME}`}
                    </span>
                    <span className="font-bold">
                      {` / `}
                    </span>
                    <time dateTime={frontMatter.publishedAt} className="font-medium">
                      {formatDate(parseISO(frontMatter.publishedAt), locale)}
                    </time>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-200 min-w-32 mt-2 sm:mt-0">
                  <span dangerouslySetInnerHTML={
                    {
                      __html: t('articles-to-read', {
                        interpolation: {
                          escapeValue: false,
                        },
                        value: Math.round(frontMatter.readingTime?.minutes),
                      }),
                    }
                  } />
                  {` • `}
                  <ViewsCounter slug={frontMatter.slug} />
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
        )}
        <section className="article-container w-full px-5 mt-10 mx-auto">
          <article className="flex flex-col article-content prose dark:prose-dark">
            {children}
          </article>
        </section>
        {isValidArticle(frontMatter) && (
          <footer className="article-footer flex flex-col sm:flex-row justify-between items-center sm:items-start mt-5 border-t border-gray-400 dark:border-gray-500">
            <div className="mt-5 text-left">
              <ShareButtons
                shareLink={canonicalURL}
                summaryLink={frontMatter.summary}
                titleLink={frontMatter.title}
                size={18}
              />
            </div>
            <div className="mt-4 text-center text-sm">
              <LikeButton slug={frontMatter.slug} />
            </div>
            <div className="mt-5 text-right text-sm">
              <DiscussOnTwitterButton linkToFollow={canonicalURL} />
              {` · `}
              <EditThisPageButton fileToEdit={`/data/articles/${slug}.${locale}.mdx`} />
            </div>
          </footer>
        )}
        <div className="article-footer bg-gray-100 dark:bg-gray-800 my-8 px-6 py-6">
          <Link href="/articles">
            <a className="group flex flex-wrap items-start focus:outline-none focus-visible:shadow-outline focus-visible:ring-2 ring-offset-current ring-offset-4">
              <h2 className="text-2xl sm:text-4xl text-gray-800 dark:text-gray-50 font-bold group-hover:opacity-90">
                <span className="w-6 sm:w-12">👨‍💻 </span>
                <span>{t('articles-footer-title')}</span>
              </h2>
              <p className="pl-6 sm:pl-12 my-2 text-base text-gray-700 dark:text-gray-50 group-hover:opacity-90">
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
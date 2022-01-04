import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import parseISO from 'date-fns/parseISO'

import { formatDate } from '@io/lib/dates'

export default function ArticlesList({ articles }) {
  const { locale } = useRouter()
  const { t } = useTranslation('articles')

  return (
    <article className="mt-6 mb-10 sm:mb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 title-font text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
          👨‍💻 {t('articles-all-title')}
        </h2>
        <div className="flex flex-wrap">
          {articles.length > 0 ? (
            <ul className="w-full list-none divide-y divide-gray-100 dark:divide-gray-600">
              {articles.map((article, index) => (
                <li key={index} className="py-2">
                  <Link href={article.slug}>
                    <a className="w-full py-2 px-4 flex justify-between items-center text-left rounded-md group md:hover:px-8 md:hover:bg-gray-100 md:dark:hover:bg-gray-800 motion-safe:transition-all motion-safe:duration-300">
                      <div className="flex sm:items-center flex-col-reverse sm:flex-row">
                        <span className="flex-[0_0_auto] pr-0 mt-2 sm:pr-12 sm:mt-0 text-xs font-semibold tracking-widest uppercase text-primary-500 dark:text-primary-300 group-hover:text-primary-400 group-hover:dark:text-primary-50">
                          {formatDate(parseISO(article.content.publishedAt), locale)}
                        </span>
                        <span className="flex-[1] text-xs font-semibold tracking-widest uppercase text-primary-500 dark:text-primary-300 group-hover:text-primary-400 group-hover:dark:text-primary-50">
                          {article.content.title}
                        </span>
                      </div>
                      <span className="flex flex-[0_0_auto] justify-end ml-8 w-8 text-primary-500 dark:text-primary-300 group-hover:text-primary-400 group-hover:dark:text-primary-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col w-full mx-auto text-center pt-5 pb-6 px-5 xl:px-0">
              <div className="text-sm font-mono text-gray-800 dark:text-gray-100 break-words">
                <p>
                  {t('articles-no-more')}
                  <span className="w-1 h-4 ml-2 inline-block bg-primary-800 dark:bg-gray-400 rounded-sm motion-safe:animate-ping motion-safe:duration-75">
                    {` `}
                  </span>
                </p>
                <p>
                  <Link href="/talks">
                    {t('articles-no-more-cta')}
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

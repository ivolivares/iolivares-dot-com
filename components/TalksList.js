import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import parseISO from 'date-fns/parseISO'

import { formatDate } from '@io/lib/dates'
import ExternalLink from '@io/components/ExternalLink'

export default function TalksList({ talks }) {
  const { locale } = useRouter()
  const { t } = useTranslation('talks')

  return (
    <article className="mt-6 mb-10 sm:mb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 title-font text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
          🎙 {t('talks-all-title')}
        </h2>
        <div className="flex flex-wrap">
          <ul className="w-full list-none sm:divide-y sm:divide-gray-100 dark:sm:divide-gray-600">
            {talks.map((talk, index) => (
              <li key={index} className="py-2">
                <ExternalLink
                  href={talk.link}
                  classNames="w-full py-2 sm:flex items-start px-4 rounded-md group md:hover:bg-gray-100 md:dark:hover:bg-gray-800 motion-safe:transition-all motion-safe:duration-300"
                >
                  <div className="shrink-0 mb-4 sm:mb-0 sm:mr-4 text-center md:text-left">
                    <picture className="inline-flex rounded-lg overflow-hidden">
                      <Image
                        alt={talk.content.title}
                        src={talk.content.image}
                        className="w-full responsive object-cover rounded-md sm:h-32 sm:w-32 motion-safe:transform motion-safe:duration-300 group-hover:scale-110"
                        layout="intrinsic"
                        width={227}
                        height={128}
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="mt-3 text-xl text-neutral-600 lg:text-2xl font-medium leading-6 text-primary-500 dark:text-primary-300 group-hover:text-primary-400 group-hover:dark:text-primary-50">
                      {talk.content.title}
                    </h3>
                    <div className="flex flex-wrap items-start mt-2">
                      {talk.content.tags.map((tag, index) => {
                        <div key={index} className="bg-gray-300 text-gray-800 text-xs font-medium tracking-wide uppercase inline-flex items-center px-2.5 py-0.5 mr-2 mb-2 md:mb-1 rounded-md">
                          {tag}
                        </div>
                      })}
                      <div className="text-gray-800 dark:text-gray-100 text-sm font-medium inline-flex items-center mr-2 mb-2 md:mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-800 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {talk.content.where}
                      </div>
                      <div className="text-gray-800 dark:text-gray-100 text-sm font-medium inline-flex items-center mr-2 mb-2 md:mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-800 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(parseISO(talk.content.publishedAt), locale)}
                      </div>
                      <div className="text-gray-800 dark:text-gray-100 text-sm font-medium inline-flex items-center mb-2 md:mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-800 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {talk.content.duration}
                      </div>
                    </div>
                  </div>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

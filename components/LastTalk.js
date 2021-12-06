import Image from 'next/image'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { formatDate } from '@io/lib/dates'
import ExternalLink from '@io/components/ExternalLink'
import talks from '@io/data/talks'

export default function LastTalk() {
  const { locale } = useRouter()
  const { t } = useTranslation('talks')

  const last = talks.sort((a, b) => b.date - a.date) // Sort confs by date
                .filter((t) => t.active) // Filter just active confs
                .slice(0,1)[0] // Get the latest

  return (
    <article className="my-8">
      <ExternalLink
        href={last.link}
        classNames="flex flex-wrap items-start group"
      >
        <div className="w-full md:w-1/2">
          <picture className="inline-flex rounded-lg overflow-hidden">
            <Image
              alt={last.title[locale]}
              src={last.image}
              className="responsive object-cover w-full h-48 motion-safe:transform motion-safe:duration-300 group-hover:scale-110"
              layout="intrinsic"
              width={1280}
              height={720}
            />
          </picture>
        </div>
        <div className="flex flex-col items-start text-left md:flex-grow md:w-1/2 md:mb-0 xl:mt-0 md:pl-4">
          <h2 className="my-0 text-3xl md:text-4xl lg:text-5xl tracking-tighter font-semibold leading-none text-primary-500 dark:text-primary-300 group-hover:text-primary-400 group-hover:dark:text-primary-50 motion-safe:transition motion-safe:duration-300">
            {last.title[locale]}
          </h2>
          <div className="flex flex-wrap items-start mt-2">
            <div className="bg-gray-300 text-gray-800 text-xs font-medium tracking-wide uppercase inline-flex items-center px-2.5 py-0.5 mr-2 mb-2 md:mb-1 rounded-md">
              {last.badge[locale]}
            </div>
            <div className="text-gray-800 dark:text-gray-100 text-xs font-medium inline-flex items-center py-0.5 mr-2 mb-2 md:mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-800 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {last.where}
            </div>
            <div className="text-gray-800 dark:text-gray-100 text-xs font-medium inline-flex items-center py-0.5 mr-2 mb-2 md:mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-800 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(last.date, locale)}
            </div>
            <div className="text-gray-800 dark:text-gray-100 text-xs font-medium inline-flex items-center py-0.5 mb-2 md:mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-800 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {last.duration}
            </div>
          </div>
        </div>
      </ExternalLink>
    </article>
  )
}

import Image from 'next/image'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import ExternalLink from '@io/components/ExternalLink'
import confs from '@io/data/conferences'
import confTypes from '@io/lib/confTypes'
import { daysTo } from '@io/lib/dates'
import pluralize from '@io/lib/pluralize'

export default function Conferences() {
  const { locale } = useRouter()
  const { t } = useTranslation('home')
  const { YOUTUBE, UPCOMING, ENDED, TODAY } = confTypes

  return (
    <>
      {confs.map((conf, confKey) => (
        <div key={confKey} className="relative w-full 2xl:mr-0.5 mb-6 last:mb-0 shadow-md">
          {conf.new && (
            <span className="absolute z-10 bg-red-600 h-4 w-4 rounded-full -top-2 -right-2" />
          )}
          <ExternalLink
            href={conf.link}
            title={t('conf-view-title')}
            classNames="group sm:flex w-full overflow-hidden rounded-lg bg-white dark:bg-gray-200"
          >
            <div className="flex sm:relative w-full sm:w-1/4">
              <Image
                src={conf.image}
                alt={conf.title[locale]}
                className="responsive sm:object-cover rounded-t-lg sm:rounded-none w-full h-48"
                layout="intrinsic"
                width={1280}
                height={720}
              />
            </div>
            <div className="flex-1 flex-col px-6 pt-4 pb-2 rounded-b-lg sm:rounded-none bg-white dark:bg-gray-200 dark:hover:bg-gray-100">
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 group-hover:text-primary-600 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                {conf.title[locale]}
              </h3>
              <p className="leading-normal text-gray-800 group-hover:text-gray-500 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                {conf.description[locale]}
              </p>
              <div className="flex justify-center mt-4 sm:mt-2 sm:justify-end">
                {(conf.type === UPCOMING) && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {pluralize({
                      number: conf.remainingDays,
                      singular: t('conf-upcoming-text'),
                      plural: t('conf-upcoming-text-plural'),
                    })}
                  </span>
                )}

                {(conf.type === TODAY) && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-primary-100 bg-primary-400 rounded-full">
                    {t('conf-today-text')}
                  </span>
                )}

                {(conf.type === ENDED) && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-200 bg-gray-600 group-hover:opacity-60 rounded-full">
                    {t('conf-ended-text')}
                  </span>
                )}

                {(conf.type === YOUTUBE) && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-primary-100 bg-primary-600 rounded-full group-hover:opacity-60 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    {t('conf-play-youtube')}
                  </span>
                )}
              </div>
            </div>
          </ExternalLink>
        </div>
      ))}
    </>
  )
}

import Image from 'next/image'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import ExternalLink from '@io/components/ExternalLink'
import confs from '@io/data/conferences'
import confTypes from '@io/lib/confTypes'

const daysTo = (date) => {
  const today = new Date()
  const difference = date.getTime() - today.getTime()
  return Math.ceil(difference / (1000 * 3600 * 24))
}

export default function Conferences() {
  const { locale } = useRouter()
  const { t } = useTranslation('home')
  const { YOUTUBE, UPCOMING, ENDED } = confTypes

  return (
    <>
      {confs.map((conf, confKey) => (
        <div key={confKey} className="relative mb-6 last:mb-0 shadow-md">
          {conf.new && (
            <span className="absolute z-10 bg-red-600 h-4 w-4 rounded-full -top-2 -right-2" />
          )}
          <ExternalLink
            href={conf.link}
            title={t('conf-play-video')}
            classNames="group sm:flex w-full overflow-hidden rounded-lg bg-white dark:bg-gray-200 dark:hover:bg-gray-100 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform"
          >
            <div className="absolute sm:relative w-full sm:w-1/4 group-hover:opacity-80 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
              <Image
                src={conf.image}
                alt={conf.title[locale]}
                layout="fill"
                className="object-cover w-full h-48"
              />
            </div>
            <div className="flex-1 px-6 py-4 rounded-lg sm:rounded-none bg-white dark:bg-gray-200 dark:hover:bg-gray-100">
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 group-hover:text-primary-600 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                {conf.title[locale]}
              </h3>
              <p className="leading-normal text-gray-800 group-hover:text-gray-500 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                {conf.description[locale]}
              </p>
              <div className="flex justify-center mt-4 sm:mt-0 sm:justify-end">
                {(conf.type === UPCOMING) && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {t('confUpcomingText', {
                      days: daysTo(conf.upcomingDate)
                    })}
                  </span>
                )}

                {(conf.type === ENDED) && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-200 bg-gray-400 rounded-full">
                    {t('conf-ended-text')}
                  </span>
                )}

                {(conf.playable && conf.type === YOUTUBE) && (
                  <div className="text-primary-600 group-hover:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </ExternalLink>
        </div>
      ))}
    </>
  )
}

import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import lifeTimeline from '@io/data/life-timeline'

const formatYear = (year, locale) => {
  if (typeof year === 'string') {
    return year
  }

  if (typeof year === 'object') {
    return year[locale]
  }
}

const renderTimeline = (timeline, locale) => (
  <>
    {timeline.map((yearInTheTime, yearIndex) => (
      <div key={yearIndex}>
        {yearInTheTime.timeline.map((momentInTheTime, momentIndex) => (
          <div key={momentIndex} className="timeline-item flex flex-wrap w-full relative">
            {(momentIndex === 0) && (
              <h3 className="flex flex-wrap ml-12 pt-4 pb-4">
                {formatYear(yearInTheTime.year, locale)}
              </h3>
            )}
            <div className="flex w-full">
              <div className="timeline-icon">
                <span className="flex w-8 h-8 mt-2 text-gray-50 dark:text-primary-400 bg-primary-400 dark:bg-gray-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
              </div>
              <div className="flex-auto pl-4 mb-6">
                <div className="w-full h-full shadow-md rounded bg-white dark:bg-gray-800 p-2 overflow-auto">
                  <h4 className="pt-1 pb-2">{momentInTheTime.title[locale]}</h4>
                  {momentInTheTime.description[locale] && (
                    <p className="pb-2">{momentInTheTime.description[locale]}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
)

export default function Timeline() {
  const { t } = useTranslation('about')
  const { locale } = useRouter()
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  const shortTimeline = lifeTimeline.slice(0, 2)
  const fullTimeline = lifeTimeline.slice(2, lifeTimeline.length)

  const handleFullTimeline = () => showFullTimeline(true)

  return (
    <section className="pb-2 w-full">
      <div className="timeline w-full flex flex-wrap flex-col">
        <div className="timeline-item flex flex-wrap w-full relative">
          <div className="flex w-full">
            <div className="timeline-icon">
              <span className="flex w-8 h-8 mt-2 text-gray-50 dark:text-primary-400 bg-primary-400 dark:bg-gray-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </span>
            </div>
            <div className="flex-auto pl-4 mb-6">
              <div className="w-full h-full shadow-md rounded bg-white dark:bg-gray-800 p-2 overflow-auto">
                <h4 className="pt-1 pb-2">{t('about-timeline-now-title')}</h4>
                <p className="pb-2">{t('about-timeline-now-desc')}</p>
              </div>
            </div>
          </div>
        </div>
        {renderTimeline(shortTimeline, locale)}
        {isShowingFullTimeline && renderTimeline(fullTimeline, locale)}
      </div>

      {/* Load more and gradient the timeline to fade-out */}
      <div className="flex flex-col flex-wrap">
        <span className="bg-gradient-to-b from-transparent to-primary-50 dark:to-gray-900 w-full h-6"></span>
        {!isShowingFullTimeline && (
          <button onClick={handleFullTimeline} className="flex flex-no-wrap flex-justify-between w-44 px-6 py-2 ml-12 font-semibold text-center lg:text-left text-gray-50 hover:text-gray-50 bg-primary-600 group hover:bg-primary-400 rounded-lg motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:motion-safe:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span>{t('about-timeline-read-more')}</span>
          </button>
        )}
      </div>
    </section>
  )
}

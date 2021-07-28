import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import ExternalLink from '@io/components/ExternalLink'

export default function Header() {
  const { t } = useTranslation('common')
  const [ON_STATE, OFF_STATE] = ['on', 'off']
  const linksClassNames = 'px-1 md:px-4 py-1 mr-1 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform rounded-md focus:outline-none focus-visible:shadow-outline focus-visible:ring-2 ring-offset-current ring-offset-2'

  const [magicState, setMagicState] = useState(OFF_STATE)
  const revealTheMagic = (e) => {
    e.stopPropagation()
    setMagicState(ON_STATE)
  }

  return (
    <header>
      <div className="container items-center sm:pt-3 mx-auto">
        <div className="text-gray-700 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform bg-transparent">
          <div className="flex flex-row py-2 lg:py-5 mx-auto">
            {/* Page brand name */}
            <Link href="/">
              <a className="px-2 md:px-6 pr-2 md:pr-8 focus:outline-none ">
                <div className="inline-flex items-center">
                  <div className="w-1 h-1 p-1 mt-2 sm:w-2 sm:h-2 sm:p-2 sm:mt-3 sm:mr-1 rounded-full bg-gradient-to-tr from-gray-700 to-primary-400 dark:from-gray-50 dark:to-gray-400 motion-safe:hover:animate-ping motion-safe:hover:duration-75">
                  </div>
                  <h2 className="block py-2 pr-2 pl-1 text-2xl font-bold tracking-tighter cursor-pointer md:text-3xl lg:text-4xl lg:mr-8 text-gray-800 hover:text-primary-700 dark:text-gray-50 dark:hover:text-gray-400 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                    com
                  </h2>
                </div>
              </a>
            </Link>
            {/* Menu of the website */}
            <nav className="flex flex-wrap items-center justify-center text-sm md:text-base ml-auto mr-auto">
              <ul className="items-center inline-flex list-none">
                <li>
                  <Link href="/">
                    <a className={linksClassNames}>
                      {t('nav-home')}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className={linksClassNames}>
                      {t('nav-about')}
                    </a>
                  </Link>
                </li>
                <li>
                  <ExternalLink
                    classNames={linksClassNames}
                    href="https://iolivares.blog"
                    isIOLink={true}
                  >
                    {t('nav-blog')}
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    classNames={linksClassNames}
                    href="https://iolivares.photos"
                    isIOLink={true}
                  >
                    {t('nav-photos')}
                  </ExternalLink>
                </li>
              </ul>
            </nav>
            {/* TODO: Button CTA of Magic */}
            {/* <button
              className="w-150 px-8 py-2 my-2 font-medium border-none text-primary-500
              hover:text-gray-50 bg-gray-50 hover:bg-primary-500 dark:text-gray-100
              dark:hover:text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-200
              motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out
              motion-safe:transform focus:shadow-outline focus:outline-none focus:ring-2
              ring-offset-current ring-offset-2"
              onClick={revealTheMagic}
            >
              {magicState !== ON_STATE ? (
                <div className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002
                         2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="px-1 inline-block"></span>
                  {t('nav-reveal-magic')}
                </div>
              ) : t('nav-magic-revealed')}
            </button> */}
          </div>
        </div>       
      </div>
    </header>
  )
}

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'

import ExternalLink from '@io/components/ExternalLink'

export default function Header() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [isMenuActive, toggleMenu] = useState(false)

  const escapeAction = useCallback((event) => {
    if (event.keyCode === 27) {
      toggleMenu(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escapeAction, false)

    return () => {
      document.removeEventListener('keydown', escapeAction, false)
    }
  }, [escapeAction])
  
  const getNavClassName = (path) => {
    const currentPath = router.pathname.replace('/', '')
    const linksClassNames = 'px-1 md:px-4 py-2 mr-1 font-medium ' +
        'text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-400 ' +
        'motion-safe:transition-all motion-safe:transform ' +
        'rounded-md focus:outline-none focus-visible:shadow-outline ' +
        'focus-visible:ring-2 ring-offset-current ring-offset-2'

    return currentPath === path ? linksClassNames + ' nav-active' : linksClassNames
  }

  const toggleNavigation = () => {
    toggleMenu(!isMenuActive)
    document.querySelector('#navigation .nav-list').focus()
  }

  return (
    <>
      <div className={`${isMenuActive ? 'inline-block' : 'hidden'} h-[60px]`}></div>
      <header id="header" className={clsx(
        'w-full mx-auto max-w-5xl text-gray-700 bg-transparent',
        'motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform',
        { 'is-active': isMenuActive }
      )}>
        <nav id="navigation" className="flex flex-wrap flex-row justify-between">
          <Link href="/">
            <a className="pl-5 xl:pl-0 pr-6 lg:pr-8 rounded-md z-30 focus-visible:shadow-outline focus-visible:ring-2 ring-offset-current ring-offset-4">
              <div className="inline-flex items-center">
                <div className="w-1 h-1 lg:w-2 lg:h-2 p-2 mt-3 mr-1 rounded-full bg-gradient-to-tr from-gray-700 to-primary-400 dark:from-gray-50 dark:to-gray-400 motion-safe:hover:animate-ping motion-safe:hover:duration-75">
                </div>
                <span className="inline-flex items-center">
                  <h2 className="block py-2 pl-1 mr-1 text-3xl lg:text-4xl font-bold tracking-tighter cursor-pointer text-gray-800 hover:text-primary-700 dark:text-gray-50 dark:hover:text-gray-400 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                    com
                  </h2>
                </span>
              </div>
            </a>
          </Link>

          <ul className={clsx('nav-list', { 'is-active': isMenuActive })}>
            <li>
              <Link href="/">
                <a className={getNavClassName('')}>
                  {t('nav-home')}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={getNavClassName('blog')}>
                  {t('nav-blog')}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/talks">
                <a className={getNavClassName('talks')}>
                  {t('nav-talks')}
                </a>
              </Link>
            </li>
            <li>
              <ExternalLink
                classNames={getNavClassName('photos')}
                href="https://iolivares.photos"
                isIOLink={true}
              >
                {t('nav-photos')}
              </ExternalLink>
            </li>
            <li>
              <Link href="/uses">
                <a className={getNavClassName('uses')}>
                  {t('nav-uses')}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={getNavClassName('about')}>
                  {t('nav-about')}
                </a>
              </Link>
            </li>
          </ul>
          <button
            className={`hamburger hamburger--spin ${isMenuActive ? 'is-active' : ''}`}
            onClick={toggleNavigation}
            type="button"
            aria-label={t(`nav-a11y-mobile-${isMenuActive ? 'close' : 'open'}`)}
            aria-controls="navigation"
            aria-expanded={isMenuActive}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
      </header>
    </>
  )
}

import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import ExternalLink from 'components/ExternalLink'

export default function Header() {
  const { t } = useTranslation('common')
  const router = useRouter()
  
  const getNavClassName = (path) => {
    const currentPath = router.pathname.replace('/', '')
    const linksClassNames = 'px-1 md:px-4 py-1 mr-1 text-gray-700 dark:text-gray-200 ' +
        'hover:text-gray-900 dark:hover:text-gray-400 motion-safe:transition ' +
        'motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform ' +
        'rounded-md focus:outline-none focus-visible:shadow-outline ' +
        'focus-visible:ring-2 ring-offset-current ring-offset-2'

    return currentPath === path ? linksClassNames + ' nav-active' : linksClassNames
  }

  const isValidPath = (path) => (
    ['about', 'articles', 'talks', 'uses'].includes(path)
  )

  return (
    <header className="w-full mx-auto max-w-5xl">
      <div className="text-gray-700 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform bg-transparent">
        <div className="flex flex-wrap sm:flex-nowrap flex-row justify-center sm:justify-between">
          <Link href="/">
            <a className="pl-5 xl:pl-0 pr-2 md:pr-6 md:pr-8 focus:outline-none">
              <div className="inline-flex items-center">
                <div className="w-1 h-1 p-1 mt-2 md:w-2 md:h-2 md:p-2 md:mt-3 md:mr-1 rounded-full bg-gradient-to-tr from-gray-700 to-primary-400 dark:from-gray-50 dark:to-gray-400 motion-safe:hover:animate-ping motion-safe:hover:duration-75">
                </div>
                <span className="inline-flex items-center">
                  <h2 className="block py-2 pl-1 mr-1 text-2xl font-bold tracking-tighter cursor-pointer md:text-3xl lg:text-4xl text-gray-800 hover:text-primary-700 dark:text-gray-50 dark:hover:text-gray-400 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform">
                    com
                  </h2>
                </span>
              </div>
            </a>
          </Link>

          <nav className="w-full sm:w-auto text-center sm:text-right pt-0 sm:pt-4 px-2 sm:px-0 text-sm md:text-base">
            <ul className="flex-nowrap sm:flex-wrap items-center flow-root xs:inline-flex leading-8 xs:leading-6 list-none">
              <li>
                <Link href="/">
                  <a className={getNavClassName('')}>
                    {t('nav-home')}
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
              {/* <li>
                <Link href="/articles">
                  <a className={getNavClassName('articles')}>
                    {t('nav-articles')}
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/talks">
                  <a className={getNavClassName('talks')}>
                    {t('nav-talks')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/uses">
                  <a className={getNavClassName('uses')}>
                    {t('nav-uses')}
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
            </ul>
          </nav>
        </div>
      </div>       
    </header>
  )
}

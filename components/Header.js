import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import ExternalLink from '@io/components/ExternalLink'

export default function Header() {
  const { t } = useTranslation('common')

  return (
    <header>
      <nav className="bg-gray-50 dark:bg-transparent">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          {/* Page brand name */}
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray:300">
                  .com
                </a>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link href="/">
                <a
                  className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                >
                  {t('nav-home')}
                </a>
              </Link>
              <Link href="/about">
                <a
                  className="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                >
                  {t('nav-about')}
                </a>
              </Link>
              <ExternalLink
                classNames="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                href="https://iolivares.blog"
                isIOLink={true}
              >
                {t('nav-blog')}
              </ExternalLink>
              <ExternalLink
                classNames="my-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                href="https://iolivares.blog"
                isIOLink={true}
              >
                {t('nav-photos')}
              </ExternalLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

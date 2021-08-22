import { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Listbox, Transition } from '@headlessui/react'

import ExternalLink from '@io/components/ExternalLink'
import Langs from '@io/lib/supportedLangs'
import Metadata from '@io/data/metadata'
import { email, sendEmail, domain, name } from '@io/lib/email'

export default function Footer() {
  const defaultLang = 'en'
  const { push, pathname, asPath, query, locale } = useRouter()
  const [ selected, setSelected ] = useState(locale)
  const { t } = useTranslation('common')
  const linksClassNames = "px-2 sm:px-4 py-1 md:mr-1 rounded-md text-gray-50 hover:text-gray-300 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform rounded-md focus:outline-none focus-visible:shadow-outline focus-visible:ring-2 ring-offset-current ring-offset-2"

  const setLanguage = (newLang) => {
    setSelected(newLang)
    push({ pathname, query }, asPath, { locale: newLang })
  }

  return (
    <>
      <div className="container mx-auto flex flex-col text-left pt-5 pb-6 px-3 md:px-0">
        <pre className="text-xs">
          &gt; $ cd ~/io{locale !== defaultLang ? '/' + locale : ''}{asPath}
          <span className="w-1 h-4 inline-block bg-primary-800 dark:bg-gray-400 ml-2 rounded-sm motion-safe:animate-ping motion-safe:duration-75">
            {` `}
          </span>
        </pre>
      </div>
      <footer className="bg-gray-900 shadow-xl">
        <div className="flex flex-col flex-wrap justify-center p-5 md:flex-row">
          <nav className="flex flex-wrap items-center justify-center w-full mx-auto mb-6 text-sm md:text-base">
            <Link href="/about">
              <a className={linksClassNames}>
                {t('nav-about')}
              </a>
            </Link>
            <span>·</span>
            <ExternalLink
              href="https://iolivares.blog"
              isIOLink={true}
              classNames={linksClassNames}
            >
              {t('nav-blog')}
            </ExternalLink>
            <span>·</span>
            <ExternalLink
              href="https://iolivares.photos"
              isIOLink={true}
              classNames={linksClassNames}
            >
              {t('nav-photos')}
            </ExternalLink>
            <span>·</span>
            <Link href="/uses">
              <a className={linksClassNames}>
                {t('nav-uses')}
              </a>
            </Link>
            <span>·</span>
            <ExternalLink
              href="https://status.iolivares.com"
              classNames={linksClassNames}
            >
              {t('nav-status')}
            </ExternalLink>
          </nav>
          <div className="inline-flex justify-center w-full mx-auto sm:ml-auto sm:mt-0">
            {Metadata.SOCIAL_NETWORKS.map((icon, iconIdx) => (
              <ExternalLink
                href={icon.url}
                classNames="mx-2 sm:mx-4 hover:opacity-75 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform focus:outline-none focus-visible:shadow-outline focus-visible:ring-2 ring-offset-current ring-offset-3"
                key={iconIdx}
              >
                <Image
                  src={`/static/images/icons/${icon.name}.png`}
                  alt={icon.name}
                  width="22"
                  height="22"
                  className="filter brightness-0 invert"
                />
              </ExternalLink>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col flex-wrap justify-center pt-5 md:flex-row">
            <div className="text-gray-100 w-full text-center text-xs md:text-ms">
              <p>
                {t('footer-email-me')}
                {` `}
                <a
                  className="ml-1 inline-block text-primary-400 hover:text-primary-300 email-protection"
                  data-domain={domain}
                  data-name={name}
                  data-lang={locale}
                  href="#"
                  onClick={sendEmail}
                  rel="noopener"
                >
                  {email}
                </a>
              </p>
              <p>{t('footer-socialmedia-me')}</p>
            </div>
          </div>
        </div>
        <div className="w-full px-8 mt-4 bg-gray-100 dark:bg-gray-800">
          <div className="container py-5 mx-auto flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-start md:items-center">
            <div className="text-xs text-left text-gray-800 dark:text-gray-50">
              <p>
                {`© ${t('full-name')} 2006-${(new Date()).getFullYear()}`}.
                {` `}
                {t('footer-copyright')}
              </p>
              <p>
                {t('footer-creativecommons')}
                {` `}
                <ExternalLink
                  href={`http://creativecommons.org/licenses/by-nc/4.0/deed.${locale}`}
                  classNames="inline-block text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
                >
                  CC BY-NC 4.0
                </ExternalLink>
              </p>
              <p>
                {t('footer-doodle-credits')}
                {` `}
                <ExternalLink
                  href="https://www.instagram.com/maetschl.cartoons/"
                  classNames="inline-block text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
                >
                  Maetschl Cartoons.
                </ExternalLink>
              </p>
            </div>
            <div className="text-sm text-left text-gray-800 dark:text-gray-50 mt-3 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
              <div className="w-40 mt-2">
                <Listbox value={selected} onChange={setLanguage}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-700 dark:focus-visible:ring-gray-50 focus-visible:ring-offset-gray-700 dark:focus-visible:ring-offset-gray-300 sm:text-sm">
                      <span className="block truncate">{t(`language-${locale}`)}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400 dark:text-gray-50"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-50 dark:bg-gray-900 backdrop-blur backdrop-filter rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {Langs.map((lang, langIdx) => (
                          <Listbox.Option
                            key={langIdx}
                            className={({ active }) =>
                              `${active ? 'text-primary-500 bg-gray-100 dark:bg-gray-100' : 'text-gray-900 dark:text-gray-100'}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                            }
                            value={lang}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`${selected ? 'font-medium' : 'font-normal'
                                    } block truncate`}
                                >
                                  {t(`language-${lang}`)}
                                </span>
                                {selected ? (
                                  <span
                                    className={`${active ? 'text-primary-500' : 'text-gray-100'
                                      }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container mx-auto p-5 text-xs text-center text-gray-800 dark:text-gray-100">
        <p className="inline-block">
          <span>{t('footer-made-width')}</span>
          <span className="ml-2 mr-3">❤️</span>
          <span>&amp;</span>
          <span className="ml-3 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          <span>{t('footer-made-from')}</span>
          <span className="ml-2 mr-3">🇨🇱</span>
          <span className="mr-2">
            <Link href="/uses">
              {t('footer-made-with')}
            </Link>
          </span>
        </p>
      </div>
    </>
  )
}

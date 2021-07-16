import Link from 'next/link';
import { useTranslation } from 'next-i18next'

import ExternalIOLink from '@io/components/ExternalIOLink'

export default function Header() {
  const { t } = useTranslation('common')

  return (
    <header>
      <nav className="flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto">
        <div>
          <Link href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
              {t('nav-home')}
            </a>
          </Link>
          <Link href="/about">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
              {t('nav-about')}
            </a>
          </Link>
          <ExternalIOLink href="https://iolivares.blog">
            {t('nav-blog')}
          </ExternalIOLink>
          <ExternalIOLink href="https://iolivares.photos">
            {t('nav-photos')}
          </ExternalIOLink>
        </div>
      </nav>
    </header>
  );
}

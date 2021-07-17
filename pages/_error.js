import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Container from '@io/components/Container'

import errorImage404 from '../public/static/images/404_marcos.gif'

const Error = () => {
  const { t } = useTranslation('error')

  return (
    <Container title="Something went wrong | Iván Olivares Rojas">
      <div className="flex flex-col justify-center max-w-lg mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {t('title')}
        </h1>
        <p className="max-w-prose text-gray-600 dark:text-gray-400 mb-8">
          {t('description')}
        </p>
        <Image
          alt={`Error 404 - Marcos Heredia`}
          src={errorImage404}
          blurDataURL="LAF=px00.mV;O]IAIuIqH^bvi{-p"
          placeholder="blur"
          className="rendering-crisp-edges"
          priority={true}
        />
        <Link href="/">
          <a className="max-w-prose p-1 my-4 sm:p-4 w-64 font-semibold mx-auto bg-gradient-to-r from-green-400 to-blue-500 text-center rounded-lg text-white hover:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-indigo-400 focus-visible:opacity-90 select-none shadow">
            {t('cta-link')}
          </a>
        </Link>
      </div>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'error']),
    },
  }
}

export default Error
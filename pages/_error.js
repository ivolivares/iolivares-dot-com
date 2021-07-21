// import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Container from '@io/components/Container'
import ExternalLink from '@io/components/ExternalLink'

import errorImageSource from '../public/static/images/khaby-lame-by-gabriel-soares.png'

const Error = ({ statusCode }) => {
  const { t } = useTranslation('error')
  let pageTitle = t('error-404-page-title')
  let title = t('error-404-title')
  let description = t('error-404-description')

  if(statusCode !== 404) {
    pageTitle = t('error-page-title')
    title = t('error-title')
    description = t('error-description')
  }

  return (
    <Container
      title={pageTitle}
      classNames="container pt-5 px-64 mx-auto flex flex-col justify-center w-full m-4 mx-auto shadow-2xl"
    >
      <div className="flex flex-col justify-center mx-auto w-full">
        <h1 className="mt-10 mb-4 px-20 font-bold text-3xl md:text-5xl tracking-tight text-gray-800 dark:text-gray-50">
          {title}
        </h1>
        <p className="px-20 text-gray-700 dark:text-gray-50">
          {description}
        </p>
        {/* <Link href="/">
          <a className="max-w-full p-1 sm:p-4 w-64 font-semibold mx-auto text-center rounded-lg bg-gray-400 text-gray-100 hover:text-gray-800 cursor-pointer shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 select-none">
            {t('error-cta-link')}
          </a>
        </Link> */}
        <div className="flex justify-center mx-auto max-w-xl">
          <Image
            alt={`Khaby Lame (TikTok actor), drawing in 3D by Gabriel Soares`}
            src={errorImageSource}
            layout="intrinsic"
          />
        </div>
        <p className="mb-1 text-center text-xs italic">
          <ExternalLink
            href="https://www.instagram.com/gabriel.soareszz/"
            classNames="text-purple-500 hover:text-purple-400"
          >
            {t('drawing-credits')}
          </ExternalLink>
        </p>
      </div>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      statusCode: 429,
      ...await serverSideTranslations(locale, ['common', 'error']),
    },
  }
}

export default Error
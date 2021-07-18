import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Container from '@io/components/Container'
import ExternalLink from '@io/components/ExternalLink'

import errorImageSource from '../public/static/images/error_image.jpg'

const Error = () => {
  const { t } = useTranslation('error')

  return (
    <Container
      title="Something went wrong | Iván Olivares Rojas"
      classNames="container pt-20 pb-10 px-44 mx-auto flex flex-col justify-center px-8 w-full m-4 mx-auto shadow-2xl bg-khaby-lame"
    >
      <div className="flex flex-col justify-center mx-auto w-full">
        <div className="flex justify-center mx-auto max-w-xl border-b-2 border-gray-300">
          <Image
            alt={`Khaby Lame (TikTok actor), drawing in 3D by Gabriel Soares`}
            src={errorImageSource}
            blurDataURL="LXJREtf+_NoK?ujsRQjtxuf6Mya{"
            placeholder="blur"
            layout="intrinsic"
          />
        </div>
        <p className="mt-1 text-center text-sm text-color-300 dark:text-color:700 italic">
          <ExternalLink
            href="https://www.instagram.com/gabriel.soareszz/"
          >
            {t('drawing-credits')}
          </ExternalLink>
        </p>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-10 mb-4 text-gray-800">
          {t('title')}
        </h1>
        <p className="text-gray-700 mb-8">
          {t('description')}
        </p>
        <Link href="/">
          <a className="max-w-full p-1 my-4 sm:p-4 w-64 font-semibold mx-auto text-center rounded-lg bg-gray-400 text-gray-100 hover:text-gray-800 cursor-pointer shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 select-none">
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
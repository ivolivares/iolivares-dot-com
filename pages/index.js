import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Container from '@io/components/Container'
import MyDoodleAnimated from '@io/components/MyDoddleAnimated'
import MyDoodle from '../public/static/images/doodle.png'

const Home = () => {
  const router = useRouter()
  const { t } = useTranslation('home')

  return (
    <Container>
      <section className="container flex flex-col py-16 mx-auto lg:items-center md:flex-row">
        {/* No motion, static image. */}
        <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2 dark:bg-gray-300 rounded-full motion-safe:hidden motion-reduce:block">
          <Image
            src={MyDoodle}
            alt="My Doodle by Maetschl Cartoons"
            blurDataURL="epQ9+Kae_LozjHt6ayWBoLoe.6fkR7o0M{WUoLs:WCR*%Lj[IVWBxt"
            placeholder="blur"
            layout="intrinsic"
            width="512"
            height="512"
          />
        </div>

        {/* Motion available, go animations! */}
        <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2 dark:bg-gray-300 rounded-full motion-safe:block motion-reduce:hidden">
          <MyDoodleAnimated />
        </div>

        {/* Headline text */}
        <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2">
          <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100 lg:text-5xl title-font">
            <span className="mr-3 inline-block">👋</span>
            <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-primary-300 to-primary-500">
              {t('hey-iam-io')}
            </span>
            {/* TODO: Audio TTS icon */}
            <span className="ml-3 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </span>
          </h1>
          <p className="mb-8 ml-10 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50 ">
            {t('hey-first-line')}
          </p>
          <p className="mb-8 ml-10 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
            {t('hey-second-line')}
          </p>
          <p className="mb-8 ml-10 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
            {t('hey-third-line')}
          </p>
          {/* eslint-disable-next-line max-len */}
          {/* <p className="mb-8 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
            TODO: Spotify now playing component
          </p> */}
          <div className="flex flex-col justify-left lg:flex-row">
            <Link href="/about">
              <a className="flex items-center px-6 py-2 mt-auto font-semibold text-gray-50 hover:text-gray-50 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform bg-primary-400 rounded-lg hover:bg-primary-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                {t('hey-button-cta')}
              </a>
            </Link>
            <p className="mt-2 text-sm text-left text-gray-800 dark:text-gray-50 md:ml-6 md:mt-0">
              {t('hey-headline-cta')}
              <br className="hidden lg:block" />
              <Link href="/about">
                <a className="inline-flex items-center font-semibold text-primary-400 md:mb-2 lg:mb-0 hover:text-primary-500">
                  {t('hey-link-cta')}
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
  revalidate: 3600, // 3600 seconds = 1 hour
})

export default Home
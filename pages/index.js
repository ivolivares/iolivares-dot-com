import Link from 'next/link'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import MainLayout from '@io/layouts/Main'
import TransWithLinks from '@io/components/TransWithLinks'
import { MyDoodleAnimated } from '@io/components/MyDoodle'
import MyDoodle from '../public/static/images/doodle.png'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
  revalidate: 3600, // 1 hour
})

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <section className="flex flex-col pt-4 md:pt-16 mx-auto items-top lg:items-center md:flex-row">
      {/* No motion, static image. */}
      <div className="m-auto mb-5 md:my-0 w-1/2 md:w-full xl:w-5/6 motion-safe:hidden justify-center flex-col motion-reduce:flex">
        <Image
          src={MyDoodle}
          alt="My Doodle by Maetschl Cartoons"
          priority={true}
          placeholder="blur"
          layout="intrinsic"
          className="dark:bg-gray-300 rounded-full"
          width="512"
          height="512"
        />
      </div>

      {/* Motion available, go animations! */}
      <div className="m-auto mb-5 md:my-0 w-1/2 md:w-full xl:w-5/6 motion-safe:flex justify-center flex-col motion-reduce:hidden">
        <MyDoodleAnimated />
      </div>

      {/* Headline text */}
      <div className="flex flex-col items-start text-left xl:flex-grow">
        <h1 className="mb-8 title-font text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
          <span className="mr-3 inline-block">👋</span>
          <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-primary-300 to-primary-500">
            {t('hey-iam-io')}
          </span>
          {/* TODO: Audio TTS icon */}
          {/* <span className="ml-2 hidden sm:inline-block"> */}
          <span className="ml-2 hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-primary-200 hover:text-primary-600 dark:text-gray-600 dark:hover:text-gray-100 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          </span>
        </h1>
        <p className="mb-4 md:ml-5 lg:ml-10 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50 ">
          <TransWithLinks
            i18nText={t('hey-first-line')}
          />
        </p>
        <p className="mb-4 md:ml-5 lg:ml-10 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
          <TransWithLinks
            i18nText={t('hey-second-line')}
          />
        </p>
        <p className="mb-8 md:ml-5 lg:ml-10 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
          {t('hey-third-line')}
        </p>
        {/* eslint-disable-next-line max-len */}
        {/* <p className="mb-8 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
          TODO: Spotify now playing component
        </p> */}
        <div className="flex flex-col justify-end lg:flex-row w-full">
          <Link href="/about">
            <a className="w-auto px-6 py-2 mt-auto font-semibold text-center lg:text-left text-gray-50 hover:text-gray-50 bg-primary-600 hover:bg-primary-400 rounded-lg motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              {t('hey-button-cta')}
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

Home.Layout = MainLayout

export default Home
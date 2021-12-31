import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useIsFontReady } from '@io/lib/useIsFontReady'
import MainLayout from '@io/layouts/MainLayout'
import TransWithLinks from '@io/components/TransWithLinks'
import MyDoodleLoader from '@io/components/MyDoodle/MyDoodleLoader'
import MyDoodle from '@io/images/doodle.png'
import NowPlaying from '@io/components/NowPlaying'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
  revalidate: 1800,
})

const Home = () => {
  const { t } = useTranslation('home')
  const isFontReady = useIsFontReady()
  const MyDoodleAnimated = dynamic(() => import('@io/components/MyDoodle/MyDoodleAnimated'), {
    loading: () => <MyDoodleLoader />,
    ssr: false,
  })

  return (
    <MainLayout>
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
          {isFontReady && <MyDoodleAnimated />}
        </div>

        {/* Headline text */}
        <div className="flex flex-col items-start text-left xl:flex-grow headlines">
          <h1 className="mb-8 relative title-font text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-left text-gray-800 dark:text-gray-100">
            <span className="mr-3 inline-block">👋</span>
            <span className="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-primary-300 to-primary-500">
              {t('hey-iam-io')}
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
          <p className="mb-4 md:ml-5 lg:ml-10 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
            {t('hey-third-line')}
          </p>
          <p className="mb-8 md:ml-5 lg:ml-10 min-h-14 text-base leading-relaxed text-left text-gray-800 dark:text-gray-50">
            <NowPlaying />
          </p>
          <div className="md:ml-5 lg:ml-10 flex flex-col justify-end lg:flex-row w-full">
            <Link href="/about">
              <a className="cta w-full lg:w-auto px-6 py-2 mt-auto font-semibold text-center lg:text-left text-gray-50 hover:text-gray-50 bg-primary-600 hover:bg-primary-400 rounded-lg z-0 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                {t('hey-button-cta')}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home
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
      <section className="text-gray-800">
        <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
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
              {t('hey-iam-io')}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700 ">
              {t('hey-first-line')}
            </p>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700 ">
              {t('hey-second-line')}
            </p>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700 ">
              {t('hey-third-line')}
            </p>
            {/* <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700 ">
              TODO: Spotify now playing component
            </p> */}
            <div className="flex flex-col justify-left lg:flex-row">
              <Link href="/about">
                <a className="flex items-center px-6 py-2 mt-auto font-semibold text-gray-50 hover:text-gray-50 motion-safe:transition motion-safe:duration-500 motion-safe:ease-in-out motion-safe:transform bg-primary-400 rounded-lg hover:bg-primary-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                  {t('hey-button-cta')}
                </a>
              </Link>
              <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
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
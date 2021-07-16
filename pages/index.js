import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Container from '@io/components/Container';

const Home = () => {
  const router = useRouter()
  const { t } = useTranslation('about')

  return (
    <Container>
      <div className="">
        <h1 className="">
          {t('hey-greetings')}
        </h1>
      </div>
      <br />
      <Link
        href="/"
        locale={router.locale === 'es' ? 'en' : 'es'}
      >
        <a className="max-w-prose p-1 my-4 sm:p-4 w-64 font-semibold mx-auto bg-gradient-to-r from-green-400 to-blue-500 text-center rounded-lg text-white hover:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-indigo-400 focus-visible:opacity-90 select-none shadow">{t('change-locale')}</a>
      </Link>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'about']),
  },
  revalidate: 3600, // 3600 seconds = 1 hour
})

export default Home
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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {t('hey-greetings')}
        </h1>
      </div>
      <br />
      <Link
        href="/"
        locale={router.locale === 'es' ? 'en' : 'es'}
      >
        <button>{t('change-locale')}</button>
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
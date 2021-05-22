import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeadWithMetas from '@io/components/head/head'
import JSONLD from '@io/lib/jsonld'
import styles from '@io/styles/Home.module.css'
import Layout from '@io/components/Layout'
import About from '@io/components/about'
import Background from '@io/components/about/Background'

const Home = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className={styles.container}>
      <HeadWithMetas />
      <Layout>
        <About />
        <br />
        <Link
          href="/"
          locale={router.locale === 'es' ? 'en' : 'es'}
        >
          <button>{t('change-locale')}</button>
        </Link>
        <Background />
      </Layout>
      <JSONLD />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'about']),
  },
})

export default Home
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Error from './_error'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'error']),
    },
  }
}

export default Error
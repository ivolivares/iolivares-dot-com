import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Error from './_error'

export const getStaticProps = async ({ locale }) => ({
  props: {
    statusCode: 404,
    ...await serverSideTranslations(locale, ['common', 'error']),
  },
})

export default Error
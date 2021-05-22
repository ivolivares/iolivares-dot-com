import { appWithTranslation } from 'next-i18next'

import '../styles/globals.css'

function ioApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(ioApp)

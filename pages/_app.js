import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'
import { useAnalytics } from '@io/lib/analytics'

import '@io/styles/globals.css'

const nextI18NextConfig = require('../next-i18next.config')

const IoApp = ({ Component, pageProps }) => {
  // Load analytics only once durint the app lifecycle
  useAnalytics()

  return (
    <ThemeProvider attribute="media">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(IoApp, nextI18NextConfig)
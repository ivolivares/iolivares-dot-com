import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'
import { useAnalytics } from '@io/lib/analytics'

import '@io/styles/globals.css'

const nextI18NextConfig = require('../next-i18next.config')

const Yourself = ({ children }) => children

const IoApp = ({ Component, pageProps }) => {
  // Load analytics only once during the app lifecycle
  useAnalytics()

  // Layout
  const Layout = Component.Layout || Yourself

  return (
    <ThemeProvider attribute="media">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(IoApp, nextI18NextConfig)
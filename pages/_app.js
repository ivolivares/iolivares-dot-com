import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'
import usePanelBear from '@io/hooks/panelbear'

import '@io/styles/globals.css'

const nextI18NextConfig = require('../next-i18next.config')

const ioApp = ({ Component, pageProps }) => {
  // Load Panelbear only once durint the app lifecycle
  usePanelBear('H9NHZMjdHOV', {
    honorDNT: true, // Ethical config
    // Uncomment next to debug on localhost
    // debug: true,
  })

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(ioApp, nextI18NextConfig)
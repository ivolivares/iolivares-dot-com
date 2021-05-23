import Document, { Html, Head, Main, NextScript } from 'next/document'

import Metadata from '@io/data/metadata'
import JSONLD from '@io/data/json-ld'

class ioDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/site.webmanifest" rel="manifest" />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color={Metadata.APP.SAFARI_PINNED_COLOR}
            href="/static/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content={Metadata.APP.COLOR} name="theme-color" />
          <meta content={Metadata.APP.COLOR} name="msapplication-TileColor" />
          <meta
            content="/browserconfig.xml"
            name="msapplication-config"
          />
          <meta
            name="apple-mobile-web-app-title"
            content={Metadata.APP.NAME}
          />
          <meta
            name="application-name"
            content={Metadata.APP.NAME}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <JSONLD />
        </body>
      </Html>
    )
  }
}

export default ioDocument

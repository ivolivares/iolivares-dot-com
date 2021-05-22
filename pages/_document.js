import Document, { Html, Head, Main, NextScript } from 'next/document'
import JSONLD from '@io/data/json-ld'

class ioDocument extends Document {
  render() {
    return (
      <Html lang="en">
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
            color="#818181"
            href="/static/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/browserconfig.xml"
            name="msapplication-config"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Iv&aacute;n Olivares"
          />
          <meta
            name="application-name"
            content="Iv&aacute;n Olivares"
          />
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
          <JSONLD />
        </body>
      </Html>
    )
  }
}

export default ioDocument

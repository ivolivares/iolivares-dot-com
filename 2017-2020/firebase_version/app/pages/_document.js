import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import JSONLD from '../helpers/jsonld'
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: 'https://2656457e20134504ada34a934f6f10ad@o467903.ingest.sentry.io/5495048',
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const constants = {
  APP: {
    NAME: 'Iván Olivares',
    COLOR: '#00C569'
  },
  NAME: 'Iván Olivares Rojas',
  DESCRIPTION: 'Technical leader and software architect centered on producing beautiful interfaces and experiences for consumers.',
  IMAGE: 'https://iolivares.com/static/images/emojis/technologist.png',
  URL: 'https://www.iolivares.com',
  SOCIAL: {
    IMAGE: 'https://iolivares.com/static/images/media/social.png'
  },
  TWITTER: {
    AT: '@ivolivares',
    IMAGE: 'https://iolivares.com/static/images/media/social-twitter.png'
  }
}

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge, chrome=1" httpEquiv="X-UA-Compatible" />
          <meta content={ constants.DESCRIPTION } name="description" />
          <link href={ constants.IMAGE } rel="shortcut icon" />
          <link href={ constants.IMAGE } rel="icon" sizes="120x120" />
          <link href={ constants.IMAGE } rel="apple-touch-icon" sizes="120x120" />
          <link href={ constants.IMAGE } rel="icon" type="image/png" />
          <meta content={ constants.IMAGE } name="image" />
          <link href="/static/manifest.json" rel="manifest" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content={ constants.APP.NAME } name="application-name" />
          <meta content={ constants.APP.NAME } name="apple-mobile-web-app-title" />
          <meta content={ constants.APP.COLOR } name="theme-color" />
          <meta content={ constants.APP.COLOR } name="msapplication-navbutton-color" />
          <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
          <meta content="/" name="msapplication-starturl" />
          { /* Schema.org for Google */ }
          <meta content={ constants.NAME } itemProp="name" />
          <meta content={ constants.DESCRIPTION } itemProp="description" />
          <meta content={ constants.IMAGE } itemProp="image" />
          { /* Twitter */ }
          <meta content="summary" name="twitter:card" />
          <meta content={ constants.NAME } name="twitter:title" />
          <meta content={ constants.DESCRIPTION } name="twitter:description" />
          <meta content={ constants.TWITTER.AT } name="twitter:site" />
          <meta content={ constants.TWITTER.AT } name="twitter:creator" />
          <meta content={ constants.TWITTER.IMAGE } name="twitter:image:src" />
          { /* Open Graph general (Facebook, Pinterest & Google+) */}
          <meta content={ constants.NAME } name="og:title" />
          <meta content={ constants.DESCRIPTION } name="og:description" />
          <meta content={ constants.SOCIAL.IMAGE } name="og:image" />
          <meta content="image/png" name="og:image:type" />
          <meta content={ constants.URL } name="og:url" />
          <meta content={ constants.NAME } name="og:site_name" />
          <meta content="en_US" name="og:locale" />
          <meta content="1107428094" name="fb:admins" />
          <meta content="website" name="og:type" />
          <meta content="initial-scale=1.0, width=device-width" name="viewport" />
          <link href="//fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
          <link href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" rel="stylesheet" type="text/css" />
          <link href="/static/styles/main.css" rel="stylesheet" />
          <link href="/static/styles/main.dark.css" rel="stylesheet" />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start": new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,"script","dataLayer","GTM-KN2PTKD");`}} />
        </Head>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN2PTKD" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
        <Main />
        <NextScript />
        <JSONLD />
      </html>
    )
  }
}
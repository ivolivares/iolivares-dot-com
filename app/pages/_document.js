import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

const icon = "/static/images/emojis/technologist.png"

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
          <meta content="Front-end software developer focused on building beautiful interfaces and experiences." name="description" />
          <link href="/static/manifest.json" rel="manifest" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="Iván Olivares" name="application-name" />
          <meta content="Iván Olivares" name="apple-mobile-web-app-title" />
          <meta content="#00C569" name="theme-color" />
          <meta content="#00C569" name="msapplication-navbutton-color" />
          <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
          <meta content="/" name="msapplication-starturl" />
          <link href={ icon } rel="icon" sizes="120x120" />
          <link href={ icon } rel="apple-touch-icon" sizes="120x120" />
          <link href={ icon } rel="icon" type="image/png" />
          <meta content="initial-scale=1.0, width=device-width" name="viewport" />
          <link href="//fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
          <link href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" rel="stylesheet" type="text/css" />
          <link href="/static/styles/main.css" rel="stylesheet" />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start": new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,"script","dataLayer","GTM-KN2PTKD");`}} />
        </Head>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN2PTKD" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
        <Main />
        <NextScript />
      </html>
    )
  }
}
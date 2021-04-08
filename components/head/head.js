import Head from 'next/head'
import constants from './constants'

export default function HeadWithMetas({title = 'Iván Olivares Rojas | Software Architect'}) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta content="IE=edge, chrome=1" httpEquiv="X-UA-Compatible" />
      <meta content={constants.DESCRIPTION} name="description" />
      <link rel="apple-touch-icon" sizes="57x57" href={`${constants.FAVICON_ROUTE}/apple-icon-57x57.png`} />
      <link rel="apple-touch-icon" sizes="60x60" href={`${constants.FAVICON_ROUTE}/apple-icon-60x60.png`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`${constants.FAVICON_ROUTE}/apple-icon-72x72.png`} />
      <link rel="apple-touch-icon" sizes="76x76" href={`${constants.FAVICON_ROUTE}/apple-icon-76x76.png`} />
      <link rel="apple-touch-icon" sizes="114x114" href={`${constants.FAVICON_ROUTE}/apple-icon-114x114.png`} />
      <link rel="apple-touch-icon" sizes="120x120" href={`${constants.FAVICON_ROUTE}/apple-icon-120x120.png`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`${constants.FAVICON_ROUTE}/apple-icon-144x144.png`} />
      <link rel="apple-touch-icon" sizes="152x152" href={`${constants.FAVICON_ROUTE}/apple-icon-152x152.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${constants.FAVICON_ROUTE}/apple-icon-180x180.png`} />
      <link rel="icon" type="image/png" sizes="192x192" href={`${constants.FAVICON_ROUTE}/android-icon-192x192.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${constants.FAVICON_ROUTE}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="96x96" href={`${constants.FAVICON_ROUTE}/favicon-96x96.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${constants.FAVICON_ROUTE}/favicon-16x16.png`} />
      <meta content={constants.IMAGE} name="image" />
      <link href="/manifest.json" rel="manifest" />
      <meta content="yes" name="mobile-web-app-capable" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content={constants.APP.NAME} name="application-name" />
      <meta content={constants.APP.NAME} name="apple-mobile-web-app-title" />
      <meta content={constants.APP.COLOR} name="theme-color" />
      <meta content={constants.APP.COLOR} name="msapplication-navbutton-color" />
      <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
      <meta content="/" name="msapplication-starturl" />
      { /* Schema.org for Google */}
      <meta content={constants.NAME} itemProp="name" />
      <meta content={constants.DESCRIPTION} itemProp="description" />
      <meta content={constants.IMAGE} itemProp="image" />
      { /* Twitter */}
      <meta content="summary" name="twitter:card" />
      <meta content={constants.NAME} name="twitter:title" />
      <meta content={constants.DESCRIPTION} name="twitter:description" />
      <meta content={constants.TWITTER.AT} name="twitter:site" />
      <meta content={constants.TWITTER.AT} name="twitter:creator" />
      <meta content={constants.TWITTER.IMAGE} name="twitter:image:src" />
      { /* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta content={constants.NAME} name="og:title" />
      <meta content={constants.DESCRIPTION} name="og:description" />
      <meta content={constants.SOCIAL.IMAGE} name="og:image" />
      <meta content="image/png" name="og:image:type" />
      <meta content={constants.URL} name="og:url" />
      <meta content={constants.NAME} name="og:site_name" />
      <meta content="en_US" name="og:locale" />
      <meta content="1107428094" name="fb:admins" />
      <meta content="website" name="og:type" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <link href="//fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" rel="stylesheet" type="text/css" />
      {/* <link href="/static/styles/main.css" rel="stylesheet" />
      <link href="/static/styles/main.dark.css" rel="stylesheet" /> */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start": new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,"script","dataLayer","GTM-KN2PTKD");`}} />
    </Head>
  )
}
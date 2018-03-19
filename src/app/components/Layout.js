import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

import '../styles/layout.less'

const iconBucket = 'https://firebasestorage.googleapis.com/v0/b/iodotcomnext.appspot.com/o/images%2Femojis%2Ftechnologist.png?alt=media&token=ebc86581-d3b8-4252-8357-81d1e96aa273'

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: true
    }
    this.updateLoaded()
  }

  updateLoaded() {
    Router.onRouteChangeStart = (url) => {
      console.log(`Loading: ${url}`)
      this.setState({ loaded: false })
      console.log(this.state)
    }
    Router.onRouteChangeComplete = () => this.setState({ loaded: true })
    Router.onRouteChangeError = () => this.setState({ loaded: true })
  }

  render() {
    const { children, title = 'Iván Olivares Rojas | Front-end software developer' } = this.props

    return (
      <div>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge, chrome=1' />
          <title>{title}</title>
          <meta name='description' content='Front-end software developer focused on building beautiful interfaces and experiences.' />
          <link rel="manifest" href="https://iolivares.com/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Iván Olivares" />
          <meta name="apple-mobile-web-app-title" content="Iván Olivares" />
          <meta name="theme-color" content="#00C569" />
          <meta name="msapplication-navbutton-color" content="#00C569" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <link rel="icon" sizes="120x120" href={iconBucket} />
          <link rel="apple-touch-icon" sizes="120x120" href={iconBucket} />
          <link rel="icon" type="image/png" href={iconBucket} />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" /> */}
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KN2PTKD');`}} />
        </Head>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN2PTKD" height="0"
      width="0" style="display:none;visibility:hidden;"></iframe>`}} />
        <div className="io" style={{ display: this.state.loaded ? 'block' : 'none' }}>
          <main>{children}</main>
        </div>
      </div>
    )
  }
}
import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Head from 'next/head'
import Header from './Header'
import MobileHeader from './MobileHeader'
import Footer from './Footer'
import ServiceWorker from './ServiceWorker'

class Layout extends React.Component {
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
    const { children, title } = this.props

    return (
      <div>
        <Head>
          <title>{ title }</title>
        </Head>
        <Header />
        <MobileHeader />
        <div className="io" style={ !this.state.loaded ? 'none' : null }>
          <main>{ children }</main>
        </div>
        <Footer />
        <ServiceWorker />
      </div>
    )
  }
}

Layout.defaultProps = {
  title: 'Iván Olivares Rojas | Software Architect'
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
}

export default Layout
import React from 'react'
import ActiveLink from './ActiveLink'
import Navigation from './Navigation'

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <header className="header">
          <div className="header__logo">
            <ActiveLink className="header__logo-title link--dark link--no-underline" href="/">
              <span>www.iolivares.com</span>
            </ActiveLink>
          </div>
          <nav className="header__nav">
            <Navigation />
          </nav>
        </header>
      </div>
    </div>
  </div>
)
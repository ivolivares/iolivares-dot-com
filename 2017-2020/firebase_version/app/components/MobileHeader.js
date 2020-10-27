import React from 'react'
import Navigation from './Navigation'

class MobileHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      activeMenu: '',
      activeLinks: ''
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    if (this.state.activeLinks === '' || this.state.activeMenu === '') {
      this.setState({ activeMenu: 'active_menu', activeLinks: 'active_links' })
    } else {
      this.setState({ activeMenu: '', activeLinks: '' })
    }
  }

  render() {
    return (
      <nav className="header__nav-mobile">
        <Navigation className={ `header__nav-mobile-list ${this.state.activeLinks}` } />
        <button aria-label="Toggle menu" onClick={ this.toggleMenu } >
          <ul className={ `header__nav-mobile-hamburger ${this.state.activeMenu}` }>
            <li />
            <li />
            <li />
          </ul>
        </button>
      </nav>
    )
  }
}

export default MobileHeader
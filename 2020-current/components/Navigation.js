import React from 'react'
import PropTypes from 'prop-types'
import ActiveLink from './ActiveLink'

const navigationItems = [
  {
    name: 'About',
    href: '/'
  },
  // {
  //   name: 'Blog',
  //   href: 'https://iolivares.blog',
  //   target: '_blank'
  // },
  // {
  //   name: 'Talks',
  //   href: '/talks'
  // },
  {
    name: 'Photography',
    href: 'http://iolivares.photos'
  }
]

const Navigation = ({ className }) => (
  <ul className={ className }>
    {
      navigationItems.map((item, index) => (
        <li key={ index } className="header__nav-list-item">
          <ActiveLink activeClass="header__nav-list-item--active" href={ item.href } target={ item.target || '_self' }>
            <span>{ item.name }</span>
          </ActiveLink>
        </li>
      ))
    }
  </ul>
)

Navigation.defaultProps = {
  className: 'header__nav-list'
}

Navigation.propTypes = {
  className: PropTypes.string
}

export default Navigation

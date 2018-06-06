import React from 'react'
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

export default () => (
  <ul className="header__nav-list">
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
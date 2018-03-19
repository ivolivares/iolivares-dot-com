import ActiveLink from './ActiveLink'

const navigationItems = [
  {
    name: 'About',
    href: '/'
  },
  {
    name: 'Blog',
    href: 'https://iolivares.blog',
    target: '_blank'
  },
  {
    name: 'Talks',
    href: '/talks'
  },
  {
    name: 'Photography',
    href: 'https://iolivares.photos',
    target: '_blank'
  }
]

export default () => (
  <ul className="header__nav-list">
    {
      navigationItems.map((item, index) => (
        <li className="header__nav-list-item" key={index}>
          <ActiveLink href={item.href} activeClass="header__nav-list-item--active" target={item.target}>{item.name}</ActiveLink>
        </li>
      ))
    }
  </ul>
)
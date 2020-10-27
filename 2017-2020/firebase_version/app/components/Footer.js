import React from 'react'
import { domain, name, sendEmail } from '../helpers/email'

const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/ivolivares'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/ivolivares'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ivanolivaresrojas'
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/iolivares.blog'
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/iolivares.photos'
  },
  {
    name: 'googleplus',
    url: 'https://plus.google.com/+IvánOlivaresR'
  },
  {
    name: 'soundcloud',
    url: 'https://soundcloud.com/djmaxis'
  },
  {
    name: 'spotify',
    url: 'https://open.spotify.com/user/ivolivares'
  },
  {
    name: 'paypal',
    url: 'https://www.paypal.me/ivanolivaresrojas/1'
  }
]

export default () =>
  <footer className="footer">
    <div className="footer__copyright">
      <div className="top"> <span>Designed &amp; Developed by</span> </div>
      <div className="bottom"> <span>Iván Olivares Rojas</span> <span>{ (new Date()).getFullYear() }</span> </div>
    </div>
    <div className="footer__links">
      <a
        data-domain={ domain }
        data-name={ name }
        href="#"
        onClick={ sendEmail }>
        <span className="text">email</span>
        <img alt="email" height="22" src="/static/images/icons/mailbox.png" />
      </a>
      { socialLinks.map((link, index) => (
        <a key={ index } href={ link.url } rel="noopener" target="_blank">
          <span className="text">{ link.name }</span>
          <img alt={ link.name } height="22" src={ `/static/images/icons/${link.name}.png` } />
        </a>
      )) }
    </div>
  </footer>
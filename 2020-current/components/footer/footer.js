import Image from 'next/image'
import {socialNetworks} from './constants'
import {domain, name, sendEmail} from '../../common/email'

export default function ioFooter() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="top">
          <span>Designed &amp; Developed by</span>
        </div>
        <div className="bottom">
          <span>Iván Olivares Rojas</span> <span>{(new Date()).getFullYear()}</span>
        </div>
      </div>
      <div className="footer__links">
        <a
          data-domain={domain}
          data-name={name}
          href="#"
          onClick={sendEmail}>
          <span className="text">email</span>
          <Image
            src="/images/icons/mailbox.png"
            alt="email icon"
            width={22}
            height={22}
          />
        </a>
        {socialNetworks.map((link, index) => (
          <a key={index} href={link.url} rel="noopener" target="_blank">
            <span className="text">{link.name}</span>
            <Image
              src={`/images/icons/${link.name}.png`} 
              alt={`${link.name} logo`}
              width={22}
              height={22}
            />
          </a>
        ))}
      </div>
    </footer>
  )
}
import React from 'react'
import Layout from '../components/Layout'

const email = '\u006d\u006f\u0063\u002e\u0073\u0065\u0072\u0061\u0076\u0069\u006c\u006f\u0069\u0040\u0069\u0068'
const sendEmail = (button) => {
  const link = button.target
  const name = link.getAttribute('data-name').split('').reverse().join('')
  const domain = link.getAttribute('data-domain').split('').reverse().join('')
  window.location.href = `mailto:${name}@${domain}?subject=Contact+from+iolivares.com`
}

const [domain, name] = email.split('@')

export default () =>
  <Layout>
    <article className="container about-container">
      <div className="row">
        <div className="col-xs-12">
          <section className="hero">
            <div className="hero__content">
              <h1 className="hero__content-title">Hey, I'm <strong>Iván Olivares Rojas</strong></h1>
              <div className="hero__content-text">
                <p className="extra-large">I'm focused on building beautiful interfaces and experiences for customers.</p>
                <p className="large secondary-text">Currently work as Front-end software developer at <a className="globant" href="http://www.globant.com" target="_blank">Globant</a> in Santiago, Chile.</p>
                <p className="large secondary-text">Also I'm an amateur photographer, a enthusiast community builder<br />and volunteer for non-profit organizations.</p>
              </div>
              <div className="hero__content-action">
                <p className="secondary-text">
                  Let's talk?&nbsp;
                  <a className="link--primary link--underline email-protection" data-domain={ domain } data-name={ name } href="#" onClick={ sendEmail }>
                    { email }
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  </Layout>
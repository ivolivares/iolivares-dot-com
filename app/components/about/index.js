import React from 'react'
import { email, domain, name, sendEmail } from '../../helpers/email'

export default () =>
  <header className="container about-container">
    <div className="row">
      <div className="col-xs-12">
        <div className="hero">
          <div className="hero__content">
            <h1 className="hero__content-title">Hey! I'm <strong>Iván Olivares Rojas</strong></h1>
            <div className="hero__content-text">
              <p className="extra-large">I'm focused on building beautiful interfaces and experiences for customers.</p>
              <p className="large secondary-text">Currently working as Technical Lead and Front-end Software developer at <a className="globant" href="http://www.globant.com" rel="noopener" target="_blank">Globant</a> in Santiago, Chile.</p>
              <p className="large secondary-text">I'm also an amateur photographer, a community builder enthusiast<br />and volunteer for non-profit organizations.</p>
            </div>
            <div className="hero__content-action">
              <p className="secondary-text">
                Let's talk?&nbsp;
                <a
                  className="link--primary link--underline email-protection"
                  data-domain={ domain }
                  data-name={ name }
                  href="#"
                  onClick={ sendEmail }
                  rel="noopener"
                >
                  { email }
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
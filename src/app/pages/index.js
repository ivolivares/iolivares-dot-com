import Layout from '../components/Layout'
import Header from '../components/Header'

const email = '\u006d\u006f\u0063\u002e\u0073\u0065\u0072\u0061\u0076\u0069\u006c\u006f\u0069\u0040\u0069\u0068'

export default () =>
  <Layout>
    <Header />
    <article className="container about-container">
      <div className="row">
        <div className="col-xs-12">
          <section className="hero">
            <div className="hero__content">
              <h1 className="hero__content-title">Hey, I'm <strong>Iván Olivares Rojas</strong>, from Santiago, Chile.</h1>
              <div className="hero__content-text">
                <p className="extra-large">I'm a Front-end software developer focused on building beautiful interfaces and experiences.</p>
                <p className="large secondary-text">Currently work as developer & technical lead at <a href="http://www.globant.com" target="_blank" className="globant">Globant</a>.</p>
                <p className="large secondary-text">Also I'm an amateur photographer and an enthusiast half-time traveler.</p>
              </div>
              <div className="hero__content-action">
                <p className="secondary-text">
                  Let's talk?&nbsp;
                  <a href={`mailto:${email.split("").reverse().join("")}`} className="link--primary link--underline email-protection">
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
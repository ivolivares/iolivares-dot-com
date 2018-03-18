import Layout from '../components/Layout'

import '../styles/about.less'

export default () =>
  <Layout>
    <article className="container about-container">
      <div className="row">
        <div className="col-xs-12">
          <section className="hero">
            <div className="hero__content">
              <h1 className="hero__content-title">Hey, I'm <strong>Iván Olivares Rojas</strong>, from Santiago, Chile.</h1>
              <div className="hero__content-text">
                <p className="large">I'm a Front-end software developer focused on building beautiful interfaces and experiences.</p>
                <p className="middle secondary-text">Currently work as developer & technical lead at <a href="http://www.globant.com" target="_blank" className="globant">Globant</a>.</p>
                <p className="middle secondary-text">Also I'm an amateur photographer and an enthusiast half-time traveler.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  </Layout>
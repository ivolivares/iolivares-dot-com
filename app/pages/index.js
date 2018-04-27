import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/about/Hero'
import Background from '../components/about/Background'

export default () =>
  <Layout>
    <section>
      <article className="container about-container">
        <div className="row">
          <div className="col-xs-12">
            <Hero />
          </div>
        </div>
      </article>
      <article>
        <Background />
      </article>
    </section>
  </Layout>
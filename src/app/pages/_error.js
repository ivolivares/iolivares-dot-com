import React from 'react'
import Layout from '../components/Layout'

import '../styles/error.less'

export default class extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render () {
    const { statusCode } = this.props
    return (
      <Layout>
        <div className="errorPage container">
          <div className="row middle-lg">
            <div className="col-lg-12">
              <div className="box">
                <h1>¯\_(ツ)_/¯</h1>
                <h2>{statusCode ? `Error ${statusCode}` : 'Undefined error'}</h2>
                <p>{`Sorry, the page return an ${statusCode ? statusCode : null} error.`}</p>
                <p>Don't worry and have some coffee.</p>
                <a href="/" className="button">Back to Home</a>
            </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
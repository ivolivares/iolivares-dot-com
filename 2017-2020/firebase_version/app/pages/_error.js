import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render () {
    const { statusCode = null } = this.props
    const errorText = statusCode ? `Error ${statusCode}` : 'Undefined error'
    return (
      <Layout title={ errorText }>
        <div className="errorPage container">
          <div className="row middle-lg">
            <div className="col-lg-12">
              <div className="box">
                <h1>¯\_(ツ)_/¯</h1>
                <h2>{ errorText }</h2>
                <p>{ `Sorry, the page return an ${statusCode} error.` }</p>
                <p>Don't worry and have some coffee.</p>
                <a className="button" href="/">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired
}

export default Error
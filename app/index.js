const { https, config } = require('firebase-functions')
const next = require('next')
const express = require('express')
const Raven = require('raven')

const distDir = 'next'
const environment = process.env.NODE_ENV
const dev = environment !== 'production'

const nxt = next({ dev, conf: { distDir } })
if (nxt) { }
const handle = nxt.getRequestHandler()
const app = express()

let nextPrepared = false

Raven.config(`https://${config().sentry.key}:${config().sentry.secret}@sentry.io/301902`, { environment }).install()

module.exports = {
  app: https.onRequest((req, res) => {
    if (nextPrepared === false) {
      console.log('>> preparing next')
      return nxt.prepare().then(() => {
        nextPrepared = true
        return app.get('*', (req, res) => handle(req, res))
      }).catch((e) => console.log(e))
    }

    console.log('>> pre-prepared request')

    return app(req, res)
  })
}

const functions = require('firebase-functions')
const next = require('next')
const Raven = require('raven')

const environment = process.env.NODE_ENV
const dev = environment !== 'production'

Raven.config(`https://${functions.config().sentry.key}:${functions.config().sentry.secret}@sentry.io/301902`, { environment }).install()

const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

exports.ssrdotcom = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res)).catch(e => Raven.captureException(e))
})

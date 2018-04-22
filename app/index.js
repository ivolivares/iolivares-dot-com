const { https } = require('firebase-functions')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const nxt = next({ dev, conf: { distDir: 'next' } })
// if (nxt) { }
const handle = nxt.getRequestHandler()
const app = express()
let nextPrepared = false

module.exports = {
  app: https.onRequest((req, res) => {
    if (nextPrepared === false) {
      console.log('>> preparing next')
      nxt.prepare().then(() => {
        app.get('*', (req, res) => handle(req, res))
        nextPrepared = true
      }).catch((e) => console.log(e))
    }

    return app(req, res)
  })
}
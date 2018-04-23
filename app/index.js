const { https } = require('firebase-functions')
const next = require('next')
const express = require('express')

const distDir = 'next'
const dev = process.env.NODE_ENV !== 'production'

const nxt = next({ dev, conf: { distDir } })
if (nxt) { }
const handle = nxt.getRequestHandler()
const app = express()

let nextPrepared = false

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
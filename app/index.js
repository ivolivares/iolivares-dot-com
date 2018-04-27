const { https, config } = require('firebase-functions')
const next = require('next')
const express = require('express')
const Raven = require('raven')
const LRUCache = require('lru-cache')
const compression = require('compression')

const distDir = 'next'
const PORT = parseInt(process.env.PORT, 10) || 3000
const environment = process.env.NODE_ENV
console.log(environment)
const dev = environment !== 'production'
console.log('is: ', { dev })

const app = next({ dev, conf: { distDir } })
if (app) { }
const handle = app.getRequestHandler()

Raven.config(`https://${config().sentry.key}:${config().sentry.secret}@sentry.io/301902`, { environment }).install()


// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

const server = express()
server.use(compression())

// Use the `renderAndCache` utility defined below to serve pages
server.get('/', (req, res) => renderAndCache(req, res, '/'))
server.get('*', (req, res) => handle(req, res))

module.exports = {
  app: https.onRequest((req, res) => app.prepare().then(() => server(req, res)))
  // app: https.onRequest((req, res) => {
  // if (nextPrepared === false) {
  //   console.log('>> preparing next')
  //   return nxt.prepare().then(() => {
  //     nextPrepared = true
  //     return server.get('*', (req, res) => handle(req, res))
  //   }).catch((e) => console.log('Error on preparing next', e))
  // }

  // console.log('>> pre-prepared request')

  // return server(req, res)

  // })
}

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html => {
      // Something is wrong with the request, let's skip the cache
      if (res.statusCode !== 200) {
        res.send(html)
        return
      }

      // Let's cache this page
      ssrCache.set(key, html)

      res.setHeader('x-cache', 'MISS')
      res.send(html)
    }))
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })

}
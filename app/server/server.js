const path = require('path')
const express = require('express')
const next = require('next')
const compression = require('compression')

// const distDir = process.env.APPENGINE ? path.join(__dirname, '..', '..', 'next') : path.join(__dirname, '..', 'next')
const distDir = 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir } })
const handle = app.getRequestHandler()

const swPath = path.join(__dirname, '..', 'next', 'sw.js')
const manifestPath = path.join(__dirname, '..', 'static', 'manifest.json')

const PORT = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()
  server.use(compression())

  server.get('*', (req, res, next) => {
    if (req.hostname !== 'localhost' && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(`https://${req.hostname}${req.url}`)
    } else {
      return next()
    }
  })

  server.use("/static", express.static(path.join(__dirname, "/../static"), {
    maxAge: '365d'
  }))

  server.get('/sw.js', (req, res) => {
    console.log('get sw')
    res.setHeader('Cache-Control', 'no-cache')
    res.sendFile(swPath)
  })

  server.get('/manifest.json', (req, res) => {
    console.log('get manifest')
    res.setHeader('Cache-Control', 'no-cache')
    res.sendFile(manifestPath)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
}).catch((e) => {
  console.error(e)
  process.exit(1)
})

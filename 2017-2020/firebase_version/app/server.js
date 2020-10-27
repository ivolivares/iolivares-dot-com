const path = require('path')
const express = require('express')
const next = require('next')

const distDir = 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir } })
const handle = app.getRequestHandler()

const swPath = path.join(__dirname, '../', 'public', 'sw.js');
const resumePath = path.join(__dirname, '../', 'public', 'resume.pdf');

const PORT = parseInt(process.env.PORT, 10) || 3000

app.prepare().then(() => {
  const server = express()

  server.get('/sw.js', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache')
    res.sendFile(swPath)
  })

  server.get('/resume.pdf', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache')
    res.sendFile(resumePath)
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

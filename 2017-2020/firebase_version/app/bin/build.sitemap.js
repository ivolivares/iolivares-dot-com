#! /usr/bin/env node

const path = require('path')
const glob = require('glob')
const fs = require('fs')
const publish = require('./helper/publish')
const ConsoleSpinner = require('./helper/console.spinner')

const _console = new ConsoleSpinner()

const SITE_ROOT = process.env.SITE_ROOT || 'https://www.iolivares.com'
const SOURCE = process.env.SOURCE || path.join(__dirname, '..', 'pages', '/**/*.js')
const DESTINATION = process.env.DESTINATION || path.join(__dirname, '..', 'static', 'sitemap.xml')

const buildSitemap = () => {
  const diskPages = glob.sync(SOURCE)

  let xml = ''
  xml += '<?xml version="1.0" encoding="UTF-8"?>'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  _console.log('>> Fetching pages to build Sitemap.xml')

  diskPages.forEach((page) => {
    const stats = fs.statSync(page)
    const modDate = new Date(stats.mtime)
    const lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${('0' + modDate.getDate()).slice(-2)}`

    page = page.replace(path.join(__dirname, '..', 'pages'), '')
    page = page.replace(/.js$/, '')

    if (!['/_error', '/_document'].includes(page)) {
      page = `${SITE_ROOT}${page}`

      if (page.match(/.*\/index$/)) {
        page = page.replace(/(.*)index$/, '$1')
      }

      xml += '<url>'
      xml += `<loc>${page}</loc>`
      xml += `<lastmod>${lastMod}</lastmod>`
      xml += `<changefreq>always</changefreq>`
      xml += `<priority>0.5</priority>`
      xml += '</url>'
    }
  })

  xml += '</urlset>'

  fs.writeFileSync(DESTINATION, xml)
  _console.log(`>> Wrote sitemap for ${diskPages.length} pages to ${DESTINATION}`)
  finishBuild()
}


const finishBuild = () => {
  _console.log('>> Initiating script to publish on git...')
  publish(_console, 'update-sitemap')
}

buildSitemap()

process.on('SIGINT', () => {
  _console.stop()
  console.log('>> Ok, I stop! Bye :)')
  process.exit(-1)
})
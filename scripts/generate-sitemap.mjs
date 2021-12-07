/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io/blob/main/scripts/generate-sitemap.js
 */
import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'data/pages/*.mdx',
    '!pages/*.js',
    '!data/*.mdx',
    '!data/pages/failover',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404.js',
  ])

  const siteContent = new Set()

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${['', 'es'].map((lang) => {
          let sitemapContent = ''
          sitemapContent += `
            <url>
                <loc>${`https://iolivares.com${(lang === '' ? '' : `/${lang}`)}`}</loc>
            </url>`

          sitemapContent += pages.map((page) => {
            const path = page.replace(/(pages\/)|(data\/)|(\.js)|(\.mdx)/g, '')
            const pathRoute = (path === '/index' ? '' : path).replace(/(\.en)|(\.es)/g, '')
            const route = lang === '' ? `/${pathRoute}` : `/${lang}/${pathRoute}`

            if (!siteContent.has(route)) {
              siteContent.add(route)

              return `
                  <url>
                      <loc>${`https://iolivares.com${route}`}</loc>
                  </url>`
            }
          }).join('')

          return sitemapContent
        }).join('')}
    </urlset>`

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}

generateSitemap()

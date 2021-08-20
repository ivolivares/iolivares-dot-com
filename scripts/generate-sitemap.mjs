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
    'pages/*.js',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!data/failover',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404.js',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${['es', ''].map((lang) => (
              pages
                .map((page) => {
                  const path = page
                    .replace('pages', '')
                    .replace('data', '')
                    .replace('.js', '')
                    .replace('.mdx', '')
                  const pathRoute = path === '/index' ? '' : path
                  const route = lang === '' ? pathRoute : `/${lang}${pathRoute}`

                  return `
                        <url>
                            <loc>${`https://iolivares.com${route}`}</loc>
                        </url>`
                })
                .join('')
                
            )).join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}

generateSitemap()

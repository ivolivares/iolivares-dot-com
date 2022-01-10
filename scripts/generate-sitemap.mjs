/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io
 */
import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'


async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pagesPaths = await globby([
    'pages/*.js',
    'data/posts/*.mdx',
    '!data/pages/*.mdx',
    '!data/failover',
    '!data/props',
    '!data/*.json',
    '!data/*.js',
    '!pages/api',
    '!pages/_*.js',
    '!pages/[slug].js',
    '!pages/404.js',
  ])
  
  const siteContent = new Set()
  const Langs = ['en', 'es']

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${Langs.map((lang) => {
          let sitemapContent = ''
          const pathLang = {
            en: '',
            es: 'es',
          }

          sitemapContent += `
            <url>
                <loc>${
                  `https://iolivares.com${(pathLang[lang] === '' ? '' : `/${pathLang[lang]}`)}`
                }</loc>
            </url>`

          sitemapContent += pagesPaths.map((pagePath) => {
            const currentPath = pagePath.replace(/(\.js)|(\.mdx)/g, '')
            let path = ''
            let pathRoute = ''

            if (currentPath.includes('data/posts')) {
              const currentPathLang = currentPath.split('.')[1]
              if (currentPathLang === lang) {
                path = currentPath.replace(/(data\/posts\/)|(\.js)|(\.mdx)/g, '')
                pathRoute = path.replace(/(\.en)|(\.es)/g, '')
              }
            } else {
              path = currentPath.replace(/(pages\/)/g, '')
              pathRoute = ((path === 'index') ? '' : path).replace(/(\.en)|(\.es)/g, '')
            }

            const route = pathRoute !== '' ? (pathLang[lang] === '' ? `/${pathRoute}` : `/${pathLang[lang]}/${pathRoute}`) : ''

            if (!siteContent.has(route) && route !== '') {
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

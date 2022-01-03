/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io
 */
import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import RSS from 'rss'
import matter from 'gray-matter'

async function generate() {
  const Metadata = JSON.parse(readFileSync(
    join(process.cwd(), 'data', 'metadata.json')
  ))

  const feed = new RSS({
    title: Metadata.NAME,
    webMaster: Metadata.NAME,
    description: Metadata.DESCRIPTION,
    site_url: Metadata.URL,
    feed_url: `${Metadata.URL}/feed.xml`,
    image_url: `${Metadata.URL}/static/favicons/android-chrome-48x48.png`,
    copyright: `${(new Date().getFullYear())} ${Metadata.NAME}`,
    language: 'en',
  })

  const posts = readdirSync(join(process.cwd(), 'data', 'articles'))
  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), 'data', 'articles', name))
    const frontmatter = matter(content)

    const nameURL = name.replace(/\.mdx?/g, '').split('.')
    const slug = nameURL[0]
    const lang = nameURL[1]

    feed.item({
      title: frontmatter.data.title,
      url: Metadata.URL + '/' + (lang === 'en' ? '' : `${lang}/`) + slug,
      date: frontmatter.data.publishedAt,
      description: frontmatter.data.summary,
      author: frontmatter.author ?? Metadata.NAME,
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
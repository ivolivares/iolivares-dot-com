/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io
 */
import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import RSS from 'rss'
import matter from 'gray-matter'

async function generate() {
  const feed = new RSS({
    title: 'Iván Olivares Rojas',
    site_url: 'https://iolivares.com',
    feed_url: 'https://iolivares.com/feed.xml'
  })

  const posts = readdirSync(join(process.cwd(), 'data', 'articles'))
  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), 'data', 'articles', name))
    const frontmatter = matter(content)

    feed.item({
      title: frontmatter.data.title,
      url: 'https://iolivares.com/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.publishedAt,
      description: frontmatter.data.summary
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
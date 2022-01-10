import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { parseISO } from 'date-fns'

async function generateIndex() {
  const files = readdirSync(join(process.cwd(), 'data', 'posts'))

  const filesInfo = files.reduce((allFiles, fileSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'data', 'posts', fileSlug), 'utf8'
    )
    const { data, content } = matter(source)
    const [_, lang] = fileSlug.split('.')

    return [
      {
        ...data,
        lang,
        readingTime: readingTime(content),
        slug: fileSlug.replace(/\.(es|en)\.mdx/, ''),
      },
      ...allFiles
    ]
  }, []).sort((a, b) => parseISO(b.publishedAt) - parseISO(a.publishedAt))

  const filesFormatted = filesInfo.map((info) => {
    return {
      slug: info.slug,
      lang: info.lang,
      content: {
        title: info.title,
        summary: info.summary,
        tags: info.tags,
        ttr: Math.round(info.readingTime.minutes).toString(),
        slugs: {
          en: info['slug-en'],
          es: info['slug-es'],
        },
        publishedAt: info.publishedAt,
        image: info.image,
      }
    }
  })

  const countPosts = filesFormatted.reduce((acc, d) => {
    if (Object.keys(acc).includes(d.lang)) return acc

    acc[d.lang] = filesFormatted.filter(g => g.lang === d.lang)
    return acc
  }, {})

  const latestPosts = []
  latestPosts.push(countPosts['es'][0])
  latestPosts.push(countPosts['en'][0])

  const postsIndex = {
    total: {
      es: countPosts['es'].length,
      en: countPosts['en'].length,
    },
    latest: latestPosts,
    all: filesFormatted.slice(2, filesFormatted.length)
  }

  writeFileSync('./data/posts.json', JSON.stringify(postsIndex))
}

generateIndex()
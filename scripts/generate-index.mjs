import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { parseISO } from 'date-fns'

async function generateIndex() {
  const files = readdirSync(join(process.cwd(), 'data', 'articles'))

  const filesInfo = files.reduce((allFiles, fileSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'data', 'articles', fileSlug), 'utf8'
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

  const countArticles = filesFormatted.reduce((acc, d) => {
    if (Object.keys(acc).includes(d.lang)) return acc

    acc[d.lang] = filesFormatted.filter(g => g.lang === d.lang)
    return acc
  }, {})

  const latestArticles = []
  latestArticles.push(countArticles['es'][0])
  latestArticles.push(countArticles['en'][0])

  const articlesIndex = {
    total: {
      es: countArticles['es'].length,
      en: countArticles['en'].length,
    },
    latest: latestArticles,
    all: filesFormatted.slice(2, filesFormatted.length)
  }

  writeFileSync('./data/articles.json', JSON.stringify(articlesIndex))
}

generateIndex()
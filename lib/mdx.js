/**
 * Originally inspired by Lee Robinson website
 * @see https://github.com/leerob/leerob.io
 */
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { bundleMDX } from 'mdx-bundler'
import matter from 'gray-matter'
import readingTime from 'reading-time'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), 'data', type))
}

export async function getFileBySlug(type, slug, locale) {
  let source = null

  try {
    source = readFileSync(
      join(process.cwd(), 'data', type, `${slug}.${locale}.mdx`), 'utf8'
    )

    if (source) {
      return getMDXformattedContent(source, slug)
    }
  } catch (error) {
    console.log('ERROR: %s', JSON.stringify(error))

    const failOverSource = readFileSync(
      join(process.cwd(), 'data', 'failover', `not_translated.${locale}.mdx`), 'utf8'
    )

    return getMDXformattedContent(failOverSource)
  }
}

export async function getMDXformattedContent(source, slug) {
  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        remarkGfm,
      ]
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ]
      return options
    },
  })

  // Get StaticTweets IDs to build it later
  const tweetMatches = source.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
  const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0])

  const formattedContent = {
    mdxSource: code,
    tweetIDs: tweetIDs || [],
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  }

  return formattedContent
}

export async function getAllFilesFrontMatter(type) {
  const files = readdirSync(join(process.cwd(), 'data', type))

  return files.reduce((allArticles, articleSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'data', type, articleSlug), 'utf8'
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: articleSlug.replace(/\.(es|en)\.mdx/, ''),
      },
      ...allArticles
    ]
  }, [])
}
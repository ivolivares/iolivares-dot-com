/**
 * Originally inspired by Lee Robinson website: leerob.io
 * @see https://github.com/leerob/leerob.io/blob/main/lib/mdx.js
 */
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

const getMDXformattedContent = async (source) => {
  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles')
      ]
    }
  })

  return {
    mdxSource,
    frontMatter: {
      ...data,
    }
  }
}

export async function getFileBySlug(fileName, locale) {
  let source = null

  try {
    source = fs.readFileSync(
      path.join(root, 'data', `${fileName}.${locale}.mdx`), 'utf8'
    )

    if (source) {
      return getMDXformattedContent(source)
    }
  } catch (error) {
    console.log('ERROR: %s', JSON.stringify(error))
    const failOverSource = fs.readFileSync(
      path.join(root, 'data', 'failover', `not_translated.${locale}.mdx`), 'utf8'
    )

    return getMDXformattedContent(failOverSource)
  }
}
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getPropsBySlug(fileName, locale) {
  let source = null

  try {
    source = fs.readFileSync(
      path.join(root, 'data', 'props', locale, `${fileName}.json`), 'utf8'
    )

    if (source) {
      return JSON.parse(source)
    }
  } catch (error) {
    console.log('ERROR: %s', JSON.stringify(error))

    return {
      title: 'No title loaded',
      description: 'No description',
      tagline: 'No tagline loaded',
    }
  }
}
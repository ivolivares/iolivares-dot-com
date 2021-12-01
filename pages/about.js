import { MDXRemote } from 'next-mdx-remote'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import AboutLayout from '@io/layouts/About'
import MDXComponents from '@io/components/MDXComponents'

export async function getStaticProps({ locale }) {
  const about = await getFileBySlug('about', locale)

  return {
    props: {
      ...about,
      ...await serverSideTranslations(locale, ['common']),
    },
    revalidate: 3600,
  }
}

function About({ mdxSource }) {
  return (
    <MDXRemote
      {...mdxSource}
      components={{
        ...MDXComponents,
      }}
    />
  )
}

About.Layout = AboutLayout

export default About

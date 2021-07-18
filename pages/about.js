import { MDXRemote } from 'next-mdx-remote'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import AboutLayout from '@io/layouts/about'
import MDXComponents from '@io/components/MDXComponents'

export default function About({ mdxSource, frontMatter }) {
  return (
    <AboutLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </AboutLayout>
  )
}

export async function getStaticProps({ locale }) {
  const uses = await getFileBySlug('about', locale)

  return {
    props: {
      ...uses,
      ...await serverSideTranslations(locale, ['common']),
    },
    revalidate: 3600, // 3600 seconds = 1 hour
  }
}
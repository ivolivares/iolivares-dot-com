import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import MDXLayout from '@io/layouts/MDXLayout'
import MDXComponents from '@io/components/MDXComponents'

export const getStaticProps = async ({ locale }) => {
  const about = await getFileBySlug('pages', 'about', locale)

  return {
    props: {
      ...about,
      ...await serverSideTranslations(locale, ['common', 'about']),
    },
    revalidate: 1800,
  }
}

const About = ({ mdxSource, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return (
    <MDXLayout frontMatter={frontMatter} slug="about">
      <Component components={MDXComponents} />
    </MDXLayout>
  )
}

export default About

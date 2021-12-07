import { MDXRemote } from 'next-mdx-remote'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import AboutLayout from '@io/layouts/AboutLayout'
import MDXComponents from '@io/components/MDXComponents'

export const getStaticProps = async ({ locale }) => {
  const about = await getFileBySlug('about', locale)

  return {
    props: {
      ...about,
      ...await serverSideTranslations(locale, ['common', 'about']),
    },
    revalidate: 3600,
  }
}

const About = ({ mdxSource, frontMatter }) => {
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

export default About

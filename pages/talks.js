import { MDXRemote } from 'next-mdx-remote'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import TalksLayout from '@io/layouts/Talks'
import MDXComponents from '@io/components/MDXComponents'

export const getStaticProps = async ({ locale }) => {
  const talks = await getFileBySlug('talks', locale)

  return {
    props: {
      ...talks,
      ...await serverSideTranslations(locale, ['common', 'talks']),
    },
    revalidate: 3600,
  }
}

const Talks = ({ mdxSource, frontMatter }) => {
  return (
    <TalksLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </TalksLayout>
  )
}

export default Talks
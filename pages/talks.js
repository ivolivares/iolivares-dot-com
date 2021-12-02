import { MDXRemote } from 'next-mdx-remote'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from 'lib/mdx'
import TalksLayout from 'layouts/Talks'
import MDXComponents from 'components/MDXComponents'

export async function getStaticProps({ locale }) {
  const talks = await getFileBySlug('talks', locale)

  return {
    props: {
      ...talks,
      ...await serverSideTranslations(locale, ['common', 'talks']),
    },
    revalidate: 3600,
  }
}

function Talks({ mdxSource }) {
  return (
    <MDXRemote
      {...mdxSource}
      components={{
        ...MDXComponents,
      }}
    />
  )
}

Talks.Layout = TalksLayout

export default Talks
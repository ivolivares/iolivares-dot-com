import { MDXRemote } from 'next-mdx-remote'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import UsesLayout from '@io/layouts/Uses'
import MDXComponents from '@io/components/MDXComponents'

export const getStaticProps = async ({ locale }) => {
  const uses = await getFileBySlug('uses', locale)

  return {
    props: {
      ...uses,
      ...await serverSideTranslations(locale, ['common']),
    },
    revalidate: 3600,
  }
}

const Uses = ({ mdxSource }) => {
  return (
    <MDXRemote
      {...mdxSource}
      components={{
        ...MDXComponents,
      }}
    />
  )
}

Uses.Layout = UsesLayout

export default Uses

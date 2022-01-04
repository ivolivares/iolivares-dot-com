import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import MDXLayout from '@io/layouts/MDXLayout'
import MDXComponents from '@io/components/MDXComponents'

export const getStaticProps = async ({ locale }) => {
  const uses = await getFileBySlug('pages', 'uses', locale)

  return {
    props: {
      ...uses,
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

const Uses = ({ mdxSource, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return (
    <MDXLayout frontMatter={frontMatter} slug="uses">
      <Component components={MDXComponents} />
    </MDXLayout>
  )
}

export default Uses

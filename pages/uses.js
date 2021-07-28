import { MDXRemote } from 'next-mdx-remote'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFileBySlug } from '@io/lib/mdx'
import UsesLayout from '@io/layouts/uses'
import MDXComponents from '@io/components/MDXComponents'

export default function Uses({ mdxSource, frontMatter }) {
  return (
    <UsesLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    </UsesLayout>
  )
}

export async function getStaticProps({ locale }) {
  const uses = await getFileBySlug('uses', locale)

  return {
    props: {
      ...uses,
      ...await serverSideTranslations(locale, ['common']),
    },
    revalidate: 3600, // 3600 seconds = 1 hour
  }
}
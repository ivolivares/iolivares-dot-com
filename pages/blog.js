import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getPropsBySlug } from '@io/lib/propsFromJSON'
import postsIndex from '@io/data/posts.json'
import ContentLayout from '@io/layouts/ContentLayout'
import Latestpost from '@io/components/LatestItem'
import PostsList from '@io/components/PostsList'

export const getStaticProps = async ({ locale }) => {
  const jsonProps = await getPropsBySlug('blog', locale)

  return {
    props: {
      ...jsonProps, 
      ...await serverSideTranslations(locale, ['common', 'posts']),
    },
  }
}

const Blog = (props) => {
  const { locale } = useRouter()
  const { t } = useTranslation('posts')

  const latestPost = postsIndex?.latest?.filter((post) => post.lang === locale)[0]
  const allPosts = postsIndex?.all?.filter((post) => post.lang === locale)

  return (
    <ContentLayout {...props}>
      <p dangerouslySetInnerHTML={
        { __html: t('posts-single', {
            interpolation: {
              escapeValue: false,
            },
            value: postsIndex?.total[locale],
          }),
        }
      } />
      <Latestpost item={latestPost} dict="posts" />
      <PostsList posts={allPosts} />
    </ContentLayout>
  )
}

export default Blog
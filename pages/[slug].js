import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFiles, getFileBySlug } from '@io/lib/mdx'
import { getTweets } from '@io/lib/twitter'
import components from '@io/components/MDXComponents'
import PostLayout from '@io/layouts/PostLayout'
import Tweet from '@io/components/Tweet'

export const getStaticPaths = async () => {
  const posts = await getFiles('posts')

  const paths = posts.map((post) => {
    const [slug, locale] = post.split('.')

    return {
      params: {
        slug,
      },
      locale,
    }
  })
  
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params, locale }) => {
  const post = await getFileBySlug('posts', params.slug, locale)
  const tweets = await getTweets(post.tweetIDs)

  return {
    props: {
      ...post,
      ...await serverSideTranslations(locale, ['common', 'posts']),
      tweets,
    },
    revalidate: 60,
  }
}

export default function Post({ mdxSource, tweets, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id)
    return <Tweet {...tweet} />
  }

  return (
    <PostLayout frontMatter={frontMatter}>
      <Component
        components={{
          ...components,
          StaticTweet
        }}
      />
    </PostLayout>
  )
}

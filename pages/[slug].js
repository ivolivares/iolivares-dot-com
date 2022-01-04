import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getFiles, getFileBySlug } from '@io/lib/mdx'
import { defaultLang } from '@io/lib/supportedLangs'
import { getTweets } from '@io/lib/twitter'
import components from '@io/components/MDXComponents'
import ArticleLayout from '@io/layouts/ArticleLayout'
import Tweet from '@io/components/Tweet'

export const getStaticPaths = async () => {
  const articles = await getFiles('articles')

  const paths = articles.map((article) => {
    const [slug, locale] = article.split('.')

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
  const article = await getFileBySlug('articles', params.slug, locale)
  const tweets = await getTweets(article.tweetIDs)

  return {
    props: {
      ...article,
      ...await serverSideTranslations(locale, ['common', 'articles']),
      tweets,
    },
    revalidate: 60,
  }
}

export default function Article({ mdxSource, tweets, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id)
    return <Tweet {...tweet} />
  }

  return (
    <ArticleLayout frontMatter={frontMatter}>
      <Component
        components={{
          ...components,
          StaticTweet
        }}
      />
    </ArticleLayout>
  )
}

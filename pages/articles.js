import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getPropsBySlug } from '@io/lib/propsFromJSON'
import articlesData from '@io/data/articles.json'
import ContentLayout from '@io/layouts/ContentLayout'
import LatestArticle from '@io/components/latestItem'
import ArticlesList from '@io/components/articlesList'

export const getStaticProps = async ({ locale }) => {
  const jsonProps = await getPropsBySlug('articles', locale)

  return {
    props: {
      ...jsonProps, 
      ...await serverSideTranslations(locale, ['common', 'articles']),
    },
    revalidate: 1800,
  }
}

const Articles = (props) => {
  const { locale } = useRouter()
  const { t } = useTranslation('articles')

  const latestArticle = articlesData?.latest?.filter((article) => article.lang === locale)[0]

  const allArticles = articlesData?.all?.filter((article) => article.lang === locale)

  return (
    <ContentLayout {...props}>
      <p dangerouslySetInnerHTML={
        { __html: t('articles-single', {
            interpolation: {
              escapeValue: false,
            },
            value: articlesData?.total,
          }),
        }
      } />
      <LatestArticle item={latestArticle} dict="articles" />
      <ArticlesList articles={allArticles} />
    </ContentLayout>
  )
}

export default Articles
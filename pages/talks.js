import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import parseISO from 'date-fns/parseISO'

import ContentLayout from '@io/layouts/ContentLayout'
import { getPropsBySlug } from '@io/lib/propsFromJSON'
import talksData from '@io/data/talks.json'
import TalksList from '@io/components/talksList'
import LatestTalk from '@io/components/latestItem'

export const getStaticProps = async ({ locale }) => {
  const jsonProps = await getPropsBySlug('talks', locale)

  return {
    props: {
      ...jsonProps,
      ...await serverSideTranslations(locale, ['common', 'talks']),
    },
    revalidate: 1800,
  }
}

const Talks = (props) => {
  const { locale } = useRouter()
  const { t } = useTranslation('talks')

  const talksOrdered = talksData?.filter((talk) => talk.lang === locale) // Filter to get by locale
          .sort((a, b) => (
            // Sort talks by date
            parseISO(b.content.publishedAt) - parseISO(a.content.publishedAt)
          ))
          .filter((t) => t.content.active) // Just the active ones
  
  const lastTalk = talksOrdered.slice(0, 1)[0]
  const allTalks = talksOrdered.slice(1, (talksData.length - 1))

  return (
    <ContentLayout {...props}>
      <p dangerouslySetInnerHTML={
        { __html: t('talks-single', {
            interpolation: {
              escapeValue: false,
            },
          }),
        }
      } />
      <LatestTalk item={lastTalk} dict="talks" />
      <TalksList talks={allTalks} />
      <p>{t('talks-endline')}</p>
    </ContentLayout>
  )
}

export default Talks
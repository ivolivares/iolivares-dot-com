import useSWR from 'swr'
import { useTranslation } from 'next-i18next'

import ExternalLink from '@io/components/ExternalLink'
import fetcher from '@io/lib/fetcher'

const buildTwitterIntentLink = (intentTranslatedText, songTitle) => {
  const intentTwitterLink = 'https://twitter.com/intent/tweet?screen_name=ivolivares&text='

  if (songTitle) {
    return intentTwitterLink + intentTranslatedText.replace(/<song-name>/g, songTitle)
  }
  
  return  intentTwitterLink + intentTranslatedText    
}

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher)
  const { t } = useTranslation('common')

  return (
    <span>
      {!data ? (
        <span>{t('spotify-loading')}</span>
      ) : (data?.isPlaying ? (
        <>
          <span className="mr-1">
            {t('spotify-playing-start')}
          </span>
          <ExternalLink
            classNames="text-gray-800 dark:text-gray-200 font-medium max-w-max underline"
            href={data.songUrl}
          >
            {`${data.title} ${t('spotify-playing-by')} ${data?.artist ?? 'Spotify'}`}
          </ExternalLink>
          <span className="mx-1">
            {t('spotify-playing-where')}
          </span>
          <ExternalLink
            classNames="font-medium max-w-max"
            href={buildTwitterIntentLink(t('spotify-playing-twitter-intent'), data.title)}
          >
            {t('spotify-playing-cta')}
          </ExternalLink>
        </>
      ) : (
        <>
          <span className="mr-1">
            {t('spotify-not-playing')}
          </span>
          <ExternalLink
            classNames="font-medium max-w-max"
            href={buildTwitterIntentLink(t('spotify-not-playing-twitter-intent'))}
          >
            {t('spotify-not-playing-cta')}
          </ExternalLink>
        </>
      ))}
    </span>
  )
}

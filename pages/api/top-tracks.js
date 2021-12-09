/**
 * Originally inspired by Lee Robinson snippet
 * @see https://leerob.io/snippets/spotify
*/
import { OK } from 'http-status'
import { withSentry } from '@sentry/nextjs'

import { getTopTracks } from 'lib/spotify'

export default withSentry(async function handler(_, res) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track) => {
    return {
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      album: track.album.name,
      albumImageUrl: track.album.images[0].url,
      songUrl: track.external_urls.spotify,
      previewUrl: track.preview_url,
      title: track.name
    }
  })

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(OK).json({ tracks })
})

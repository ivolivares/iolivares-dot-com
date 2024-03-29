/**
 * Originally inspired by Lee Robinson snippet
 * @see https://leerob.io/snippets/spotify
 */
import { OK, NO_CONTENT, BAD_REQUEST, UNAUTHORIZED } from 'http-status'
import { withSentry } from '@sentry/nextjs'

import { getNowPlaying } from '@io/lib/spotify'
import { validateToken } from '@io/lib/authToken'

export default withSentry(async function handler(req, res) {
  const validToken = await validateToken(req.headers.authorization)

  if (!validToken) {
    return res.status(UNAUTHORIZED).json({
      auth: false,
    })
  }

  const response = await getNowPlaying()

  if (response.status === NO_CONTENT || response.status > BAD_REQUEST) {
    return res.status(OK).json({
      isPlaying: false,
    })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.status(OK).json({
      isPlaying: false,
    })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify
  const previewUrl = song.item.preview_url

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30',
  )

  return res.status(OK).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    previewUrl,
    songUrl,
    title
  })
})

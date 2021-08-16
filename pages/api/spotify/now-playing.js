import { getNowPlaying } from '../../../lib/spotify'

export default async function handler(_, res) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const data = await response.json()
  const isPlaying = data.is_playing

  const track = {
    title: data.item.name,
    artist: data.item.artists.map((_artist) => _artist.name).join(', '),
    album: data.item.album.name,
    image: data.item.album.images[0].url,
    url: data.item.external_urls.spotify
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ isPlaying, track: track })
}
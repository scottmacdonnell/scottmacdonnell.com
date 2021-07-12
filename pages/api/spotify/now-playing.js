import { getNowPlaying } from '../../../lib/spotify'

export default async (_, res) => {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()

  const isPlaying = song.is_playing

  const track = {
    title: song.item.name,
    artist: song.item.artists.map((_artist) => _artist.name).join(', '),
    album: song.item.album.name,
    image: song.item.album.images[0].url,
    url: song.item.external_urls.spotify
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ isPlaying, track: track })
}
import { getTopTracks } from '../../../lib/spotify'

export default async function handler(_, res) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    album: track.album.name,
    image: track.album.images[0].url,
    length: track.duration_ms,
    explicit: track.explicit,
    songUrl: track.external_urls.spotify,
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ tracks })
}
import querystring from 'querystring'

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term`
const ARTISTS_ENDPOINT = `https://api.spotify.com/v1/artists`
const TRACKS_ENDPOINT = `https://api.spotify.com/v1/tracks`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopArtists = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getArtist = async (ids) => {
  const { access_token } = await getAccessToken()

  return fetch(`${ARTISTS_ENDPOINT}?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTrack = async (ids) => {
  const { access_token } = await getAccessToken()

  return fetch(`${TRACKS_ENDPOINT}?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
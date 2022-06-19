import Image from 'next/image'
import useSWR from 'swr'

import Spinner from 'components/Spinner'
import * as Text from 'components/Text'

import fetcher from 'lib/fetcher'

import styles from 'styles/components/NowPlaying.module.scss'

export const Content = () => {
  const { data, error } = useSWR('/api/spotify/now-playing', fetcher)

  if (error) return <NotPlaying />

  if (!data) return <Loading />

  const track = data.track

  return data.isPlaying ? <Playing data={track} key={track.title} /> : <NotPlaying />
}

export const Wrapper = (props) => {
  return (
    <div className={styles.Wrapper} {...props}>
      {props.children}
      <div className={styles.Line} />
    </div>
  )
}

function Loading({ data }) {
  return (
    <Text.Anchor
      href="https://spotify.com"
      isExternal
    >
      <div className={styles.Track}>
        <TrackInfo>
        <div className={styles.TrackImage}>
          <div
            style={{
              height: '40px',
              width: '40px',
              background: '#EAEAEA'
            }}
          />
        </div>

          <TrackMain>
            <TrackTitle>Loading...</TrackTitle>
            <TrackArtist>Spotify API</TrackArtist>
          </TrackMain>
        </TrackInfo>

        <TrackAlbum></TrackAlbum>

        <div className={styles.TrackMeta}>
          <Spinner color="0, 0, 0" />
        </div>
      </div>
    </Text.Anchor>
  )
}

function NotPlaying({ data }) {
  return (
    <Text.Anchor
      href="https://spotify.com"
      isExternal
    >
      <div className={styles.Track}>
        <TrackInfo>
        <div className={styles.TrackImage}>
          <div
            style={{
              height: '40px',
              width: '40px',
              background: '#EAEAEA'
            }}
          />
        </div>

          <TrackMain>
            <TrackTitle>Not Playing</TrackTitle>
          </TrackMain>
        </TrackInfo>

        <TrackAlbum></TrackAlbum>

        <div className={styles.TrackMeta}>
          <svg viewBox="0 0 168 168" width="20px" height="20px" style={{ paddingTop: '1px' }}>
            <path
              fill="#EAEAEA"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
        </div>
      </div>
    </Text.Anchor>
  )
}

function Playing({ data }) {
  console.log(data)
  return (
    <Text.Anchor
      href={data.url}
      isExternal
    >
      <div className={styles.Track}>
        <TrackInfo>
          <TrackImage data={data} />

          <TrackMain>
            <TrackTitle>{data.title}</TrackTitle>
            <TrackArtist>{data.artist}</TrackArtist>
          </TrackMain>
        </TrackInfo>

        <TrackAlbum>{data.album}</TrackAlbum>

        <div className={styles.TrackMeta}>
          <svg viewBox="0 0 168 168" width="20px" height="20px" style={{ paddingTop: '1px' }}>
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
        </div>
      </div>
    </Text.Anchor>
  )
}

function TrackInfo(props) {
  return <div className={styles.TrackInfo}  {...props} />
}

function TrackImage({ data }) {
  return (
    <div className={styles.TrackImage}>
      <Image
        src={data.image}
        alt={`${data.artist} - ${data.album}`}
        width="40"
        height="40"
        loading="eager"
        draggable="false"
      />
    </div>
  )
}

function TrackMain(props) {
  return <div className={styles.TrackMain} {...props} />
}

function TrackTitle(props) {
  return <span className={styles.TrackTitle} {...props} />
}

function TrackArtist(props) {
  return <span className={styles.TrackArtist} {...props} />
}

function TrackAlbum(props) {
  return (
    <div className={styles.TrackAlbum}>
      <span {...props} />
    </div>
  )
}

// function TrackMeta({ data }) {
//   const duration = s => {
//     let helperDate = addSeconds(new Date(0), s)
//     return format(helperDate, 'm:ss')
//   }

//   return (
//     <div className={styles.TrackMeta}>
//       <span className={styles.TrackLength}>{ duration(millisecondsToSeconds(data.length)) }</span>
//     </div>
//   )
// }
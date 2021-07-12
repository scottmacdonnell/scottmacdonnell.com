import Image from 'next/image'
import useSWR from 'swr'
import { format, addSeconds, millisecondsToSeconds } from 'date-fns'
import * as Text from '../components/ui/Text'

import fetcher from '../lib/fetcher'

import styles from '../styles/components/TopTracks.module.scss'

export default function TopTracks() {
  const { data } = useSWR('/api/spotify/top-tracks', fetcher)

  if (!data) { return null }

  const topTracks = data.tracks

  return (
    <TopTracksWrapper>
      { topTracks.map((track) => { return <Track data={track} /> }) }
    </TopTracksWrapper>
  )
}

function TopTracksWrapper(props){ 
  return <div className={styles.TopTracks} {...props} />
}

function Track({ data }) {
  return (
    <Text.Anchor
      href={data.songUrl}
      key={data.songUrl}
      isExternal
    >
      <div className={styles.Track} key={data.songUrl}>
        <TrackInfo>
          <TrackImage data={data} />

          <TrackMain>
            <TrackTitle>{data.title}</TrackTitle>
            <TrackArtist>{data.artist}</TrackArtist>
          </TrackMain>
        </TrackInfo>

        <TrackAlbum>{data.album}</TrackAlbum>

        <TrackMeta data={data} />
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

function TrackMeta({ data }) {
  const duration = s => {
    let helperDate = addSeconds(new Date(0), s)
    return format(helperDate, 'm:ss')
  }

  return (
    <div className={styles.TrackMeta}>
      <span className={styles.TrackLength}>{ duration(millisecondsToSeconds(data.length)) }</span>
    </div>
  )
}
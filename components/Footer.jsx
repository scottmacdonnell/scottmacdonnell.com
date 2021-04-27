import Link from 'next/link'

import Container from './Container'
import NowPlaying from './NowPlaying'

import styles from '../styles/components/Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.FooterHeader}>
          <div className={styles.FooterContact}>
            <span><p>Contact</p></span>
            <h2>Have something in mind?</h2>
            <h2>Let’s make it happen.</h2>
            <br/>
            <Link href="mailto:scott@scottmacdonnell.com">
              <a><h5>scott@scottmacdonnell.com</h5></a>
            </Link>
          </div>

          <div className={styles.FooterSpotify}>
            <div className={styles.FooterNowPlaying}>
              <NowPlaying />
            </div>
            
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.Line} />
      </Container>
      <Container>
        <div className={styles.Tagline}>
          <div className={styles.TaglineLeft}>
            <p>© 2021 Scott MacDonnell. All Rights Reserved.</p>
          </div>

          <div className={styles.TaglineRight}>
            <Link href="https://github.com/scottmacdonnell/scottmacdonnell.com">
              <a target="_blank" rel="noopener noreferrer">
                <p>View source code on GitHub.</p>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
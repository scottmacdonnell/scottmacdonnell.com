import Container from './Container'
import Social from './Social'

import styles from '../styles/components/Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroContent}>
        <Container>
          <div className={styles.Desktop}>
            <span><p>Hi, my name is Scott MacDonnell</p></span>
          </div>
          <div className={styles.Mobile}>
            <span><p>Hi, I'm Scott</p></span>
          </div>
        </Container>

        <Container>
          <h1 className={styles.PrimaryHeading}>I’ve come to the conclusion that simplicity will stand out, while complexity will get lost in the crowd.</h1>
        </Container>

        <Container>
          <h5>Full Stack Developer and Sound Engineer based in Toronto, Canada.</h5>
        </Container>

        <Container>
          <Social />
        </Container>
      </div>
    </div>
  )
}
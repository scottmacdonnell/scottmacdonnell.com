import { motion } from 'framer-motion'

import Container from './Container'
import Social from './Social'

import styles from '../styles/components/Hero.module.scss'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const pageVariants = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.5, ...transition } },
}

export default function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroContent}>
        <Container>
          <motion.div className={styles.Desktop} variants={pageVariants}>
            <span><p>Hi, my name is Scott MacDonnell</p></span>
            {/* Welcome */}
          </motion.div>
          <motion.div className={styles.Mobile} variants={pageVariants}>
            <span><p>Hi, I'm Scott</p></span>
          </motion.div>
        </Container>

        <Container>
          <h1 className={styles.PrimaryHeading}>I believe simplicity will stand out, while complexity will get lost in the crowd.</h1>
        </Container>

        <Container>
          <motion.div variants={pageVariants}>
            <h5>Full Stack Developer and Sound Engineer based in Toronto, Canada.</h5>
          </motion.div>
        </Container>

        <Container>
          <motion.div variants={pageVariants}>
            <Social />
          </motion.div>
        </Container>
      </div>
    </div>
  )
}
import { motion } from 'framer-motion'

import Social from '../components/Social'

import styles from '../styles/components/IndexIntro.module.scss'

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const titleVariants = {
  exit: { opacity: 0, transition },
  enter: {
    opacity: 1,
    transition,
  },
}

const metaVariants = {
  exit: { opacity: 0, transition },
  enter: {
    opacity: 1,
    transition: { delay: 0.25, ...transition },
  },
}

export default function IndexIntro({
  title,
  type,
  description,
  year
}) {
  return (
    <div className={styles.CaseIntro}>
      <motion.div className={styles.CaseIntroTitle} variants={titleVariants}>
        <h1>Scott MacDonnell</h1>
      </motion.div>
      
      <motion.div className={styles.CaseIntroMetaMobile} variants={metaVariants}>
        <div className={styles.IndexIntroMeta}>
          <p>Full Stack Developer and Sound Engineer based in Toronto, Canada.</p>
          <Social />
        </div>
      </motion.div>

      <motion.div className={styles.CaseIntroMetaDesktop} variants={metaVariants}>
        <div className={styles.IntroSubtitle}>
          <p>Full Stack Developer and Sound Engineer based in Toronto, Canada.</p>
        </div>

        <div className={styles.IndexIntroSocial}>
          <Social />
        </div>
      </motion.div>
    </div>
  )
}
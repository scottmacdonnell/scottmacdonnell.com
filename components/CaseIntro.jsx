import { motion } from 'framer-motion'

import styles from '../styles/components/CaseIntro.module.scss'

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const primaryVariants = {
  exit: { opacity: 0, transition },
  enter: {
    opacity: 1,
    transition,
  },
}

const secondaryVariants = {
  exit: { opacity: 0, transition },
  enter: {
    opacity: 1,
    transition: { delay: 0.25, ...transition },
  },
}

export default function CaseIntro({
  title,
  type,
  description,
  year
}) {
  return (
    <div className={styles.CaseIntro}>
      <motion.div className={styles.CaseIntroTitle} variants={primaryVariants}>
        <h1>{title}</h1>
      </motion.div>
      
      <motion.div className={styles.CaseIntroMetaMobile} variants={secondaryVariants}>
        <div className={styles.CaseIntroType}>
          <p>
            <strong>{type}</strong><br/>{description}<br/>{year}
          </p>
        </div>
      </motion.div>

      <motion.div className={styles.CaseIntroMetaDesktop} variants={secondaryVariants}>
        <div className={styles.CaseIntroType}>
          <p>
            <strong>{type}</strong>
          </p>
        </div>

        <div className={styles.CaseIntroDescription}>
          <p>{description}</p>
        </div>

        <div className={styles.CaseIntroYear}>
          <p>{year}</p>
        </div>
      </motion.div>
    </div>
  )
}
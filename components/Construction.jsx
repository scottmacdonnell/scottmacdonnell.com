import Link from 'next/link'
import { motion } from 'framer-motion'

import Social from './Social'

import styles from '../styles/components/Construction.module.scss'

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const pageVariants = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.25, ...transition } },
}

export default function Construction() {
  return (
    <div className={styles.Construction}>
      <motion.div className={styles.Content} variants={pageVariants}>
        <h1>Scott MacDonnell</h1>
        <p>{"Hi, I'm a Full Stack Developer and Sound Engineer based in Toronto, Canada. I'm currently working on a new website, but in the meantime feel free to contact me at "}
          <Link href="mailto:scott@scottmacdonnell.com">
            <a>scott@scottmacdonnell.com.</a>
          </Link> 
        </p>
        <Social />
      </motion.div>
    </div>
  )
}
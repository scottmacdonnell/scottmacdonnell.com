import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../styles/components/Showcase.module.scss'

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { x: 50, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.25, ...transition } },
}

const textVariants1 = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.30, ...transition } },
}

const textVariants2 = {
  exit: { opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.35, ...transition } },
}

const textVariants3 = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.40, ...transition } },
}

const textVariants4 = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.45, ...transition } },
}

export default function Showcase() {
  return (
    <div className={styles.Showcase}>
      <Project
        title="Spring Lakes Golf Club"
        type="Full-Stack React Development"
        image="/placeholder.jpg"
      />

      <Project
        title="Larry Fitzgerald Jr."
        type="Full-Stack WordPress Development"
        image="/placeholder.jpg"
      />
      
      <Project
        title="deepsix"
        type="Full-Stack React Development"
        image="/placeholder.jpg"
      />
    </div>
  )
}

function Project({
  title,
  type,
  image,
}) {
  return (
    <div className={styles.Project}>
      <Link href="/case">
        <div className={styles.ProjectInfo}>
          <motion.div variants={textVariants1}>
            <span><p>Project</p></span>
          </motion.div>

          <motion.div variants={textVariants2}>
            <h2>{title}</h2>
          </motion.div>

          <motion.div variants={textVariants3}>
            <p>{type}</p>
          </motion.div>
          
          <motion.div variants={textVariants4}>
            <a>Explore →</a>
          </motion.div>
          
        </div>
      </Link>

      <motion.div className={styles.ProjectImage} variants={imageVariants}>
        <Image
          src={image}
          layout="fill"
        />
      </motion.div>
    </div>
  )
}
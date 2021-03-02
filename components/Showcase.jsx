import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../styles/components/Showcase.module.scss'

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const pageVariants = {
  exit: { x: 50, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.25, ...transition } },
}

export default function Showcase() {
  return (
    <motion.div className={styles.Showcase} variants={pageVariants}>
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
    </motion.div>
  )
}

function Project({
  title,
  type,
  image,
}) {
  return (
    <div className={styles.Project}>
      <div className={styles.ProjectInfo}>
        <h2>{title}</h2>
        <p>{type}</p>
      </div>

      <div className={styles.ProjectImage}>
        <Image
          src={image}
          layout="fill"
        />
      </div>
    </div>
  )
}
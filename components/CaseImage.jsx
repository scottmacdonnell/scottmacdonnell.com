import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../styles/components/CaseImage.module.scss'

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const pageVariants = {
  exit: { x: 50, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.25, ...transition } },
}

export default function CaseImage({
  image
}) {
  return (
    <motion.div className={styles.CaseImage} variants={pageVariants}>
      <Image
        src={image}
        width={1920}
        height={720}
        layout="responsive"
        objectFit="cover"
      />
    </motion.div>
  )
}
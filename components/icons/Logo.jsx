import { motion } from 'framer-motion'

const animation = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)"
  }
}

const styles = {
  width: "56%",
  overflow: "visible",
  stroke: "#000",
  strokeWidth: "0.15",
  strokeLinejoin: "miter",
  strokeLinecap: "square",
  shapeRendering: "geometricprecision"
}

export default function Logo({ animated = false }) {
  return (
    <>
      {animated ? (
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={styles}
          >
            <motion.path
              d="M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z"
              variants={animation}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
              }}
            />
          </motion.svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={styles}
          >
            <path d="M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z" />
          </svg>
        )
      }
    </>
  )
}
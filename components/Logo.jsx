import { motion } from 'framer-motion'

export default function Logo({ color, animated = false }) {
  const animation = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: `rgba(${color}, 0)`
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: `rgba(${color}, 1)`
    }
  }
  
  const styles = {
    overflow: "visible",
    stroke: `rgba(${color}, 1)`,
    strokeWidth: "0.15",
    strokeLinejoin: "miter",
    strokeLinecap: "square",
    shapeRendering: "geometricprecision"
  }

  return (
    <>
      {animated ? (
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2 2 20 20"
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
            viewBox="2 2 20 20"
            fill={`rgba(${color}, 1)`}
            style={styles}
          >
            <path d="M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z" />
          </svg>
        )
      }
    </>
  )
}
import { motion } from 'framer-motion'

export default function Logo({ id, color, animated = false }) {
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
    strokeLinejoin: "round",
    strokeLinecap: "round",
    shapeRendering: "geometricPrecision"
  }

  return (
    <>
      { animated ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={styles}
        >
          <defs>
            <motion.path
              d="M13,0,24,16.32,13,24ZM11,0,0,16.32,11,24Z"
              id={id}
              variants={animation}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1.2, ease: 'easeInOut' },
                fill: { duration: 1.2, ease: [1, 0, 0.8, 1] }
              }}
            />
            <clipPath id={`clip${id}`}>
              <use xlinkHref={`#${id}`}/>
            </clipPath>
          </defs>
          <g>
            <use
              xlinkHref={`#${id}`}
              stroke={`rgba(${color}, 1)`}
              strokeWidth="0.15"
              clipPath={`url(#clip${id})`}
            />
          </g>
        </motion.svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={`rgba(${color}, 1)`}
          style={styles}
        >
          <defs>
            <path
              d="M13,0,24,16.32,13,24ZM11,0,0,16.32,11,24Z"
              id={id}
            />
            <clipPath id={`clip${id}`}>
              <use xlinkHref={`#${id}`}/>
            </clipPath>
          </defs>
          <g>
            <use
              xlinkHref={`#${id}`}
              stroke={`rgba(${color}, 1)`}
              strokeWidth="0.15"
              clipPath={`url(#clip${id})`}
            />
          </g>
        </svg>
      )}
    </>
  )
}
import Link from 'next/link'
import { motion } from 'framer-motion'

import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import GlitchText from '../components/GlitchText'
import Footer from '../components/Footer'

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const backVariants = {
  exit: { x: '5%', opacity: 0, transition },
  enter: {
    x: '0%',
    opacity: 1,
    transition,
  },
}

export default function NotFound() {
  return (
    <Page
      className="404"
      pageName="404"
      slug="404"
      description="Page not found."
    >
      <header id="header">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main id="main">
        <Container>
          <motion.div className="back" variants={backVariants}>
            <Link href="/">
              <GlitchText>Not Found</GlitchText>
            </Link>
          </motion.div>
          <motion.div className="back" variants={backVariants}>
            <Link href="/">
              <a>← Back</a>
            </Link>
          </motion.div>
        </Container>
      </main>

      <footer id="footer">
        <Container>
          <Footer />
        </Container>
      </footer>
    </Page>
  )
  
}
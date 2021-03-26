import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

import Footer from '../components/Footer'

export default function Index() {
  return (
    <Page>
      <header id="header">
        <Navbar />
      </header>

      <main id="main">
        <Hero />

        <Projects />
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </Page>
  )
}
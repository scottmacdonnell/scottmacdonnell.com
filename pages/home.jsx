import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import IndexIntro from '../components/IndexIntro'
import Social from '../components/Social'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <Page
      className="Index"
    >
      <header id="header">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main id="main">
        <Container>
          <IndexIntro
            title="Spring Lakes Golf Club"
            type="Serverless Website"
            description="Full-Stack React Development"
            year="2021"
          />
        </Container>

        <Container>
          <Showcase />
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
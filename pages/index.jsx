import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Construction from '../components/Construction'

export default function Index() {
  return (
    <Page>
      <header id="header">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main id="main">
        <Container>
          <Construction />
        </Container>
      </main>

      <footer id="footer">
        {/* <Container>
          <Footer />
        </Container> */}
      </footer>
    </Page>
  )
}
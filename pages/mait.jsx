import Page from '../components/Page'
import Container from '../components/Container'
import GlitchText from '../components/GlitchText'

export default function Index() {
  return (
    <Page
      className="Index"
    >
      <header id="header">

      </header>

      <main id="main">
        <Container>
          <GlitchText>Under Maintenance</GlitchText>
        </Container>
      </main>

      <footer id="footer">
        
      </footer>
    </Page>
  )
}
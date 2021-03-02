import Page from '../../components/Page'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import CaseIntro from '../../components/CaseIntro'
import CaseImage from '../../components/CaseImage'
import Footer from '../../components/Footer'

export default function Case() {
  return (
    <Page
      className="Case"
      pageName="Case"
      slug="Case"
      description="Case"
    >
      <header id="header">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main id="main">
        <Container>
          <CaseIntro
            title="Spring Lakes Golf Club"
            type="Serverless Website"
            description="Full-Stack React Development"
            year="2021"
          />

          <CaseImage
            image="/placeholder.jpg"
          />

          {/* <h2>Digital world. Randomised words.</h2>
          <p>Randomised words which don’t look. If passage words you are going to use a passage words which don’t look of you need to be sure. When an unknown printer took a galley.</p>

          <h2>Concept. Randomised words which don’t look. If passage words you are going to use a passage words which don’t look of you need to be sure. When an unknown printer took a galley. Amet suscipit frig lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor.</h2>
          <p>Randomised words which don’t look. If passage words you are going to use a passage words which don’t look of you need to be sure. When an unknown printer took a galley.</p> */}
        </Container>
      </main>

      <footer id="footer">
        <Container>
          {/* <Footer /> */}
        </Container>
      </footer>
    </Page>
  )
}
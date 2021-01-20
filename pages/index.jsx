import Page from '../components/Page'
import Container from '../components/Container'
import SocialNav from '../components/SocialNav'
import Projects from '../components/Projects'
import NowPlaying from '../components/NowPlaying'

export default function Index() {
  return (
    <Page 
      className="Index"
    >
      <header>
      </header>

      <main>
        <Container>
          <h1>Hi, my name is Scott MacDonnell</h1>
          <p>I am a Full Stack Developer based in Toronto, Canada, specializing in building digital products that resonate.</p>
          <SocialNav />
        </Container>

        <Projects />
        <NowPlaying />
      </main>

      <footer>
      </footer>
    </Page>
  )
}
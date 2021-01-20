import Page from '../components/Page'
import Projects from '../components/Projects'

export default function Index() {
  return (
    <Page className="Index">
      <header>
      </header>

      <main>
        <h1>Scott MacDonnell</h1>
        <p>I am a Full Stack Developer based in Toronto, Canada, specializing in building digital products that resonate.</p>

        <h2>Projects</h2>
        <Projects />
      </main>

      <footer>
      </footer>
    </Page>
  )
}
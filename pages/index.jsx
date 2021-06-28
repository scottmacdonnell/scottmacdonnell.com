import Page, { Animation } from '../components/Page'

export default function Index() {
  return (
    <Page
      className="Index"
      slug="/"
    >
      <Animation>
        <header></header>
        
        <main>
          <h1>Scott MacDonnell</h1>
        </main>
        
        <footer></footer>
      </Animation>
    </Page>
  )
}
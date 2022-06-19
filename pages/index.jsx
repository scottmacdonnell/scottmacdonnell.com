import * as Page from 'components/Page'
import * as Navbar from 'components/Navbar'
import IndexIntro from 'components/sections/IndexIntro'
import IndexShowcase from 'components/sections/IndexShowcase'
import GlobalFooter from 'components/sections/GlobalFooter'

export default function IndexPage() {
  return (
    <Page.Wrapper
      slug="/"
      img="/images/og.jpg"
      className="IndexPage"
    >
      <header>
        <Navbar.Block />
      </header>

      <main>
        <IndexIntro />
        <IndexShowcase />
      </main>

      <footer>
        <GlobalFooter />
      </footer>
    </Page.Wrapper>
  )
}
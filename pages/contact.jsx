import Page, { Animation } from '../components/Page'
import Footer from '../components/Footer'
import * as Text from '../components/ui/Text'
import Box from '../components/utils/Box'

export default function Contact() {
  return (
    <Page
      pageName="Contact"
      slug="/contact"
      className="ContactPage"
    >
      <Animation>
        <header>
        </header>

        <main>
          <Box>
            <Text.Heading1>
              Contact
            </Text.Heading1>
          </Box>
        </main>

        <footer>
          <Footer />
        </footer>
      </Animation>
    </Page>
  )
}
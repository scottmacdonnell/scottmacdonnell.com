import Page, { Animation } from '../components/Page'
import Social, { TwitterLink, GitHubLink, InstagramLink, LinkedInLink } from '../components/Social'
import Footer from '../components/Footer'
import * as Text from '../components/ui/Text'
import Box from '../components/utils/Box'

export default function Index() {
  return (
    <Page
      slug="/"
      className="IndexPage"
    >
      <Animation>
        <header>
        </header>

        <main>
          <Box>
            <Text.Small>Hi, my name is Scott MacDonnell</Text.Small>
            <Text.Heading1>I believe simplicity will stand out, while complexity will get lost in the crowd.</Text.Heading1>
            <Text.SHeading>
              Full Stack Developer and Sound Engineer based in Toronto, Canada.
            </Text.SHeading>
            <Social>
              <TwitterLink />
              <GitHubLink />
              <InstagramLink />
              <LinkedInLink />
            </Social>
          </Box>
        </main>

        <footer>
          <Footer />
        </footer>
      </Animation>
    </Page>
  )
}
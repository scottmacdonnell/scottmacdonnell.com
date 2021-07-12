import Page, { Animation } from '../components/Page'
import Social, { TwitterLink, GitHubLink, InstagramLink, LinkedInLink } from '../components/Social'
import Footer from '../components/Footer'
import * as Text from '../components/ui/Text'
import Box from '../components/utils/Box'

export default function About() {
  return (
    <Page
      pageName="About"
      slug="/about"
      className="AboutPage"
    >
      <Animation>
        <header>
        </header>

        <main>
          <Box>
            <Text.Small>About</Text.Small>
            <Text.Heading2>Biography</Text.Heading2>
            <Text.SHeading>
              Hi, Im Scott. Im a digital creator, Project Lead, UIUX Designer, and Product Designer with over 5 years of experience in Web Development and Sound Engineering.
            </Text.SHeading>

            <Text.Paragraph>
              I define myself by continuing to be innovative in the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and doing interesting things that matter.
            </Text.Paragraph>

            <Text.Paragraph>
              My inspiration is naturally driven by high energy levels and limitless enthusiasm. My strength is vision for the end product before development has even started, which in turn, allows me to be a fast learner and juggle projects with ease. In my opinion, things shouldnt be complicated and building digital products that improve the users lives in one way or another is something I believe to be integral.
            </Text.Paragraph>

            <Text.Paragraph>
              Over the course of my life and career, ongoing professional and personal development hones my expertise in a number of areas. Currently, much of my work is remote with a freelance client base, however I am always on the lookout for new collaborations and opportunities. You can read more about my experience, skills, education and much more below. Feel free to reach out to me at scottscottmacdonnell.com for any questions or inquiries.
            </Text.Paragraph>
          </Box>

          <Box>
            <Text.Small>Experience</Text.Small>
            <Text.Heading2>Where Ive Been At</Text.Heading2>
            <Text.SHeading>
              The last few years have been pretty wild...
            </Text.SHeading>
          </Box>

          <Box>
            <Text.Small>Skills</Text.Small>
            <Text.Heading2>Things Im Good At</Text.Heading2>
            <Text.SHeading>
              Lockdown really helped me get this section poppin I wont lie.
            </Text.SHeading>
          </Box>

          <Box>
            <Text.Small>Accomplishments</Text.Small>
            <Text.Heading2>Awards Recognition</Text.Heading2>
            <Text.SHeading>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Text.SHeading>
          </Box>
        </main>

        <footer>
          <Footer />
        </footer>
      </Animation>
    </Page>
  )
}
import { useEffect } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

import * as Page from '../components/Page'
import * as Navbar from '../components/Navbar'
import * as Showcase from '../components/Showcase'
import * as NowPlaying from '../components/NowPlaying'
import * as Footer from '../components/Footer'
import * as Logo from '../components/Logo'
import * as Social from '../components/Social'
import * as Text from '../components/ui/Text'
import Container from '../components/utils/Container'
import EmailLink from '../components/EmailLink'

export default function Index() {
  const darkMode = useDarkMode().getTheme()

  return (
    <Page.Wrapper
      slug="/"
      description="Full Stack Developer and Sound Engineer based in Toronto, Canada."
      img="/og.png"
      className="Index"
    >
      <header>
        <Navbar.Wrapper>
          <Navbar.Logo>
            <Logo.Animated color={darkMode ? "255, 255, 255" : "0, 0, 0"} id="navbar" /> 
          </Navbar.Logo>

          {/* <Navbar.NavView>
            <Text.Anchor
              href="/"
            >
              Home
            </Text.Anchor>
            <Text.Anchor
              href="/about"
            >
              About
            </Text.Anchor>
            <Text.Anchor
              href="/software"
            >
              Software
            </Text.Anchor>
            <Text.Anchor
              href="/dashboard"
            >
              Dashboard
            </Text.Anchor>
            <Text.Anchor
              href="/sound"
            >
              Sound
            </Text.Anchor>
          </Navbar.NavView> */}
        </Navbar.Wrapper>
      </header>

      <main>
        <section id="intro" style={{ padding: '1.5rem 0 0 0' }}>
          <Container>
            <div
              style={{
                marginTop: '-24px',
                height: '40vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start'
              }}
            >
              <Text.Small style={{ margin: '0.35rem 0' }}>Scott MacDonnell</Text.Small>

              <h1 style={{ margin: '0.25rem 0' }}>
                <Text.Heading3>
                  {"I believe simplicity will "}
                  <div
                    style={{
                      display: 'inline-block',
                      background: "-webkit-linear-gradient(-45deg, #845EF7, #7950F7)",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >stand out</div>
                  {", "}
                  <br />
                  {"while complexity will get lost in the crowd."}
                </Text.Heading3>
              </h1>

              <Text.Paragraph style={{ margin: '0.25rem 0', color: '#666', fontSize: '16px' }}>
                Full Stack Developer and Sound Engineer based in Toronto, Canada.
              </Text.Paragraph>
              <div style={{ margin: '0.5rem 0', width: '120px' }}>
                <Social.Wrapper>
                  <Social.Twitter username="macdonnellscott" />
                  <Social.GitHub username="scottmacdonnell" />
                  <Social.Instagram username="scott.macdonnell" />
                  <Social.LinkedIn username="scottsmacdonnell" />
                </Social.Wrapper>
              </div>
            </div>
          </Container>
        </section>

        <section id="showcase" style={{ padding: '3rem 0'}}>
          <Container>
            <Showcase.Wrapper>
              <Showcase.FeaturedRight>
                <Showcase.FeaturedWrapper>
                  <Showcase.Featured
                    name="Spring Lakes Golf Club"
                    href="https://springlakesgolf.com"
                    img="/images/showcase/springlakesgolf.png"
                  />
                </Showcase.FeaturedWrapper>

                <Showcase.SecondaryWrapper>
                  <Showcase.Secondary
                    name="Larry Fitzgerald Jr."
                    href="https://larryfitzgerald.com"
                    img="/images/showcase/larryfitzgerald.png"
                  />
                  <Showcase.Secondary
                    name="deepsix"
                    href="https://deepsixband.com"
                    img="/images/showcase/deepsixband.png"
                  />
                </Showcase.SecondaryWrapper>
              </Showcase.FeaturedRight>
            </Showcase.Wrapper>
          </Container>
        </section>
        
        <section id="contact" style={{ padding: '3rem 0'}}>
        <Container>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start'
              }}
            >
              <Text.Small style={{ margin: '0.35rem 0' }}>Contact</Text.Small>

              <h2 style={{ margin: '0.25rem 0' }}>
                <Text.Heading3>
                  {"Have something in mind?"}
                  <br />
                  {"Let’s make it happen."}
                </Text.Heading3>
              </h2>
              <EmailLink />
            </div>
          </Container>
        </section>
        
        <section id="now-playing" style={{ padding: '3rem 0 0 0'}}>
          <Container>
            <NowPlaying.Wrapper>
              <NowPlaying.Content />
            </NowPlaying.Wrapper>
          </Container>
        </section>
      </main>

      <footer>
        <Footer.Wrapper>
          <Footer.Info>
            <Footer.Tagline>
              <Footer.Organization>
                <Footer.OrganizationLogo>
                  <Logo.Default
                    color="102, 102, 102"
                    id="footer"
                  />
                </Footer.OrganizationLogo>

                <Footer.OrganizationName>Scott MacDonnell</Footer.OrganizationName>
              </Footer.Organization>

              <Footer.Copyright>© 2021 Scott MacDonnell. All Rights Reserved.</Footer.Copyright>
            </Footer.Tagline>

            <Footer.SocialWrapper>
              <Social.Wrapper>
                <Social.Twitter username="macdonnellscott" />
                <Social.GitHub username="scottmacdonnell" />
                <Social.Instagram username="scott.macdonnell" />
                <Social.LinkedIn username="scottsmacdonnell" />
              </Social.Wrapper>
            </Footer.SocialWrapper>
          </Footer.Info>
        </Footer.Wrapper>
      </footer>
    </Page.Wrapper>
  )
}

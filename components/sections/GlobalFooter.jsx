import Container from 'components/Container'
import ContactCTA from 'components/sections/ContactCTA'
import * as NowPlaying from 'components/NowPlaying'
import * as Logo from 'components/Logo'
import * as Social from 'components/Social'
import * as Footer from 'components/Footer'

import styles from 'styles/components/sections/GlobalFooter.module.scss'

export default function GlobalFooter() {
  return (
    <div className={styles.GlobalFooter}>
      <div className={styles.Content}>
        <ContactCTA />
      </div>

      <div className={styles.NowPlaying}>
        <Container>
          <NowPlaying.Wrapper>
            <NowPlaying.Content />
          </NowPlaying.Wrapper>
        </Container>
      </div>

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
              <Footer.OrganizationName>
                Scott MacDonnell
              </Footer.OrganizationName>
            </Footer.Organization>

            <Footer.Copyright>
              © 2021 Mamma Rita&apos;s Cucina. All Rights Reserved.
            </Footer.Copyright>
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
    </div>
  )
}
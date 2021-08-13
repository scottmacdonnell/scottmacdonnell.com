import * as Page from '../components/Page'
import * as Footer from '../components/Footer'
import * as Social from '../components/Social'

export default function Index() {
  return (
    <Page.Wrapper
      title="Index"
    >
      <header></header>
      
      <main>
        <h1>Scott MacDonnell</h1>
      </main>

      <footer>
        <Footer.Wrapper>
          <Footer.Info>
            <Footer.Tagline>
              <Footer.Organization>
                <Footer.OrganizationLogo>
                  <Logo
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

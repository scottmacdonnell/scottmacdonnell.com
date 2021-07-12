import Page, { Animation } from '../components/Page'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import * as Text from '../components/ui/Text'
import Box from '../components/utils/Box'

export default function Dashboard() {
  return (
    <Page
      pageName="Dashboard"
      slug="/dashboard"
      className="DashboardPage"
    >
      <Animation>
        <header>
        </header>

        <main>
          <Box>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
                <div style={{ width: '8rem' }}>
                  <Logo
                    animated
                    color="0, 0, 0"
                  />
                </div>
                <Text.Heading1 style={{ padding: '1.5rem 0 0 0' }}>Dashboard</Text.Heading1>
            </div>
          </Box>
        </main>

        <footer>
          <Footer />
        </footer>
      </Animation>
    </Page>
  )
}
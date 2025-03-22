import * as Text from 'components/Text'
import * as Social from 'components/Social'
import Container from 'components/Container'

import styles from 'styles/components/sections/IndexIntro.module.scss'

export default function IndexIntro() {
  return (
    <div className={styles.IndexIntro}>
      <Container>
        <div className={styles.Content}>
          <Text.Small>
            Scott MacDonnell
          </Text.Small>

          <Text.Heading1>
            <div>
              {"I believe simplicity will "}
              <div className={styles.Highlight}>stand out</div>
              {","}
            </div>

            {"while complexity will get lost in the crowd."}
          </Text.Heading1>

          <Text.Paragraph>
            Full Stack Developer and Sound Engineer based in Toronto, Canada.
          </Text.Paragraph>

          <div className={styles.Social}>
            <Social.Wrapper>
              <Social.Twitter username="" />
              <Social.GitHub username="scottmacdonnell" />
              <Social.Instagram username="scott.macdonnell" />
              <Social.LinkedIn username="macdonnellscott" />
            </Social.Wrapper>
          </div>
        </div>
      </Container>
    </div>
  )
}

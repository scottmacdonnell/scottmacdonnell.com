import * as Text from 'components/Text'
import Container from 'components/Container'

import styles from 'styles/components/sections/ContactCTA.module.scss'

export default function ContactCTA() {
  return (
    <div className={styles.ContactCTA}>
      <Container>
        <div className={styles.Content}>
          <Text.Small style={{ margin: '0.35rem 0' }}>Contact</Text.Small>
          <h2 style={{ margin: '0.25rem 0' }}>
            <Text.Heading3>
              {"Have something in mind?"}
              <br />
              {"Let's make it happen."}
            </Text.Heading3>
          </h2>
          <Text.Anchor
            href="mailto:scott@scottmacdonnell.com"
          >
            <div className={styles.EmailLink}>
              <Text.SHeading>
                  scott@scottmacdonnell.com
              </Text.SHeading>
            </div>
          </Text.Anchor>
        </div>
      </Container>
    </div>
  )
}
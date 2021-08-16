import * as Text from './ui/Text'

import styles from '../styles/components/EmailLink.module.scss'

export default function EmailLink() {
  return (
    <div className={styles.EmailLink}>
      <Text.Anchor
        href="mailto:scott@scottmacdonnell.com"
      >
        <Text.SHeading style={{ margin: '0.25rem 0' }}>
          scott@scottmacdonnell.com
        </Text.SHeading>
      </Text.Anchor>
    </div>
  )
}
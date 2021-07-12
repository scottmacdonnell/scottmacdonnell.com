import { Anchor } from './ui/Text'

import TwitterIcon from './icons/TwitterIcon'
import GitHubIcon from './icons/GitHubIcon'
import InstagramIcon from './icons/InstagramIcon'
import LinkedInIcon from './icons/LinkedInIcon'

import styles from '../styles/components/Social.module.scss'

export default function Social(props) {
  return (
    <div
      className={styles.Social}
    >
      {props.children}
    </div>
  )
}

export function TwitterLink({ username }) {
  return (
    <span
      className={styles.Twitter}
    >
      <Anchor
        href={`https://twitter.com/${username}`}
        isExternal
      >
        <TwitterIcon />
      </Anchor>
    </span>
  )
}

export function GitHubLink({ username }) {
  return (
    <span
      className={styles.GitHub}
    >
      <Anchor
        href={`https://github.com/${username}`}
        isExternal
      >
        <GitHubIcon />
      </Anchor>
    </span>
  )
}

export function InstagramLink({ username }) {
  return (
    <span
      className={styles.Instagram}
    >
      <Anchor
        href={`https://instagram.com/${username}`}
        isExternal
      >
        <InstagramIcon />
      </Anchor>
    </span>
  )
}

export function LinkedInLink({ username }) {
  return (
    <span
      className={styles.LinkedIn}
    >
      <Anchor
        href={`https://linkedin.com/in/${username}`}
        isExternal
      >
        <LinkedInIcon />
      </Anchor>
    </span>
  )
}
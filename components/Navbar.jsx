import * as Text from './ui/Text'
import Container from './utils/Container'
import SafeArea from './utils/SafeArea'

import { useModalState } from '../hooks/useModalState'

import styles from '../styles/components/Navbar.module.scss'

export const Wrapper = (props) => {
  return (
    <div className={styles.Wrapper}>
      <SafeArea top />
      <Container>
        <div className={styles.Navbar} {...props} />
      </Container>
    </div>
  )
}

export const OverlayWrapper = (props) => {
  return (
    <div className={styles.OverlayWrapper}>
      <SafeArea top />
      <Container>
        <div className={styles.Navbar} {...props} />
      </Container>
    </div>
  )
}

export const Logo = (props) => {
  return <div className={styles.Logo} {...props}>
    <Text.Anchor
      href="/"
      style={{ display: 'inline-flex' }}
    >
      {props.children}
    </Text.Anchor>
  </div>
}


export const NavView = (props) => {
  const { isOpen, onToggle } = useModalState()

  const handleClick = () => {
    onToggle()
  }

  return (
    <>
      <div className={styles.ToggleWrapper}>
        <div className={`${styles.Toggle} ${isOpen ? styles.ToggleActive : ''}`} onClick={handleClick}>
          <div className={styles.IconContainer}>
            <div className={styles.Icon}>
              <div className={styles.TopBar} />
              <div className={styles.BtmBar} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.NavView} ${isOpen ? styles.NavViewActive : ''}`}>
        <div className={styles.NavViewContainer}>
          {props.children}
        </div>
      </div>
    </>
  )
}
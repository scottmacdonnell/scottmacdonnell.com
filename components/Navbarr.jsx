import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
  const [navShown, setNavShown] = useState(false)
  const toggle = () => setNavShown(!navShown)
  return (
    <div className={`${styles.Navbar} ${navShown ? styles.NavbarActive : ''}`}>
      <Logo />

      <div className={styles.NavbarToggleContainer}>
        <div className={styles.NavbarToggle} onClick={toggle}>
          <div className={styles.ToggleIconContainer}>
            <div className={styles.ToggleIcon}>
              <div className={styles.TopBar} />
              <div className={styles.BtmBar} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.NavbarContent}>
        <div className={styles.NavbarMainContainer}>
          <MainNav />
        </div>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div className={styles.NavbarLogo}>
      <Link href="/home">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z" />
          </svg>
        </a>
      </Link>
    </div>
  )
}

function MainNav() {
  return (
    <div className={styles.NavbarMain}>
      <nav>
        <Link href="/home">
          <a>Index</a>
        </Link>
        <Link href="/case">
          <a>Case</a>
        </Link>
      </nav>
    </div>
  )
}
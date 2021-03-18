import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
  const [navShown, setNavShown] = useState(false)
  const toggle = () => setNavShown(!navShown)
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarContainer}>
        <div className={`${styles.Nav} ${navShown ? styles.NavActive : ''}`}>
          <div className={styles.NavLogo}>
            <Link href="/">
              <a name="Homepage" alt="Homepage"><Logo /></a>
            </Link>
          </div>


          <div className={styles.NavMain}>
            <div className={styles.NavToggle} onClick={toggle}>
              <div className={styles.IconContainer}>
                <div className={styles.Icon}>
                  <div className={styles.TopBar} />
                  <div className={styles.BtmBar} />
                </div>
              </div>
            </div>
          </div>


          <div className={styles.NavContent}>
            <div className={styles.NavContainer}>
              <div className={styles.NavWrapper}>
                <MainNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MainNav() {
  return (
    <nav className={styles.MainNav}>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </nav>
  )
}

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z" />
    </svg>
  )
}
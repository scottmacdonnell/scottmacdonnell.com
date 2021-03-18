export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarContainer}>
        <Desktop />
        <Mobile />
      </div>
    </div>
  )
}

function Mobile() {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <div className={`${styles.Mobile} ${mobileNavShown ? styles.MobileActive : ''}`}>
      <div className={styles.MobileLogo}>
        <Logo />
      </div>

      <div className={styles.MobileMain}>
        <div className={styles.MobileToggle} onClick={toggle}>
          <div className={styles.IconContainer}>
            <div className={styles.Icon}>
              <div className={styles.TopBar} />
              <div className={styles.BtmBar} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.MobileContent}>
        <div className={styles.MobileContainer}>
          <div className={styles.MobileWrapper}>
            <MainNav />
          </div>
        </div>
      </div>
    </div>
  )
}

function Desktop() {
  return (
    <div className={styles.Desktop}>
      <div className={styles.DesktopLogo}>
        <Flag />
      </div>

      <div className={styles.DesktopMain}>
        <MainNav />
      </div>
    </div>
  )
}

function MainNav() {
  return (
    <nav className={styles.MainNav}>
      <Link href='/'>
        <a>Home</a>
      </Link>{' '}
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
import Link from 'next/link'

import styles from '../styles/components/Social.module.scss'

export default function Social() {
  return (
    <nav className={styles.Social}>
      <Link href="https://www.linkedin.com/in/scottsmacdonnell/">
        <a className="Link" target="_blank" rel="noopener noreferrer" name="LinkedIn" alt="LinkedIn">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
            <path d="M2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </Link>

      <Link href="https://github.com/scottmacdonnell">
        <a className="Link" target="_blank" rel="noopener noreferrer" name="GitHub" alt="GitHub">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
          </svg>
        </a>
      </Link>

      <Link href="https://twitter.com/macdonnellscott">
        <a className="Link" target="_blank" rel="noopener noreferrer" name="Twitter" alt="Twitter">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
      </Link>

      <Link href="https://instagram.com/scott.macdonnell">
        <a className="Link" target="_blank" rel="noopener noreferrer" name="Instagram" alt="Instagram">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <path d="M17.5 6.5h.01"/>
          </svg>
        </a>
      </Link>
    </nav>
  )
}
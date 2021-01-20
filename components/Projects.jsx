import Link from 'next/link'

import Container from './Container'

import styles from '../styles/components/Projects.module.scss'

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <Container>
        <div className={styles.GridContainer}>
          {/* <Project
            name="The Cheetah Press"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, mollitia molestiae!"
            link="https://thecheetahpress.vercel.app"
          >
            <svg viewBox="0 0 24 24">
              <path d="M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z" fill="currentColor" />
            </svg>
          </Project> */}

          {/* <Project
            name="Spring Lakes Golf Club"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, mollitia molestiae!"
            link="https://springlakesgolf.com"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590.27 745.8">
              <path class="a" d="M590.26 745.8L473.92 259.47l84.75-134.51-104.8 48.01 50.34-73.46L295.3 0l88.55 139.43-37.57-18.35-199.55 96.47 8.9 37.54 202.02 94.43-69.47-11.82-94.48 408.1h65.57l76.41-123.28h98.01l78.99 123.28h77.58z" fill="currentColor" />
              <path class="a" d="M0 744.23l61.22-262.62 194.03-93.1-55.43 235.58-71.09 2.15L52.3 744.23H0zM259.55 144.99l-56.03-89.3 126.87 57.81-70.84 31.49z" fill="currentColor" />
            </svg>
          </Project> */}

          <Project
            name="Larry Fitzgerald Jr"
            description="NFL Wide Receiver, Arizona Cardinals"
            link="https://larryfitzgerald.com"
          >
            <svg viewBox="0 0 31.98 51.34">
              <polygon points="13.37 50.84 13.37 35.19 0.5 35.19 0.5 0.5 7.85 0.5 7.85 27.85 13.37 27.85 13.37 14.9 31.48 14.9 31.48 21.95 19.91 21.95 19.91 27.85 26.68 27.85 26.68 35.19 19.91 35.19 19.91 50.84 13.37 50.84" fill="currentColor" />
            </svg>
          </Project>

          <Project
            name="deepsix"
            description="New Rock Band, Toronto, Canada"
            link="https://deepsixband.com"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15,4V8.5a.5.5,0,0,0,.5.5H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V15.5a.5.5,0,0,0-.5-.5H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H14A1,1,0,0,1,15,4Z" fill="currentColor" />
            </svg>
          </Project>
        </div>
      </Container>
    </div>
  )
}

function Project({
  children,
  name,
  description,
  link
}) {
  return (
    <Link href={link}>
      <div className={styles.Project}>
        <div className={styles.Content}>
          <div className={styles.Image}>
            {children}
          </div>
          <div className={styles.Body}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
    
  )
}
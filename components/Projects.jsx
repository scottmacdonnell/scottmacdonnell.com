import Link from 'next/link'
import Image from 'next/image'

import Container from './Container'

import styles from '../styles/components/Projects.module.scss'

export default function Projects({
  children
}) {
  return (
    <div className={styles.Projects}>
      <Container>
        <span><p>Projects</p></span>
        <h2>My most recent works.</h2>
      </Container>
      <Container>
        <div className={styles.ProjectsGrid}>
          <ProjectCard
            name="Spring Lakes Golf Club"
            type="Full-Stack React Development"
            image="/sl.jpg"
            link="https://springlakesgolf.com"
          />
          <ProjectCard
            name="deepsix"
            type="Full-Stack React Development"
            image="/ds.jpg"
            link="https://deepsixband.com"
          />
          <ProjectCard
            name="Larry Fitzgerald Jr."
            type="WordPress Development"
            image="/lf.jpg"
            link="https://larryfitzgerald.com"
          />
        </div>
      </Container>
    </div>
  )
}

function ProjectCard({
  name,
  type,
  image,
  link
}) {
  return (
    <Link href={link}>
      <a target="_blank" rel="noopener noreferrer">
        <div className={styles.ProjectCard}>
          <div className={styles.ProjectCardImage}>
            <Image 
              src={image}
              alt={image}
              width={360}
              height={360}
              quality={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.ProjectCardContent}>
            <h5>{name}</h5>
            <span><p>{type}</p></span>
          </div>
        </div>
      </a>
    </Link>
  )
}
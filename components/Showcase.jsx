import Image from 'next/image'
import * as Text from 'components/Text'
import styles from 'styles/components/Showcase.module.scss'

export const Wrapper = (props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Showcase} {...props} />
    </div>
  )
}

export const FeaturedRight = (props) => {
  return <div className={styles.FeaturedRight} {...props} />
}

export const FeaturedLeft = (props) => {
  return <div className={styles.FeaturedLeft} {...props} />
}

export const SecondaryOnly = (props) => {
  return <div className={styles.SecondaryOnly} {...props} />
}

export const FeaturedWrapper = (props) => {
  return <div className={styles.FeaturedWrapper} {...props} />
}

export const SecondaryWrapper = (props) => {
  return <div className={styles.SecondaryWrapper} {...props} />
}

export const Featured = (props) => {
  return (
    <Text.Anchor
      href={props.href}
      isExternal
    >
      <div className={styles.Featured}>
        <div className={styles.Image}>
          <Image
            src={props.img}
            alt={props.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles.Overlay}>
          <Text.Heading6>{props.name}</Text.Heading6>
          <Text.Paragraph style={{ color: '#666' }}>{props.displayLink.replace(/(https:\/\/)/gm, '')}</Text.Paragraph>
        </div>
      </div>
    </Text.Anchor>
  )
}

export const Secondary = (props) => {
  return (
    <Text.Anchor
      href={props.href}
      isExternal
    >
      <div className={styles.Secondary}>
        <div className={styles.Image}>
          <Image
            src={props.img}
            alt={props.name}
            width={1440}
            height={810}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles.Overlay}>
          <Text.Heading6>{props.name}</Text.Heading6>
          <Text.Paragraph style={{ color: '#666' }}>{props.displayLink.replace(/(https:\/\/)/gm, '')}</Text.Paragraph>
        </div>
      </div>
    </Text.Anchor>
  )
}

import styles from '../styles/components/GlitchText.module.scss'

export default function GlitchText(props) {
  return (
    <h1
    className={styles.GlitchText}
    data-text={props.children}
    >
      {props.children}
    </h1>
  )
}
import Container from 'components/Container'
import SafeArea from 'components/SafeArea'
import * as Logo from 'components/Logo'

//? Unfinished menu functionality start
// import { useModalState } from 'hooks/useModalState'
//? Unfinished menu functionality end

import styles from 'styles/components/Navbar.module.scss'

export const Block = (props) => {
  //? Unfinished menu functionality start
  // const { isOpen, onToggle } = useModalState()

  // const handleClick = () => {
  //   onToggle()
  // }
  //? Unfinished menu functionality end

  return (
    <Wrapper>
      <HeaderLogo color="0, 0, 0" />

      {/* Unfinished menu functionality start */}
      {/* <NavView>
        <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eius omnis nisi quis delectus velit eaque dolores consequuntur. Incidunt exercitationem enim aut fugit cum quas maiores necessitatibus fugiat dolorum explicabo.
        </Container>
      </NavView> */}
      {/* Unfinished menu functionality end */}
    </Wrapper>
  )
}

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

export const HeaderLogo = (props) => {
  return (
    <button
      className={styles.HeaderLogo}
    >
      <Logo.Animated color={props.color} id="navbar" /> 
    </button>
  )
}

//? Unfinished menu functionality start
// export const NavView = (props) => {
//   const { isOpen, onToggle } = useModalState()

//   const handleClick = () => {
//     onToggle()
//   }

//   return (
//     <>
//       <button className={styles.ToggleWrapper}>
//         <div className={`${styles.Toggle} ${isOpen ? styles.ToggleActive : ''}`} onClick={handleClick}>
//           <div className={styles.IconContainer}>
//             <div className={styles.Icon}>
//               <div className={styles.TopBar} />
//               <div className={styles.BtmBar} />
//             </div>
//           </div>
//         </div>
//       </button>
//       <div className={`${styles.NavView} ${isOpen ? styles.NavViewActive : ''}`}>
//         <div className={styles.NavViewContainer}>
//           {props.children}
//         </div>
//       </div>
//     </>
//   )
// }
//? Unfinished menu functionality end
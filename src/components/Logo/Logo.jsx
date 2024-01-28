import React from 'react'
import logo from "./assets/logo.jpg"
import styles from "./Logo.module.css"


const Logo = () => {
  return (
    <div>
        <img className={styles.logo} src={logo} alt="logo de la pagina"/>
    </div>
  )
}

export default Logo





import React from 'react'
import styles from './Navbar.module.css'

function Icon({src,name}){
  return (
    <img 
    className = {(name === 'search') ? styles.search : styles.cursor}
    src={src} width={"20px"} height={"20px"}/>
  )
}

export default Icon

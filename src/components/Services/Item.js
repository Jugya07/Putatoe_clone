import React from 'react'
import styles from "./Services.module.css"

export default function Item({src, text}) {
  return (
    <div className={styles.item} >
        <img className={styles.icon} src={src} width={"20px"} height={'20px'}/>
        <p className={styles.text}>{text}</p>
    </div>
  )
}

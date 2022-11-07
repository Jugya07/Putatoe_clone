import React from 'react'
import styles from "./Works.module.css"

export default function WorkItem({text}) {
  return (
    <div className={styles.item_container}>
        <p className={styles.text}>{text}</p>
    </div>
  )
}

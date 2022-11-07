import React from 'react'
import styles from './Carousal.module.css'

export default function Page({no}) {
  return (
    <div className={styles.page}>
        <h1>{no}</h1>
    </div>
  )
}

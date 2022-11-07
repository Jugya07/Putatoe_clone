import React from 'react'
import styles from  './Carousal.module.css'
import Page from './Page'

function Carousal() {
  return (
    <div className={styles.carousal}>
    <div className={styles.container}>
      <Page no={1}/>
      <Page no={2}/>
      <Page no={3}/>
      <Page no={4}/>
    </div>
    </div>
  )
}

export default Carousal
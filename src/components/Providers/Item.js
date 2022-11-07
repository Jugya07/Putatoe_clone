import React from 'react'
import styles from "./Providers.module.css"

export default function ({src, text}) {
  return (
    <div className={styles.block_items}>
        <img src={src} height={'40px'} width={'40px'}/>
        <p>{text}</p>
    </div>
  )
}

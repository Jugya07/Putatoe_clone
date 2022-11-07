import React from 'react'
import WorkItem from './WorkItem'
import styles from "./Works.module.css"

const service=[
  ['Daily needs'],['Education'],['Construction'],['Consultancy'],['Courier'],['Maintenance']
]
export default function Works() {
  return (
    <div>
        <p className={styles.title}>Services We Provide</p>
        <div className={styles.container}>
        {
          service.map((item , index)=>{return <WorkItem text={item[0]}/>})
        }
          {/* <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/> */}
        </div>
    </div>
  )
}

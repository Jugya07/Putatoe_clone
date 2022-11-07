import React from 'react'
import Block from '../Providers/Block'
import styles from './Products.module.css'


const needs=[
  ['Bikaneri Bhujia'] ,['Litchi Juice'],['Amla Juice'] ,['Khatta Meetha'] 
]

const construction=[
  ['Royal Brick'] ,['Dehri Bihar'],['Ace Gold'] ,['Ultratech PPC'] 
]


const consultancy=[
  ['TDS Filling'] ,['Concurrent Audit'],['Tax Audit'] ,['FASSAI Registration'] 
]

export default function Products() {
  return (
    <div className={styles.products}>
        <p className={styles.title}>Popular Service Products</p>
        <Block list={needs} text={'Daily Needs'} />
        <Block list={construction} text={'Construction'}/>
        <Block list = {consultancy} text={'Consultancy'}/>
    </div>
  )
}


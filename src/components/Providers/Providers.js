import React from 'react'
import styles from './Providers.module.css'
import Block from './Block'

const clean = [
  ['Dheeraj Methal'] ,['Education Services'],['Pests Showroom'] 
]

const house=[
  ['Golu Plumbing Work'] ,['Dhananjay Kumar Dubey'],['Sonu electrician'] ,['EPSON service'],
  ['Rohit tiles supplier'] 
]


const tour=[
  ['Bharat Taxi'] ,['Musafa Cabs'],['Cab service Gorakhpur'] ,['King Air and Train'] 
]

export default function Providers() {
  return (
    <div className={styles.providers}>
        <p className={styles.title}>All Popular Service Providers</p>
        <Block list={clean} text={'Cleaning & Houshold needs'} />
        <Block list={house} text={'House maintenance & Item Repairing'}/>
        <Block list = {tour} text={'Tour & Travels'}/>
    </div>
  )
}

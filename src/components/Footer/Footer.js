import React from 'react'
import Item from '../Services/Item'
import styles from "./Footer.module.css"
import home from "./asset/home.png"
import profile from "./asset/user.png"
import icon from "./asset/icon.png"
import list from "./asset/list.png"
import chat from "./asset/chat.png"

export default function Footer() {
  return (
    <div className={styles.footer}>
        <Item src={home} text={'Home'}/>
        <Item src={profile} text={'Profile'}/>
        <img className={styles.icon} src={icon} height={'50px'} width={'50px'}  />
        <Item src={list} text={'Follow List'} />
        <Item src={chat} text={'Chat'}/>
    </div>
  )
}

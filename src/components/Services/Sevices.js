import React from 'react'
import styles from './Services.module.css'
import Item from './Item'
import recharge from './asset/payment.png'
import idea from "./asset/idea.png"
import tv from "./asset/monitor.png"
import dollar from "./asset/dollar.png"
import news from "./asset/newspaper.png"
import money from "./asset/money-bag.png"
import blog from "./asset/blogging.png"
import feedback from "./asset/comment.png"
import flame from "./asset/flame.png"
import drop from "./asset/water.png"
import promo from "./asset/promotion.png"
import next from "./asset/next.png"

const items =[
    [recharge,'Mobile Recharge'],[idea,'Electricity'],[tv,'DTH'],[dollar,'Loan']
    ,[news,'News'],[money,'Refer and Earn'],[blog,'Blog'],[flame,'Gas Booking']
    ,[drop,'Water Bill'],[feedback,'Anonymous Feedback'],[promo,'Promotion'],[next,'See more']
]
function Services() {
  return (
    <div className={styles.services}>
        {
            items.map((item, index)=>{
            return <Item src={item[0]} text= {item[1]} id={index} />      
         } )
        }
    </div>
  )
}

export default Services

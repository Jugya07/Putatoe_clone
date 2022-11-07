import React from "react";
import img from "./img.png"
import Item from "./Item";
import styles from "./Providers.module.css";

export default function Block({list,text}) {
  // console.log(list)
  return (
    <div>
      <p className={styles.label}>{text}</p>
      <div className={styles.parts}>

      {
        list?.map((item, index)=>{
          return(
            <Item src={img} text={item[0]} id={index}/>
          )
        })
      }
      </div>
    </div>
  );
}

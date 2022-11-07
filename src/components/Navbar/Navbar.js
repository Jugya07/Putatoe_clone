import React from "react";
import styles from "./Navbar.module.css";
import location from "./asset/location.png";
import bell from "./asset/bell.png";
import cart from "./asset/shopping-cart.png";

import Icon from "./Icon.js";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.topnav}>
        <Icon src={location} />
        <input className={styles.address_bar} type={"text"} value={"Harhwa Fhatak Nirala Nagar,Gorakhpur,N.."} />
        <img className={styles.bell} src={bell} width={"20px"} height={"20px"}/>
        <Icon src={cart} />
      </div>
    </div>
  );
}

export default Navbar;

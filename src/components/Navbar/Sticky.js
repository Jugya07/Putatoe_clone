import React from "react";
import styles from "./Navbar.module.css";
import mic from './asset/mic.png'
import search from './asset/loupe.png'
import Icon from "./Icon";

export default function Sticky() {
  return (
    <div className={styles.navbar1}>
      <div className={styles.bottomnav}>
        <Icon src={search} name="search" />
        <input
          className={styles.search_bar}
          type="text"
          placeholder="Search for Products.."
        />
        <Icon src={mic} />
      </div>
    </div>
  );
}
